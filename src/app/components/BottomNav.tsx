import Link from 'next/link';

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black text-white flex justify-around py-4 shadow-lg z-50">
      <Link href="/" className="text-sm">🏠 Home</Link>
      <Link href="/team" className="text-sm">👥 Team</Link>
      <Link href="/players" className="text-sm">🎾 Players</Link>
      <Link href="/league" className="text-sm">🏆 League</Link>
    </nav>
  );
}
