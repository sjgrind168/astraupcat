import { useState } from "react";
import { FORMULAS } from "@/lib/formulas";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const CATS = ["Algebra", "Geometry", "Trigonometry", "Statistics", "Physics", "Chemistry"] as const;

export default function FormulaVault() {
  const [cat, setCat] = useState<typeof CATS[number]>("Algebra");
  const items = FORMULAS.filter(f => f.category === cat);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Formula Vault</h1>
        <p className="text-muted-foreground text-sm">Key formulas with usage and examples for entrance exam preparation.</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {CATS.map(c => (
          <Button key={c} variant={cat === c ? "default" : "outline"} size="sm" onClick={() => setCat(c)}>{c}</Button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map(f => (
          <Card key={f.id} className="bg-gradient-card shadow-elegant">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{f.name}</CardTitle>
                <Badge variant="outline">{f.category}</Badge>
              </div>
              <CardDescription>{f.meaning}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="rounded-lg bg-primary/10 border border-primary/30 p-3 font-mono text-sm">{f.formula}</div>
              <p className="text-xs"><span className="text-muted-foreground">When to use:</span> {f.whenToUse}</p>
              <p className="text-xs"><span className="text-muted-foreground">Example:</span> {f.example}</p>
              {f.solverKey && (
                <Button asChild variant="outline" size="sm" className="mt-2">
                  <Link to={`/calculator?solver=${f.solverKey}`}>Try in Calculator</Link>
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
