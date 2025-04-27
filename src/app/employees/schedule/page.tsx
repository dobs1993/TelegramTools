"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-[#1F1F1F] text-white p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6">🗓 Your Work Schedule</h1>

      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl text-black">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={[
            { title: "Work Shift", date: "2025-05-05" },
            { title: "Work Shift", date: "2025-05-06" },
          ]}
        />
      </div>
    </div>
  );
}
