"use client";

import { useState } from "react";

const fakeEmployees = [
  { name: "John Doe", email: "john@example.com", payRate: 20, hoursWorked: 120, status: "Clocked In" },
  { name: "Sarah Smith", email: "sarah@example.com", payRate: 22, hoursWorked: 80, status: "Clocked Out" },
  { name: "Mike Johnson", email: "mike@example.com", payRate: 25, hoursWorked: 95, status: "On Break" },
];

export default function AdminEmployeesPage() {
  const [employees] = useState(fakeEmployees);

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white p-6 space-y-10">
      <div className="bg-[#1A1A1A] p-6 rounded-xl shadow-md space-y-4">
        <h1 className="text-2xl font-bold text-center">Employees</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto mt-6 text-center">
            <thead>
              <tr className="text-gray-400 text-sm uppercase border-b border-gray-700">
                <th className="py-3">Name</th>
                <th className="py-3">Email</th>
                <th className="py-3">Pay Rate</th>
                <th className="py-3">Hours Worked</th>
                <th className="py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp, idx) => (
                <tr key={idx} className="border-b border-gray-800 hover:bg-gray-800 transition">
                  <td className="py-4">{emp.name}</td>
                  <td className="py-4">{emp.email}</td>
                  <td className="py-4">${emp.payRate}/hour</td>
                  <td className="py-4">{emp.hoursWorked} hours</td>
                  <td className="py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        emp.status === "Clocked In"
                          ? "bg-green-600"
                          : emp.status === "On Break"
                          ? "bg-yellow-500"
                          : "bg-red-600"
                      }`}
                    >
                      {emp.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
