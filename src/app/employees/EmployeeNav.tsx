"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function EmployeeNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[#0D0D0D] rounded-full flex justify-center items-center gap-7 px-10 py-4 shadow-lg z-50">
      <Link
        href="/employees/home"
        className={`flex flex-col items-center text-white hover:text-[#44D481] transition-all text-xs ${
          pathname === "/employees/home" ? "text-[#44D481]" : ""
        }`}
      >
        <span className="text-lg">🏠</span>
        <span className="text-[11px]">Home</span>
      </Link>
      <Link
        href="/employees/schedule"
        className={`flex flex-col items-center text-white hover:text-[#44D481] transition-all text-xs ${
          pathname === "/employees/schedule" ? "text-[#44D481]" : ""
        }`}
      >
        <span className="text-lg">🗓️</span>
        <span className="text-[11px]">Schedule</span>
      </Link>
      <Link
        href="/employees/pay-history"
        className={`flex flex-col items-center text-white hover:text-[#44D481] transition-all text-xs ${
          pathname === "/employees/pay-history" ? "text-[#44D481]" : ""
        }`}
      >
        <span className="text-lg">📄</span>
        <span className="text-[11px]">Pay History</span>
      </Link>
      <Link
        href="/employees/request-time-off"
        className={`flex flex-col items-center text-white hover:text-[#44D481] transition-all text-xs ${
          pathname === "/employees/request-time-off" ? "text-[#44D481]" : ""
        }`}
      >
        <span className="text-lg">❓</span>
        <span className="text-[11px]">Time Off</span>
      </Link>
    </nav>
  );
}
