export type CollegioSection = {
  id: string;
  title: string;
  subtitle: string;
  reviewPages: [number, number];
  assessmentPages?: [number, number];
  answerKeyPages?: [number, number];
};

export const collegioSections: CollegioSection[] = [
  {
    id: "science",
    title: "Science",
    subtitle: "Earth & Space, Biology, Chemistry, Physics",
    assessmentPages: [6, 12],
    answerKeyPages: [13, 13],
    reviewPages: [14, 64],
  },
  {
    id: "math",
    title: "Mathematics",
    subtitle: "Arithmetic, Algebra, Geometry, Trigonometry, Statistics",
    assessmentPages: [66, 86],
    answerKeyPages: [87, 87],
    reviewPages: [88, 137],
  },
  {
    id: "language",
    title: "Language Proficiency",
    subtitle: "English grammar, vocabulary, usage",
    assessmentPages: [138, 142],
    answerKeyPages: [143, 143],
    reviewPages: [144, 198],
  },
  {
    id: "reading",
    title: "Reading Comprehension",
    subtitle: "English reading, Filipino reading, passages",
    assessmentPages: [199, 252],
    answerKeyPages: [253, 253],
    reviewPages: [199, 252],
  },
  {
    id: "filipino",
    title: "Filipino",
    subtitle: "Filipino comprehension and language review",
    assessmentPages: [253, 271],
    answerKeyPages: [272, 272],
    reviewPages: [253, 271],
  },
  {
    id: "abstract",
    title: "Abstract Reasoning",
    subtitle: "Patterns, figures, visual logic",
    assessmentPages: [272, 286],
    answerKeyPages: [286, 286],
    reviewPages: [272, 286],
  },
];
