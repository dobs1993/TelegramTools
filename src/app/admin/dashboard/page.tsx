import Link from "next/link";

type Rep = {
  id: string;
  name: string;
  team: string;
};

const reps: Rep[] = [
  { id: "1", name: "John Doe", team: "North Squad" },
  { id: "2", name: "Jane Smith", team: "South Squad" },
  { id: "3", name: "Olivia Johnson", team: "West Wolves" },
];

export default function AdminDashboard() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <ul className="space-y-2">
        {reps.map((rep) => (
          <li key={rep.id} className="p-4 border rounded-md shadow-sm bg-white text-black">
            <Link href={`/admin/team/${rep.id}`}>
              <div className="font-semibold">{rep.name}</div>
              <div className="text-sm text-gray-600">{rep.team}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
