import { getSubscription } from "./subscription";

// TEMP DEV MODE:
// premium access forced ON during content/QA phase
// restore real entitlement checks before production launch

export function hasPremiumAccess() {
  return true;
}

export function hasReviewerAccess() {
  return true;
}

export function hasMockExamAccess() {
  return true;
}

export function hasAnalyticsAccess() {
  return true;
}

export function hasCalculatorAccess() {
  return true;
}

export function hasUnlimitedAccess() {
  return true;
}

export function getReviewerLimit() {
  return 999999;
}

export function getQuestionLimit() {
  return 999999;
}

export function getMockExamLimit() {
  return 999999;
}

export function getDailyQuestionLimit() {
  return 999999;
}

export function isLockedFeature() {
  return false;
}

export function shouldShowUpgrade() {
  return false;
}

export function canAccessPremiumContent() {
  return true;
}

export function canUseTrial() {
  return true;
}

export function getCurrentSubscription() {
  return getSubscription();
}

export function canAccessFeature() {
  return true;
}

export function canAccessSubject() {
  return true;
}

export function canAccessMockExam() {
  return true;
}

export function canAccessAnalytics() {
  return true;
}

export function canAccessReviewer() {
  return true;
}

export function canAccessCalculator() {
  return true;
}

export function canAccess() {
  return true;
}

export function canAccessFeatureGate() {
  return true;
}

export function canAccessPage() {
  return true;
}

export function canAccessPremium() {
  return true;
}

export function canAccessPractice() {
  return true;
}

export function canAccessMock() {
  return true;
}

export function canAccessEverything() {
  return true;
}
