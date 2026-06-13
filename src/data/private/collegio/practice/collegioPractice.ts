import { scienceAssessmentReview } from "@/data/private/collegio/science/scienceAssessmentReview";
import { mathAssessmentReview } from "@/data/private/collegio/math/mathAssessmentReview";
import { languageAssessmentReview } from "@/data/private/collegio/language/languageAssessmentReview";
import { abstractAssessmentReview } from "@/data/private/collegio/abstract/abstractAssessmentReview";

export type CollegioPracticeQuestion = {
  id: string;
  subject: string;
  topic: string;
  question: string;
  answer: string;
  correctLetter: string;
  sourcePage: number;
  image: string;
  choices: string[];
};

const pageImage = (page: number) =>
  `/private-reviewer/collegio/pages/page-${String(page).padStart(3, "0")}.jpg`;

const keys: Record<string, string> = {
  "sci-p021-q001": "B", "sci-p021-q002": "A", "sci-p021-q003": "A", "sci-p021-q004": "C", "sci-p021-q005": "B", "sci-p021-q006": "D",
  "sci-p022-q007": "A", "sci-p022-q008": "D", "sci-p022-q009": "D", "sci-p022-q010": "C", "sci-p022-q011": "B",
  "sci-p023-q012": "B", "sci-p023-q013": "D", "sci-p023-q014": "B", "sci-p023-q015": "C", "sci-p023-q016": "A", "sci-p023-q017": "C",
  "sci-p024-q018": "D", "sci-p024-q019": "C", "sci-p024-q020": "C", "sci-p024-q021": "A", "sci-p024-q022": "D", "sci-p024-q023": "D",
  "sci-p025-q024": "A", "sci-p025-q025": "C", "sci-p025-q026": "B", "sci-p025-q027": "D", "sci-p025-q028": "B", "sci-p025-q029": "A",
  "sci-p026-q030": "C", "sci-p026-q031": "B", "sci-p026-q032": "C", "sci-p026-q033": "A", "sci-p026-q034": "D", "sci-p026-q035": "D",
  "sci-p027-q036": "D", "sci-p027-q037": "B", "sci-p027-q038": "A", "sci-p027-q039": "C", "sci-p027-q040": "C",

  "sci-p070-q001": "D", "sci-p070-q002": "A", "sci-p070-q003": "B", "sci-p070-q004": "C", "sci-p070-q005": "A", "sci-p070-q006": "D",
  "sci-p071-q007": "B", "sci-p071-q008": "A", "sci-p071-q009": "C", "sci-p071-q010": "C", "sci-p071-q011": "A", "sci-p071-q012": "B", "sci-p071-q013": "D",
  "sci-p072-q014": "D", "sci-p072-q015": "A", "sci-p072-q016": "C", "sci-p072-q017": "C", "sci-p072-q018": "C", "sci-p072-q019": "D",
  "sci-p073-q020": "D", "sci-p073-q021": "A", "sci-p073-q022": "C", "sci-p073-q023": "C", "sci-p073-q024": "A", "sci-p073-q025": "A",
  "sci-p074-q026": "D", "sci-p074-q027": "C", "sci-p074-q028": "C", "sci-p074-q029": "D", "sci-p074-q030": "A", "sci-p074-q031": "B", "sci-p074-q032": "C",
  "sci-p075-q033": "A", "sci-p075-q034": "B", "sci-p075-q035": "A", "sci-p075-q036": "C", "sci-p075-q037": "B", "sci-p075-q038": "B",
  "sci-p076-q039": "C", "sci-p076-q040": "C",

  "math-p066-q001": "A", "math-p066-q002": "C", "math-p066-q003": "D", "math-p066-q004": "D", "math-p066-q005": "C",
  "math-p067-q006": "B", "math-p067-q007": "A", "math-p067-q008": "D", "math-p067-q009": "B", "math-p067-q010": "D",
  "math-p068-q011": "D", "math-p068-q012": "B", "math-p068-q013": "B", "math-p068-q014": "D", "math-p068-q015": "B",
  "math-p069-q016": "B", "math-p069-q017": "C", "math-p069-q018": "A", "math-p069-q019": "B", "math-p069-q020": "B",
  "math-p070-q021": "B", "math-p070-q022": "A", "math-p070-q023": "C", "math-p070-q024": "A", "math-p070-q025": "B", "math-p070-q026": "D", "math-p070-q027": "C",
  "math-p071-q028": "B", "math-p071-q029": "A", "math-p071-q030": "A", "math-p071-q031": "A", "math-p071-q032": "C", "math-p071-q033": "C",
  "math-p072-q034": "D", "math-p072-q035": "C", "math-p072-q036": "A", "math-p072-q037": "C",
  "math-p073-q038": "C", "math-p073-q039": "C", "math-p073-q040": "B",

  "lang-error-q001": "B", "lang-error-q002": "A", "lang-error-q003": "D", "lang-error-q004": "B", "lang-error-q005": "C",
  "lang-error-q006": "B", "lang-error-q007": "B", "lang-error-q008": "C", "lang-error-q009": "C", "lang-error-q010": "C",
  "lang-analogy-q001": "C", "lang-analogy-q002": "B", "lang-analogy-q003": "D", "lang-analogy-q004": "C", "lang-analogy-q005": "B",
  "lang-analogy-q006": "B", "lang-analogy-q007": "D", "lang-analogy-q008": "A", "lang-analogy-q009": "C", "lang-analogy-q010": "B",
  "lang-sentence-q001": "A", "lang-sentence-q002": "B", "lang-sentence-q003": "D", "lang-sentence-q004": "B", "lang-sentence-q005": "A",
  "lang-sentence-q006": "C", "lang-sentence-q007": "D", "lang-sentence-q008": "C", "lang-sentence-q009": "D", "lang-sentence-q010": "A",

  "abs-q001": "C", "abs-q002": "A", "abs-q003": "E", "abs-q004": "A", "abs-q005": "D",
  "abs-q006": "B", "abs-q007": "D", "abs-q008": "A", "abs-q009": "D", "abs-q010": "A",

  "read-p223-q001": "C",
  "read-p223-q002": "C",
  "read-p223-q003": "C",
  "read-p223-q004": "B",
  "read-p223-q005": "D",
  "read-p223-q006": "D",

  "read-p224-q007": "D",
  "read-p224-q008": "B",
  "read-p224-q009": "D",
  "read-p224-q010": "A",

  "read-p225-q011": "D",
  "read-p225-q012": "D",
  "read-p225-q013": "A",

  "read-p225-q014": "A",
  "read-p226-q015": "A",

  "read-p229-q001": "D",
  "read-p229-q002": "B",
  "read-p229-q003": "C",
  "read-p229-q004": "B",
  "read-p229-q005": "B",

  "abs-q011": "A", "abs-q012": "B", "abs-q013": "E", "abs-q014": "B", "abs-q015": "D",
  "abs-q016": "A", "abs-q017": "C", "abs-q018": "D", "abs-q019": "A", "abs-q020": "B",
  "abs-q021": "A", "abs-q022": "E", "abs-q023": "D", "abs-q024": "A", "abs-q025": "C",
  "abs-q026": "C", "abs-q027": "C", "abs-q028": "C", "abs-q029": "C", "abs-q030": "C",
};

const choicesFor = (letter: string) =>
  letter === "E" ? ["A", "B", "C", "D", "E"] : ["A", "B", "C", "D"];

const abstractImage = (q: any) => q.image || `/private-reviewer/collegio/abstract/page-${q.sourcePage}.png`;

