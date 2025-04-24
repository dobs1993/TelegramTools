// src/app/components/PlayerCard.tsx

export type Rep = {
    name: string;
    team: string;
    photoUrl: string;
    matchup: string;
    stats: {
      doorsKnocked: number;
      conversations: number;
      sales: number;
    };
    points: number;
  };
  
  export default function PlayerCard({ rep }: { rep: Rep }) {
    return (
      <div className="bg-[#1A1A1A] rounded-lg p-3 flex items-center gap-4">
        <img
          src={rep.photoUrl}
          alt={rep.name}
          className="w-12 h-12 rounded-full object-cover border border-gray-600"
        />
        <div className="flex-1 text-sm">
          <div className="text-white font-semibold">{rep.name}</div>
          <div className="text-gray-400">
            {rep.team} • {rep.matchup}
          </div>
          <div className="text-gray-400 text-xs mt-1">
            🚪 {rep.stats.doorsKnocked} &nbsp; 💬 {rep.stats.conversations} &nbsp; 💰 {rep.stats.sales}
          </div>
        </div>
        <div className="text-white font-bold text-sm">{rep.points.toFixed(1)}</div>
      </div>
    );
  }
  