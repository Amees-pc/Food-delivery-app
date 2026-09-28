import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const inputClass =
  "w-full px-4 py-3 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl outline-none transition-all duration-200 focus:bg-white focus:border-[#E23744] focus:ring-4 focus:ring-red-100 placeholder:text-slate-400";

const labelClass =
  "flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2";

export const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // Backend se profile data lana
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch(
          "https://m3jf8wkn-8080.inc1.devtunnels.ms/user",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              requestType: "COMPLETE_PROFILE",
              newRole: "CUSTOMER",
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch profile");
        }

        const data = await response.json();

        setFormData({
          name: data.name || "",
          email: data.email || "",
          role: data.role || "",
        });
      } catch (error) {
        console.error("Profile fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      // Role ko backend ko update request mein nahi bhejna
      const updatedData = {
        name: formData.name,
        email: formData.email,
      };

      console.log("Updated profile:", updatedData);

      // Yahan tumhare backend ka UPDATE PROFILE endpoint aayega
      /*
      const response = await fetch("YOUR_UPDATE_PROFILE_API", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }
      */

      navigate("/profile");
    } catch (error) {
      console.error("Update profile error:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-slate-100">
        <p className="text-slate-600 font-medium">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-slate-100 font-sans px-4 py-10">
      <div className="w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl shadow-red-100/60 border border-slate-100">

        {/* Header */}
        <div className="relative h-28 bg-gradient-to-r from-[#E23744] via-[#D92D3A] to-[#B91C2B]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.22),_transparent_40%)]"></div>

          <div className="absolute bottom-5 left-7 flex items-center gap-3 text-white">
            <div className="w-11 h-11 rounded-xl bg-black/20 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <svg
                className="w-5 h-5"
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
            </div>

            <div>
              <h2 className="text-xl font-bold">Edit Profile</h2>
              <p className="text-xs text-red-100">
                Update your personal information
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="p-7">
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <div>
              <label className={labelClass}>
                <svg
                  className="w-4 h-4 text-[#E23744]"
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
                Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={inputClass}
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className={labelClass}>
                <svg
                  className="w-4 h-4 text-[#E23744]"
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
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
                placeholder="Enter your email"
              />
            </div>

            {/* Role - Read Only */}
            <div>
              <label className={labelClass}>
                <svg
                  className="w-4 h-4 text-[#E23744]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 2l7 4v6c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-4z"
                  />
                </svg>
                Role
              </label>

              <input
                type="text"
                value={formData.role}
                readOnly
                className={`${inputClass} bg-slate-100 cursor-not-allowed`}
              />

              <p className="text-xs text-slate-400 mt-2">
                Role can only be changed by the backend.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-2">

              {/* Save */}
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 px-5 bg-[#E23744] text-white text-sm font-semibold rounded-xl shadow-lg shadow-red-200 hover:bg-[#C91F2D] hover:shadow-xl hover:shadow-red-200 hover:-translate-y-0.5 transition-all duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Save Changes
              </button>

              {/* Cancel */}
              <button
                type="button"
                onClick={() => navigate("/profile")}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 px-5 bg-[#1F1F1F] text-white text-sm font-semibold rounded-xl border border-[#1F1F1F] hover:bg-black hover:-translate-y-0.5 transition-all duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Cancel
              </button>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