const exactChoices: Record<string, string[]> = {

  "lang-error-q001": ["tries", "No Brainer", "help her prepare", "No error"],
  "lang-error-q002": ["has", "on", "rising", "No error"],
  "lang-error-q003": ["are", "all good", "of mine", "No error"],
  "lang-error-q004": ["costs", "more than", "last year's model", "No error"],
  "lang-error-q005": ["had to redo", "disappointed", "and dejected", "No error"],
  "lang-error-q006": ["refract", "so", "continuous", "No error"],
  "lang-error-q007": ["Neither", "nor", "won't be getting", "No error"],
  "lang-error-q008": ["claims", "nor", "are", "No error"],
  "lang-error-q009": ["ignores", "whether", "healthy or not", "No error"],
  "lang-error-q010": ["reported", "cost of gasoline", "is raising", "No error"],

  "lang-analogy-q001": ["babies", "roos", "calf", "cubs"],
  "lang-analogy-q002": ["virus : speed", "idea : germinate", "myth : explode", "crop : harvest"],
  "lang-analogy-q003": ["Canada : Toronto", "Brasile : Brazil", "Australia : Canberra", "Nicosia : Cyprus"],
  "lang-analogy-q004": ["home : rules", "library : media", "media : news", "market : goods"],
  "lang-analogy-q005": ["hesitant : weak", "fired : exhausted", "free : democratic", "innocent : savvy"],
  "lang-analogy-q006": ["circular : oval", "clandestine : overt", "enclose : circumscribed", "warm : hot"],
  "lang-analogy-q007": ["mock : sarcasm", "obey : leader", "admire : reputation", "emulate : person"],
  "lang-analogy-q008": ["eraser : page", "nail : desk", "bleach : stain", "sponge : water"],
  "lang-analogy-q009": ["insects : animal", "hoof : cow", "scent : skunk", "ears : cat"],
  "lang-analogy-q010": ["learn : study", "chat : converse", "give : take", "purchase : rent"],

  "lang-sentence-q001": ["that", "which", "that which", "of which"],
  "lang-sentence-q002": ["that", "really", "real", "like real"],
  "lang-sentence-q003": ["out", "that", "neither of them", "none of them"],
  "lang-sentence-q004": ["necessary", "relevant to", "relating to", "important for"],
  "lang-sentence-q005": ["sang", "had sang", "sung", "had sung"],
  "lang-sentence-q006": ["to be stayed", "to staying", "to stay", "stayed"],
  "lang-sentence-q007": ["enigma", "put off", "renounced", "portend"],
  "lang-sentence-q008": ["soothed", "rigidified", "morose", "mysterious"],
  "lang-sentence-q009": ["intrusive", "incompetent", "motivated", "dilatory"],
  "lang-sentence-q010": ["lazy", "dedicated", "coherent", "commendable"],

  "read-p223-q001": ["Audible", "Acoustic", "Coherent", "Approximately"],
  "read-p223-q002": ["Intermittent", "Applicable", "Abruptly", "Approximately"],
  "read-p223-q003": ["Coherent", "Cognitive", "Stale", "Applicable"],
  "read-p223-q004": ["have gained a lot of friends from high places who can help you get the job", "have acquired experience or have satisfactorily achieved something", "have attained more talent to manipulate interview results", "have obtained enough financial resources to unwind"],
  "read-p223-q005": ["to feel bombarded and heavy with a difficult task", "to solve a problem or create an idea by thinking", "to consider with much deliberation", "to think with deep meditation"],
  "read-p223-q006": ["illegal money", "camel", "sand", "oil"],

  "read-p224-q007": ["onions were once thought to be poisonous", "bay leaves are essential in many soups", "clam chowder is very nutritious", "onions and bay leaves go well with clams", "clams should not be overcooked"],
  "read-p224-q008": ["Shakespeare's characters are more interesting than fictional characters today", "people today are interested in Shakespeare's work because of the characters", "academic scholars are putting together an anthology of Shakespeare's work", "New Yorkers have a renewed interest in the work of Shakespeare", "Shakespeare was a psychiatrist as well as a playwright"],
  "read-p224-q009": ["critical reading is a slow, dull, but essential process", "the best critical reading happens at critical times in a person's life", "readers should get in the habit of questioning the truth of what they read", "critical reading requires thoughtful and careful attention", "critical reading should take place at the same time each day"],
  "read-p224-q010": ["toxic insecticides such as DDT have not been banned throughout the world", "more pollutants find their way into polar climates than they do into warmer areas", "studies have proven that many countries have ignored their own anti-pollution laws", "DDT and toxaphene are the two most toxic insecticides in the world", "even a worldwide ban on toxic insecticides would not stop the spread of DDT pollution"],

  "read-p225-q011": ["have discovered", "that they", "through", "and not through", "No Error"],
  "read-p225-q012": ["After", "to postpone", "of the", "their", "No Error"],
  "read-p225-q013": ["require", "years", "for", "from", "No error"],

  "read-p225-q014": ["DCBA", "CBDA", "DBCA", "ABCD"],

  "read-p226-q015": ["BDCA", "BCDA", "ACBD", "ABCD"],

  "read-p229-q001": ["stable", "shoe", "see", "mount"],
  "read-p229-q002": ["salad", "Italian", "blue", "string"],
  "read-p229-q003": ["approach", "push", "damage", "outwit"],
  "read-p229-q004": ["Canada", "Iraq", "Ireland", "China"],
  "read-p229-q005": ["rat", "computer", "cord", "dessert"],


  "sci-p021-q001": ["Oxygen", "Silicon", "Aluminum", "Iron"],
  "sci-p021-q002": ["Ozone layer", "Lithosphere", "Ionosphere", "Thermosphere"],
  "sci-p021-q003": ["The Moon's orbit is at an angle to Earth's orbit around the Sun", "Earth stops rotating during a full moon", "The Sun blocks the Moon every month", "The Moon has no shadow during most months"],
  "sci-p021-q004": ["Physical change", "Nuclear change", "Chemical change", "Phase change"],
  "sci-p021-q005": ["Dust particles", "Tiny droplets of water", "Solid rocks", "Pure oxygen"],
  "sci-p021-q006": ["Centigrade", "Kelvin", "Newton", "Joules"],

  "sci-p022-q007": ["Series circuit", "Parallel circuit", "Open circuit", "Short circuit"],
  "sci-p022-q008": ["300 N·m", "500 N·m", "1000 N·m", "1500 N·m"],
  "sci-p022-q009": ["1.44 × 10^-6 cm", "1.44 × 10^-7 cm", "1.44 × 10^-9 cm", "1.44 × 10^-8 cm"],
  "sci-p022-q010": ["Formation of new substances", "Breaking of chemical bonds", "Separation of the molecules in a mixture", "Rearrangement of atoms"],
  "sci-p022-q011": ["1 ionization stage", "2 ionization stages", "3 ionization stages", "4 ionization stages"],

  "sci-p023-q012": ["Bees pollinating flowers", "Garden slugs cleaning soil pathways", "Fleas living on dogs", "Tapeworms living inside hosts"],
  "sci-p023-q013": ["Lysosomes store genetic material", "Lysosomes produce proteins", "Lysosomes control cell division", "Lysosomes contain digestive enzymes"],
  "sci-p023-q014": ["Chemical energy", "Light energy", "Heat energy", "Sound energy"],
  "sci-p023-q015": ["Planet X revolves more slowly than Earth", "Planet X has larger diameter than Earth", "Planet X rotates faster than Earth", "Planet X is farther from the Sun"],
  "sci-p023-q016": ["Oxygen cycle", "Nitrogen cycle", "Carbon cycle", "Water cycle"],
  "sci-p023-q017": ["Law of acceleration", "Law of action and reaction", "Law of inertia", "Law of conservation of energy"],

  "sci-p024-q018": ["Penumbra", "Corona", "Umbrella", "Umbra"],
  "sci-p024-q019": ["100% widow's peak", "100% straight hairline", "50% widow's peak and 50% straight hairline", "25% widow's peak and 75% straight hairline"],
  "sci-p024-q020": ["1 electron", "4 electrons", "2 electrons", "8 electrons"],

  "sci-p024-q021": ["Its volume increases more rapidly than its surface area", "Its surface area increases more rapidly than its volume", "Its nucleus disappears as it grows", "Its membrane becomes completely rigid"],
  "sci-p024-q022": ["Produce oxygen", "Create new energy", "Absorb sunlight", "Recycle nutrients"],
  "sci-p024-q023": ["Oxygen enters the blood in the lungs", "Carbon dioxide is removed from the body", "Gas exchange occurs in the alveoli", "Not all atmospheric gases directly participate in respiration"],

  "sci-p025-q024": ["Bone marrow; defense", "Lungs; gas exchange", "Stomach; digestion", "Kidneys; filtration"],
  "sci-p025-q025": ["Parallel leaf venation", "One cotyledon", "Vascular cambium differentiation", "Fibrous root system"],
  "sci-p025-q026": ["Oxygen; nitrogen", "Water; carbon dioxide", "Glucose; oxygen", "Minerals; sunlight"],
  "sci-p025-q027": ["Gene mutation", "Chromosomal number change", "Chromosomal structure change", "All of the preceding"],
  "sci-p025-q028": ["A condition in which both alleles are identical", "A condition in which both alleles are different", "A trait controlled by only one gene", "A chromosome without genes"],
  "sci-p025-q029": ["Lymphocytes", "Platelets", "Red blood cells", "Neurons"],

  "sci-p026-q030": ["Volcanic islands", "Ocean trenches", "Fold mountains", "River deltas"],
  "sci-p026-q031": ["Epithelial tissues", "Nervous tissues", "Connective tissues", "Muscle tissues"],
  "sci-p026-q032": ["Bryophytes and ferns", "Gymnosperms and algae", "Monocots and dicots", "Mosses and liverworts"],
  "sci-p026-q033": ["Ferns produce pollen grains", "Plants have cell walls", "Some plants reproduce by spores", "Flowering plants produce seeds"],
  "sci-p026-q034": ["Electrons only", "Protons only", "Neutrons only", "Protons and neutrons"],
  "sci-p026-q035": ["Carbon", "Hydrogen", "Oxygen", "Sodium"],

  "sci-p027-q036": ["Element", "Compound", "Homogeneous mixture", "Heterogeneous mixture"],
  "sci-p027-q037": ["2 and 4", "2 and 8", "4 and 8", "8 and 18"],
  "sci-p027-q038": ["1.986 L", "0.986 L", "2.500 L", "3.000 L"],
  "sci-p027-q039": ["Have strong attractive forces between them", "Always liquefy at room temperature", "Have no attractive forces between them", "Have fixed volume and shape"],
  "sci-p027-q040": ["A gas sample is compressed at constant temperature", "The number of gas particles is increased at constant volume", "A gas sample is heated and the volume is increased", "The volume is decreased while temperature stays constant"],

  "sci-p070-q001": ["Bent", "Linear", "Trigonal bipyramidal", "Trigonal pyramidal"],
  "sci-p070-q002": ["Sulfur group", "Phosphate group", "Nitrogenous bases", "Sugar group"],
  "sci-p070-q003": ["Calcite crystallized from sea water", "Gravel deposited in a silt bed", "Limestone dissolved in a cave formation", "Magma fracture in ocean floor"],
  "sci-p070-q004": ["order, class, family, genus", "class, family, order, genus", "phylum, class, order, family", "kingdom, class, phylum, order"],
  "sci-p070-q005": ["0.033", "0.33", "3.33", "33.3"],
  "sci-p070-q006": ["mitochondria", "nucleoli", "ribosomes", "cell walls"],

  "sci-p071-q007": ["in prophase", "before prophase", "in metaphase", "During the first meiotic division"],
  "sci-p071-q008": ["Commensalism", "Mutualism", "Neutralism", "Parasitism"],
  "sci-p071-q009": ["anaphase - metaphase - prophase - telophase", "prophase - anaphase - metaphase - telophase", "prophase - metaphase - anaphase - telophase", "telophase - prophase - metaphase - anaphase"],
  "sci-p071-q010": ["members are of the same color and shape", "members all live in the same location", "members cannot produce hybrids with other species", "none of the above"],
  "sci-p071-q011": ["clones", "variants", "hybrids", "species"],
  "sci-p071-q012": ["DNA", "Nucleus", "Ribosomes", "Plasma membrane"],
  "sci-p071-q013": ["animals", "fungi", "plants", "a, b and c"],

  "sci-p072-q014": ["shrubs and trees", "herbs and shrubs", "angiosperms and gymnosperms", "monocots and dicots"],
  "sci-p072-q015": ["21 degrees", "42 degrees", "12.5 degrees", "Insufficient information"],
  "sci-p072-q016": ["leukocytes", "mast cells", "lymphocytes", "macrophages"],
  "sci-p072-q017": ["cyanobacteria", "algae", "some bacteria", "plants"],
  "sci-p072-q018": ["Abyssal plain", "Continental shelf", "Mid-ocean ridges", "Subduction zone"],
  "sci-p072-q019": ["gene mutations", "changes in chromosome number", "changes in chromosome structure", "all of the preceding"],

  "sci-p073-q020": ["act as pollutants", "clean the environment", "make the soil fertile", "recycle nutrients"],
  "sci-p073-q021": ["The ball will continue rolling unless acted upon by equal, opposite force", "The ball will skid along the surface continuously unless acted upon by an equal, opposite force", "The ball will stop at some point due to continuous gravitational force acting on a ball", "Both A and B can be observed"],
  "sci-p073-q022": ["an activated plasma cell", "an out-of-body experience", "a protein produced in response to foreign objects", "a receptor molecule with binding sites for antigen"],
  "sci-p073-q023": ["electrons", "energy levels", "neutrons", "protons"],
  "sci-p073-q024": ["directly proportional", "inversely related", "cannot be determined", "no significant relationship"],
  "sci-p073-q025": ["1", "3", "5", "8"],

  "sci-p074-q026": ["salt water", "air", "gasoline", "24-karat gold"],
  "sci-p074-q027": ["a lipid", "a sugar", "an amino acid", "a nucleotide"],
  "sci-p074-q028": ["percent by weight", "mole fraction", "molarity", "molality"],
  "sci-p074-q029": ["9", "10", "50", "51"],
  "sci-p074-q030": ["Enzyme", "Feedback activators", "Feedback inhibitors", "Metabolites"],
  "sci-p074-q031": ["compounds", "atoms", "elements", "liquids"],
  "sci-p074-q032": ["advection", "exhalation", "transpiration", "vapor release"],

  "sci-p075-q033": ["ozone layer", "lithosphere", "ionosphere", "thermosphere"],
  "sci-p075-q034": ["Anaerobic respiration", "Oxygen cycle", "Nitrogen Fixation", "Both B and C"],
  "sci-p075-q035": ["Sulfur group", "Sugar group", "Phosphate group", "Nitrogenous bases"],
  "sci-p075-q036": ["Lysosome", "Nucleus", "Smooth Endoplasmic Reticulum", "Rough Endoplasmic Reticulum"],
  "sci-p075-q037": ["Centigrade", "Joules", "Newton", "Kelvin"],
  "sci-p075-q038": ["2 and 4", "2 and 8", "4 and 8", "4 and 16"],

  "sci-p076-q039": ["Boyle's Law", "Charles' Law", "Avogadro's Law", "Gay Lussac's Law"],
  "sci-p076-q040": ["molecules", "radio wave", "sound wave", "matter"],

  "math-p066-q001": [
    "acute",
    "obtuse",
    "right",
    "reflex",
  ],

  "math-p066-q002": [
    "4x² + 13x² − 3 = 0",
    "4x + 13x² + 3x³ − 3 = 0",
    "4x³ + x² − 14x − 3 = 0",
    "3 − 14x + x² + 4x³ = 0",
  ],

  "math-p066-q003": [
    "4",
    "-4",
    "±4",
    "0",
  ],

  "math-p066-q004": [
    "9",
    "12",
    "15",
    "18",
  ],

  "math-p066-q005": [
    "0",
    "1",
    "2",
    "3",
  ],

  "math-p067-q006": [
    "3 minutes",
    "5 minutes",
    "7 minutes",
    "9 minutes",
  ],

  "math-p067-q007": [
    "f(x) = x² + x − 3",
    "f(x) = −x² − x + 3",
    "f(x) = x² + 3x + 9",
    "f(x) = x² + x + 1",
  ],

  "math-p067-q008": [
    "2",
    "4",
    "6",
    "8",
  ],

  "math-p067-q009": [
    "-1",
    "0",
    "1",
    "2",
  ],

  "math-p067-q010": [
    "(0, 0)",
    "(1, 0)",
    "(2, 0)",
    "(4, 5)",
  ],

  "math-p068-q011": [
    "x² − xy + yz − xz − y²",
    "x² − xy − yz + y²",
    "x² − 2xy + yz − xz − y²",
    "x² − xz − yz − y²",
  ],

  "math-p068-q012": [
    "5",
    "5√3",
    "25",
    "50",
  ],

  "math-p068-q013": [
    "43 humans, 27 horses",
    "27 humans, 43 horses",
    "72 humans, 34 horses",
    "34 humans, 72 horses",
  ],

  "math-p068-q014": [
    "163 cm",
    "164 cm",
    "165 cm",
    "166 cm",
  ],

  "math-p068-q015": [
    "12 m²",
    "24 m²",
    "48 m²",
    "96 m²",
  ],

  "math-p069-q016": [
    "1000",
    "2500",
    "3000",
    "3500",
  ],

  "math-p069-q017": [
    "86",
    "-86",
    "35",
    "-35",
  ],

  "math-p069-q018": [
    "3cm < 3rd side < 27cm",
    "-3cm < 3rd side < 3cm",
    "13.5cm < 3rd side < 27cm",
    "-13.5cm < 3rd side < 3cm",
  ],

  "math-p069-q019": [
    "2m − n + p",
    "2m + n − p",
    "-2m + n + p",
    "2m − n − p",
  ],

  "math-p069-q020": [
    "22",
    "24",
    "32",
    "36",
  ],

  "math-p070-q021": [
    "0",
    "2",
    "4",
    "6",
  ],

  "math-p070-q022": [
    "real and rational",
    "real and irrational",
    "no real root",
    "imaginary conjugate",
  ],

  "math-p070-q023": [
    "12 cm",
    "12√3 cm",
    "15 cm",
    "15√3 cm",
  ],

  "math-p070-q024": [
    "Php 65,610",
    "Php 87,924.03",
    "Php 116,901.91",
    "Php 98,610",
  ],

  "math-p070-q025": [
    "30",
    "35",
    "40",
    "45",
  ],

  "math-p070-q026": [
    "7",
    "8",
    "10",
    "12",
  ],

  "math-p070-q027": [
    "83",
    "35",
    "52",
    "26",
  ],

  "math-p071-q028": [
    "140 minutes",
    "160 minutes",
    "180 minutes",
    "200 minutes",
  ],

  "math-p071-q029": [
    "y = 3",
    "y = 4",
    "y = 5",
    "y = 6",
  ],

  "math-p071-q030": [
    "right",
    "equilateral",
    "obtuse",
    "isosceles",
  ],

  "math-p071-q031": [
    "120",
    "240",
    "360",
    "400",
  ],

  "math-p071-q032": [
    "6",
    "29",
    "31",
    "37",
  ],

  "math-p071-q033": [
    "((b²)²)",
    "26a⁴b³c⁷",
    "16x⁷y⁸ + 4mn²",
    "24m³r⁴ − 3b²",
  ],

  "math-p072-q034": [
    "3x² + 10x + 5",
    "3x² − 6x + 5",
    "3x² + 2x − 3",
    "3x² − 2x − 3",
  ],

  "math-p072-q035": [
    "1",
    "2",
    "3",
    "4",
  ],

  "math-p072-q036": [
    "18°",
    "20°",
    "22°",
    "24°",
  ],

  "math-p072-q037": [
    "34.5",
    "35.5",
    "36.5",
    "37.5",
  ],

  "math-p073-q038": [
    "49°",
    "56°",
    "64°",
    "67°",
  ],

  "math-p073-q039": [
    "5 cm",
    "5√2 cm",
    "5√3 cm",
    "15 cm",
  ],

  "math-p073-q040": [
    "All angles of a rhombus are congruent",
    "Opposite angles of a rhombus are congruent",
    "Diagonals of a rhombus are congruent",
    "A rhombus always has four right angles",
  ],
};


