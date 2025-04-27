"use client";

import { useState } from "react";

const fakePayments = [
  { date: "2025-04-25", amount: 300, method: "E-Transfer" },
  { date: "2025-04-18", amount: 220, method: "PayPal" },
  { date: "2025-04-11", amount: 180, method: "E-Transfer" },
];

const PAY_RATE = 20; // $20/hour
const TOTAL_HOURS = 120;
const TOTAL_DUE = PAY_RATE * TOTAL_HOURS;

export default function PayHistoryPage() {
  const [payments, setPayments] = useState(fakePayments);
  const [methodFilter, setMethodFilter] = useState("All");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const filteredPayments = payments.filter((payment) => {
    const matchMethod = methodFilter === "All" || payment.method === methodFilter;
    const matchStart = startDate ? payment.date >= startDate : true;
    const matchEnd = endDate ? payment.date <= endDate : true;
    return matchMethod && matchStart && matchEnd;
  });

  const totalPaid = filteredPayments.reduce((sum, p) => sum + p.amount, 0);
  const totalOwed = TOTAL_DUE - totalPaid;

  const resetFilters = () => {
    setMethodFilter("All");
    setStartDate("");
    setEndDate("");
  };

  return (
    <div className="min-h-screen bg-[#1F1F1F] text-white p-6 space-y-10">
      {/* Top Summary */}
      <div className="bg-[#1A1A1A] p-6 rounded-xl shadow-md space-y-2 text-center">
        <h1 className="text-2xl font-bold">Pay Summary</h1>
        <p>Pay Rate: <span className="font-semibold">${PAY_RATE}/hour</span></p>
        <p>Hours Worked: <span className="font-semibold">{TOTAL_HOURS} hours</span></p>
        <p>Total Due: <span className="font-semibold">${TOTAL_DUE.toLocaleString()}</span></p>
        <p>Paid: <span className="font-semibold">${totalPaid.toLocaleString()}</span></p>
        <p>Still Owed: <span className="font-semibold text-red-500">${totalOwed.toLocaleString()}</span></p>
      </div>

      {/* Filters */}
      <div className="bg-[#1A1A1A] p-6 rounded-xl shadow-md space-y-4">
        <h2 className="text-xl font-bold">Filters</h2>
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <select
            className="bg-[#0D0D0D] p-2 rounded border border-gray-700"
            value={methodFilter}
            onChange={(e) => setMethodFilter(e.target.value)}
          >
            <option value="All">All Methods</option>
            <option value="E-Transfer">E-Transfer</option>
            <option value="PayPal">PayPal</option>
          </select>
          <input
            type="date"
            className="bg-[#0D0D0D] p-2 rounded border border-gray-700"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <input
            type="date"
            className="bg-[#0D0D0D] p-2 rounded border border-gray-700"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded font-bold"
            onClick={resetFilters}
          >
            Reset Filters
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#1A1A1A] p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold mb-4">Payment History</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-2 px-4">Date</th>
                <th className="text-left py-2 px-4">Amount</th>
                <th className="text-left py-2 px-4">Method</th>
              </tr>
            </thead>
            <tbody>
              {filteredPayments.map((payment, idx) => (
                <tr key={idx} className="border-b border-gray-800">
                  <td className="py-2 px-4">{payment.date}</td>
                  <td className="py-2 px-4">${payment.amount.toLocaleString()}</td>
                  <td className="py-2 px-4">{payment.method}</td>
                </tr>
              ))}
              {filteredPayments.length === 0 && (
                <tr>
                  <td colSpan={3} className="text-center py-6 text-gray-500">No payments found for selected filters.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
