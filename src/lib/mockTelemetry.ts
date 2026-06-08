export type MockTelemetryEntry = {
  questionId: string;
  subject: string;
  topic: string;
  difficulty: string;
  selectedIndex: number | null;
  correctIndex: number;
  correct: boolean;
  timeSpentMs: number;
  timestamp: number;
};

const STORAGE_KEY = "astra-reviewer-telemetry-v1";

export function saveTelemetry(entry: MockTelemetryEntry) {
  try {
    const existing = getTelemetry();
    existing.push(entry);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(existing)
    );
  } catch (err) {
    console.error("Telemetry save failed", err);
  }
}

export function getTelemetry(): MockTelemetryEntry[] {
  try {
    return JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "[]"
    );
  } catch {
    return [];
  }
}

export function clearTelemetry() {
  localStorage.removeItem(STORAGE_KEY);
}

export function getTelemetryStats() {
  const data = getTelemetry();

  const total = data.length;

  const correct = data.filter(x => x.correct).length;

  const avgTime =
    total === 0
      ? 0
      : Math.round(
          data.reduce((a,b)=>a+b.timeSpentMs,0)
          / total
          / 1000
        );

  const weakTopics = {};

  data.forEach(d => {
    if (!d.correct) {
      weakTopics[d.topic] =
        (weakTopics[d.topic] || 0) + 1;
    }
  });

  return {
    total,
    accuracy:
      total === 0
        ? 0
        : Math.round((correct / total) * 100),
    avgTimeSeconds: avgTime,
    weakTopics,
  };
}