const scienceAssessmentSet2 = [
  { id: "sci-p070-q001", subject: "Science", topic: "Chemistry", question: "What is the molecular geometry asked in the item?", answer: "Trigonal pyramidal", sourcePage: 70, verified: true },
  { id: "sci-p070-q002", subject: "Science", topic: "Biochemistry", question: "Which group is being asked in the DNA/RNA structure item?", answer: "Sulfur group", sourcePage: 70, verified: true },
  { id: "sci-p070-q003", subject: "Science", topic: "Earth Science", question: "Which example describes the geologic process asked in the item?", answer: "Gravel deposited in a silt bed", sourcePage: 70, verified: true },
  { id: "sci-p070-q004", subject: "Science", topic: "Taxonomy", question: "Which sequence correctly arranges the taxonomic ranks asked in the item?", answer: "phylum, class, order, family", sourcePage: 70, verified: true },
  { id: "sci-p070-q005", subject: "Science", topic: "Chemistry Computation", question: "What is the computed value asked in the item?", answer: "0.033", sourcePage: 70, verified: true },
  { id: "sci-p070-q006", subject: "Science", topic: "Cell Biology", question: "Which cell structure is being asked in the item?", answer: "cell walls", sourcePage: 70, verified: true },

  { id: "sci-p071-q007", subject: "Science", topic: "Cell Division", question: "When does the process described in the item occur?", answer: "before prophase", sourcePage: 71, verified: true },
  { id: "sci-p071-q008", subject: "Science", topic: "Ecology", question: "Which ecological relationship is described in the item?", answer: "Commensalism", sourcePage: 71, verified: true },
  { id: "sci-p071-q009", subject: "Science", topic: "Mitosis", question: "What is the correct order of mitosis stages?", answer: "prophase - metaphase - anaphase - telophase", sourcePage: 71, verified: true },
  { id: "sci-p071-q010", subject: "Science", topic: "Species", question: "Which statement best identifies members of the same species?", answer: "members cannot produce hybrids with other species", sourcePage: 71, verified: true },
  { id: "sci-p071-q011", subject: "Science", topic: "Genetics", question: "What are genetically identical organisms called?", answer: "clones", sourcePage: 71, verified: true },
  { id: "sci-p071-q012", subject: "Science", topic: "Cell Biology", question: "Which structure is being asked in the cell item?", answer: "Nucleus", sourcePage: 71, verified: true },
  { id: "sci-p071-q013", subject: "Science", topic: "Kingdoms", question: "Which groups are included in the item?", answer: "a, b and c", sourcePage: 71, verified: true },

  { id: "sci-p072-q014", subject: "Science", topic: "Plants", question: "Which two classes of flowering plants are being asked?", answer: "monocots and dicots", sourcePage: 72, verified: true },
  { id: "sci-p072-q015", subject: "Science", topic: "Physics/Angles", question: "What is the computed angle asked in the item?", answer: "21 degrees", sourcePage: 72, verified: true },
  { id: "sci-p072-q016", subject: "Science", topic: "Immunology", question: "Which cells are being asked in the item?", answer: "lymphocytes", sourcePage: 72, verified: true },
  { id: "sci-p072-q017", subject: "Science", topic: "Photosynthesis", question: "Which organisms are being asked in the item?", answer: "some bacteria", sourcePage: 72, verified: true },
  { id: "sci-p072-q018", subject: "Science", topic: "Earth Science", question: "Which seafloor feature is being asked in the item?", answer: "Mid-ocean ridges", sourcePage: 72, verified: true },
  { id: "sci-p072-q019", subject: "Science", topic: "Genetics", question: "What can cause genetic disorders?", answer: "all of the preceding", sourcePage: 72, verified: true },

  { id: "sci-p073-q020", subject: "Science", topic: "Ecosystem", question: "What is the major role of decomposers?", answer: "recycle nutrients", sourcePage: 73, verified: true },
  { id: "sci-p073-q021", subject: "Science", topic: "Physics", question: "Which statement correctly describes the motion of the ball?", answer: "The ball will continue rolling unless acted upon by equal, opposite force", sourcePage: 73, verified: true },
  { id: "sci-p073-q022", subject: "Science", topic: "Immunology", question: "What is an antibody?", answer: "a protein produced in response to foreign objects", sourcePage: 73, verified: true },
  { id: "sci-p073-q023", subject: "Science", topic: "Atomic Structure", question: "Which particle is being asked in the item?", answer: "neutrons", sourcePage: 73, verified: true },
  { id: "sci-p073-q024", subject: "Science", topic: "Gas Laws", question: "What relationship is described in the item?", answer: "directly proportional", sourcePage: 73, verified: true },
  { id: "sci-p073-q025", subject: "Science", topic: "Computation", question: "What is the computed answer?", answer: "1", sourcePage: 73, verified: true },

  { id: "sci-p074-q026", subject: "Science", topic: "Matter", question: "Which substance is being asked in the item?", answer: "24-karat gold", sourcePage: 74, verified: true },
  { id: "sci-p074-q027", subject: "Science", topic: "Biochemistry", question: "Which biomolecule component is being asked?", answer: "an amino acid", sourcePage: 74, verified: true },
  { id: "sci-p074-q028", subject: "Science", topic: "Chemistry", question: "Which concentration unit is being asked?", answer: "molarity", sourcePage: 74, verified: true },
  { id: "sci-p074-q029", subject: "Science", topic: "Computation", question: "What is the computed answer?", answer: "51", sourcePage: 74, verified: true },
  { id: "sci-p074-q030", subject: "Science", topic: "Biochemistry", question: "Which biological catalyst is being asked?", answer: "Enzyme", sourcePage: 74, verified: true },
  { id: "sci-p074-q031", subject: "Science", topic: "Matter", question: "Which basic unit is being asked?", answer: "atoms", sourcePage: 74, verified: true },
  { id: "sci-p074-q032", subject: "Science", topic: "Plants", question: "Which process is being asked?", answer: "transpiration", sourcePage: 74, verified: true },

  { id: "sci-p075-q033", subject: "Science", topic: "Atmosphere", question: "Which atmospheric layer/region is being asked?", answer: "ozone layer", sourcePage: 75, verified: true },
  { id: "sci-p075-q034", subject: "Science", topic: "Biogeochemical Cycles", question: "Which cycle/process is being asked?", answer: "Oxygen cycle", sourcePage: 75, verified: true },
  { id: "sci-p075-q035", subject: "Science", topic: "Biochemistry", question: "Which group is being asked in the DNA/RNA item?", answer: "Sulfur group", sourcePage: 75, verified: true },
  { id: "sci-p075-q036", subject: "Science", topic: "Cell Biology", question: "Which organelle is being asked?", answer: "Smooth Endoplasmic Reticulum", sourcePage: 75, verified: true },
  { id: "sci-p075-q037", subject: "Science", topic: "Energy", question: "Which unit is being asked?", answer: "Joules", sourcePage: 75, verified: true },
  { id: "sci-p075-q038", subject: "Science", topic: "Electrons", question: "What is the maximum number of electrons in the K and L levels?", answer: "2 and 8", sourcePage: 75, verified: true },

  { id: "sci-p076-q039", subject: "Science", topic: "Gas Laws", question: "Which gas law is being asked?", answer: "Avogadro's Law", sourcePage: 76, verified: true },
  { id: "sci-p076-q040", subject: "Science", topic: "Waves", question: "Which item is being asked in the wave/material question?", answer: "sound wave", sourcePage: 76, verified: true },
];







