import { getSubscription, getTrialDaysRemaining } from "@/lib/subscription";

export default function PlanStatusBadge() {
  const subscription = getSubscription();
  const trialDaysLeft = getTrialDaysRemaining();

  const label =
    subscription === "premium"
      ? "Premium"
      : subscription === "trial"
        ? "Trial"
        : "Free Plan";

  return (
    <div className="ml-11 -mt-2 w-fit rounded-full border border-sidebar-border bg-sidebar-accent/50 px-3 py-1.5 shadow-sm">
      <div className="text-[11px] font-semibold leading-none text-sidebar-foreground">
        {label}
      </div>

      {subscription === "trial" && (
        <div className="mt-1 text-[10px] leading-none text-muted-foreground">
          {trialDaysLeft} day{trialDaysLeft === 1 ? "" : "s"} left
        </div>
      )}
    </div>
  );
}
