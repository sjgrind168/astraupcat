import { Link, Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { useApp } from "@/lib/store";
import { Onboarding } from "./Onboarding";
import AdContainer from "./AdContainer";

export default function AppLayout() {
  const { state } = useApp();
if (!state.profile) {
    return <Onboarding />;
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-14 flex items-center justify-between border-b border-border bg-card/50 backdrop-blur px-4 sticky top-0 z-30">

<div className="flex items-center gap-3">

<SidebarTrigger />

<div className="flex flex-col">

<span className="text-sm font-semibold">
Astra Reviewer
</span>

<span className="text-[11px] text-muted-foreground">
Welcome back, {state.profile?.name || "student"}.
</span>
</div>

</div>

<div className="flex items-center gap-3">

{subscription !== "premium" && (
<Link
to="/upgrade"
className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
>
Upgrade
</Link>
)}

</div>

</header>
          <main className="flex-1 overflow-auto">
            <div className="container max-w-6xl py-6 md:py-8 animate-fade-in">
              <>
<Outlet />
<AdContainer />
</>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
