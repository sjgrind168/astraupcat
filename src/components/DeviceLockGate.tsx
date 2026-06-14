import { ReactNode, useState } from "react";

const MASTER_KEY = "astra2026";
const DEVICE_KEY = "astra_reviewer_device_id_v1";
const UNLOCK_KEY = "astra_reviewer_unlocked_device_v1";

function storageGet(key: string) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function storageSet(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // fail closed
  }
}

function getOrCreateDeviceId() {
  let id = storageGet(DEVICE_KEY);

  if (!id) {
    id = `device_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    storageSet(DEVICE_KEY, id);
  }

  return id;
}

export default function DeviceLockGate({ children }: { children: ReactNode }) {
  const deviceId = getOrCreateDeviceId();

  const [key, setKey] = useState("");
  const [error, setError] = useState("");
  const [unlocked, setUnlocked] = useState(() => {
    return storageGet(UNLOCK_KEY) === deviceId;
  });

  function handleUnlock() {
    if (key.trim() !== MASTER_KEY) {
      setError("Invalid master key.");
      return;
    }

    storageSet(UNLOCK_KEY, deviceId);
    setUnlocked(true);
  }

  if (unlocked) return <>{children}</>;

  return (
    <div style={{
      minHeight: "100vh",
      background: "#020617",
      color: "#e5e7eb",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24
    }}>
      <div style={{
        width: "100%",
        maxWidth: 420,
        border: "1px solid #1e293b",
        background: "#0f172a",
        borderRadius: 20,
        padding: 24
      }}>
        <div style={{
          fontSize: 12,
          letterSpacing: 4,
          color: "#67e8f9",
          textTransform: "uppercase"
        }}>
          Astra Reviewer
        </div>

        <h1 style={{ fontSize: 30, marginTop: 12, marginBottom: 8 }}>
          Device Locked
        </h1>

        <p style={{ color: "#94a3b8", fontSize: 14 }}>
          Enter the master key once. This app will unlock only on this device/browser.
        </p>

        <input
          type="password"
          value={key}
          onChange={(e) => {
            setKey(e.target.value);
            setError("");
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleUnlock();
          }}
          placeholder="Master key"
          autoFocus
          style={{
            width: "100%",
            marginTop: 18,
            padding: 14,
            borderRadius: 12,
            border: "1px solid #334155",
            background: "#020617",
            color: "#e5e7eb"
          }}
        />

        {error && (
          <div style={{
            marginTop: 12,
            padding: 12,
            borderRadius: 12,
            border: "1px solid #ef4444",
            color: "#fecaca",
            background: "#450a0a"
          }}>
            {error}
          </div>
        )}

        <button
          onClick={handleUnlock}
          style={{
            width: "100%",
            marginTop: 16,
            padding: 14,
            borderRadius: 12,
            border: "none",
            background: "#22d3ee",
            color: "#020617",
            fontWeight: 700
          }}
        >
          Unlock Device
        </button>

        <div style={{
          marginTop: 14,
          fontSize: 11,
          color: "#64748b",
          wordBreak: "break-all"
        }}>
          Device ID: {deviceId}
        </div>
      </div>
    </div>
  );
}
