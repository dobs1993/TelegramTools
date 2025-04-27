// src/app/employees/layout.tsx
"use client";

import FloatingTimer from "../components/FloatingTimer";
import EmployeeNav from "../employees/EmployeeNav";
import { TimerProvider } from "../context/TimerContext";
import { ActivityCheck } from "../components/ActivityCheck";
import { BackToLoginButton } from "../components/BackToLoginButton";



export default function EmployeeLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0D0D0D] text-white relative">
        <TimerProvider>
          <FloatingTimer />
          <ActivityCheck />
          <BackToLoginButton />
          <main className="p-2">{children}</main>
          <EmployeeNav />
        </TimerProvider>
      </body>
    </html>
  );
}

