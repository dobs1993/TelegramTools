"use client";

import { useState } from "react";

export default function RequestTimeOff() {
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [reason, setReason] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 🔥 In future: send to backend or save somewhere admins can see
    console.log({ date, startTime, endTime, reason });

    setSubmitted(true);

    // Reset form
    setDate("");
    setStartTime("");
    setEndTime("");
    setReason("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1F1F1F] text-white p-6">
      <h1 className="text-2xl font-bold mb-6">Request Time Off</h1>

      <form onSubmit={handleSubmit} className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg space-y-4 w-full max-w-md">
        <div>
          <label className="block text-sm mb-1">Date *</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="w-full p-2 rounded bg-[#2a2a2a] text-white border border-gray-600"
          />
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block text-sm mb-1">Start Time</label>
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-full p-2 rounded bg-[#2a2a2a] text-white border border-gray-600"
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm mb-1">End Time</label>
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="w-full p-2 rounded bg-[#2a2a2a] text-white border border-gray-600"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1">Reason (Optional)</label>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            rows={3}
            className="w-full p-2 rounded bg-[#2a2a2a] text-white border border-gray-600"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-green-500 hover:bg-green-600 text-white rounded-full font-bold transition"
        >
          Submit Request
        </button>

        {submitted && (
          <div className="text-green-400 text-sm text-center mt-2">
            Your request has been submitted.
          </div>
        )}
      </form>
    </div>
  );
}
