import Link from "next/link";

export default function EmployeeNav() {
  return (
    <nav className="fixed bottom-0 w-full flex justify-around bg-gray-800 text-white p-2">
      <Link href="/employees/home">🏠 Home</Link>
      <Link href="/employees/schedule">🏠 Schedule</Link>
      <Link href="/employees/stats">📈 Pay History</Link>
      <Link href="/employees/help">❓ Request Time Off</Link>
    </nav>
  );
}
