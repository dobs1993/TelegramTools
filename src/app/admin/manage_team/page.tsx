import Link from "next/link";

const reps = [
  { id: "1", name: "John Doe", team: "East Hustlers" },
  { id: "2", name: "Jane Smith", team: "West Wolves" },
];

export default function AdminTeamPage() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-bold text-white">Select a Rep</h1>
      {reps.map((rep) => (
        <Link key={rep.id} href={`/admin/team/${rep.id}`}>
          <div className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 cursor-pointer">
            <h3 className="text-lg font-semibold">{rep.name}</h3>
            <p className="text-sm text-gray-400">{rep.team}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
