// src/components/BackToLoginButton.tsx
"use client";

import { useRouter } from "next/navigation";

export default function BackToLoginButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/")}
      className="text-sm text-blue-400 underline hover:text-blue-300 mt-4"
    >
      ← Back to Login
    </button>
  );
}
