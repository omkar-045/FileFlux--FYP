import { useNavigate } from "react-router-dom";
import { Shield } from "lucide-react";

export default function SignIn() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">

      {/* Left Section */}
      <div className="hidden md:flex w-1/2 relative items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 opacity-80"></div>
        <div className="relative z-10 p-14 text-white text-center">
          <Shield size={60} className="mx-auto mb-6 text-white" />
          <h1 className="text-4xl font-bold mb-4">
            Welcome to FileFlux
          </h1>
          <p className="text-lg opacity-90 max-w-sm">
            Securely upload, manage and share your files with encryption and controlled access.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex w-full md:w-1/2 items-center justify-center px-6">
        <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-2xl shadow-2xl">

          <h2 className="text-3xl font-bold mb-8 text-center">
            Sign In
          </h2>

          <input
            type="email"
            placeholder="Email address"
            className="w-full mb-5 px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-300"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-6 px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-300"
          />

         <button
  onClick={() => navigate("/dashboard")}
  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-3 rounded-lg text-lg font-semibold hover:scale-105 transition-all shadow-lg hover:shadow-blue-500/40"
>
  Continue
</button>

          <p className="text-sm text-center mt-6 text-gray-300">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-blue-400 cursor-pointer hover:underline"
            >
              Sign Up
            </span>
          </p>

        </div>
      </div>
    </div>
  );
}