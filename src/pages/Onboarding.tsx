import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useApp } from "@/lib/store";
import { generatePlan } from "@/lib/planner";

export default function Onboarding() {
  const navigate = useNavigate();
  const { setState } = useApp();

  const [name, setName] = useState("");
  const [targetExamDate, setTargetExamDate] = useState("");
  const [hoursPerDay, setHoursPerDay] = useState(1);
  const [intensity, setIntensity] = useState<"chill" | "balanced" | "beast">("balanced");

  const start = () => {
    if (!name.trim() || !targetExamDate) return;

    setState((state) => {
      const profile = {
        name: name.trim(),
        targetExamDate,
        hoursPerDay,
        intensity,
        createdAt: new Date().toISOString(),
      };

      return {
        ...state,
        profile,
        plan: generatePlan(profile),
      };
    });

    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background">
      <Card className="w-full max-w-2xl bg-gradient-card">
        <CardHeader>
          <CardTitle className="text-3xl">
            Welcome to Astra Reviewer
          </CardTitle>
          <CardDescription>
            Let Astra build your personal study profile.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>Your name</Label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Juan"
            />
          </div>

          <div className="space-y-2">
            <Label>Target exam date</Label>
            <Input
              type="date"
              value={targetExamDate}
              onChange={(e) => setTargetExamDate(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Study hours per day</Label>
            <div className="grid grid-cols-4 gap-2">
              {[0.5, 1, 2, 3].map((h) => (
                <Button
                  key={h}
                  type="button"
                  variant={hoursPerDay === h ? "default" : "outline"}
                  onClick={() => setHoursPerDay(h)}
                >
                  {h === 0.5 ? "30m" : `${h}h`}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Study style</Label>
            <div className="grid grid-cols-3 gap-2">
              {(["chill", "balanced", "beast"] as const).map((mode) => (
                <Button
                  key={mode}
                  type="button"
                  variant={intensity === mode ? "default" : "outline"}
                  onClick={() => setIntensity(mode)}
                  className="capitalize"
                >
                  {mode}
                </Button>
              ))}
            </div>
          </div>

          <Button
            onClick={start}
            className="w-full"
            disabled={!name.trim() || !targetExamDate}
          >
            Create My Study Plan
          </Button>

          <p className="text-xs text-center text-muted-foreground leading-relaxed">
            By continuing, you agree to the{" "}
            <Link
              to="/terms"
              className="underline"
            >
              Terms & Content Notice
            </Link>
            {" "}and{" "}
            <Link
              to="/privacy"
              className="underline"
            >
              Privacy Policy
            </Link>.
            Astra Reviewer is an independent educational app for self-study and general entrance exam preparation.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