const rcFilipinoPageStudySet = [
  {
    id: "rc-fil-page-255",
    subject: "Reading Comprehension Filipino",
    topic: "Reading Passage",
    sourcePage: 255,
    question: "Basahin nang mabuti ang buong pahina. Tap Next kapag handa na.",
    choices: ["Nabasa ko na ang pahinang ito"],
    correctLetter: "A",
    verified: true,
  },
  {
    id: "rc-fil-page-256",
    subject: "Reading Comprehension Filipino",
    topic: "Reading Passage",
    sourcePage: 256,
    question: "Basahin nang mabuti ang buong pahina. Tap Next kapag handa na.",
    choices: ["Nabasa ko na ang pahinang ito"],
    correctLetter: "A",
    verified: true,
  },
  {
    id: "rc-fil-page-257",
    subject: "Reading Comprehension Filipino",
    topic: "Reading Passage",
    sourcePage: 257,
    question: "Basahin nang mabuti ang buong pahina. Tap Next kapag handa na.",
    choices: ["Nabasa ko na ang pahinang ito"],
    correctLetter: "A",
    verified: true,
  },
  {
    id: "rc-fil-page-258",
    subject: "Reading Comprehension Filipino",
    topic: "Reading Passage",
    sourcePage: 258,
    question: "Basahin nang mabuti ang buong pahina. Tap Next kapag handa na.",
    choices: ["Nabasa ko na ang pahinang ito"],
    correctLetter: "A",
    verified: true,
  },
  {
    id: "rc-fil-page-259",
    subject: "Reading Comprehension Filipino",
    topic: "Reading Passage",
    sourcePage: 259,
    question: "Basahin nang mabuti ang buong pahina. Tap Next kapag handa na.",
    choices: ["Nabasa ko na ang pahinang ito"],
    correctLetter: "A",
    verified: true,
  },
  {
    id: "rc-fil-page-260",
    subject: "Reading Comprehension Filipino",
    topic: "Reading Passage",
    sourcePage: 260,
    question: "Basahin nang mabuti ang buong pahina. Tap Next kapag handa na.",
    choices: ["Nabasa ko na ang pahinang ito"],
    correctLetter: "A",
    verified: true,
  },
  {
    id: "rc-fil-page-261",
    subject: "Reading Comprehension Filipino",
    topic: "Reading Passage",
    sourcePage: 261,
    question: "Basahin nang mabuti ang buong pahina. Tap Next kapag handa na.",
    choices: ["Nabasa ko na ang pahinang ito"],
    correctLetter: "A",
    verified: true,
  },
  {
    id: "rc-fil-page-262",
    subject: "Reading Comprehension Filipino",
    topic: "Reading Passage",
    sourcePage: 262,
    question: "Basahin nang mabuti ang buong pahina. Tap Next kapag handa na.",
    choices: ["Nabasa ko na ang pahinang ito"],
    correctLetter: "A",
    verified: true,
  },
  {
    id: "rc-fil-page-263",
    subject: "Reading Comprehension Filipino",
    topic: "Reading Passage",
    sourcePage: 263,
    question: "Basahin nang mabuti ang buong pahina. Tap Next kapag handa na.",
    choices: ["Nabasa ko na ang pahinang ito"],
    correctLetter: "A",
    verified: true,
  },
  {
    id: "rc-fil-page-264",
    subject: "Reading Comprehension Filipino",
    topic: "Reading Passage",
    sourcePage: 264,
    question: "Basahin nang mabuti ang buong pahina. Tap Next kapag handa na.",
    choices: ["Nabasa ko na ang pahinang ito"],
    correctLetter: "A",
    verified: true,
  },
  {
    id: "rc-fil-page-265",
    subject: "Reading Comprehension Filipino",
    topic: "Reading Passage",
    sourcePage: 265,
    question: "Basahin nang mabuti ang buong pahina. Tap Next kapag handa na.",
    choices: ["Nabasa ko na ang pahinang ito"],
    correctLetter: "A",
    verified: true,
  },
  {
    id: "rc-fil-page-266",
    subject: "Reading Comprehension Filipino",
    topic: "Reading Passage",
    sourcePage: 266,
    question: "Basahin nang mabuti ang buong pahina. Tap Next kapag handa na.",
    choices: ["Nabasa ko na ang pahinang ito"],
    correctLetter: "A",
    verified: true,
  },
  {
    id: "rc-fil-page-267",
    subject: "Reading Comprehension Filipino",
    topic: "Reading Passage",
    sourcePage: 267,
    question: "Basahin nang mabuti ang buong pahina. Tap Next kapag handa na.",
    choices: ["Nabasa ko na ang pahinang ito"],
    correctLetter: "A",
    verified: true,
  },
];



