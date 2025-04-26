// src/app/context/TimerContext.tsx
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Status = "Clocked In" | "Clocked Out" | "On Break";

interface TimerContextType {
  status: Status;
  startTime: number | null;
  elapsed: number;
  isRunning: boolean;
  clockIn: () => void;
  clockOut: () => void;
  breakStart: () => void;
  pause: () => void;
  formatTime: (ms: number) => string;
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);

export const TimerProvider = ({ children }: { children: React.ReactNode }) => {
  const [status, setStatus] = useState<Status>("Clocked Out");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsed, setElapsed] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && startTime !== null) {
      interval = setInterval(() => {
        setElapsed(Date.now() - startTime);
      }, 10); // update every 10ms
    }
    return () => clearInterval(interval);
  }, [isRunning, startTime]);

  const clockIn = () => {
    if (status === "Clocked In") {
      // Already clocked in, do nothing
      return;
    }
  
    if (status === "On Break" && startTime === null) {
      // Coming back from break
      setStatus("Clocked In");
      setStartTime(Date.now() - elapsed);
      setIsRunning(true);
    } else {
      // Fresh clock in
      setStatus("Clocked In");
      setElapsed(0);
      setStartTime(Date.now());
      setIsRunning(true);
    }
  };
  

  const clockOut = () => {
    setStatus("Clocked Out");
    setIsRunning(false);
    setElapsed(0);
    setStartTime(null);
  };

  const breakStart = () => {
    if (isRunning && startTime !== null) {
      setStatus("On Break");
      setElapsed(Date.now() - startTime); // freeze current time
      setStartTime(null); // clear active timer
      setIsRunning(false); // stop ticking
    }
  };

  const pause = () => {
    if (isRunning && startTime !== null) {
      setElapsed(Date.now() - startTime);
      setStartTime(null);
      setIsRunning(false);
    }
  };

  const formatTime = (ms: number): string => {
    const h = Math.floor(ms / 3600000);
    const m = Math.floor((ms % 3600000) / 60000);
    const s = Math.floor((ms % 60000) / 1000);
    const millis = ms % 1000;

    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}.${millis.toString().padStart(3, "0")}`;
  };

  return (
    <TimerContext.Provider
      value={{
        status,
        startTime,
        elapsed,
        isRunning,
        clockIn,
        clockOut,
        breakStart,
        pause,
        formatTime,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error("useTimer must be used within TimerProvider");
  }
  return context;
};
