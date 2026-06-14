import { ReactNode, useMemo, useState } from "react";

const MASTER_KEY_HASH = "8f14e45fceea167a5a36dedd4bea2543"; 
// TEMP MASTER KEY: astra2026
// Palitan natin later after gumana.

const DEVICE_KEY = "astra_reviewer_device_id_v1";
const UNLOCK_KEY = "astra_reviewer_unlocked_device_v1";

async function md5Like(input: string) {
  // lightweight browser-safe hash enough for private gate
  const data = new TextEncoder().encode(input);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function getDeviceId() {
  let id = localStorage.getItem(DEVICE_KEY);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(DEVICE_KEY, id);
  }
  return id;
}

export default function DeviceLockGate({ children }: { children: ReactNode }) {
  const deviceId = useMemo(() => getDeviceId(), []);
  const [key, setKey] = useState("");
  const [error, setError] = useState("");
  const [unlocked, setUnlocked] = useState(() => {
    return localStorage.getItem(UNLOCK_KEY) === deviceId;
  });

  async function unlock() {
    setError("");

    const entered = key.trim();
    const hash = await md5Like(entered);

    // astra2026 SHA-256
    const allowedHash =
      "4b9ffcf77c8c744fd5c92ad9049d3f5269c273db5623d4c497e16d1bbd29f388";

    if (hash !== allowedHash) {
      setError("Invalid master key.");
      return;
    }

    localStorage.setItem(UNLOCK_KEY, deviceId);
    setUnlocked(true);
  }

  if (unlocked) return <>{children}</>;

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl border bg-card p-6 space-y-5 shadow-xl">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-primary">
            Astra Reviewer
          </p>
          <h1 className="text-3xl font-bold mt-2">Device Locked</h1>
          <p className="text-sm text-muted-foreground mt-2">
            Enter the master key once. This app will unlock only on this device/browser.
          </p>
        </div>

        <input
          type="password"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") unlock();
          }}
          placeholder="Master key"
          className="w-full rounded-xl border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
          autoFocus
        />

        {error && (
          <div className="rounded-xl border border-red-500/40 bg-red-950/30 p-3 text-sm text-red-200">
            {error}
          </div>
        )}

        <button
          onClick={unlock}
          className="w-full rounded-xl bg-primary text-primary-foreground py-3 font-semibold"
        >
          Unlock Device
        </button>

        <div className="text-xs text-muted-foreground break-all">
          Device ID: {deviceId}
        </div>
      </div>
    </div>
  );
}
