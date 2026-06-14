import { ReactNode, useMemo, useState } from "react";

const MASTER_KEY = "astra2026";
const DEVICE_KEY = "astra_reviewer_device_id_v1";
const UNLOCK_KEY = "astra_reviewer_unlocked_device_v1";

let memoryDeviceId = "";
let memoryUnlockedDevice = "";

function safeGet(key: string) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSet(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    if (key === DEVICE_KEY) memoryDeviceId = value;
    if (key === UNLOCK_KEY) memoryUnlockedDevice = value;
  }
}

function makeDeviceId() {
  try {
    if (window.crypto && "randomUUID" in window.crypto) {
      return window.crypto.randomUUID();
    }
  } catch {
    // ignore
  }

  return `device_${Date.now()}_${Math.random().toString(36).slice(2)}`;
}

function getDeviceId() {
  const stored = safeGet(DEVICE_KEY) || memoryDeviceId;
  if (stored) return stored;

  const id = makeDeviceId();
  safeSet(DEVICE_KEY, id);
  return id;
}

export default function DeviceLockGate({ children }: { children: ReactNode }) {
  const deviceId = useMemo(() => getDeviceId(), []);

  const [key, setKey] = useState("");
  const [error, setError] = useState("");
  const [unlocked, setUnlocked] = useState(() => {
    const saved = safeGet(UNLOCK_KEY) || memoryUnlockedDevice;
    return saved === deviceId;
  });

  function unlock() {
    const entered = key.trim();

    if (entered !== MASTER_KEY) {
      setError("Invalid master key.");
      return;
    }

    safeSet(UNLOCK_KEY, deviceId);
    setUnlocked(true);
  }

  if (unlocked) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-5 shadow-2xl">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
            Astra Reviewer
          </p>
          <h1 className="text-3xl font-bold mt-2">Device Locked</h1>
          <p className="text-sm text-slate-400 mt-2">
            Enter the master key once. This app will unlock only on this device/browser.
          </p>
        </div>

        <input
          type="password"
          value={key}
          onChange={(e) => {
            setKey(e.target.value);
            setError("");
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") unlock();
          }}
          placeholder="Master key"
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400"
          autoFocus
        />

        {error && (
          <div className="rounded-xl border border-red-500/40 bg-red-950/40 p-3 text-sm text-red-200">
            {error}
          </div>
        )}

        <button
          onClick={unlock}
          className="w-full rounded-xl bg-cyan-400 text-slate-950 py-3 font-semibold"
        >
          Unlock Device
        </button>

        <div className="text-xs text-slate-500 break-all">
          Device ID: {deviceId}
        </div>
      </div>
    </div>
  );
}
