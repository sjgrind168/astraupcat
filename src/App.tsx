import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppProvider } from "@/lib/store";
import AppLayout from "@/components/AppLayout";
import Dashboard from "./pages/Dashboard";
import StudyPlan from "./pages/StudyPlan";
import Reviewer from "./pages/Reviewer";
import Practice from "./pages/Practice";
import MockExam from "./pages/MockExam";
import FormulaVault from "./pages/FormulaVault";
import CalculatorCenter from "./pages/CalculatorCenter";
import MistakeBook from "./pages/MistakeBook";
import QuestionBank from "./pages/QuestionBank";
import ProgressReport from "./pages/ProgressReport";
import Settings from "./pages/Settings";
import About from "./pages/About";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Onboarding from "./pages/Onboarding";

import NotFound from "./pages/NotFound.tsx";
import Upgrade from "./pages/Upgrade";
import PrivatePdfBrowser from "./pages/private/PrivatePdfBrowser";
import PrivateCollegio from "./pages/private/PrivateCollegio";
import ScienceReviewMode from "./pages/private/ScienceReviewMode";
import ConstructedReviewerLibrary from "./pages/private/ConstructedReviewerLibrary";
import SciencePracticeMode from "./pages/private/SciencePracticeMode";
import SciencePracticeExact from "./pages/private/SciencePracticeExact";
import CollegioPracticeMode from "./pages/private/CollegioPracticeMode";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/onboarding" element={<Onboarding />} />
            <Route element={<AppLayout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/plan" element={<StudyPlan />} />
              <Route path="/reviewer" element={<ConstructedReviewerLibrary />} />
<Route path="/science-practice" element={<SciencePracticeMode />} />
<Route path="/science-practice-exact" element={<SciencePracticeExact />} />
              <Route path="/practice" element={<CollegioPracticeMode />} />
              <Route path="/mock" element={<MockExam />} />
              <Route path="/formulas" element={<FormulaVault />} />
              <Route path="/calculator" element={<CalculatorCenter />} />
              <Route path="/mistakes" element={<MistakeBook />} />
              <Route path="/question-bank" element={<QuestionBank />} />
              <Route path="/progress" element={<ProgressReport />} />
              
<Route path="/about" element={<About />} />
<Route path="/terms" element={<Terms />} />
<Route path="/privacy" element={<Privacy />} />
<Route path="/private-pdf" element={<PrivatePdfBrowser />} />
<Route path="/private-collegio" element={<PrivateCollegio />} />
<Route path="/science-review" element={<ScienceReviewMode />} />

<Route path="/settings" element={<Settings />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          
<Route
path="/upgrade"
element={<Upgrade />}
/>

</Routes>

        </BrowserRouter>
      </AppProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
