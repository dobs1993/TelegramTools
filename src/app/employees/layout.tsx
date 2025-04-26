// src/app/employees/layout.tsx
"use client";

import FloatingTimer from "../components/FloatingTimer";
import EmployeeNav from "../employees/EmployeeNav";
import { TimerProvider } from "../context/TimerContext";


export default function EmployeeLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0D0D0D] text-white relative">
        <TimerProvider>
          <FloatingTimer />
          <main className="p-6">{children}</main>
          <EmployeeNav />
        </TimerProvider>
      </body>
    </html>
  );
}

