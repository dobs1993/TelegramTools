// src/app/layout.tsx

import "./globals.css";
import { Inter } from "next/font/google";
import { TimerProvider } from "./context/TimerContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Telegram Scheduler | Employee Manager [ www.telegramtools.com ]",
  description: "Telegram Scheduler",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}
      </body>
    </html>
  );
};

export default RootLayout;
