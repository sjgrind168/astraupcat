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
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/plan" element={<StudyPlan />} />
              <Route path="/reviewer" element={<Reviewer />} />
              <Route path="/practice" element={<Practice />} />
              <Route path="/mock" element={<MockExam />} />
              <Route path="/formulas" element={<FormulaVault />} />
              <Route path="/calculator" element={<CalculatorCenter />} />
              <Route path="/mistakes" element={<MistakeBook />} />
              <Route path="/question-bank" element={<QuestionBank />} />
              <Route path="/progress" element={<ProgressReport />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