const rcFilipinoAdditionalAssessmentSet = [
  { id: "rc-fil-extra-1", subject: "Reading Comprehension Filipino", topic: "Assessment", sourcePage: 282, question: "Ayusin ang mga salita upang mabuo ang tamang pangungusap: nilalaman / kuwento / unawain / ang / ng", choices: ["3-1-2-4-5", "3-4-1-5-2", "3-4-5-2-1", "3-5-1-2-3"], correctLetter: "B", answer: "3-4-1-5-2", verified: true },
  { id: "rc-fil-extra-2", subject: "Reading Comprehension Filipino", topic: "Assessment", sourcePage: 282, question: "Ayusin ang mga salita upang mabuo ang tamang pangungusap: kabataan / ang / mahalagang / isang / ng / buhay / yugto", choices: ["2-1-3-4-6-7-5-8", "2-5-1-6-7-8-3-4", "2-5-6-1-4-7-3-8", "2-1-3-5-4-8-6-7"], correctLetter: "D", answer: "2-1-3-5-4-8-6-7", verified: true },
  { id: "rc-fil-extra-3", subject: "Reading Comprehension Filipino", topic: "Assessment", sourcePage: 282, question: "Ayusin ang mga salita upang mabuo ang tamang pangungusap: hinihintay / Vergel / ang / sino / mo / pa", choices: ["4-6-3-1-5-2", "4-6-2-3-1-5", "2-4-6-3-1-5", "2-4-3-1-5-6"], correctLetter: "A", answer: "4-6-3-1-5-2", verified: true },
  { id: "rc-fil-extra-4", subject: "Reading Comprehension Filipino", topic: "Assessment", sourcePage: 282, question: "Ayusin ang mga salita upang mabuo ang tamang pangungusap: Isang / ng / buhay / gulong / ay", choices: ["2-5-3-1-4", "2-5-3-4-1", "2-4-5-1-3", "2-3-5-1-4"], correctLetter: "D", answer: "2-3-5-1-4", verified: true },
  { id: "rc-fil-extra-5", subject: "Reading Comprehension Filipino", topic: "Assessment", sourcePage: 282, question: "Ayusin ang mga salita upang mabuo ang tamang pangungusap: mensahe / unawain / mong / tula / mabuti / ang / ng", choices: ["6-1-7-4-2-3-5", "2-3-5-6-1-7-4", "2-3-6-4-7-1-5", "6-4-2-3-7-5-1"], correctLetter: "B", answer: "2-3-5-6-1-7-4", verified: true },

  { id: "rc-fil-extra-6", subject: "Reading Comprehension Filipino", topic: "Assessment", sourcePage: 282, question: "Piliin ang pinakamalapit na kahulugan ng salitang manliligalig.", choices: ["mananakop", "mangungurakot", "mapagkalinga", "madamdamin"], correctLetter: "A", answer: "mananakop", verified: true },
  { id: "rc-fil-extra-7", subject: "Reading Comprehension Filipino", topic: "Assessment", sourcePage: 283, question: "Piliin ang pinakamalapit na kahulugan ng salitang tugatog.", choices: ["dulo", "rurok", "ilalim", "kapalaran"], correctLetter: "B", answer: "rurok", verified: true },
  { id: "rc-fil-extra-8", subject: "Reading Comprehension Filipino", topic: "Assessment", sourcePage: 283, question: "Piliin ang pinakamalapit na kahulugan ng salitang mayuming dalaga.", choices: ["mahinhin", "maganda", "madaldal", "malikot"], correctLetter: "A", answer: "mahinhin", verified: true },
  { id: "rc-fil-extra-9", subject: "Reading Comprehension Filipino", topic: "Assessment", sourcePage: 283, question: "Piliin ang pinakamalapit na kahulugan ng salitang alab ng puso.", choices: ["pighati", "sakit", "damdamin", "poot"], correctLetter: "C", answer: "damdamin", verified: true },
  { id: "rc-fil-extra-10", subject: "Reading Comprehension Filipino", topic: "Assessment", sourcePage: 283, question: "Sadyang mabilis lumipad ang iba't ibang alimuom sa kalsada. Ano ang kahulugan ng alimuom?", choices: ["tsismis", "agiw", "hangin", "kalat"], correctLetter: "A", answer: "tsismis", verified: true },

  { id: "rc-fil-extra-11", subject: "Reading Comprehension Filipino", topic: "Assessment", sourcePage: 283, question: "________ ni Nanay Lina ang mga pinamalengke dahil sa takot.", choices: ["Nabitawan", "Nabitiwan", "Nalaglag", "Nabuhos"], correctLetter: "B", answer: "Nabitiwan", verified: true },
  { id: "rc-fil-extra-12", subject: "Reading Comprehension Filipino", topic: "Assessment", sourcePage: 283, question: "Nakipagkwentuhan na naman _____ ang kasama mo _____ sa kabilang ibayo.", choices: ["raw, roon", "raw, doon", "daw, roon", "daw, doon"], correctLetter: "C", answer: "daw, roon", verified: true },
  { id: "rc-fil-extra-13", subject: "Reading Comprehension Filipino", topic: "Assessment", sourcePage: 283, question: "________ Bicol ang kasintahan ni Nora.", choices: ["Taga", "Tiga", "Mala", "Parang"], correctLetter: "A", answer: "Taga", verified: true },
  { id: "rc-fil-extra-14", subject: "Reading Comprehension Filipino", topic: "Assessment", sourcePage: 284, question: "Hindi mo maaaring hayaan na lamang iyon nang ________.", choices: ["basta-basta", "basta basta", "bastabasta", "bababsta basta"], correctLetter: "A", answer: "basta-basta", verified: true },
  { id: "rc-fil-extra-15", subject: "Reading Comprehension Filipino", topic: "Assessment", sourcePage: 284, question: "________ Andrea at Bea ay mayroong balak na umakyat ng Tagaytay.", choices: ["Si", "Sina", "Sila", "Kila"], correctLetter: "B", answer: "Sina", verified: true },
  { id: "rc-fil-extra-16", subject: "Reading Comprehension Filipino", topic: "Assessment", sourcePage: 284, question: "Hindi makatulog sa ibang bahay ang bisita dahil ________.", choices: ["namamahay", "kapitbahay", "binabahay", "bahay-bahayan"], correctLetter: "A", answer: "namamahay", verified: true },
  { id: "rc-fil-extra-17", subject: "Reading Comprehension Filipino", topic: "Assessment", sourcePage: 284, question: "________ siya ng kape araw-araw.", choices: ["Nag-inom", "Umiinom", "Ininom", "Iniinom"], correctLetter: "B", answer: "Umiinom", verified: true },
  { id: "rc-fil-extra-18", subject: "Reading Comprehension Filipino", topic: "Assessment", sourcePage: 284, question: "Kinuha ________ ang mga bato mula sa tabing dagat.", choices: ["nila", "sila", "kanila", "siya"], correctLetter: "A", answer: "nila", verified: true },
  { id: "rc-fil-extra-19", subject: "Reading Comprehension Filipino", topic: "Assessment", sourcePage: 284, question: "Manood tayo ________ telebisyon ________ malaman natin ang mga bagong balita.", choices: ["nang, ng", "ng, nang", "na, ng", "na, nang"], correctLetter: "B", answer: "ng, nang", verified: true },
  { id: "rc-fil-extra-20", subject: "Reading Comprehension Filipino", topic: "Assessment", sourcePage: 284, question: "Tumakbo ________ mabilis ang pusang hinahabol ________ aso.", choices: ["nang, ng", "ng, nang", "na, ng", "na, nang"], correctLetter: "A", answer: "nang, ng", verified: true },
];


