"use client";

import { useTimer } from "@/app/context/TimerContext";

export default function StatusBadge() {
  const { status } = useTimer();

  const getStatusColor = () => {
    if (status === "Clocked In") return "bg-[#44D481]"; // green
    if (status === "On Break") return "bg-[#F7A94A]";   // yellow
    return "bg-red-400";                                // red
  };

  return (
    <div className={`px-4 py-2 rounded-full shadow-lg text-white font-semibold min-w-[100px] sm:min-w-[140px] text-center text-sm sm:text-base ${getStatusColor()}`}>
      {status}
    </div>
  );
}
