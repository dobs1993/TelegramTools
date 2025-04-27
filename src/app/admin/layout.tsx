import "../globals.css";
import AdminNav from "./dashboard/AdminNav";
import { BackToLoginButton } from "../components/BackToLoginButton";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white pb-20">
        <div className="min-h-screen">{children}</div>
        <BackToLoginButton />
        <AdminNav />
      </body>
    </html>
  );
}
