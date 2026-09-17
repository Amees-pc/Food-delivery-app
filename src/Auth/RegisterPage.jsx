import { useState } from "react";
import { Link } from "react-router-dom";
import registerImage from "../assets/luisa-unsplash.jpg";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password, confirmPassword });
  };

  return (
    <div className="fixed inset-0 h-screen w-full overflow-hidden font-sans">
      <img
        src={registerImage}
        alt="Delicious Food"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute bottom-8 left-8 z-10 text-white sm:bottom-12 sm:left-12 lg:left-16">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Delicious <span className="text-[#E23744]">Food</span>
        </h1>

        <p className="mt-3 max-w-md text-sm leading-relaxed text-white/90 sm:text-base">
          Discover delicious food and get your favourite meals delivered right
          to your doorstep.
        </p>

        <div className="mt-5 h-1 w-12 rounded-full bg-[#E23744]" />
      </div>

      <div className="absolute inset-0 z-20 flex items-center justify-center overflow-y-auto px-5 py-6">
        <div className="relative w-full max-w-[470px] overflow-hidden rounded-[28px] border border-white/60 bg-white/95 p-7 shadow-[0_25px_80px_rgba(0,0,0,0.30)] backdrop-blur-xl sm:p-9">
          <div className="absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r from-[#E23744] via-[#F43F5E] to-[#B91C2B]" />

          <div className="absolute -left-16 -top-16 h-32 w-32 rounded-full bg-[#E23744]/10" />

          <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-[#E23744]/10" />

          <div className="relative z-10">
            <div className="mb-5 flex justify-center">
              <div className="flex h-[64px] w-[64px] items-center justify-center rounded-2xl bg-gradient-to-br from-[#E23744] to-[#B91C2B] shadow-lg shadow-red-300/50">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3M15 21a6 6 0 00-12 0M9 15a4 4 0 100-8 4 4 0 000 8z"
                  />
                </svg>
              </div>
            </div>

            <div className="mb-7 text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-[#1F1F1F] sm:text-4xl">
                Create <span className="text-[#E23744]">Account</span>
              </h2>

              <p className="mt-2 text-sm font-semibold text-[#8B4513] sm:text-base">
                Create your account to get started
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#1F1F1F]">
                  <svg
                    className="h-4 w-4 text-[#E23744]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-[#E23744] focus:bg-white focus:ring-4 focus:ring-red-100"
                />
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#1F1F1F]">
                  <svg
                    className="h-4 w-4 text-[#E23744]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-[#E23744] focus:bg-white focus:ring-4 focus:ring-red-100"
                />
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#1F1F1F]">
                  <svg
                    className="h-4 w-4 text-[#E23744]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11V7a3 3 0 00-6 0v4m-2 0h10a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2z"
                    />
                  </svg>
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-[#E23744] focus:bg-white focus:ring-4 focus:ring-red-100"
                />
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#1F1F1F]">
                  <svg
                    className="h-4 w-4 text-[#E23744]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 3c-2.755 0-5.29.93-7.312 2.496A11.955 11.955 0 004 12c0 2.755.93 7.312 2.496 7.312A11.955 11.955 0 0012 21c2.755 0 5.29-.93 7.312-2.496A11.955 11.955 0 0020 12c0-1.403-.24-2.75-.682-4.016z"
                    />
                  </svg>
                  Confirm Password
                </label>

                <input
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-[#E23744] focus:bg-white focus:ring-4 focus:ring-red-100"
                />
              </div>

              <button
                type="submit"
                className="group mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#E23744] to-[#C91F2D] py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-red-300"
              >
                Create Account
                <svg
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14m-6-6l6 6-6 6"
                  />
                </svg>
              </button>
            </form>

            <p className="mt-5 text-center text-sm text-slate-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-[#E23744] transition-colors hover:text-[#B91C2B] hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
