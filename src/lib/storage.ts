import { AppState, AttemptRecord, MockExamResult, StudyTask, UserProfile } from "./types";

const KEY = "astra-reviewer-state-v1";

const initial: AppState = {
  profile: null,
  attempts: [],
  mocks: [],
  plan: [],
  streak:{
current:0,
longest:0,
lastStudyDate:null,
activityDates:[]
},
  settings: { calculatorMode: "scientific" },
};

export function loadState(): AppState {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return initial;
    return { ...initial, ...JSON.parse(raw) };
  } catch {
    return initial;
  }
}

export function saveState(s: AppState) {
  localStorage.setItem(KEY, JSON.stringify(s));
}

export function resetState() {
  localStorage.removeItem(KEY);
}

export function addAttempt(state: AppState, a: AttemptRecord): AppState {
  return { ...state, attempts: [a, ...state.attempts].slice(0, 5000) };
}

export function addMock(state: AppState, m: MockExamResult): AppState {
  return { ...state, mocks: [m, ...state.mocks] };
}

export function setProfile(state: AppState, p: UserProfile): AppState {
  return { ...state, profile: p };
}

export function setPlan(state: AppState, plan: StudyTask[]): AppState {
  return { ...state, plan };
}

export function bumpStreak(state: AppState): AppState {

const today=new Date()
.toISOString()
.slice(0,10)

if(
state.streak.lastStudyDate===today
)return state

const yest=new Date(
Date.now()-86400000
).toISOString().slice(0,10)

const current=
state.streak.lastStudyDate===yest
?state.streak.current+1
:1

const longest=Math.max(
current,
state.streak.longest||0
)

const activityDates=[
...(state.streak.activityDates||[])
.filter(
d=>d!==today
),
today
].slice(-365)

return{

...state,

streak:{
current,
longest,
lastStudyDate:today,
activityDates
}

}

}
