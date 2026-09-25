import React, { useState } from "react";
import Profileimg from "../assets/ProfileBanner.png";
import burgerComboImg from "../assets/burger-combo.png";
import Tabakh from "../assets/assets/Tabakh.webp";
import {
  History,
  Trash2,
  MapPin,
  Home,
  Pencil,
  Plus,
  Phone,
  Mail,
  Cake,
  User,
  RotateCcw,
  Check,
} from "lucide-react";

const personalInfo = [
  { label: "Full name", value: "Sartaj Alam", icon: User },
  { label: "Email", value: "sartaj@gmail.com", icon: Mail },
  { label: "Phone", value: "7415792211", icon: Phone },
  { label: "Date of birth", value: "14 March 2005", icon: Cake },
  { label: "Gender", value: "Male", icon: User },
];

const initialAddresses = [
  {
    id: 1,
    title: "Home",
    line: "Idhag Hills, Bhopal, Madhya Pradesh - 462001",
    contact: "sartaj Alam · 7415793311",
    isDefault: true,
  },
  {
    id: 2,
    title: "Other",
    line: "Kohefiza, Bhopal, Madhya Pradesh - 462001",
    contact: "Amees Khan · 7415793311",
    isDefault: false,
  },
];

const orders = [
  {
    id: 1,
    name: "Chicken Grill",
    place: "Tabakh",
    price: "$6.24",
    status: "Cancelled",
    date: "12 Sep",
  },
  {
    id: 2,
    name: "Chicken Grill",
    place: "Tabakh",
    price: "$6.24",
    status: "Delivered",
    date: "08 Sep",
  },
  {
    id: 3,
    name: "Chicken Grill",
    place: "Tabakh",
    price: "$6.24",
    status: "Cancelled",
    date: "01 Sep",
  },
];

const statusStyles = {
  Cancelled: "bg-red-50 text-red-600 ring-red-200",
  Delivered: "bg-emerald-50 text-emerald-600 ring-emerald-200",
};

const Card = ({ children, className = "" }) => (
  <section
    className={`rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 ${className}`}
  >
    {children}
  </section>
);

const SectionTitle = ({ icon: Icon, children, action }) => (
  <div className="mb-5 flex items-center justify-between">
    <div className="flex items-center gap-3">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-50 text-red-600">
        <Icon size={18} />
      </span>
      <h2 className="text-lg font-bold text-gray-900">{children}</h2>
    </div>
    {action}
  </div>
);

const ProfilePage = () => {
  const [addresses, setAddresses] = useState(initialAddresses);

  const removeAddress = (id) =>
    setAddresses((list) => list.filter((a) => a.id !== id));

  const makeDefault = (id) =>
    setAddresses((list) => list.map((a) => ({ ...a, isDefault: a.id === id })));

  return (
    <div className="min-h-screen bg-red-50 pb-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative mt-4 min-h-[220px] overflow-hidden rounded-3xl bg-pink-100 bg-cover bg-right bg-no-repeat p-5 ring-1 ring-pink-200 sm:min-h-[240px] sm:p-8"
          style={{ backgroundImage: `url(${Profileimg})` }}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-pink-50/90 to-transparent md:hidden" />

          <button className="absolute right-4 top-4 z-10 inline-flex items-center gap-2 rounded-xl border border-red-200 bg-white/90 px-4 py-2 text-sm font-semibold text-red-600 shadow-sm transition hover:bg-red-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 sm:right-6 sm:top-6">
            <Pencil size={16} />
            Edit profile
          </button>

          <div className="relative z-10 flex items-center gap-4 pt-10 sm:gap-8 sm:pt-6">
            <img
              src={burgerComboImg}
              alt="Daniel Rosh"
              className="h-24 w-24 shrink-0 rounded-full object-cover shadow-lg ring-4 ring-white sm:h-36 sm:w-36"
            />
            <div className="text-black">
              <h1 className="text-2xl font-extrabold tracking-tight sm:text-4xl">
                Sartaj Alam
              </h1>
              <p className="mt-1 text-sm text-black/70 sm:text-base">
                Sartaj@gmail.com
              </p>
              <p className="flex items-center gap-1 text-sm text-black/70 sm:text-base">
                <MapPin size={14} /> Bhopal, Madhya Pradesh
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Card>
            <SectionTitle icon={User}>Personal information</SectionTitle>
            <dl className="divide-y divide-gray-100">
              {personalInfo.map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-4 py-3.5"
                >
                  <dt className="flex items-center gap-3 text-sm text-gray-500">
                    <Icon size={16} className="text-gray-400" />
                    {label}
                  </dt>
                  <dd className="text-right text-base font-semibold text-gray-900">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </Card>

          <Card>
            <SectionTitle
              icon={MapPin}
              action={
                <button className="inline-flex items-center gap-1.5 rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2">
                  <Plus size={16} />
                  Add address
                </button>
              }
            >
              Saved addresses
            </SectionTitle>

            <div className="space-y-3">
              {addresses.length === 0 && (
                <p className="rounded-xl border border-dashed border-gray-300 p-6 text-center text-sm text-gray-500">
                  No saved addresses yet. Add one to get faster checkout.
                </p>
              )}

              {addresses.map((a) => (
                <div
                  key={a.id}
                  className={`flex items-start justify-between gap-3 rounded-xl border p-4 transition ${
                    a.isDefault
                      ? "border-red-200 bg-red-50/60"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <div className="flex gap-4">
                    <span
                      className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                        a.isDefault
                          ? "bg-red-600 text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {a.title === "Home" ? (
                        <Home size={18} />
                      ) : (
                        <MapPin size={18} />
                      )}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-900">
                          {a.title}
                        </span>
                        {a.isDefault && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-700">
                            <Check size={12} /> Default
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-gray-600">{a.line}</p>
                      <p className="text-sm text-gray-500">{a.contact}</p>
                      {!a.isDefault && (
                        <button
                          onClick={() => makeDefault(a.id)}
                          className="mt-2 text-sm font-semibold text-red-600 hover:underline focus:outline-none focus-visible:underline"
                        >
                          Set as default
                        </button>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => removeAddress(a.id)}
                    aria-label={`Delete ${a.title} address`}
                    className="rounded-lg p-2 text-gray-400 transition hover:bg-red-50 hover:text-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="mt-6">
          <SectionTitle
            icon={History}
            action={
              <button className="text-sm font-semibold text-red-600 hover:underline">
                View all
              </button>
            }
          >
            Recent orders
          </SectionTitle>

          <ul className="divide-y divide-gray-100">
            {orders.map((o) => (
              <li
                key={o.id}
                className="flex flex-wrap items-center gap-4 py-4 sm:flex-nowrap"
              >
                <img
                  src={Tabakh}
                  alt={o.name}
                  className="h-16 w-16 shrink-0 rounded-xl object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-lg font-bold text-gray-900">
                    {o.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {o.place} · {o.date}
                  </p>
                </div>
                <p className="text-lg font-bold text-gray-900">{o.price}</p>
                <span
                  className={`rounded-full px-3 py-1 text-sm font-semibold ring-1 ring-inset ${statusStyles[o.status]}`}
                >
                  {o.status}
                </span>
                <button className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-red-600 hover:text-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500">
                  <RotateCcw size={14} />
                  Reorder
                </button>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
