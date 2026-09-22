import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Profile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        // console.log("PROFILE TOKEN:", token);

        if (!token) {
          navigate("/login");
          return;
        }

        const response = await fetch(
          "https://m3jf8wkn-8080.inc1.devtunnels.ms/user",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              requestType: "GET_PROFILE",
            }),
          },
        );

        if (!response.ok) {
          throw new Error("Failed to get profile");
        }

        const data = await response.json();

        // console.log(data);

        setUser(data.user);
      } catch (error) {
        console.log(error);
        setError("Unable to load profile");
      }
    };

    getProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold text-[#E23744]">Loading...</p>
      </div>
    );
  }

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
                    {user.name?.charAt(0).toUpperCase()}
                  </div>
                </div>
              </div>

              <div className="absolute bottom-1 right-1 w-4 h-4 bg-[#22C55E] border-3 border-white rounded-full"></div>
            </div>

            <h2 className="text-xl font-bold mt-3 text-[#1F1F1F]">
              {user.name}
            </h2>

            <div className="flex items-center gap-2 mt-1 text-xs text-slate-500">
              <span>{user.email}</span>
            </div>
          </div>

          <div className="mt-6 space-y-2.5">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-red-50 border border-red-100">
              <div className="w-9 h-9 rounded-lg bg-[#E23744] text-white flex items-center justify-center">
                👤
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

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="w-9 h-9 rounded-lg bg-[#1F1F1F] text-white flex items-center justify-center">
                ✉️
              </div>

              <div className="min-w-0">
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  Email
                </p>

                <p className="text-sm font-semibold text-[#1F1F1F] truncate">
                  {user.email}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="w-9 h-9 rounded-lg bg-[#E23744] text-white flex items-center justify-center">
                📞
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

            <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="w-9 h-9 rounded-lg bg-[#1F1F1F] text-white flex items-center justify-center">
                💬
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

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="w-9 h-9 rounded-lg bg-[#E23744] text-white flex items-center justify-center">
                👤
              </div>

              <div className="min-w-0">
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  Role
                </p>

                <p className="text-sm font-semibold text-[#1F1F1F]">
                  {user.role}
                </p>
              </div>
            </div>
          </div>

          <Link
            to="/profile/edit/"
            className="mt-5 flex items-center justify-center w-full py-3 px-4 bg-[#E23744] hover:bg-[#C91F2D] text-white text-sm font-semibold rounded-xl transition"
          >
            Edit Profile
          </Link>

          <button
            onClick={handleLogout}
            className="w-full mt-6 py-3 rounded-xl bg-[#E23744] text-white font-semibold hover:bg-[#D92D3A] transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
