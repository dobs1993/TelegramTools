"use client";

import { useTimer } from "@/app/context/TimerContext";

export default function EmployeeHome() {
  const { status, elapsed, clockIn, clockOut, breakStart, formatTime } = useTimer();

  return (
    <div className="min-h-screen bg-[#1F1F1F] text-white flex flex-col justify-center items-center px-6 py-12 space-y-8">
      <h1 className="text-4xl font-bold mb-2">Welcome 👋</h1>

      <div className="text-sm text-gray-400 mb-2">
        Status:{" "}
        <span
          className={
            status === "Clocked In"
              ? "text-[#44D481] font-semibold"
              : status === "On Break"
              ? "text-[#F7A94A] font-semibold"
              : "text-red-400 font-semibold"
          }
        >
          {status}
        </span>
      </div>

      {(status === "Clocked In" || status === "On Break") && (
        <p className="text-xl font-mono text-[#44D481] mb-6">
          ⏱️ Time Worked: {formatTime(elapsed)}
        </p>
      )}


      <div className="flex flex-col w-full max-w-xs space-y-4">
        <button
          onClick={clockIn}
          className="w-full py-3 rounded-full bg-[#44D481] hover:bg-[#3bcf74] text-white font-bold text-lg transition-all shadow-md cursor-pointer"
        >
          Clock In
        </button>
        <button
          onClick={clockOut}
          className="w-full py-3 rounded-full bg-[#E84C4F] hover:bg-[#d34044] text-white font-bold text-lg transition-all shadow-md cursor-pointer"
        >
          Clock Out
        </button>
        <button
          onClick={status === "On Break" ? clockIn : breakStart}
          className="w-full py-3 rounded-full bg-[#F7A94A] hover:bg-[#f5a132] text-black font-bold text-lg transition-all shadow-md cursor-pointer"
        >
          {status === "On Break" ? "Resume" : "Break"}
        </button>
      </div>
    </div>
  );
}
