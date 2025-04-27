"use client";

import { useState } from "react";

const fakeEmployees = [
  {
    name: "John Doe",
    status: "Clocked In",
    hoursWorked: 120,
    amountOwed: 1700,
  },
  {
    name: "Sarah Smith",
    status: "Clocked Out",
    hoursWorked: 80,
    amountOwed: 900,
  },
  {
    name: "Mike Johnson",
    status: "On Break",
    hoursWorked: 95,
    amountOwed: 1300,
  },
];

export default function AdminDashboard() {
  const [employees, setEmployees] = useState(fakeEmployees);

  const getStatusColor = (status: string) => {
    if (status === "Clocked In") return "bg-green-500";
    if (status === "On Break") return "bg-yellow-400";
    return "bg-red-500"; // Clocked Out
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white p-6 space-y-8">
      <div className="flex items-center justify-center mt-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {employees.map((emp, idx) => (
          <div
            key={idx}
            className="bg-[#1A1A1A] rounded-lg p-6 shadow-md flex flex-col space-y-3"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">{emp.name}</h2>
              <span
                className={`px-3 py-1 text-xs rounded-full font-bold ${getStatusColor(
                  emp.status
                )}`}
              >
                {emp.status}
              </span>
            </div>
            <div className="text-sm text-gray-300">
              <p>Hours Worked: <span className="text-white">{emp.hoursWorked}</span></p>
              <p>Amount Owed: <span className="text-red-400">${emp.amountOwed}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
