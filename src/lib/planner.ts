import { Intensity, StudyTask, Subject, UserProfile } from "./types";

const SUBJECTS: Subject[] = [
  "Mathematics", "Science", "English Language", "Filipino Language", "Reading Comprehension", "Logic",
];

const TOPIC_BANK: Record<Subject, string[]> = {
  "Mathematics": ["Algebra", "Geometry", "Trigonometry", "Probability", "Quadratics", "Word Problems", "Number Theory"],
  "Science": ["Physics: Kinematics", "Physics: Forces", "Chemistry: Atoms", "Chemistry: Stoichiometry", "Biology: Cells", "Biology: Genetics", "Earth Science"],
  "English Language": ["Subject-Verb Agreement", "Tenses", "Vocabulary", "Sentence Correction", "Pronouns"],
  "Filipino Language": ["Balarila", "Talasalitaan", "Pandiwa", "Tayutay", "Wastong Gamit"],
  "Reading Comprehension": ["Main Idea (English)", "Inference (English)", "Pangunahing Ideya (Filipino)", "Hinuha (Filipino)"],

"Logic":[
"Pattern Recognition",
"Sequences",
"Analogies",
"Deductive Reasoning",
"Spatial Logic",
"Critical Thinking"
],
};

function dayKey(d: Date) { return d.toISOString().slice(0, 10); }

export function generatePlan(profile: UserProfile, weakSubjects: Subject[] = []): StudyTask[] {
  const tasks: StudyTask[] = [];
  const start = new Date(profile.startDate);
  const exam = new Date(profile.examDate);
  const days = Math.max(1, Math.ceil((exam.getTime() - start.getTime()) / 86400000));
  const intensityMin: Record<Intensity, number> = { chill: 30, balanced: 55, beast: 90 };
  const minPerSlot = intensityMin[profile.intensity];

  const weakSet = new Set(weakSubjects);

  for (let i = 0; i < days; i++) {
    const d = new Date(start.getTime() + i * 86400000);
    const dateStr = dayKey(d);
    const dow = d.getDay();
    const daysToExam = days - i;

    // Rest day every 7th day for chill/balanced; every 10th for beast
    const restEvery = profile.intensity === "beast" ? 10 : profile.intensity === "balanced" ? 7 : 6;
    if (i > 0 && i % restEvery === 0) {
      tasks.push({
        id: `t-${i}-rest`, date: dateStr, type: "rest",
        title: "Recovery day — light review only", durationMin: 20, done: false,
      });
      continue;
    }

    // Weekly mock exam (every 7 days, but not in last 3 days)
    if (i > 0 && i % 7 === 6 && daysToExam > 3) {
      tasks.push({
        id: `t-${i}-mock`, date: dateStr, type: "mock",
        title: "Weekly Mock Exam (timed)", durationMin: 90, done: false,
      });
    }

    // Mistake review every 3rd day after first week
    if (i > 5 && i % 3 === 0) {
      tasks.push({
        id: `t-${i}-review`, date: dateStr, type: "review",
        title: "Mistake Book review", durationMin: 25, done: false,
      });
    }

    // Rotate subjects across days, prioritize weak subjects
    const subj = weakSet.size > 0 && i % 2 === 0
      ? Array.from(weakSet)[i % weakSet.size]
      : SUBJECTS[i % SUBJECTS.length];
    const topics = TOPIC_BANK[subj];
    const topic = topics[i % topics.length];

    tasks.push({
      id: `t-${i}-lesson`, date: dateStr, type: "lesson", subject: subj, topic,
      title: `${subj} — ${topic} lesson`, durationMin: minPerSlot, done: false,
    });
    tasks.push({
      id: `t-${i}-drill`, date: dateStr, type: "drill", subject: subj, topic,
      title: `${topic} practice drill`, durationMin: Math.round(minPerSlot * 0.6), done: false,
    });

    // Add a hard challenge on Wed/Sat for balanced+beast
    if ((dow === 3 || dow === 6) && profile.intensity !== "chill") {
      tasks.push({
        id: `t-${i}-hard`, date: dateStr, type: "challenge", subject: subj,
        title: `Beast Mode challenge — ${subj}`, durationMin: 30, done: false,
      });
    }
  }

  return tasks;
}

export function rescheduleMissed(plan: StudyTask[]): StudyTask[] {
  const today = new Date().toISOString().slice(0, 10);
  return plan.map(t => {
    if (!t.done && t.date < today && t.type !== "rest") {
      return { ...t, date: today };
    }
    return t;
  });
}
