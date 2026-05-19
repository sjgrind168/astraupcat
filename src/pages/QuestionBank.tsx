import { useEffect, useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { Pencil, Trash2, Copy, Plus, Download, ClipboardCopy, Upload } from "lucide-react";
import {
  CustomQuestion,
  DIFFICULTIES,
  SUBJECTS,
  loadCustomQuestions,
  saveCustomQuestions,
  validateQuestion,
  validateImportQuestion,
} from "@/lib/customQuestions";
import { Difficulty, Subject } from "@/lib/types";

interface FormState {
  id?: string;
  subject: Subject;
  topic: string;
  difficulty: Difficulty;
  passage: string;
  question: string;
  choices: [string, string, string, string];
  answerIndex: number;
  explanation: string;
  steps: string; // newline-separated
  tip: string;
  formula: string;
  tags: string; // comma-separated
}

const emptyForm: FormState = {
  subject: "Mathematics",
  topic: "",
  difficulty: "normal",
  passage: "",
  question: "",
  choices: ["", "", "", ""],
  answerIndex: 0,
  explanation: "",
  steps: "",
  tip: "",
  formula: "",
  tags: "",
};

function toCustom(form: FormState): CustomQuestion {
  return {
    id: form.id || `cq-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    subject: form.subject,
    topic: form.topic.trim(),
    difficulty: form.difficulty,
    passage: form.passage.trim() || undefined,
    question: form.question.trim(),
    choices: form.choices.map((c) => c.trim()) as string[],
    answerIndex: form.answerIndex,
    explanation: form.explanation.trim(),
    steps: form.steps
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean),
    tip: form.tip.trim() || undefined,
    formula: form.formula.trim() || undefined,
    tags: form.tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean),
    custom: true,
  };
}

function fromCustom(q: CustomQuestion): FormState {
  const choices: [string, string, string, string] = ["", "", "", ""];
  q.choices.slice(0, 4).forEach((c, i) => (choices[i] = c));
  return {
    id: q.id,
    subject: q.subject,
    topic: q.topic,
    difficulty: q.difficulty,
    passage: q.passage || "",
    question: q.question,
    choices,
    answerIndex: q.answerIndex,
    explanation: q.explanation,
    steps: (q.steps || []).join("\n"),
    tip: q.tip || "",
    formula: q.formula || "",
    tags: (q.tags || []).join(", "),
  };
}

export default function QuestionBank() {
  const [items, setItems] = useState<CustomQuestion[]>(() => loadCustomQuestions());
  const [search, setSearch] = useState("");
  const [filterSubject, setFilterSubject] = useState<string>("all");
  const [filterTopic, setFilterTopic] = useState<string>("all");
  const [filterDifficulty, setFilterDifficulty] = useState<string>("all");

  const [editorOpen, setEditorOpen] = useState(false);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [formErrors, setFormErrors] = useState<string[]>([]);

  const [importText, setImportText] = useState("");
  const [importErrors, setImportErrors] = useState<string[]>([]);
  const [importPreview, setImportPreview] = useState<CustomQuestion[] | null>(null);

  useEffect(() => {
    saveCustomQuestions(items);
  }, [items]);

  const topics = useMemo(() => {
    const set = new Set<string>();
    items.forEach((q) => set.add(q.topic));
    return Array.from(set).sort();
  }, [items]);

  const filtered = useMemo(() => {
    const s = search.toLowerCase().trim();
    return items.filter((q) => {
      if (filterSubject !== "all" && q.subject !== filterSubject) return false;
      if (filterTopic !== "all" && q.topic !== filterTopic) return false;
      if (filterDifficulty !== "all" && q.difficulty !== filterDifficulty) return false;
      if (!s) return true;
      return (
        q.question.toLowerCase().includes(s) ||
        q.topic.toLowerCase().includes(s) ||
        (q.tags || []).some((t) => t.toLowerCase().includes(s))
      );
    });
  }, [items, search, filterSubject, filterTopic, filterDifficulty]);

  const openNew = () => {
    setForm(emptyForm);
    setFormErrors([]);
    setEditorOpen(true);
  };

  const openEdit = (q: CustomQuestion) => {
    setForm(fromCustom(q));
    setFormErrors([]);
    setEditorOpen(true);
  };

  const duplicate = (q: CustomQuestion) => {
    const copy: CustomQuestion = {
      ...q,
      id: `cq-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      question: q.question + " (copy)",
    };
    setItems((prev) => [copy, ...prev]);
    toast.success("Question duplicated.");
  };

  const remove = (id: string) => {
    if (!confirm("Delete this question?")) return;
    setItems((prev) => prev.filter((q) => q.id !== id));
    toast.success("Question deleted.");
  };

  const submitForm = () => {
    const candidate = toCustom(form);
    const v = validateQuestion(candidate);
    if (!v.ok) {
      setFormErrors(v.errors);
      return;
    }
    setItems((prev) => {
      const existing = prev.findIndex((q) => q.id === candidate.id);
      if (existing >= 0) {
        const copy = [...prev];
        copy[existing] = candidate;
        return copy;
      }
      return [candidate, ...prev];
    });
    toast.success(form.id ? "Question updated." : "Question added.");
    setEditorOpen(false);
  };

  const handleValidateImport = () => {
    setImportErrors([]);
    setImportPreview(null);
    let parsed: unknown;
    try {
      parsed = JSON.parse(importText);
    } catch (e) {
      setImportErrors([`Invalid JSON: ${(e as Error).message}`]);
      return;
    }
    if (!Array.isArray(parsed)) {
      setImportErrors(["Top-level value must be a JSON array of question objects."]);
      return;
    }
    if (parsed.length === 0) {
      setImportErrors(["Array is empty — nothing to import."]);
      return;
    }
    const errors: string[] = [];
    const valid: CustomQuestion[] = [];
    parsed.forEach((q, i) => {
      const v = validateImportQuestion(q);
      if (!v.ok) {
        errors.push(`Item ${i + 1}: ${v.errors.join("; ")}`);
        return;
      }
      const item = q as CustomQuestion;
      valid.push({
        ...item,
        id: item.id || `cq-${Date.now()}-${i}-${Math.floor(Math.random() * 1000)}`,
        steps: item.steps,
        tags: item.tags || [],
        custom: true,
      });
    });
    if (errors.length) {
      setImportErrors(errors);
      return;
    }
    setImportPreview(valid);
  };

  const confirmImport = () => {
    if (!importPreview || importPreview.length === 0) return;
    setItems((prev) => [...importPreview, ...prev]);
    toast.success(`Imported ${importPreview.length} question(s).`);
    setImportText("");
    setImportPreview(null);
    setImportErrors([]);
  };

  const cancelPreview = () => {
    setImportPreview(null);
  };

  const exportJson = () => JSON.stringify(items, null, 2);

  const downloadExport = () => {
    const blob = new Blob([exportJson()], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `astra-custom-questions-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const copyExport = async () => {
    try {
      await navigator.clipboard.writeText(exportJson());
      toast.success("Copied to clipboard.");
    } catch {
      toast.error("Could not copy to clipboard.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between flex-wrap gap-2">
        <div>
          <h1 className="text-3xl font-bold">Question Bank</h1>
          <p className="text-muted-foreground text-sm">
            Manage custom entrance exam-style questions. Built-in seed questions remain available.
          </p>
        </div>
        <Button className="bg-gradient-gold text-primary-foreground" onClick={openNew}>
          <Plus className="h-4 w-4 mr-1" /> Add Question
        </Button>
      </div>

      <Tabs defaultValue="list">
        <TabsList>
          <TabsTrigger value="list">Questions ({items.length})</TabsTrigger>
          <TabsTrigger value="import">Import JSON</TabsTrigger>
          <TabsTrigger value="export">Export JSON</TabsTrigger>
        </TabsList>

        <TabsContent value="list" className="space-y-4">
          <Card className="bg-gradient-card">
            <CardContent className="p-4 grid gap-2 md:grid-cols-4">
              <Input
                placeholder="Search question, topic, tag..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Select value={filterSubject} onValueChange={setFilterSubject}>
                <SelectTrigger><SelectValue placeholder="Subject" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All subjects</SelectItem>
                  {SUBJECTS.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                </SelectContent>
              </Select>
              <Select value={filterTopic} onValueChange={setFilterTopic}>
                <SelectTrigger><SelectValue placeholder="Topic" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All topics</SelectItem>
                  {topics.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                </SelectContent>
              </Select>
              <Select value={filterDifficulty} onValueChange={setFilterDifficulty}>
                <SelectTrigger><SelectValue placeholder="Difficulty" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All difficulties</SelectItem>
                  {DIFFICULTIES.map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {filtered.length === 0 ? (
            <Card className="bg-gradient-card">
              <CardContent className="p-8 text-center text-sm text-muted-foreground">
                {items.length === 0
                  ? "No custom questions yet. Click Add Question to create one."
                  : "No questions match these filters."}
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-2">
              {filtered.map((q) => (
                <Card key={q.id} className="bg-gradient-card">
                  <CardContent className="p-4 flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap gap-1.5 mb-1">
                        <Badge variant="outline">{q.subject}</Badge>
                        <Badge variant="outline">{q.topic}</Badge>
                        <Badge variant="secondary">{q.difficulty}</Badge>
                        {(q.tags || []).map((t) => (
                          <Badge key={t} className="bg-primary/10 text-primary border-primary/30">{t}</Badge>
                        ))}
                      </div>
                      <p className="text-sm font-medium truncate">{q.question}</p>
                      <p className="text-xs text-muted-foreground truncate">
                        Correct: {String.fromCharCode(65 + q.answerIndex)}. {q.choices[q.answerIndex]}
                      </p>
                    </div>
                    <div className="flex gap-1 shrink-0">
                      <Button size="icon" variant="outline" onClick={() => openEdit(q)} title="Edit">
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="outline" onClick={() => duplicate(q)} title="Duplicate">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="destructive" onClick={() => remove(q.id)} title="Delete">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="import" className="space-y-3">
          <Card className="bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-lg">Import questions from JSON</CardTitle>
              <CardDescription>
                Paste a JSON array of question objects. Required: <code>subject</code>,{" "}
                <code>topic</code>, <code>difficulty</code> (easy | normal | hard | beast),{" "}
                <code>question</code>, <code>choices</code> (exactly 4), <code>answerIndex</code>{" "}
                (0–3), <code>explanation</code>, <code>steps</code> (≥ 1). Optional:{" "}
                <code>id</code>, <code>passage</code>, <code>tip</code>, <code>tags</code>.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Textarea
                rows={10}
                value={importText}
                onChange={(e) => {
                  setImportText(e.target.value);
                  if (importPreview) setImportPreview(null);
                  if (importErrors.length) setImportErrors([]);
                }}
                placeholder='[{"id":"q1","subject":"Mathematics","topic":"Algebra","difficulty":"normal","question":"Solve 2x+3=11","choices":["2","3","4","5"],"answerIndex":2,"explanation":"2x=8, x=4","steps":["2x=11-3","2x=8","x=4"],"tags":["linear"]}]'
                className="font-mono text-xs"
                disabled={!!importPreview}
              />

              {importErrors.length > 0 && (
                <div className="rounded-lg border border-destructive/40 bg-destructive/10 p-3 text-sm">
                  <p className="font-semibold text-destructive mb-1">
                    Validation failed — nothing was imported.
                  </p>
                  <ul className="list-disc pl-5 text-destructive/90 space-y-0.5 max-h-48 overflow-y-auto">
                    {importErrors.map((e, i) => <li key={i}>{e}</li>)}
                  </ul>
                </div>
              )}

              {!importPreview && (
                <Button
                  onClick={handleValidateImport}
                  disabled={!importText.trim()}
                  className="bg-gradient-gold text-primary-foreground"
                >
                  <Upload className="h-4 w-4 mr-1" /> Validate & Preview
                </Button>
              )}
            </CardContent>
          </Card>

          {importPreview && (
            <Card className="bg-gradient-card border-primary/40">
              <CardHeader>
                <CardTitle className="text-lg">
                  Import Preview — {importPreview.length} question{importPreview.length === 1 ? "" : "s"} ready
                </CardTitle>
                <CardDescription>
                  Review the questions below. Click <strong>Confirm Import</strong> to save them to
                  your custom question bank, or <strong>Cancel</strong> to go back and edit.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid gap-2 max-h-[28rem] overflow-y-auto pr-1">
                  {importPreview.map((q, i) => (
                    <div
                      key={q.id}
                      className="rounded-lg border border-border bg-background/40 p-3"
                    >
                      <div className="flex flex-wrap gap-1.5 mb-1.5">
                        <Badge variant="outline">#{i + 1}</Badge>
                        <Badge variant="outline">{q.subject}</Badge>
                        <Badge variant="outline">{q.topic}</Badge>
                        <Badge variant="secondary">{q.difficulty}</Badge>
                        {(q.tags || []).map((t) => (
                          <Badge
                            key={t}
                            className="bg-primary/10 text-primary border-primary/30"
                          >
                            {t}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-sm font-medium">{q.question}</p>
                      <div className="grid gap-0.5 mt-1.5 text-xs text-muted-foreground">
                        {q.choices.map((c, k) => (
                          <p
                            key={k}
                            className={
                              k === q.answerIndex
                                ? "text-success font-medium"
                                : ""
                            }
                          >
                            {String.fromCharCode(65 + k)}. {c}
                            {k === q.answerIndex ? "  ✓" : ""}
                          </p>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1.5">
                        <span className="font-semibold">Steps:</span> {q.steps?.length ?? 0}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={confirmImport}
                    className="bg-gradient-gold text-primary-foreground"
                  >
                    Confirm Import ({importPreview.length})
                  </Button>
                  <Button variant="outline" onClick={cancelPreview}>
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="export" className="space-y-3">
          <Card className="bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-lg">Export custom questions</CardTitle>
              <CardDescription>
                Download or copy all {items.length} custom question(s) as JSON.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-2">
                <Button onClick={downloadExport} disabled={items.length === 0}>
                  <Download className="h-4 w-4 mr-1" /> Download .json
                </Button>
                <Button variant="outline" onClick={copyExport} disabled={items.length === 0}>
                  <ClipboardCopy className="h-4 w-4 mr-1" /> Copy to clipboard
                </Button>
              </div>
              <Textarea
                rows={12}
                readOnly
                value={items.length ? exportJson() : ""}
                placeholder="No custom questions to export yet."
                className="font-mono text-xs"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Dialog open={editorOpen} onOpenChange={setEditorOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{form.id ? "Edit Question" : "Add Question"}</DialogTitle>
          </DialogHeader>

          <div className="grid gap-4">
            <div className="grid gap-3 md:grid-cols-3">
              <div className="space-y-1.5">
                <Label>Subject</Label>
                <Select
                  value={form.subject}
                  onValueChange={(v) => setForm((f) => ({ ...f, subject: v as Subject }))}
                >
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {SUBJECTS.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label>Topic</Label>
                <Input
                  value={form.topic}
                  onChange={(e) => setForm((f) => ({ ...f, topic: e.target.value }))}
                  placeholder="e.g. Algebra"
                />
              </div>
              <div className="space-y-1.5">
                <Label>Difficulty</Label>
                <Select
                  value={form.difficulty}
                  onValueChange={(v) => setForm((f) => ({ ...f, difficulty: v as Difficulty }))}
                >
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {DIFFICULTIES.map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-1.5">
              <Label>Passage (optional)</Label>
              <Textarea
                rows={3}
                value={form.passage}
                onChange={(e) => setForm((f) => ({ ...f, passage: e.target.value }))}
              />
            </div>

            <div className="space-y-1.5">
              <Label>Question text *</Label>
              <Textarea
                rows={3}
                value={form.question}
                onChange={(e) => setForm((f) => ({ ...f, question: e.target.value }))}
              />
            </div>

            <div className="space-y-1.5">
              <Label>Choices * (select the correct one)</Label>
              <div className="grid gap-2">
                {form.choices.map((c, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setForm((f) => ({ ...f, answerIndex: i }))}
                      className={`h-8 w-8 shrink-0 rounded-full border text-xs font-semibold ${
                        form.answerIndex === i
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border"
                      }`}
                      title="Mark as correct answer"
                    >
                      {String.fromCharCode(65 + i)}
                    </button>
                    <Input
                      value={c}
                      onChange={(e) => {
                        const next = [...form.choices] as [string, string, string, string];
                        next[i] = e.target.value;
                        setForm((f) => ({ ...f, choices: next }));
                      }}
                      placeholder={`Choice ${String.fromCharCode(65 + i)}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-1.5">
              <Label>Explanation *</Label>
              <Textarea
                rows={3}
                value={form.explanation}
                onChange={(e) => setForm((f) => ({ ...f, explanation: e.target.value }))}
              />
            </div>

            <div className="space-y-1.5">
              <Label>Step-by-step solution (one per line)</Label>
              <Textarea
                rows={4}
                value={form.steps}
                onChange={(e) => setForm((f) => ({ ...f, steps: e.target.value }))}
              />
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <div className="space-y-1.5">
                <Label>Study tip</Label>
                <Textarea
                  rows={2}
                  value={form.tip}
                  onChange={(e) => setForm((f) => ({ ...f, tip: e.target.value }))}
                />
              </div>
              <div className="space-y-1.5">
                <Label>Formula used (optional)</Label>
                <Textarea
                  rows={2}
                  value={form.formula}
                  onChange={(e) => setForm((f) => ({ ...f, formula: e.target.value }))}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label>Tags (comma-separated)</Label>
              <Input
                value={form.tags}
                onChange={(e) => setForm((f) => ({ ...f, tags: e.target.value }))}
                placeholder="e.g. quadratic, vieta, identity"
              />
            </div>

            {formErrors.length > 0 && (
              <div className="rounded-lg border border-destructive/40 bg-destructive/10 p-3 text-sm">
                <p className="font-semibold text-destructive mb-1">Please fix the following:</p>
                <ul className="list-disc pl-5 text-destructive/90 space-y-0.5">
                  {formErrors.map((e, i) => <li key={i}>{e}</li>)}
                </ul>
              </div>
            )}
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setEditorOpen(false)}>Cancel</Button>
            <Button className="bg-gradient-gold text-primary-foreground" onClick={submitForm}>
              {form.id ? "Save Changes" : "Add Question"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
