import React from "react";

export const Dashboard = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center"
      style={{ backgroundImage: "url('/homeImage.png')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-3xl px-12 md:px-20 text-white">
        <p className="text-red-400 font-semibold text-lg mb-3">
          DELICIOUS FOOD • GREAT TASTE
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Welcome to
          <br />
          <span className="text-red-500">Taaj Restaurant!</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-xl">
          Discover delicious food, explore amazing restaurants and enjoy your
          favorite meals delivered to your doorstep.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-red-500 hover:bg-red-600 text-white px-7 py-3 rounded-xl font-semibold transition">
            Explore Food
          </button>

          <button className="bg-white/10 hover:bg-white/20 border border-white/40 backdrop-blur-sm text-white px-7 py-3 rounded-xl font-semibold transition">
            Explore Restaurants
          </button>
        </div>
      </div>
    </div>
  );
};
