"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isAdmin) {
      router.push("/admin/dashboard");
    } else {
      router.push("/employees/home");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#229ED9] text-white">
      <div className="bg-[#1a1a1a] p-8 rounded-xl shadow-lg w-full max-w-sm space-y-6">
        <h1 className="text-2xl font-semibold text-center">
          {isAdmin ? "Admin Login" : "Employee Login"}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 rounded bg-[#0D0D0D] border border-gray-600 text-white"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded bg-[#0D0D0D] border border-gray-600 text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded font-bold text-white transition cursor-pointer"
          >
            {isAdmin ? "Login as Admin" : "Login as Employee"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-400">
          {isAdmin ? "Not an admin?" : "Are you an admin?"}{" "}
          <button
            type="button"
            onClick={() => setIsAdmin(!isAdmin)}
            className="text-blue-400 underline hover:text-blue-300 cursor-pointer"
          >
            Switch to {isAdmin ? "Employee" : "Admin"}
          </button>
        </p>
      </div>
    </div>
  );
}
