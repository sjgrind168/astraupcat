import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// ---------- Scientific calculator ----------
function ScientificCalc() {
  const [expr, setExpr] = useState("");
  const [history, setHistory] = useState<{ e: string; r: string }[]>([]);
  const [deg, setDeg] = useState(true);
  const [mem, setMem] = useState(0);

  const evalExpr = (raw: string) => {
    const toRad = (x: number) => deg ? x * Math.PI / 180 : x;
    const fromRad = (x: number) => deg ? x * 180 / Math.PI : x;
    const ctx = {
      pi: Math.PI, e: Math.E,
      sin: (x: number) => Math.sin(toRad(x)),
      cos: (x: number) => Math.cos(toRad(x)),
      tan: (x: number) => Math.tan(toRad(x)),
      asin: (x: number) => fromRad(Math.asin(x)),
      acos: (x: number) => fromRad(Math.acos(x)),
      atan: (x: number) => fromRad(Math.atan(x)),
      ln: Math.log, log: Math.log10, sqrt: Math.sqrt,
      nthroot: (n: number, x: number) => Math.pow(x, 1 / n),
      pow: Math.pow, abs: Math.abs,
    };
    let s = raw.replace(/π/g, "pi").replace(/√/g, "sqrt").replace(/\^/g, "**");
    try {
      // eslint-disable-next-line no-new-func
      const fn = new Function(...Object.keys(ctx), `return (${s});`);
      const r = fn(...Object.values(ctx));
      return String(r);
    } catch {
      return "Error";
    }
  };

  const calc = () => {
    if (!expr.trim()) return;
    const r = evalExpr(expr);
    setHistory(h => [{ e: expr, r }, ...h].slice(0, 20));
    setExpr(r);
  };

  const append = (s: string) => setExpr(e => e + s);

  const btn = (label: string, onClick: () => void, cls = "") => (
    <Button variant="outline" size="sm" className={cls} onClick={onClick}>{label}</Button>
  );

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="md:col-span-2 space-y-3">
        <Input value={expr} onChange={e => setExpr(e.target.value)} placeholder="Enter expression"
          className="text-lg font-mono h-12" onKeyDown={e => e.key === "Enter" && calc()} />
        <div className="flex gap-2 flex-wrap">
          <Badge variant={deg ? "default" : "outline"} className="cursor-pointer" onClick={() => setDeg(true)}>DEG</Badge>
          <Badge variant={!deg ? "default" : "outline"} className="cursor-pointer" onClick={() => setDeg(false)}>RAD</Badge>
          <Badge variant="secondary">M = {mem}</Badge>
        </div>
        <div className="grid grid-cols-6 gap-2">
          {btn("sin", () => append("sin("))}
          {btn("cos", () => append("cos("))}
          {btn("tan", () => append("tan("))}
          {btn("ln", () => append("ln("))}
          {btn("log", () => append("log("))}
          {btn("√", () => append("sqrt("))}
          {btn("asin", () => append("asin("))}
          {btn("acos", () => append("acos("))}
          {btn("atan", () => append("atan("))}
          {btn("π", () => append("pi"))}
          {btn("e", () => append("e"))}
          {btn("^", () => append("^"))}
          {btn("(", () => append("("))}
          {btn(")", () => append(")"))}
          {btn("7", () => append("7"))}
          {btn("8", () => append("8"))}
          {btn("9", () => append("9"))}
          {btn("÷", () => append("/"))}
          {btn("M+", () => setMem(m => m + Number(evalExpr(expr) || 0)))}
          {btn("MR", () => append(String(mem)))}
          {btn("4", () => append("4"))}
          {btn("5", () => append("5"))}
          {btn("6", () => append("6"))}
          {btn("×", () => append("*"))}
          {btn("MC", () => setMem(0))}
          {btn("C", () => setExpr(""))}
          {btn("1", () => append("1"))}
          {btn("2", () => append("2"))}
          {btn("3", () => append("3"))}
          {btn("−", () => append("-"))}
          {btn("⌫", () => setExpr(e => e.slice(0, -1)))}
          {btn("=", calc, "bg-gradient-gold text-primary-foreground border-0")}
          {btn("0", () => append("0"))}
          {btn(".", () => append("."))}
          {btn("+", () => append("+"))}
        </div>
      </div>
      <Card className="bg-gradient-card">
        <CardHeader className="pb-2"><CardTitle className="text-sm">History</CardTitle></CardHeader>
        <CardContent className="space-y-1 max-h-80 overflow-auto">
          {history.length === 0 ? <p className="text-xs text-muted-foreground">No calculations yet.</p> :
            history.map((h, i) => (
              <button key={i} onClick={() => setExpr(h.e)} className="w-full text-left text-xs rounded p-2 hover:bg-muted">
                <div className="text-muted-foreground font-mono">{h.e}</div>
                <div className="font-mono text-primary">= {h.r}</div>
              </button>
            ))}
        </CardContent>
      </Card>
    </div>
  );
}

