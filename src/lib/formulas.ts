export interface Formula {
  id: string;
  category: "Algebra" | "Geometry" | "Trigonometry" | "Statistics" | "Physics" | "Chemistry";
  name: string;
  formula: string;
  meaning: string;
  whenToUse: string;
  example: string;
  solverKey?: string; // links to advanced solver tab
}

export const FORMULAS: Formula[] = [
  // Algebra
  { id: "a1", category: "Algebra", name: "Quadratic Formula", formula: "x = (−b ± √(b² − 4ac)) / 2a",
    meaning: "Roots of ax² + bx + c = 0.", whenToUse: "When factoring fails.",
    example: "For x² − 5x + 6 = 0: x = 2, 3.", solverKey: "quadratic" },
  { id: "a2", category: "Algebra", name: "Vieta's Formulas", formula: "Sum = −b/a, Product = c/a",
    meaning: "Relations between roots and coefficients.", whenToUse: "Quick root-sum/product problems.",
    example: "x² − 7x + 12: sum=7, product=12." },
  { id: "a3", category: "Algebra", name: "Difference of Squares", formula: "a² − b² = (a − b)(a + b)",
    meaning: "Factoring identity.", whenToUse: "Factoring perfect-square differences.",
    example: "x² − 9 = (x − 3)(x + 3)." },
  { id: "a4", category: "Algebra", name: "Slope-Intercept", formula: "y = mx + b",
    meaning: "Line equation with slope m and y-intercept b.", whenToUse: "Linear graph problems.",
    example: "y = 2x + 1.", solverKey: "line" },
  // Geometry
  { id: "g1", category: "Geometry", name: "Pythagorean Theorem", formula: "a² + b² = c²",
    meaning: "Right-triangle side relationship.", whenToUse: "Finding a right-triangle side.",
    example: "3-4-5 triangle." },
  { id: "g2", category: "Geometry", name: "Circle Area & Circumference", formula: "A = πr²,  C = 2πr",
    meaning: "Area and perimeter of a circle.", whenToUse: "Circle problems.",
    example: "r = 7 → A = 49π, C = 14π.", solverKey: "circle" },
  { id: "g3", category: "Geometry", name: "Distance Formula", formula: "d = √((x₂−x₁)² + (y₂−y₁)²)",
    meaning: "Distance between two points.", whenToUse: "Coordinate geometry.",
    example: "(1,2) to (4,6) = 5.", solverKey: "distance" },
  { id: "g4", category: "Geometry", name: "Cylinder Volume", formula: "V = πr²h",
    meaning: "Volume of a right cylinder.", whenToUse: "3D volume problems.",
    example: "r=3, h=10 → 90π." },
  // Trig
  { id: "t1", category: "Trigonometry", name: "SOH CAH TOA", formula: "sin = O/H, cos = A/H, tan = O/A",
    meaning: "Trig ratios in right triangles.", whenToUse: "Right-triangle trigonometry.",
    example: "tan θ = 3/4 → sin θ = 3/5." },
  { id: "t2", category: "Trigonometry", name: "Pythagorean Identity", formula: "sin²θ + cos²θ = 1",
    meaning: "Fundamental trig identity.", whenToUse: "Simplifying trig expressions.",
    example: "If cos θ = 3/5 → sin θ = 4/5." },
  // Statistics
  { id: "st1", category: "Statistics", name: "Mean", formula: "x̄ = Σx / n",
    meaning: "Arithmetic average.", whenToUse: "Central tendency.",
    example: "4,8,6,10,12 → mean = 8.", solverKey: "stats" },
  { id: "st2", category: "Statistics", name: "Probability", formula: "P = favorable / total",
    meaning: "Likelihood of an event.", whenToUse: "Counting equally likely outcomes.",
    example: "3 red of 10 → P = 3/10.", solverKey: "probability" },
  // Physics
  { id: "p1", category: "Physics", name: "Newton's 2nd Law", formula: "F = ma",
    meaning: "Net force = mass × acceleration.", whenToUse: "Force/acceleration problems.",
    example: "5 kg, 2 m/s² → 10 N.", solverKey: "force" },
  { id: "p2", category: "Physics", name: "Kinematics", formula: "v = u + at;  d = ut + ½at²",
    meaning: "Uniformly accelerated motion.", whenToUse: "Motion under constant acceleration.",
    example: "u=0, a=10, t=3 → d=45 m.", solverKey: "kinematics" },
  { id: "p3", category: "Physics", name: "Density", formula: "ρ = m/V",
    meaning: "Mass per unit volume.", whenToUse: "Density problems.",
    example: "240g/80cm³ = 3 g/cm³.", solverKey: "density" },
  { id: "p4", category: "Physics", name: "Work & Power", formula: "W = Fd;  P = W/t",
    meaning: "Mechanical work and power.", whenToUse: "Energy/power problems.",
    example: "F=10N, d=5m → W=50J.", solverKey: "work" },
  { id: "p5", category: "Physics", name: "Kinetic Energy", formula: "KE = ½mv²",
    meaning: "Energy of motion.", whenToUse: "Energy of moving objects.",
    example: "4kg, 6 m/s → 72 J." },
  // Chemistry
  { id: "c1", category: "Chemistry", name: "Moles", formula: "n = m / M",
    meaning: "Moles from mass and molar mass.", whenToUse: "Stoichiometry.",
    example: "36g H₂O / 18 = 2 mol.", solverKey: "mole" },
  { id: "c2", category: "Chemistry", name: "Molarity", formula: "M = n / V(L)",
    meaning: "Solution concentration.", whenToUse: "Solution chemistry.",
    example: "0.5 mol / 0.25 L = 2 M.", solverKey: "molarity" },
  { id: "c3", category: "Chemistry", name: "Percent Composition", formula: "% = (mass of element / total mass) × 100",
    meaning: "Composition by mass.", whenToUse: "Empirical formula problems.",
    example: "In H₂O, %O = 16/18 ≈ 88.9%.", solverKey: "percent-comp" },
];
