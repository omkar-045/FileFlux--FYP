import { Link } from "react-router-dom";
import { Shield, UploadCloud, Users, Zap, ArrowRight } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden relative">
{/* Clean Background Effects */}
<div className="absolute inset-0 pointer-events-none">

  {/* Soft radial glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.18),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.18),transparent_45%)]"></div>

  {/* Animated blobs */}
  <div className="absolute -top-40 -right-40 w-[450px] h-[450px] bg-blue-500 rounded-full blur-3xl opacity-25 animate-blob"></div>
  <div className="absolute -bottom-40 -left-40 w-[450px] h-[450px] bg-purple-500 rounded-full blur-3xl opacity-25 animate-blob animation-delay-2000"></div>

</div>

      {/* Navbar */}
      <nav className="relative z-10 max-w-7xl mx-auto flex justify-between items-center px-6 py-6 backdrop-blur-md bg-white/5 border-b border-white/10">
        <h1 className="text-xl font-semibold tracking-wide flex items-center gap-2">
          <Shield className="text-blue-400" size={20} />
          FileFlux
        </h1>

        <div className="flex gap-4">
          <Link
            to="/signin"
            className="px-4 py-2 text-sm border border-white/20 rounded-lg hover:bg-white/10 transition"
          >
            Sign In
          </Link>

          <Link
            to="/dashboard"
            className="px-5 py-2 text-sm bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:scale-105 transition shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-20 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            Secure Cloud
            <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              File Management
            </span>
          </h1>

          <p className="text-gray-300 mt-5 text-base md:text-lg max-w-lg leading-relaxed">
            Upload, manage, and share your files with enterprise-level encryption.
            Built for speed, privacy, and complete control.
          </p>

          <div className="flex gap-4 mt-8">
            <Link
              to="/dashboard"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-base font-medium hover:scale-105 transition shadow-lg"
            >
              Start Now <ArrowRight size={16} />
            </Link>

            <Link
              to="/dashboard"
              className="px-6 py-3 border border-white/20 rounded-lg text-base hover:bg-white/10 transition"
            >
              Live Demo
            </Link>
          </div>

          <p className="text-gray-400 text-xs mt-6">
            Trusted secure storage for modern users.
          </p>
        </div>

        {/* Right Side Visual Mockup */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 blur-3xl opacity-20"></div>

          <div className="relative bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-2xl">

            <div className="flex justify-between mb-4">
              <div className="h-3 w-20 bg-gray-700 rounded"></div>
              <div className="h-3 w-12 bg-gray-700 rounded"></div>
            </div>

            <div className="space-y-3">
              <div className="h-3 bg-gray-700 rounded w-3/4"></div>
              <div className="h-3 bg-gray-700 rounded w-1/2"></div>
              <div className="h-16 bg-gray-700 rounded"></div>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-20">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">
            Powerful Features
          </h2>
          <p className="text-gray-400 mt-3 text-sm">
            Everything you need for secure file sharing.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">

          <InteractiveCard
            icon={<Shield size={30} />}
            title="End-to-End Encryption"
            desc="Maximum data protection."
          />

          <InteractiveCard
            icon={<UploadCloud size={30} />}
            title="Fast Upload"
            desc="Optimized cloud transfers."
          />

          <InteractiveCard
            icon={<Users size={30} />}
            title="Access Control"
            desc="Granular permissions."
          />

          <InteractiveCard
            icon={<Zap size={30} />}
            title="High Performance"
            desc="Reliable infrastructure."
          />

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative z-10 text-center py-16 border-t border-white/10">

        <h2 className="text-2xl font-semibold mb-5">
          Ready to Experience Secure Sharing?
        </h2>

        <Link
          to="/dashboard"
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-base font-medium hover:scale-105 transition shadow-lg"
        >
          Get Started
        </Link>

      </section>

      {/* Footer */}
      <footer className="relative z-10 text-center py-6 border-t border-white/10 text-gray-400 text-sm">
        © 2026 FileFlux — Secure File Sharing Platform
      </footer>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -40px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 8s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>

    </div>
  );
}

function InteractiveCard({ icon, title, desc }) {
  return (
    <div className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20">

      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-all duration-300"></div>

      <div className="relative z-10 text-center">

        <div className="mb-4 text-blue-400 flex justify-center group-hover:scale-110 transition">
          {icon}
        </div>

        <h3 className="font-medium text-base mb-2">
          {title}
        </h3>

        <p className="text-gray-400 text-xs leading-relaxed">
          {desc}
        </p>

      </div>
    </div>
  );
}