// ---------- Advanced solver ----------
function SolverCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Card className="bg-gradient-card">
      <CardHeader><CardTitle className="text-base">{title}</CardTitle></CardHeader>
      <CardContent className="space-y-3">{children}</CardContent>
    </Card>
  );
}

function NumIn({ label, value, onChange }: { label: string; value: string; onChange: (s: string) => void }) {
  return (
    <div className="space-y-1">
      <Label className="text-xs">{label}</Label>
      <Input type="number" value={value} onChange={e => onChange(e.target.value)} />
    </div>
  );
}

function Result({ formula, steps, answer }: { formula: string; steps: string[]; answer: string }) {
  return (
    <div className="rounded-lg border border-primary/30 bg-primary/5 p-3 space-y-2 text-sm">
      <div className="font-mono text-xs text-muted-foreground">{formula}</div>
      <ol className="list-decimal pl-5 space-y-0.5 text-xs">{steps.map((s, i) => <li key={i}>{s}</li>)}</ol>
      <div className="font-semibold text-primary">Answer: {answer}</div>
    </div>
  );
}

function Quadratic() {
  const [a, setA] = useState("1"), [b, setB] = useState("-5"), [c, setC] = useState("6");
  const A = +a, B = +b, C = +c;
  const disc = B * B - 4 * A * C;
  let res = "";
  if (!A) res = "Not quadratic (a = 0)";
  else if (disc < 0) res = `Complex roots: x = ${(-B/(2*A)).toFixed(3)} ± ${(Math.sqrt(-disc)/(2*A)).toFixed(3)}i`;
  else res = `x₁ = ${((-B + Math.sqrt(disc))/(2*A)).toFixed(4)}, x₂ = ${((-B - Math.sqrt(disc))/(2*A)).toFixed(4)}`;
  return (
    <SolverCard title="Quadratic equation: ax² + bx + c = 0">
      <div className="grid grid-cols-3 gap-2">
        <NumIn label="a" value={a} onChange={setA} />
        <NumIn label="b" value={b} onChange={setB} />
        <NumIn label="c" value={c} onChange={setC} />
      </div>
      <Result formula="x = (−b ± √(b² − 4ac)) / 2a"
        steps={[`b² − 4ac = ${disc}`, `2a = ${2*A}`]} answer={res} />
    </SolverCard>
  );
}

function Linear() {
  const [a, setA] = useState("2"), [b, setB] = useState("3"), [c, setC] = useState("11");
  const A = +a, B = +b, C = +c;
  const x = A ? (C - B) / A : NaN;
  return (
    <SolverCard title="Linear equation: ax + b = c">
      <div className="grid grid-cols-3 gap-2">
        <NumIn label="a" value={a} onChange={setA} />
        <NumIn label="b" value={b} onChange={setB} />
        <NumIn label="c" value={c} onChange={setC} />
      </div>
      <Result formula="x = (c − b) / a" steps={[`x = (${C} − ${B}) / ${A}`]} answer={isFinite(x) ? x.toFixed(4) : "No solution"} />
    </SolverCard>
  );
}

function Distance() {
  const [x1, sx1] = useState("1"), [y1, sy1] = useState("2"), [x2, sx2] = useState("4"), [y2, sy2] = useState("6");
  const d = Math.hypot(+x2 - +x1, +y2 - +y1);
  const mx = (+x1 + +x2) / 2, my = (+y1 + +y2) / 2;
  return (
    <SolverCard title="Distance & Midpoint">
      <div className="grid grid-cols-4 gap-2">
        <NumIn label="x₁" value={x1} onChange={sx1} /><NumIn label="y₁" value={y1} onChange={sy1} />
        <NumIn label="x₂" value={x2} onChange={sx2} /><NumIn label="y₂" value={y2} onChange={sy2} />
      </div>
      <Result formula="d = √((x₂−x₁)² + (y₂−y₁)²)"
        steps={[`Δx = ${+x2-+x1}`, `Δy = ${+y2-+y1}`]} answer={`d = ${d.toFixed(4)}, midpoint = (${mx}, ${my})`} />
    </SolverCard>
  );
}

