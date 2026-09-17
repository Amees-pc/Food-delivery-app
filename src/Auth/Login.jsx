import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../Navbar";

export const Login = () => {
  const handleGoogleLogin = () => {
    window.location.href =
      "https://m3jf8wkn-8080.devtunnels.ms/oauth2/authorization/google";
  };

  return (
    <div className="min-h-screen font-sans">
      <Navbar />

      <div className="fixed top-16 left-0 right-0 bottom-0 overflow-hidden">
        <img
          src="/images-unsplash.jpg"
          alt="Delicious Food"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute bottom-10 left-8 z-10 text-white sm:bottom-14 sm:left-12 lg:left-16">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Delicious <span className="text-[#E23744]">Food</span>
          </h1>

          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/90 sm:text-base">
            Discover delicious food and get your favourite meals delivered right
            to your doorstep.
          </p>

          <div className="mt-5 h-1 w-12 rounded-full bg-[#E23744]" />
        </div>

        <div className="absolute inset-0 z-20 flex items-center justify-center px-5">
          <div className="relative w-full max-w-[430px] overflow-hidden rounded-[28px] border border-white/60 bg-white/95 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.30)] backdrop-blur-xl sm:p-10">
            <div className="absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r from-[#E23744] via-[#F43F5E] to-[#B91C2B]" />

            <div className="absolute -left-16 -top-16 h-32 w-32 rounded-full bg-[#E23744]/10" />

            <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-[#E23744]/10" />

            <div className="relative z-10">
              <div className="mb-6 flex justify-center">
                <div className="flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-gradient-to-br from-[#E23744] to-[#B91C2B] shadow-lg shadow-red-300/50">
                  <svg
                    className="h-9 w-9 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v20" />
                    <path d="M5 9h14" />
                    <path d="M7 9c0 4 2 7 5 7s5-3 5-7" />
                  </svg>
                </div>
              </div>

              <div className="mb-8 text-center">
                <h2 className="text-3xl font-extrabold tracking-tight text-[#1F1F1F] sm:text-4xl">
                  Welcome <span className="text-[#E23744]">Back</span>
                </h2>

                <p className="mt-3 text-base font-semibold text-[#8B4513]">
                  Sign in to continue to your account
                </p>
              </div>

              <button
                type="button"
                onClick={handleGoogleLogin}
                className="group flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base font-semibold text-[#1F1F1F] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E23744]/30 hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <svg className="h-6 w-6" viewBox="0 0 48 48">
                    <path
                      fill="#FFC107"
                      d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.3 6.1 29.4 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.3-.4-3.5z"
                    />

                    <path
                      fill="#FF3D00"
                      d="M6.3 14.7l6.6 4.8C14.7 16 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.3 6.1 29.4 4 24 4 16.3 4 9.6 8.3 6.3 14.7z"
                    />

                    <path
                      fill="#4CAF50"
                      d="M24 44c5.1 0 9.9-2 13.4-5.2l-6.2-5.2C29.4 35.1 26.8 36 24 36c-5.2 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.3 16.2 44 24 44z"
                    />

                    <path
                      fill="#1976D2"
                      d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.2-3.7 5.7-6.9 6.9l6.2 5.2C38.2 36.9 44 31.1 44 24c0-1.3-.1-2.3-.4-3.5z"
                    />
                  </svg>

                  <span>Continue with Google</span>
                </div>

                <svg
                  className="h-5 w-5 text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#E23744]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>

              <p className="mt-6 text-center text-sm text-slate-500">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="font-semibold text-[#E23744] transition-colors hover:text-[#B91C2B] hover:underline"
                >
                  Register
                </Link>
              </p>

              <p className="mt-4 text-center text-xs text-slate-400">
                Secure sign in with your Google account
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
