'use client';

import { useState } from 'react';

export default function AddEmployeePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [hourlyRate, setHourlyRate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEmployee = {
      name,
      email,
      role,
      hourlyRate,
    };
    console.log("New employee added:", newEmployee);
    // TODO: Send this to backend later
  };

  return (
    <div className="p-6 max-w-md mx-auto text-white">
      <h1 className="text-2xl font-bold mb-4">Add New Employee</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 rounded bg-[#1a1a1a] border border-gray-600"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 rounded bg-[#1a1a1a] border border-gray-600"
        />
        <input
          type="text"
          placeholder="Role (e.g. Front Desk, Cleaner)"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full p-2 rounded bg-[#1a1a1a] border border-gray-600"
        />
        <input
          type="number"
          placeholder="Hourly Rate ($)"
          value={hourlyRate}
          onChange={(e) => setHourlyRate(e.target.value)}
          className="w-full p-2 rounded bg-[#1a1a1a] border border-gray-600"
        />
        <button
          type="submit"
          className="bg-blue-600 w-full py-2 rounded hover:bg-blue-700 transition"
        >
          Save Employee
        </button>
      </form>
    </div>
  );
}
