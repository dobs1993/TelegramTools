"use client";

import { useTimer } from "../context/TimerContext"; // adjust if needed

export default function FloatingTimer() {
  const { status, elapsed, formatTime } = useTimer();

  if (status === "Clocked Out") return null; // hide only if Clocked Out

  return (
    <div className="fixed top-4 right-4 min-w-[150px] text-center bg-[#229ED9] text-white py-2 px-4 rounded-full shadow-lg z-50 font-bold font-mono">
      {formatTime(elapsed)}
    </div>
  );
}
