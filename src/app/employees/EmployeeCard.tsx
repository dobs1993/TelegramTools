type Rep = {
  name: string;
  team: string;
  matchup: string;
  photoUrl: string;
};

export default function RepCard({ rep }: { rep: Rep }) {
  return (
    <div className="flex items-center gap-4 p-4 bg-[#1a1a1a] rounded shadow">
      <img
        src={rep.photoUrl}
        alt={rep.name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <h3 className="text-white font-semibold">{rep.name}</h3>
        <p className="text-gray-400 text-sm">{rep.team} • {rep.matchup}</p>
      </div>
    </div>
  );
}
