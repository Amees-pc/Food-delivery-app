import React from "react";
import { Link } from "react-router-dom";

export const Profile = () => {
  const user = {
    name: "sartaj Alam",
    email: "sartaj@gmail.com",
    phone: "7307477233",
    bio: "Frontend developer. Who loves React.",
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative font-sans px-4 py-10 pt-28 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/profileImage.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 w-full max-w-sm overflow-hidden rounded-3xl bg-white shadow-2xl border border-white/50">
        <div className="relative h-24 bg-gradient-to-r from-[#E23744] to-[#B91C2B]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.25),_transparent_45%)]"></div>
        </div>

        <div className="relative px-5 pb-5">
          <div className="flex flex-col items-center -mt-12">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#E23744] to-[#991B1B] p-1 shadow-lg">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <div className="w-[90%] h-[90%] rounded-full bg-[#1F1F1F] text-white flex items-center justify-center text-3xl font-bold">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                </div>
              </div>

              <div className="absolute bottom-1 right-1 w-4 h-4 bg-[#22C55E] border-3 border-white rounded-full"></div>
            </div>

            <h2 className="text-xl font-bold mt-3 text-[#1F1F1F]">
              {user.name}
            </h2>

            <div className="flex items-center gap-2 mt-1 text-xs text-slate-500">
              <svg
                className="w-3.5 h-3.5 text-[#E23744]"
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

              <span>{user.email}</span>
            </div>
          </div>

          <div className="mt-6 space-y-2.5">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-red-50 border border-red-100 hover:bg-red-100 transition-all duration-200">
              <div className="w-9 h-9 rounded-lg bg-[#E23744] text-white flex items-center justify-center shrink-0">
                <svg
                  className="w-4 h-4"
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
              </div>

              <div className="min-w-0">
                <p className="text-[10px] font-semibold text-[#E23744] uppercase tracking-wider">
                  Name
                </p>

                <p className="text-sm font-semibold text-[#1F1F1F] truncate">
                  {user.name}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 hover:bg-red-50 hover:border-red-100 transition-all duration-200">
              <div className="w-9 h-9 rounded-lg bg-[#1F1F1F] text-white flex items-center justify-center shrink-0">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l9 6 9-6M5 19h14a2 2 0 00-2-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>

              <div className="min-w-2">
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  Email
                </p>

                <p className="text-sm font-semibold text-[#1F1F1F] truncate">
                  {user.email}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 hover:bg-red-50 hover:border-red-100 transition-all duration-200">
              <div className="w-9 h-9 rounded-lg bg-[#E23744] text-white flex items-center justify-center shrink-0">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.2 3.6a1 1 0 01-.27 1.05L8.4 9.6a16 16 0 006 6l1.27-1.76a1 1 0 011.05-.27l3.6 1.2a2 2 0 012 2v2a2 2 0 01-2 2h-1C9.16 21 3 14.84 3 7V5z"
                  />
                </svg>
              </div>

              <div className="min-w-0">
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  Phone
                </p>

                <p className="text-sm font-semibold text-[#1F1F1F]">
                  {user.phone}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 hover:bg-red-50 hover:border-red-100 transition-all duration-200">
              <div className="w-9 h-9 rounded-lg bg-[#1F1F1F] text-white flex items-center justify-center shrink-0">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 10h8M8 14h5M6 20l-3 1 1-3a8 8 0 111.5 1.5L6 20z"
                  />
                </svg>
              </div>

              <div className="min-w-0">
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  Bio
                </p>

                <p className="text-sm font-semibold text-[#1F1F1F] leading-relaxed">
                  {user.bio}
                </p>
              </div>
            </div>
          </div>

          <Link
            to="/profile/edit"
            className="mt-5 flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#E23744] hover:bg-[#C91F2D] text-white text-sm font-semibold rounded-xl shadow-md shadow-red-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
              />
            </svg>
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile