import React, { useState } from "react";
import {
  uploadReceipt,
  queryInsights,
  getSummary,
  registerUser,
  loginUser,
} from "../api";

export default function ApiDemo() {
  const [file, setFile] = useState<File | null>(null);
  const [uploadResult, setUploadResult] = useState<any>(null);
  const [question, setQuestion] = useState("");
  const [insightResult, setInsightResult] = useState<any>(null);
  const [summary, setSummary] = useState<any>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authResult, setAuthResult] = useState<any>(null);

  return (
    <div
      style={{
        maxWidth: 500,
        margin: "2rem auto",
        padding: 24,
        background: "#fff",
        borderRadius: 12,
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        color: "#181C23",
        border: "1px solid #e5e7eb",
        fontFamily: "'Inter', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      <h2 style={{ fontWeight: 700, fontSize: 24, marginBottom: 16 }}>API Demo</h2>

      {/* Upload Receipt */}
      <div style={{ marginBottom: 24 }}>
        <h3 style={{ fontWeight: 600 }}>Upload Receipt</h3>
        <input type="file" onChange={e => setFile(e.target.files?.[0] || null)} style={{ marginRight: 8 }} />
        <button
          onClick={async () => file && setUploadResult(await uploadReceipt(file))}
          style={{
            background: "#5B8CFF",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            padding: "6px 16px",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          Upload
        </button>
        {uploadResult && <pre style={{ background: "#f3f4f6", padding: 8, borderRadius: 6, marginTop: 8 }}>{JSON.stringify(uploadResult, null, 2)}</pre>}
      </div>

      {/* Query Insights */}
      <div style={{ marginBottom: 24 }}>
        <h3 style={{ fontWeight: 600 }}>Ask a Question</h3>
        <input
          type="text"
          value={question}
          onChange={e => setQuestion(e.target.value)}
          placeholder="e.g. How much did I spend last month?"
          style={{ padding: 6, borderRadius: 6, border: "1px solid #e5e7eb", marginRight: 8 }}
        />
        <button
          onClick={async () => setInsightResult(await queryInsights(question))}
          style={{
            background: "#5B8CFF",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            padding: "6px 16px",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          Ask
        </button>
        {insightResult && <pre style={{ background: "#f3f4f6", padding: 8, borderRadius: 6, marginTop: 8 }}>{JSON.stringify(insightResult, null, 2)}</pre>}
      </div>

      {/* Get Summary */}
      <div style={{ marginBottom: 24 }}>
        <h3 style={{ fontWeight: 600 }}>Get Summary</h3>
        <button
          onClick={async () => setSummary(await getSummary())}
          style={{
            background: "#5B8CFF",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            padding: "6px 16px",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          Get Summary
        </button>
        {summary && <pre style={{ background: "#f3f4f6", padding: 8, borderRadius: 6, marginTop: 8 }}>{JSON.stringify(summary, null, 2)}</pre>}
      </div>

      {/* Register/Login */}
      <div style={{ marginBottom: 24 }}>
        <h3 style={{ fontWeight: 600 }}>Register / Login</h3>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Username"
          style={{ padding: 6, borderRadius: 6, border: "1px solid #e5e7eb", marginRight: 8 }}
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          style={{ padding: 6, borderRadius: 6, border: "1px solid #e5e7eb", marginRight: 8 }}
        />
        <button
          onClick={async () => setAuthResult(await registerUser(username, password))}
          style={{
            background: "#2ED47A",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            padding: "6px 16px",
            fontWeight: 500,
            cursor: "pointer",
            marginRight: 8,
          }}
        >
          Register
        </button>
        <button
          onClick={async () => setAuthResult(await loginUser(username, password))}
          style={{
            background: "#FFD600",
            color: "#181C23",
            border: "none",
            borderRadius: 6,
            padding: "6px 16px",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          Login
        </button>
        {authResult && <pre style={{ background: "#f3f4f6", padding: 8, borderRadius: 6, marginTop: 8 }}>{JSON.stringify(authResult, null, 2)}</pre>}
      </div>
    </div>
  );
} 