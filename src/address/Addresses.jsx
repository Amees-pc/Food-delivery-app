import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, Plus, Pencil, Trash2, Home, Sparkles } from "lucide-react";

export const Addresses = () => {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("addresses");
    if (saved) {
      setAddresses(JSON.parse(saved));
    }
  }, []);

  const handleDelete = (id) => {
    const updated = addresses.filter((addr) => addr.id !== id);
    setAddresses(updated);
    localStorage.setItem("addresses", JSON.stringify(updated));
  };

  const cardColors = [
    "from-violet-500 to-fuchsia-500",
    "from-blue-500 to-cyan-500",
    "from-orange-500 to-amber-500",
    "from-emerald-500 to-teal-500",
    "from-pink-500 to-rose-500",
    "from-indigo-500 to-purple-500",
  ];

  return (
    <div
      className="min-h-screen bg-pink-to-br from-red-50 via-white to-slate-100 font-sans px-4 py-10"
      style={{ color: "pink" }}
    >
      <div className="w-full max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-br from-[#E23744] to-[#B91C2B] rounded-xl shadow-lg shadow-red-200">
              <MapPin className="w-5 h-5 text-white" />
            </div>

            <h2 className="text-2xl font-bold text-[#1F1F1F] tracking-tight">
              My Addresses
            </h2>
          </div>

          <Link
            to="/address/add"
            className="flex items-center gap-1.5 py-2.5 px-5 bg-[#E23744] text-white text-sm font-semibold rounded-full shadow-lg shadow-red-200 hover:bg-[#C91F2D] hover:shadow-xl hover:shadow-red-200 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <Plus className="w-4 h-4" />
            Add Address
          </Link>
        </div>

        {addresses.length === 0 ? (
          <div className="relative bg-white rounded-2xl shadow-lg border border-slate-100 p-12 text-center overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-100 rounded-full blur-2xl opacity-70" />

            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-slate-200 rounded-full blur-2xl opacity-60" />

            <div className="relative w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#E23744] to-[#B91C2B] rounded-full flex items-center justify-center shadow-lg shadow-red-200">
              <Home className="w-7 h-7 text-white" />
            </div>

            <p className="relative text-[#1F1F1F] text-sm font-semibold">
              No addresses added yet.
            </p>

            <p className="relative text-slate-400 text-xs mt-1">
              Add your first address to get started.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {addresses.map((addr) => (
              <div
                key={addr.id}
                className="group relative bg-white rounded-2xl shadow-md border border-slate-100 p-5 flex justify-between items-start hover:shadow-xl hover:border-red-100 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-[#E23744] to-[#B91C2B]" />

                <div className="flex gap-3 pl-2">
                  <div className="mt-0.5 p-2.5 bg-gradient-to-br from-[#E23744] to-[#B91C2B] rounded-xl shadow-md shadow-red-200 group-hover:scale-110 transition-transform duration-200">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>

                  <div>
                    <p className="text-[#1F1F1F] font-semibold">
                      {addr.address_line}
                    </p>

                    <p className="text-sm text-slate-500 mt-1 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#E23744]" />
                      {addr.city}, {addr.state} - {addr.pincode}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 shrink-0">
                  <Link
                    to={`/address/edit/${addr.id}`}
                    className="flex items-center gap-1.5 text-sm px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-full text-[#1F1F1F] hover:bg-slate-100 hover:border-slate-300 transition-colors"
                  >
                    <Pencil className="w-3.5 h-3.5" />
                    Edit
                  </Link>

                  <button
                    onClick={() => handleDelete(addr.id)}
                    className="flex items-center gap-1.5 text-sm px-3.5 py-2 bg-red-50 border border-red-100 text-[#E23744] rounded-full hover:bg-red-100 hover:border-red-200 transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
