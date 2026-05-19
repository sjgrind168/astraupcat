import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard, CalendarDays, BookOpen, Target, Timer, FunctionSquare,
  Calculator, NotebookPen, BarChart3, Settings, GraduationCap, Database,
} from "lucide-react";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader, useSidebar,
} from "@/components/ui/sidebar";

const items = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Smart Study Plan", url: "/plan", icon: CalendarDays },
  { title: "Reviewer Library", url: "/reviewer", icon: BookOpen },
  { title: "Practice Mode", url: "/practice", icon: Target },
  { title: "Mock Exam", url: "/mock", icon: Timer },
  { title: "Formula Vault", url: "/formulas", icon: FunctionSquare },
  { title: "Calculator Center", url: "/calculator", icon: Calculator },
  { title: "Question Bank", url: "/question-bank", icon: Database },
  { title: "Mistake Book", url: "/mistakes", icon: NotebookPen },
  { title: "Progress Report", url: "/progress", icon: BarChart3 },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const { pathname } = useLocation();

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center gap-2 px-2 py-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-gold shadow-gold">
            <GraduationCap className="h-5 w-5 text-primary-foreground" />
          </div>
          {!collapsed && (
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-bold tracking-wide text-gradient-gold">ASTRA</span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Reviewer</span>
            </div>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map(item => {
                const active = item.url === "/" ? pathname === "/" : pathname.startsWith(item.url);
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={active}>
                      <NavLink to={item.url} className="flex items-center gap-2">
                        <item.icon className="h-4 w-4" />
                        {!collapsed && <span>{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
