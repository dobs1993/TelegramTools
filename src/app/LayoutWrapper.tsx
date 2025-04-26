// src/components/LayoutWrapper.tsx

"use client";

import { usePathname } from "next/navigation";
import AdminNav from "./admin/dashboard/AdminNav";
import EmployeeNav from "./employees/EmployeeNav";
import FloatingTimer from "./components/FloatingTimer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isEmployee = pathname.startsWith("/employees");

  return (
    <>
      {children}
      {!isHome && (isEmployee ? <EmployeeNav /> : <AdminNav />)}
      {isEmployee && <FloatingTimer />}
    </>
  );
}
