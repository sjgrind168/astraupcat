// TEMP DEV MODE:
// premium access forced ON during content/QA phase
// restore real entitlement checks before production launch

export type SubscriptionType = "free" | "trial" | "premium";

export function getSubscription(): SubscriptionType {
  return "premium";
}

export function getTrialDaysRemaining(): number {
  return 999;
}

export function activateTrial(): boolean {
  return true;
}

export function hasUsedTrial(): boolean {
  return false;
}
