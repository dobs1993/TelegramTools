"use client";

import { useTimer } from "@/app/context/TimerContext";

export default function FloatingTimer() {
  const { status, elapsed } = useTimer();

  const formatTime = (elapsedMs: number) => {
    const totalSeconds = Math.floor(elapsedMs / 1000);
    const milliseconds = elapsedMs % 1000;
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (n: number, z = 2) => n.toString().padStart(z, "0");
    const padMs = (n: number) => n.toString().padStart(3, "0");

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${padMs(milliseconds)}`;
  };

  const getStatusColor = () => {
    if (status === "Clocked In") return "bg-[#44D481]";
    if (status === "On Break") return "bg-[#F7A94A]";
    return "bg-[#E84C4F]";
  };

  return (
    <div className="fixed top-4 right-4 flex flex-col items-end space-y-2 z-50 sm:top-9 sm:right-14">

      <div className="px-3 md:px-5 py-2 rounded-full bg-[#28A8E0] text-white font-bold shadow-lg min-w-[110px] md:min-w-[140px] text-center text-xs md:text-sm">
        {formatTime(elapsed)}
      </div>
      <div className={`px-3 md:px-5 py-2 rounded-full ${getStatusColor()} text-white font-bold shadow-lg min-w-[110px] md:min-w-[140px] text-center text-xs md:text-sm`}>
        {status}
      </div>
    </div>
  );
}
