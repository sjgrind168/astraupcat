import { useApp } from "@/lib/store";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";


export default function Settings() {
  const { state, setState, reset } = useApp();
  const p = state.profile!;
  const update = (patch: Partial<typeof p>) =>
    setState(s => ({ ...s, profile: { ...s.profile!, ...patch } }));

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Settings & Profile</h1>
      <Card className="bg-gradient-card">
        <CardHeader><CardTitle>Profile</CardTitle><CardDescription>Update your study preferences.</CardDescription></CardHeader>
        <CardContent className="space-y-3">
          <div><Label>Name</Label><Input value={p.name} onChange={e => update({ name: e.target.value })} /></div>
          <div className="grid grid-cols-2 gap-3">
            <div><Label>Start date</Label><Input type="date" value={p.startDate} onChange={e => update({ startDate: e.target.value })} /></div>
            <div><Label>Exam date</Label><Input type="date" value={p.examDate} onChange={e => update({ examDate: e.target.value })} /></div>
          </div>
          <div><Label>Hours per day</Label><Input type="number" min={1} max={12} value={p.hoursPerDay} onChange={e => update({ hoursPerDay: +e.target.value })} /></div>
          <div>
            <Label>Intensity</Label>
            <div className="flex gap-2 mt-1">
              {(["chill","balanced","beast"] as const).map(k => (
                <Button key={k} variant={p.intensity === k ? "default" : "outline"} size="sm" onClick={() => update({ intensity: k })}>{k}</Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-gradient-card">
        <CardHeader><CardTitle>Mock exam calculator policy</CardTitle></CardHeader>
        <CardContent className="flex gap-2">
          {(["none","scientific","no-advanced"] as const).map(k => (
            <Button key={k} variant={state.settings.calculatorMode === k ? "default" : "outline"} size="sm"
              onClick={() => setState(s => ({ ...s, settings: { ...s.settings, calculatorMode: k } }))}>{k}</Button>
          ))}
        </CardContent>
      </Card>
      
      <Card className="bg-gradient-card">
        <CardHeader>
          <CardTitle>About & Legal</CardTitle>
          <CardDescription>
            Learn more about Astra Reviewer and app policies.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-2">

          <Link to="/about">
            <Button variant="outline" className="w-full justify-between">
              About Astra Reviewer
              <ExternalLink className="h-4 w-4"/>
            </Button>
          </Link>

          <Link to="/terms">
            <Button variant="outline" className="w-full justify-between">
              Terms & Content Notice
              <ExternalLink className="h-4 w-4"/>
            </Button>
          </Link>

          <Link to="/privacy">
            <Button variant="outline" className="w-full justify-between">
              Privacy Policy
              <ExternalLink className="h-4 w-4"/>
            </Button>
          </Link>

          <Button
          variant="outline"
          className="w-full justify-between">

          Contact & Support
          <ExternalLink className="h-4 w-4"/>

          </Button>

        </CardContent>
      </Card>

<Card className="bg-gradient-card border-destructive/40">
        <CardHeader><CardTitle className="text-destructive">Danger zone</CardTitle></CardHeader>
        <CardContent>
          <Button variant="destructive" onClick={() => { if (confirm("Reset all data?")) reset(); }}>Reset all data</Button>
        </CardContent>
      </Card>
    </div>
  );
}
