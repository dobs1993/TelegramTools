import "../globals.css";
import AdminNav from "./dashboard/AdminNav";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white pb-20">
        <div className="min-h-screen">{children}</div>
        <AdminNav />
      </body>
    </html>
  );
}
