import { useState } from "react";
import { useApp } from "@/lib/store";
import { Intensity } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { GraduationCap, Sparkles } from "lucide-react";
import { generatePlan } from "@/lib/planner";
import { setProfile, setPlan } from "@/lib/storage";

export function Onboarding() {
  const { setState } = useApp();
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [examDate, setExamDate] = useState("");
  const [startDate, setStartDate] = useState(new Date().toISOString().slice(0, 10));
  const [hours, setHours] = useState(2);
  const [intensity, setIntensity] = useState<Intensity>("balanced");

  const intensities: { key: Intensity; title: string; desc: string; tag: string }[] = [
    { key: "chill", title: "Chill", desc: "Steady pace. Lighter sessions, more breaks.", tag: "30 min slots" },
    { key: "balanced", title: "Balanced", desc: "Solid daily training without burnout.", tag: "55 min slots" },
    { key: "beast", title: "Beast Mode", desc: "Maximum intensity for serious takers.", tag: "90 min slots" },
  ];

  const finish = () => {
    const profile = {
      name: name.trim() || "Student",
      examDate, startDate, hoursPerDay: hours, intensity,
      createdAt: new Date().toISOString(),
    };
    const plan = generatePlan(profile);
    setState(s => setPlan(setProfile(s, profile), plan));
  };

  const canNext0 = name.trim().length > 0;
  const canNext1 = !!examDate && !!startDate && new Date(examDate) > new Date(startDate);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero p-4">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(43_74%_56%/0.08),transparent_60%)]" />
      <Card className="relative w-full max-w-xl shadow-elegant border-border/60 bg-card/80 backdrop-blur">
        <CardHeader className="text-center space-y-3">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-gold shadow-gold">
            <GraduationCap className="h-7 w-7 text-primary-foreground" />
          </div>
          <CardTitle className="text-2xl">
            <span className="text-gradient-gold">Astra Reviewer</span>
          </CardTitle>
          <CardDescription>Personalized, high-difficulty entrance exam training. Let's set you up.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {step === 0 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">What should we call you?</Label>
                <Input id="name" placeholder="e.g., Juan" value={name} onChange={e => setName(e.target.value)} autoFocus />
              </div>
              <Button className="w-full" disabled={!canNext0} onClick={() => setStep(1)}>Continue</Button>
            </div>
          )}
          {step === 1 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="start">Start date</Label>
                  <Input id="start" type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="exam">Target exam date</Label>
                  <Input id="exam" type="date" value={examDate} onChange={e => setExamDate(e.target.value)} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="hours">Available study hours per day</Label>
                <Input id="hours" type="number" min={1} max={12} value={hours} onChange={e => setHours(Number(e.target.value))} />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1" onClick={() => setStep(0)}>Back</Button>
                <Button className="flex-1" disabled={!canNext1} onClick={() => setStep(2)}>Continue</Button>
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="space-y-4">
              <Label>Choose your intensity</Label>
              <div className="grid gap-3">
                {intensities.map(i => (
                  <button
                    key={i.key}
                    onClick={() => setIntensity(i.key)}
                    className={`text-left rounded-lg border p-4 transition-all hover:border-primary/50 ${
                      intensity === i.key ? "border-primary bg-primary/5 shadow-gold" : "border-border"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">{i.title}</span>
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{i.tag}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{i.desc}</p>
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1" onClick={() => setStep(1)}>Back</Button>
                <Button className="flex-1 bg-gradient-gold text-primary-foreground hover:opacity-90" onClick={finish}>
                  <Sparkles className="h-4 w-4 mr-2" /> Build My Plan
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