function PercentChange() {
  const [a, setA] = useState("100"), [b, setB] = useState("125");
  const pct = +a ? ((+b - +a) / +a) * 100 : NaN;
  return (
    <SolverCard title="Percent change">
      <div className="grid grid-cols-2 gap-2">
        <NumIn label="Original" value={a} onChange={setA} />
        <NumIn label="New" value={b} onChange={setB} />
      </div>
      <Result formula="% change = (new − old)/old × 100" steps={[`(${+b}−${+a})/${+a} × 100`]}
        answer={isFinite(pct) ? `${pct.toFixed(2)}%` : "—"} />
    </SolverCard>
  );
}

function SpeedDistTime() {
  const [d, sd] = useState("240"), [t, st] = useState("3");
  return (
    <SolverCard title="Speed = Distance / Time">
      <div className="grid grid-cols-2 gap-2">
        <NumIn label="Distance (km)" value={d} onChange={sd} />
        <NumIn label="Time (h)" value={t} onChange={st} />
      </div>
      <Result formula="v = d/t" steps={[`${+d}/${+t}`]} answer={`${(+d / +t).toFixed(2)} km/h`} />
    </SolverCard>
  );
}

function Stats() {
  const [vals, setVals] = useState("4, 8, 6, 10, 12");
  const arr = vals.split(/[,\s]+/).map(Number).filter(n => !isNaN(n));
  const sum = arr.reduce((a, b) => a + b, 0);
  const mean = arr.length ? sum / arr.length : 0;
  const sorted = [...arr].sort((a, b) => a - b);
  const median = sorted.length ? (sorted.length % 2 ? sorted[(sorted.length-1)/2] : (sorted[sorted.length/2-1]+sorted[sorted.length/2])/2) : 0;
  const range = sorted.length ? sorted[sorted.length-1] - sorted[0] : 0;
  return (
    <SolverCard title="Mean / Median / Range">
      <Input value={vals} onChange={e => setVals(e.target.value)} placeholder="Comma-separated numbers" />
      <Result formula="mean = Σx/n" steps={[`n = ${arr.length}`, `Σx = ${sum}`]}
        answer={`mean=${mean.toFixed(2)}, median=${median}, range=${range}`} />
    </SolverCard>
  );
}

function Force() {
  const [m, sm] = useState("5"), [a, sa] = useState("2");
  return (
    <SolverCard title="Newton's 2nd Law: F = ma">
      <div className="grid grid-cols-2 gap-2">
        <NumIn label="mass (kg)" value={m} onChange={sm} />
        <NumIn label="acceleration (m/s²)" value={a} onChange={sa} />
      </div>
      <Result formula="F = ma" steps={[`${+m} × ${+a}`]} answer={`${(+m * +a).toFixed(2)} N`} />
    </SolverCard>
  );
}

function Density() {
  const [m, sm] = useState("240"), [v, sv] = useState("80");
  return (
    <SolverCard title="Density: ρ = m/V">
      <div className="grid grid-cols-2 gap-2">
        <NumIn label="mass" value={m} onChange={sm} />
        <NumIn label="volume" value={v} onChange={sv} />
      </div>
      <Result formula="ρ = m/V" steps={[`${+m}/${+v}`]} answer={`${(+m / +v).toFixed(3)} (units of m/V)`} />
    </SolverCard>
  );
}

function Mole() {
  const [m, sm] = useState("36"), [M, sMM] = useState("18");
  return (
    <SolverCard title="Moles: n = m/M">
      <div className="grid grid-cols-2 gap-2">
        <NumIn label="mass (g)" value={m} onChange={sm} />
        <NumIn label="molar mass (g/mol)" value={M} onChange={sMM} />
      </div>
      <Result formula="n = m/M" steps={[`${+m}/${+M}`]} answer={`${(+m / +M).toFixed(4)} mol`} />
    </SolverCard>
  );
}

function AdvancedSolvers() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Quadratic /><Linear /><Distance /><PercentChange /><SpeedDistTime /><Stats /><Force /><Density /><Mole />
    </div>
  );
}

export default function CalculatorCenter() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Calculator Center</h1>
        <p className="text-muted-foreground text-sm">Scientific calculator + Astra advanced solver.</p>
      </div>
      <Tabs defaultValue="sci">
        <TabsList>
          <TabsTrigger value="sci">Scientific Calculator</TabsTrigger>
          <TabsTrigger value="adv">Astra Advanced Solver</TabsTrigger>
        </TabsList>
        <TabsContent value="sci" className="mt-4"><ScientificCalc /></TabsContent>
        <TabsContent value="adv" className="mt-4"><AdvancedSolvers /></TabsContent>
      </Tabs>
    </div>
  );
}
