"use client";

import { useParams } from "next/navigation";

export default function RepDashboard() {
  const { repId } = useParams();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Rep Stats for ID: {repId}</h1>
      {/* Add dummy data or loading message until you fetch real data */}
      <p>More stats will show up here once connected to data source.</p>
    </div>
  );
}