const rcFilipinoAssessmentSet = [
  {
    id: "rc-fil-assess-1-1",
    subject: "Reading Comprehension Filipino",
    topic: "Assessment",
    sourcePage: 268,
    question: "Tungkol saan ang tulang ito?",
    choices: ["Ang kamatayan", "Mga hindi naresolbang krimen", "Iba't ibang mga saksi sa pagpatay", "Pighati ng mga nawalan ng mahal sa buhay"],
    correctLetter: "C",
    answer: "Iba't ibang mga saksi sa pagpatay",
    verified: true,
  },
  {
    id: "rc-fil-assess-1-2",
    subject: "Reading Comprehension Filipino",
    topic: "Assessment",
    sourcePage: 268,
    question: "Sa huling bahagi ng tula ay may nabanggit na “sila”, sino ang tinutukoy dito?",
    choices: ["Mga taong nakakita sa bangkay", "Mga pulis", "Ang mga may sala", "Ang mga nakatira sa ilog"],
    correctLetter: "A",
    answer: "Mga taong nakakita sa bangkay",
    verified: true,
  },
  {
    id: "rc-fil-assess-2-1",
    subject: "Reading Comprehension Filipino",
    topic: "Assessment",
    sourcePage: 270,
    question: "Ano ang pangunahing paksa ng artikulo?",
    choices: [
      "Ang mga bentaha at sakripisyong nakapaloob sa kontribusyon ng mga OFW sa bansa at sa kani-kanilang mga pamilya",
      "Mga dahilan kung bakit kailangan pang mangibang bansa ng karamihan sa mga Pilipino",
      "Ang pagtaas ng kontribusyon ng mga OFW sa bansa",
      "Ang mga benepisyong pang-ekonomiya ng mga pamilya ng OFW"
    ],
    correctLetter: "A",
    answer: "Ang mga bentaha at sakripisyong nakapaloob sa kontribusyon ng mga OFW sa bansa at sa kani-kanilang mga pamilya",
    verified: true,
  },
  {
    id: "rc-fil-assess-2-2",
    subject: "Reading Comprehension Filipino",
    topic: "Assessment",
    sourcePage: 270,
    question: "Alin sa mga sumusunod ang HINDI naglalahad ng totoong pahayag mula sa sanaysay?",
    choices: ["gastos sa edukasyon", "pangangailangang medikal", "pangangailangan sa bahay", "pambili ng pagkain"],
    correctLetter: "D",
    answer: "pambili ng pagkain",
    verified: true,
  },
  {
    id: "rc-fil-assess-2-3",
    subject: "Reading Comprehension Filipino",
    topic: "Assessment",
    sourcePage: 270,
    question: "Sa huling talata ay may nakapaloob na salitang “kahimat”. Ano ang kahulugan nito?",
    choices: ["bagaman", "ngunit", "sapagkat", "dahil"],
    correctLetter: "A",
    answer: "bagaman",
    verified: true,
  },
  {
    id: "rc-fil-assess-3-1",
    subject: "Reading Comprehension Filipino",
    topic: "Assessment",
    sourcePage: 271,
    question: "Ano ang pangunahing layunin ng sanaysay?",
    choices: [
      "Mabigyang ideya ang mga mambabasa sa pamamagitan ng paglalarawan ng Escolta noon at sa kasalukuyang ginagawa rito",
      "Ilahad ang mga kaganapang nagpakilala sa Escolta noong 1900’s",
      "Mahimok ang mga tao na pumunta sa Escolta",
      "Mailarawan ang mga mahahalagang pangyayari sa Escolta"
    ],
    correctLetter: "A",
    answer: "Mabigyang ideya ang mga mambabasa sa pamamagitan ng paglalarawan ng Escolta noon at sa kasalukuyang ginagawa rito",
    verified: true,
  },
  {
    id: "rc-fil-assess-3-2",
    subject: "Reading Comprehension Filipino",
    topic: "Assessment",
    sourcePage: 271,
    question: "Sa anong klaseng sanaysay ito kabilang?",
    choices: ["Naglalarawan", "Nagsasalaysay", "Nanghihikayat", "Naglalahad"],
    correctLetter: "A",
    answer: "Naglalarawan",
    verified: true,
  },
  {
    id: "rc-fil-assess-3-3",
    subject: "Reading Comprehension Filipino",
    topic: "Assessment",
    sourcePage: 271,
    question: "Ano ang salitang kasing kahulugan ng “pinasinayaan”?",
    choices: ["inimbitahan", "binuo", "inilathala", "itinalaga"],
    correctLetter: "D",
    answer: "itinalaga",
    verified: true,
  },
  {
    id: "rc-fil-assess-4-1",
    subject: "Reading Comprehension Filipino",
    topic: "Assessment",
    sourcePage: 273,
    question: "Ano ang damdamin na nais iparating ng akda?",
    choices: ["pagpapaalala", "pagkagalit", "panghihinayang", "pagsusumamo"],
    correctLetter: "A",
    answer: "pagpapaalala",
    verified: true,
  },
  {
    id: "rc-fil-assess-4-2",
    subject: "Reading Comprehension Filipino",
    topic: "Assessment",
    sourcePage: 273,
    question: "Ano ang kahulugan ng salitang “muog” sa ika-21 na bersikulo?",
    choices: ["bahay", "tanggulan", "poste", "estruktura"],
    correctLetter: "B",
    answer: "tanggulan",
    verified: true,
  },
  {
    id: "rc-fil-assess-5-1",
    subject: "Reading Comprehension Filipino",
    topic: "Assessment",
    sourcePage: 274,
    question: "Ano ang kahulugan ng salitang “nanatak” sa ika-pitong saknong?",
    choices: ["pumatak", "naipon", "tumagas", "nawala"],
    correctLetter: "A",
    answer: "pumatak",
    verified: true,
  },
  {
    id: "rc-fil-assess-5-2",
    subject: "Reading Comprehension Filipino",
    topic: "Assessment",
    sourcePage: 274,
    question: "Ano ang mensaheng nais iparating ng tula?",
    choices: [
      "Huwag agad magtiwala sa mga taong nasa paligid mo dahil hindi mo alam kung mabuti ba ang hangarin nila sa iyo.",
      "Maging matalino sa buhay at gawing aral ang minsang pagkakamali upang hindi na maulit at madapa ulit sa parehong dahilan at kapalpakan.",
      "Ang buhay ay proseso na dapat nating pag-aralan upang mapagtatagumpayan.",
      "Ang buhay ng tao ay nabubuo ng tama at mali, mabuti at masama."
    ],
    correctLetter: "B",
    answer: "Maging matalino sa buhay at gawing aral ang minsang pagkakamali upang hindi na maulit at madapa ulit sa parehong dahilan at kapalpakan.",
    verified: true,
  },
  {
    id: "rc-fil-assess-6-1",
    subject: "Reading Comprehension Filipino",
    topic: "Assessment",
    sourcePage: 275,
    question: "Ano ang nais ipahiwatig ng tono sa tula?",
    choices: [
      "Tanggap ni Rizal ang kamatayan",
      "Hindi nawawalan ng pag-asa si Rizal na siya ay makakalaya",
      "Nagsisimula pa lamang ang laban ni Rizal",
      "Hindi kayang ipagpalit ni Rizal ang buhay niya"
    ],
    correctLetter: "A",
    answer: "Tanggap ni Rizal ang kamatayan",
    verified: true,
  },
  {
    id: "rc-fil-assess-6-2",
    subject: "Reading Comprehension Filipino",
    topic: "Assessment",
    sourcePage: 275,
    question: "Ano ang nais ipahayag ng huling linya?",
    choices: ["Sa kamatayan din mauuwi ang lahat ng bagay", "Ang pagkamatay ay pahinga", "Ang kamatayan ay isang kaparusahan", "Kamatayan ang siyang kaparusahan"],
    correctLetter: "B",
    answer: "Ang pagkamatay ay pahinga",
    verified: true,
  },
  {
    id: "rc-fil-assess-7-1",
    subject: "Reading Comprehension Filipino",
    topic: "Assessment",
    sourcePage: 277,
    question: "Saan naging tagapamahala si Guillermo Tolentino?",
    choices: ["Regge Istituto di Belle Arti", "Sunday Times", "Paaralan ng Pinong Sining", "Katipunan"],
    correctLetter: "C",
    answer: "Paaralan ng Pinong Sining",
    verified: true,
  },
  {
    id: "rc-fil-assess-7-2",
    subject: "Reading Comprehension Filipino",
    topic: "Assessment",
    sourcePage: 278,
    question: "Si Guillermo Tolentino ay isang iskultor na sumusunod sa ______.",
    choices: ["Klasismo", "Realismo", "Imahismo", "Romantisismo"],
    correctLetter: "A",
    answer: "Klasismo",
    verified: true,
  },
  {
    id: "rc-fil-assess-7-3",
    subject: "Reading Comprehension Filipino",
    topic: "Assessment",
    sourcePage: 278,
    question: "Sa linya 39, sino ang tinutukoy na nagsabing “Masdan mo ang aking anyo. Ngayong nakita mo na ako, magagawa mo na ba ang aking rebulto?”",
    choices: ["Si Amang", "Si Rizal", "Si Bonifacio", "Si Hesus"],
    correctLetter: "D",
    answer: "Si Hesus",
    verified: true,
  },
  {
    id: "rc-fil-assess-8-1",
    subject: "Reading Comprehension Filipino",
    topic: "Assessment",
    sourcePage: 279,
    question: "Ang mga sumusunod ay kasingkahulugan ng salitang “pagkalugami” maliban sa:",
    choices: ["dalamhati", "pagkalugmok", "mabagot", "kalungkutan"],
    correctLetter: "C",
    answer: "mabagot",
    verified: true,
  },
  {
    id: "rc-fil-assess-8-2",
    subject: "Reading Comprehension Filipino",
    topic: "Assessment",
    sourcePage: 279,
    question: "Ang nabasang akda ay maaaring ihanay sa seleksyon na:",
    choices: ["naglalarawan", "nagsasalaysay", "nanghihikayat", "naglalahad"],
    correctLetter: "A",
    answer: "naglalarawan",
    verified: true,
  },
  {
    id: "rc-fil-assess-9-1",
    subject: "Reading Comprehension Filipino",
    topic: "Assessment",
    sourcePage: 280,
    question: "Sa unang klase ng talata kabilang ang seleksyon, may salungguhit ang salitang “nanangis” na ang ibig sabihin ay:",
    choices: ["nagdasal", "nagluksa", "nagdiwang", "nag-alay"],
    correctLetter: "B",
    answer: "nagluksa",
    verified: true,
  },
  {
    id: "rc-fil-assess-9-2",
    subject: "Reading Comprehension Filipino",
    topic: "Assessment",
    sourcePage: 280,
    question: "Sa anong klase ng talata kabilang ang seleksyon na nabasa?",
    choices: ["nangangatwiran", "naglalarawan", "nagsasalaysay", "nanghihikayat"],
    correctLetter: "C",
    answer: "nagsasalaysay",
    verified: true,
  },
  {
    id: "rc-fil-assess-9-3",
    subject: "Reading Comprehension Filipino",
    topic: "Assessment",
    sourcePage: 280,
    question: "Bakit inutusan ni Ester si Mordecai na tipunin ang mga Judio?",
    choices: ["para sumama sa kanya", "para ilayo siya", "para samahan siya", "para ipag-ayuno siya"],
    correctLetter: "D",
    answer: "para ipag-ayuno siya",
    verified: true,
  },
];


