import Link from "next/link";

export default function AdminNav() {
  return (
    <nav className="fixed bottom-0 w-full flex justify-around bg-gray-900 text-white p-2">
      <Link href="/admin/dashboard">📊 Dashboard</Link>
      <Link href="/admin/team">🧑‍🤝‍🧑 Employees</Link>
      <Link href="/admin/settings">⚙️ Settings</Link>
    </nav>
  );
}
