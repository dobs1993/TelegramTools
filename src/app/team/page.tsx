import PlayerCard from "../components/PlayerCard";
import type { Rep } from "@/types";

export default function TeamPage() {
  const starters: Rep[] = [
    {
      name: "John Doe",
      team: "North Squad",
      photoUrl: "/john.jpg",
      matchup: "vs East Hustlers",
      stats: { doorsKnocked: 120, conversations: 40, sales: 10 },
      points: 67.5,
    },
    {
      name: "Jane Smith",
      team: "South Squad",
      photoUrl: "/jane.jpg",
      matchup: "vs West Wolves",
      stats: { doorsKnocked: 150, conversations: 50, sales: 15 },
      points: 84.3,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white p-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-xl font-semibold">Team ClinicCapp</h1>
          <p className="text-sm text-gray-400">Record: 0-0</p>
        </div>
        <button className="text-white text-lg">⚙️</button>
      </div>

      <h2 className="text-lg font-semibold mb-2">Starters</h2>

      <div className="space-y-3">
        {starters.map((rep, idx) => (
          <PlayerCard key={idx} rep={rep} />
        ))}
      </div>
    </div>
  );
}