const rcEnglishPageStudySet = [
  {
    id: "rc-eng-page-242",
    subject: "Reading Comprehension English",
    topic: "Reading Passage",
    sourcePage: 242,
    question: "Read the full page carefully. Tap Next when ready.",
    choices: ["I have read this page"],
    correctLetter: "A",
    verified: true,
  },
  {
    id: "rc-eng-page-243",
    subject: "Reading Comprehension English",
    topic: "Reading Passage",
    sourcePage: 243,
    question: "Read the full page carefully. Tap Next when ready.",
    choices: ["I have read this page"],
    correctLetter: "A",
    verified: true,
  },
  {
    id: "rc-eng-page-244",
    subject: "Reading Comprehension English",
    topic: "Reading Passage",
    sourcePage: 244,
    question: "Read the full page carefully. Tap Next when ready.",
    choices: ["I have read this page"],
    correctLetter: "A",
    verified: true,
  },
  {
    id: "rc-eng-page-245",
    subject: "Reading Comprehension English",
    topic: "Reading Passage",
    sourcePage: 245,
    question: "Read the full page carefully. Tap Next when ready.",
    choices: ["I have read this page"],
    correctLetter: "A",
    verified: true,
  },
  {
    id: "rc-eng-page-246",
    subject: "Reading Comprehension English",
    topic: "Reading Passage",
    sourcePage: 246,
    question: "Read the full page carefully. Tap Next when ready.",
    choices: ["I have read this page"],
    correctLetter: "A",
    verified: true,
  },
  {
    id: "rc-eng-page-247",
    subject: "Reading Comprehension English",
    topic: "Reading Passage",
    sourcePage: 247,
    question: "Read the full page carefully. Tap Next when ready.",
    choices: ["I have read this page"],
    correctLetter: "A",
    verified: true,
  },
  {
    id: "rc-eng-page-248",
    subject: "Reading Comprehension English",
    topic: "Reading Passage",
    sourcePage: 248,
    question: "Read the full page carefully. Tap Next when ready.",
    choices: ["I have read this page"],
    correctLetter: "A",
    verified: true,
  },
  {
    id: "rc-eng-page-249",
    subject: "Reading Comprehension English",
    topic: "Reading Passage",
    sourcePage: 249,
    question: "Read the full page carefully. Tap Next when ready.",
    choices: ["I have read this page"],
    correctLetter: "A",
    verified: true,
  },
  {
    id: "rc-eng-page-250",
    subject: "Reading Comprehension English",
    topic: "Reading Passage",
    sourcePage: 250,
    question: "Read the full page carefully. Tap Next when ready.",
    choices: ["I have read this page"],
    correctLetter: "A",
    verified: true,
  },
  {
    id: "rc-eng-page-251",
    subject: "Reading Comprehension English",
    topic: "Reading Passage",
    sourcePage: 251,
    question: "Read the full page carefully. Tap Next when ready.",
    choices: ["I have read this page"],
    correctLetter: "A",
    verified: true,
  },
  {
    id: "rc-eng-page-252",
    subject: "Reading Comprehension English",
    topic: "Reading Passage",
    sourcePage: 252,
    question: "Read the full page carefully. Tap Next when ready.",
    choices: ["I have read this page"],
    correctLetter: "A",
    verified: true,
  },
  {
    id: "rc-eng-page-253",
    subject: "Reading Comprehension English",
    topic: "Reading Passage",
    sourcePage: 253,
    question: "Read the full page carefully. Tap Next when ready.",
    choices: ["I have read this page"],
    correctLetter: "A",
    verified: true,
  },
  {
    id: "rc-eng-page-254",
    subject: "Reading Comprehension English",
    topic: "Reading Passage",
    sourcePage: 254,
    question: "Read the full page carefully. Tap Next when ready.",
    choices: ["I have read this page"],
    correctLetter: "A",
    verified: true,
  },
];

const readingComprehensionSet: RawQuestion[] = [
  {
    id: "eng-read-255-1",
    subject: "Reading Comprehension English",
    topic: "Reading Comprehension",
    sourcePage: 255,
    passage: `Directions: Choose the letter of the word that would best complete the sentences.`,
    question: "Many people feel that neither party offers a ______ set of principles that they can agree with.",
    choices: [
      "Audible",
      "Acoustic",
      "Coherent",
      "Approximately"
    ],
    correctLetter: "C",
    explanation: "Coherent means logically connected and consistent."
  },
  {
    id: "eng-read-255-2",
    subject: "Reading Comprehension English",
    topic: "Reading Comprehension",
    sourcePage: 255,
    question: "Hours after returning to the hospital, his condition deteriorated ______.",
    choices: [
      "Intermittent",
      "Applicable",
      "Abruptly",
      "Approximately"
    ],
    correctLetter: "C",
    explanation: "Abruptly means suddenly."
  },
  {
    id: "eng-read-255-3",
    subject: "Reading Comprehension English",
    topic: "Reading Comprehension",
    sourcePage: 255,
    question: "The arrival hall was crowded and noisy, the air hot and ______.",
    choices: [
      "Coherent",
      "Cognitive",
      "Stale",
      "Applicable"
    ],
    correctLetter: "C",
    explanation: "Stale air is no longer fresh."
  },
  {
    id: "eng-read-255-4",
    subject: "Reading Comprehension English",
    topic: "Reading Comprehension",
    sourcePage: 255,
    passage: `Directions: Identify the meaning of the underlined idiomatic expressions using context clues.`,
    question: "The idiom 'under your belt' means:",
    choices: [
      "well-connected",
      "experienced or achieved",
      "manipulative",
      "financially stable"
    ],
    correctLetter: "B",
    explanation: "Under your belt means gained through experience."
  },
  {
    id: "eng-read-255-5",
    subject: "Reading Comprehension English",
    topic: "Reading Comprehension",
    sourcePage: 255,
    question: "To 'put your thinking caps on' means:",
    choices: [
      "panic",
      "think deeply",
      "relax",
      "meditate"
    ],
    correctLetter: "B",
    explanation: "The idiom means to think seriously and carefully."
  },
  {
    id: "eng-read-255-6",
    subject: "Reading Comprehension English",
    topic: "Reading Comprehension",
    sourcePage: 255,
    question: "Black gold refers to:",
    choices: [
      "illegal money",
      "camel",
      "sand",
      "oil"
    ],
    correctLetter: "D",
    explanation: "Black gold is a metaphor for petroleum."
  }
];


