import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Upload,
  Folder,
  Share2,
  LogOut,
} from "lucide-react";

export default function Dashboard() {
  const [active, setActive] = useState("dashboard");
  const navigate = useNavigate();

  function handleLogout() {
    navigate("/");
  }

  return (
    <div className="min-h-screen flex bg-gray-900 text-white">

      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-6 hidden md:flex flex-col">

        <h1 className="text-2xl font-bold mb-10 text-white">
          FileFlux
        </h1>

        <nav className="flex flex-col gap-4 flex-1">

          <Link
            to="/dashboard"
            onClick={() => setActive("dashboard")}
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-700 transition"
          >
            <LayoutDashboard size={18} />
            Overview
          </Link>

          <Link
            to="/dashboard/upload"
            onClick={() => setActive("upload")}
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-700 transition"
          >
            <Upload size={18} />
            Upload
          </Link>

          <Link
            to="/dashboard/files"
            onClick={() => setActive("files")}
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-700 transition"
          >
            <Folder size={18} />
            My Files
          </Link>

          <Link
            to="/dashboard/shared"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-700 transition"
          >
            <Share2 size={18} />
            Shared
          </Link>

        </nav>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-600 transition text-red-400"
        >
          <LogOut size={18} />
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 bg-gray-900 overflow-y-auto">
        <Outlet />
      </main>

    </div>
  );
}