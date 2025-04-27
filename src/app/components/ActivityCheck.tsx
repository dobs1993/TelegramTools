"use client";

import { useTimer } from "@/app/context/TimerContext";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

type ChallengeType = "math" | "alphabet" | "last-letter" | "email";

export function ActivityCheck() {
  const { status, clockOut } = useTimer();
  const [showPopup, setShowPopup] = useState(false);
  const [timedOut, setTimedOut] = useState(false);
  const [challengeType, setChallengeType] = useState<ChallengeType>("math");
  const [question, setQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const [responseTimeout, setResponseTimeout] = useState<NodeJS.Timeout | null>(null);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes
  const [originalTitle, setOriginalTitle] = useState("");

  const router = useRouter();
  const pathname = usePathname();

  const fakeEmail = "test@example.com"; // 🔥 Replace with real employee email later

  const getRandomInterval = () => {
    const min = 10 * 1000; // 10 sec for testing
    const max = 30 * 1000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const generateChallenge = () => {
    const types: ChallengeType[] = ["math", "alphabet", "last-letter", "email"];
    const randomType = types[Math.floor(Math.random() * types.length)];
    setChallengeType(randomType);

    if (randomType === "math") {
      const num1 = Math.floor(Math.random() * 20) + 1;
      const num2 = Math.floor(Math.random() * 20) + 1;
      setQuestion(`What is ${num1} + ${num2}?`);
      setCorrectAnswer((num1 + num2).toString());
    } else if (randomType === "alphabet") {
      const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const index = Math.floor(Math.random() * (alphabet.length - 2));
      setQuestion(`What letter comes after "${alphabet[index]}"?`);
      setCorrectAnswer(alphabet[index + 1]);
    } else if (randomType === "last-letter") {
      setQuestion("What is the last letter of the alphabet?");
      setCorrectAnswer("Z");
    } else if (randomType === "email") {
      setQuestion("What is your employee email?");
      setCorrectAnswer(fakeEmail);
    }
  };

  useEffect(() => {
    let activityTimer: NodeJS.Timeout;

    const startActivityTimer = () => {
      activityTimer = setTimeout(() => {
        generateChallenge();
        setShowPopup(true);
        setTimeLeft(120); // reset 2 min timer
        setOriginalTitle(document.title);
        document.title = "⚠️ Confirm you're here!";
        const audio = new Audio("/sounds/ping.mp3");
        audio.play().catch(() => {});

        const timeout = setTimeout(() => {
          clockOut();
          setShowPopup(false);
          setTimedOut(true);
          document.title = originalTitle;
        }, 2 * 60 * 1000);

        setResponseTimeout(timeout);
      }, getRandomInterval());
    };

    if (status === "Clocked In") {
      startActivityTimer();
    }

    return () => {
      clearTimeout(activityTimer);
      if (responseTimeout) clearTimeout(responseTimeout);
    };
  }, [status]);

  // Countdown logic
  useEffect(() => {
    if (showPopup) {
      const countdown = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(countdown);
            setTimedOut(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [showPopup]);

  // Watch for navigation
  useEffect(() => {
    if (timedOut) {
      setTimedOut(false);
      setShowPopup(false);
    }
  }, [pathname]);

  const handleAnswerSubmit = () => {
    if (responseTimeout) clearTimeout(responseTimeout);

    if (userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
      // Correct
      setShowPopup(false);
      setUserAnswer("");
      document.title = originalTitle;
    } else {
      // Wrong answer stays open
      setUserAnswer("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAnswerSubmit();
    }
  };

  if (timedOut) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
        <div className="bg-white text-black p-6 rounded-lg shadow-lg space-y-4 w-80 text-center">
          <h2 className="text-lg font-bold text-red-600">You've been clocked out due to inactivity.</h2>
          <p className="text-sm text-gray-500">Please stay active to remain clocked in.</p>
          <button
            onClick={() => {
              setTimedOut(false);
              router.push("/employees/home");
            }}
            className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition"
          >
            🔙 Return Home
          </button>
        </div>
      </div>
    );
  }

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white text-black p-6 rounded-lg shadow-lg space-y-4 w-80">
        <h2 className="text-lg font-bold text-center">Are you still working?</h2>
        <p className="text-md text-center">{question}</p>
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          onKeyDown={handleKeyPress}
          className="w-full border border-gray-300 rounded px-3 py-2 mt-2 text-black"
          placeholder="Enter your answer..."
        />
        <div className="flex justify-center">
          <button
            onClick={handleAnswerSubmit}
            className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full font-bold transition mt-4"
          >
            Submit
          </button>
        </div>
        <p className="text-xs text-gray-500 text-center">⏳ Time left: {timeLeft}s</p>
      </div>
    </div>
  );
}
