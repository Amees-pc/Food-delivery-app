import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Building2, Navigation, Hash, X } from "lucide-react";

const emptyAddress = {
  address_line: "",
  city: "",
  state: "",
  pincode: "",
  latitude: "",
  longitude: "",
};

export const AddAddress = () => {
  const [formData, setFormData] = useState(emptyAddress);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (
      !formData.address_line ||
      !formData.city ||
      !formData.state ||
      !formData.pincode
    ) {
      setError("Please fill all required fields");
      return;
    }
    if (!/^\d{4,10}$/.test(formData.pincode)) {
      setError("Enter a valid pincode");
      return;
    }

    const saved = localStorage.getItem("addresses");
    const addresses = saved ? JSON.parse(saved) : [];
    const newAddress = { ...formData, id: Date.now().toString() };

    localStorage.setItem(
      "addresses",
      JSON.stringify([...addresses, newAddress]),
    );

    navigate("/address");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-slate-100 font-sans px-4 py-10">
      <div className="w-full max-w-md relative bg-white rounded-2xl shadow-2xl shadow-red-100/60 border border-slate-100 p-8 overflow-hidden">
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-red-100 rounded-full blur-3xl opacity-60 pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-slate-200 rounded-full blur-3xl opacity-60 pointer-events-none" />

        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 bg-gradient-to-br from-[#E23744] to-[#B91C2B] rounded-xl shadow-lg shadow-red-200">
              <MapPin className="w-5 h-5 text-white" />
            </div>

            <h2 className="text-xl font-bold text-[#1F1F1F]">Add Address</h2>
          </div>

          {error && (
            <div className="flex items-center gap-2 bg-red-50 text-[#E23744] text-sm px-3.5 py-2.5 rounded-xl mb-4 border border-red-100">
              <X className="w-4 h-4 shrink-0" />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="flex items-center gap-1.5 text-sm font-medium text-[#1F1F1F] mb-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#E23744]" />
                Address Line
              </label>

              <input
                type="text"
                name="address_line"
                value={formData.address_line}
                onChange={handleChange}
                placeholder="House no, street, area"
                className="w-full px-3.5 py-2.5 text-sm text-slate-800 border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-[#E23744] focus:bg-white transition-all placeholder:text-slate-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-1.5 text-sm font-medium text-[#1F1F1F] mb-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#E23744]" />
                  City
                </label>

                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter city"
                  className="w-full px-3.5 py-2.5 text-sm text-slate-800 border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-[#E23744] focus:bg-white transition-all placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="flex items-center gap-1.5 text-sm font-medium text-[#1F1F1F] mb-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#E23744]" />
                  State
                </label>

                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="Enter state"
                  className="w-full px-3.5 py-2.5 text-sm text-slate-800 border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-[#E23744] focus:bg-white transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            <div>
              <label className="flex items-center gap-1.5 text-sm font-medium text-[#1F1F1F] mb-1.5">
                <Hash className="w-3.5 h-3.5 text-[#E23744]" />
                Pincode
              </label>

              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="Enter pincode"
                className="w-full px-3.5 py-2.5 text-sm text-slate-800 border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-[#E23744] focus:bg-white transition-all placeholder:text-slate-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-1.5 text-sm font-medium text-[#1F1F1F] mb-1.5">
                  <Navigation className="w-3.5 h-3.5 text-[#E23744]" />
                  Latitude
                </label>

                <input
                  type="text"
                  name="latitude"
                  value={formData.latitude}
                  onChange={handleChange}
                  placeholder="Optional"
                  className="w-full px-3.5 py-2.5 text-sm text-slate-800 border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-[#E23744] focus:bg-white transition-all placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="flex items-center gap-1.5 text-sm font-medium text-[#1F1F1F] mb-1.5">
                  <Navigation className="w-3.5 h-3.5 text-[#E23744]" />
                  Longitude
                </label>

                <input
                  type="text"
                  name="longitude"
                  value={formData.longitude}
                  onChange={handleChange}
                  placeholder="Optional"
                  className="w-full px-3.5 py-2.5 text-sm text-slate-800 border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-[#E23744] focus:bg-white transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                className="w-full py-2.5 bg-[#E23744] text-white text-sm font-semibold rounded-full shadow-lg shadow-red-200 hover:bg-[#C91F2D] hover:shadow-xl hover:shadow-red-200 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                Add Address
              </button>

              <button
                type="button"
                onClick={() => navigate("/address")}
                className="w-full py-2.5 bg-[#1F1F1F] text-white text-sm font-semibold rounded-full hover:bg-black hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