const filipinoSet1: CollegioPracticeQuestion[] = [
  {
    id: "fil-q001",
    subject: "Filipino",
    question: "1-2. (Nang, Ng) mapos ang labanan sa Maktan, nagapi _____ mga Pilipino ang mga Kastila.",
    choices: ["nang", "ng"],
    answer: "nang",
    explanation: "Tumutukoy sa pang-abay na pamanahon.",
    sourcePage: 240,
  },
  {
    id: "fil-q002",
    subject: "Filipino",
    question: "3-4. Ang hapii (nang, ng) kanyang sagot ay unti-unti _____ nawawala.",
    choices: ["nang", "ng"],
    answer: "ng",
    explanation: "Ginagamit bilang pantukoy/pang-angkop.",
    sourcePage: 240,
  },
  {
    id: "fil-q003",
    subject: "Filipino",
    question: "Unti-unti (nang, ng) humuhupa ang baha.",
    choices: ["nang", "ng"],
    answer: "nang",
    explanation: "Pang-abay na nagsasaad ng paraan/panahon.",
    sourcePage: 240,
  },
  {
    id: "fil-q004",
    subject: "Filipino",
    question: "Babalik (din, rin) ako bukas.",
    choices: ["din", "rin"],
    answer: "din",
    explanation: "Kasunod ng katinig kaya 'din'.",
    sourcePage: 240,
  },
  {
    id: "fil-q005",
    subject: "Filipino",
    question: "Huwag (daw, raw) tayo lalabas sa gabi.",
    choices: ["daw", "raw"],
    answer: "daw",
    explanation: "Kasunod ng katinig kaya 'daw'.",
    sourcePage: 240,
  },
  {
    id: "fil-q006",
    subject: "Filipino",
    question: "Isama mo (din, rin) ang iyong kapatid.",
    choices: ["din", "rin"],
    answer: "rin",
    explanation: "Kasunod ng patinig kaya 'rin'.",
    sourcePage: 240,
  },
  {
    id: "fil-q007",
    subject: "Filipino",
    question: "(May, Mayroon) dalang pansit ang itay.",
    choices: ["May", "Mayroon"],
    answer: "May",
    explanation: "Ginagamit bago ang pangngalan.",
    sourcePage: 240,
  },
  {
    id: "fil-q008",
    subject: "Filipino",
    question: "Alumpihit ang ina habang naghihintay.",
    choices: ["galit", "malungkot", "tuwang-tuwa", "di mapalagay"],
    answer: "di mapalagay",
    explanation: "Ang alumpihit ay hindi mapakali o di mapalagay.",
    sourcePage: 240,
  },
  {
    id: "fil-q009",
    subject: "Filipino",
    question: "Malapit na nilang malasap ang tagumpay.",
    choices: ["matikman", "makita", "malimutan", "maamoy"],
    answer: "matikman",
    explanation: "Malasap means matikman o maranasan.",
    sourcePage: 240,
  },
  {
    id: "fil-q010",
    subject: "Filipino",
    question: "Naunsyami ang plano ng barkada.",
    choices: ["natuloy", "nabigo", "naputol", "natupad"],
    answer: "nabigo",
    explanation: "Naunsyami means hindi natuloy o nabigo.",
    sourcePage: 240,
  },
  {
    id: "fil-q011",
    subject: "Filipino",
    question: "Isa palang tampalasan ang kanyang kasintahan.",
    choices: ["taksil", "mayaman", "tapat", "mahirap"],
    answer: "taksil",
    explanation: "Tampalasan means taksil o walang hiya.",
    sourcePage: 240,
  },
  {
    id: "fil-q012",
    subject: "Filipino",
    question: "Humingi ng palugit ang mga estudyante para sa proyekto.",
    choices: ["paumanhin", "dagdag na panahon", "dagdag na grado", "panuntunan"],
    answer: "dagdag na panahon",
    explanation: "Palugit means extension o dagdag na panahon.",
    sourcePage: 240,
  },
]

const readingComprehensionExtraSet = [
  { id: "read-p223-q001", subject: "Reading Comprehension English", topic: "Vocabulary", passage: `Directions: Choose the letter of the word that would best complete the sentences.`,
    question: "Many people feel that neither party offers a ______ set of principles that they can agree with.", answer: "Coherent", sourcePage: 236, verified: true },
  { id: "read-p223-q002", subject: "Reading Comprehension English", topic: "Vocabulary", question: "Hours after returning to the hospital, his condition deteriorated ______.", answer: "Abruptly", sourcePage: 236, verified: true },
  { id: "read-p223-q003", subject: "Reading Comprehension English", topic: "Vocabulary", question: "The arrival hall was crowded and noisy, the air hot and ______.", answer: "Stale", sourcePage: 236, verified: true },
  { id: "read-p223-q004", subject: "Reading Comprehension English", topic: "Idioms", question: "What does 'some work experience under your belt' mean?", answer: "have acquired experience or have satisfactorily achieved something", sourcePage: 236, verified: true },
  { id: "read-p223-q005", subject: "Reading Comprehension English", topic: "Idioms", question: "What does 'put your thinking caps on' mean?", answer: "to think with deep meditation", sourcePage: 236, verified: true },
  { id: "read-p223-q006", subject: "Reading Comprehension English", topic: "Idioms", question: "Black gold is primarily found in the Middle East.", answer: "oil", sourcePage: 236, verified: true },

  { id: "read-p224-q007", subject: "Reading Comprehension English", topic: "Supporting Detail", question: "Which statement best supports the clam chowder paragraph?", answer: "onions and bay leaves go well with clams", sourcePage: 237, verified: true },
  { id: "read-p224-q008", subject: "Reading Comprehension English", topic: "Supporting Detail", question: "Which statement best supports the Shakespeare paragraph?", answer: "people today are interested in Shakespeare's work because of the characters", sourcePage: 237, verified: true },
  { id: "read-p224-q009", subject: "Reading Comprehension English", topic: "Main Idea", question: "Which statement best reflects the critical reading paragraph?", answer: "critical reading requires thoughtful and careful attention", sourcePage: 237, verified: true },
  { id: "read-p224-q010", subject: "Reading Comprehension English", topic: "Supporting Detail", question: "Which statement best supports the toxic insecticides paragraph?", answer: "toxic insecticides such as DDT have not been banned throughout the world", sourcePage: 237, verified: true },

  { id: "read-p225-q011", subject: "Reading Comprehension English", topic: "Error Identification", question: "Choose the underlined portion with an error: The students have discovered that they can address issues more effectively through letter-writing campaigns and not through public demonstrations.", answer: "and not through", sourcePage: 238, verified: true },
  { id: "read-p225-q012", subject: "Reading Comprehension English", topic: "Error Identification", question: "Choose the underlined portion with an error: After hours of futile debate, the committee has decided to postpone further discussion of the resolution until their next meeting.", answer: "their", sourcePage: 238, verified: true },
  { id: "read-p225-q013", subject: "Reading Comprehension English", topic: "Error Identification", question: "Choose the underlined portion with an error: Development of new drugs often require years of testing and waiting for labeling approval from federal regulators.", answer: "require", sourcePage: 238, verified: true },

  { id: "read-p225-q014", subject: "Reading Comprehension English", topic: "Paragraph Order", question: "Choose the correct order of ideas to form a coherent paragraph about Career Service Eligibility.", answer: "DCBA", sourcePage: 238, verified: true },
  { id: "read-p226-q015", subject: "Reading Comprehension English", topic: "Paragraph Order", question: "Choose the correct order of ideas to form a coherent paragraph about the sand dollar.", answer: "BDCA", sourcePage: 239, verified: true },

  { id: "read-p229-q001", subject: "Reading Comprehension English", topic: "Analogy", question: "Board is to TRAIN as ______ is to HORSE.", answer: "mount", sourcePage: 242, verified: true },
  { id: "read-p229-q002", subject: "Reading Comprehension English", topic: "Analogy", question: "Feta is to GREEK as provolone is to ______.", answer: "Italian", sourcePage: 242, verified: true },
  { id: "read-p229-q003", subject: "Reading Comprehension English", topic: "Analogy", question: "Segregate is to UNIFY as repair is to ______.", answer: "damage", sourcePage: 242, verified: true },
  { id: "read-p229-q004", subject: "Reading Comprehension English", topic: "Analogy", question: "Argentina is to BRAZIL as ______ is to IRAN.", answer: "Iraq", sourcePage: 242, verified: true },
  { id: "read-p229-q005", subject: "Reading Comprehension English", topic: "Analogy", question: "Mouse is to ______ as flash is to CAMERA.", answer: "computer", sourcePage: 242, verified: true },
];

function toPractice(q: any): CollegioPracticeQuestion {
  const correctLetter = keys[q.id];

  return {
    id: q.id,
    subject: q.subject,
    topic: q.topic,
    question: q.question,
    passage: q.passage,
    answer:
      q.answer ??
      q.choices?.[
        ({ A: 0, B: 1, C: 2, D: 3, E: 4 } as Record<string, number>)[
          q.correctLetter
        ] ?? -1
      ] ??
      "",
    correctLetter,
    sourcePage: q.sourcePage,
    image: q.subject === "Abstract Reasoning" ? abstractImage(q) : pageImage(q.sourcePage),
    choices: q.choices || exactChoices[q.id] || choicesFor(correctLetter),
  };
}

export const collegioPracticeQuestions: CollegioPracticeQuestion[] = [
  ...scienceAssessmentReview,
  ...scienceAssessmentSet2,
  ...mathAssessmentReview,
  ...rcEnglishPageStudySet,
  ...rcFilipinoPageStudySet,
  ...rcFilipinoAssessmentSet,
  ...rcFilipinoAdditionalAssessmentSet,
  ...readingComprehensionSet,
  ...readingComprehensionExtraSet,
  ...filipinoSet1,
  ...languageAssessmentReview,
  ...abstractAssessmentReview,
].map(toPractice);
