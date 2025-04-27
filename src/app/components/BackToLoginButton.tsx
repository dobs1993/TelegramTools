"use client";

import { useRouter } from "next/navigation";

export function BackToLoginButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div className="fixed top-4 left-4 z-50">
      <button
        onClick={handleClick}
        className="bg-[#0DB0DD] text-white font-bold py-2 px-4 rounded-full shadow-lg hover:bg-[#0CA3CB] transition cursor-pointer"
      >
        ← Login Page 
      </button>
    </div>
  );
}
