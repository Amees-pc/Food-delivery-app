import React from "react";
import Profileimg from "../assets/ProfileBanner.png";
import burgerComboImg from "../assets/burger-combo.png";
import {
  ShoppingCart,
  Heart,
  History,
  Trash2,
  MapPin,
  CreditCard,
  Wallet,
  Search,
  Home,
  ChevronRight,
  Truck,
  ShieldCheck,
  Leaf,
  Headphones,
} from "lucide-react";
import Biryani from "../assets/assets/Biryani.webp";
import Biryanicon from "../assets/assets/Biryanicon.jpg";
import Pizza from "../assets/Pizza.png";
import Pastry from "../assets/assets/Pastry.jpeg";
import Chinese from "../assets/assets/Noodles.jpeg";
import Indian from "../assets/indian-food.png";
import Chicken from "../assets/assets/Chicken.jpeg";
import Burger from "../assets/combo-offer.png";
import Beverages from "../assets/assets/Bevarages.jpeg";
import Tabakh from "../assets/assets/Tabakh.webp";
import GF from "../assets/assets/Globalfusion.jpg";
import Arabian from "../assets/chickenTikka.png";
import Sweet from "../assets/assets/Sweet.webp";
import ChineseComboImg from "../assets/chinese-combo.png";
import scooterImg from "../assets/delivery-scooter.png";
const ProfilePage = () => {
  return (
    //     <div className=' rounded-md h-50 bg-center bg-no-repeat my-2 relative p-4 mx-4' style={{backgroundImage: `URL(${Profileimg})`,
    // backgroundSize: "105% 165%"}}>ProfilePage</div>
    <div className="min-h-screen pb-8">
      <div className="min-h-screen px-15 ">
        <div
          className="bg-cover bg-center bg-no-repeat p-8"
          style={{ backgroundImage: `url(${Profileimg})` }}
        >
          <div className="flex gap-8">
            <img
              src={burgerComboImg}
              className="rounded-full h-35 w-35"
              alt=""
            />
            <div className="pt-6">
              <div className="font-bold text-4xl mb-1">Danniel Rosh</div>
              <div className="text-sm text-gray-500">fazink3@gmail.com</div>
              <div className="text-sm text-gray-500">
                Bhopal, Madhya Pradesh
              </div>
            </div>
          </div>
        </div>

        <div className="flex mt-8 gap-10">
          <div className="rounded-xl shadow-[0_0_6px_rgba(0,0,0,0.3)] p-4 pl-8  w-[45vw] ">
            <div className="font-bold text-2xl mb-3">Personal Information</div>
            <div className="">
              <div className="border-b border-gray-300">
                <div className="flex p-2 justify-between  w-[35vw]">
                  <div className="text-xl text-gray-500">Full name</div>
                  <div className="text-xl font-bold">Daniel Rosh</div>
                </div>
              </div>
              {/* 2 */}
              <div className="border-b border-gray-300 ">
                <div className="flex p-2 justify-between  w-[35vw]">
                  <div className="text-xl text-gray-500">Email</div>
                  <div className="text-xl font-bold ">Ask23@gmail.com</div>
                </div>
              </div>
              {/* 3 */}
              <div className="border-b border-gray-300">
                <div className="flex p-2 justify-between  w-[35vw]">
                  <div className="text-xl text-gray-500">Phone</div>
                  <div className="text-xl font-bold ">7415792211</div>
                </div>
              </div>
              {/* 4 */}
              <div className="border-gray-300 border-b">
                <div className="flex p-2 justify-between  w-[35vw]">
                  <div className="text-xl text-gray-500">Date of birth</div>
                  <div className="text-xl font-bold ">14 march 2005</div>
                </div>
              </div>
              {/* 5 */}
              <div className="">
                <div className="flex p-2 justify-between  w-[35vw]">
                  <div className="text-xl text-gray-500">Gender</div>
                  <div className="text-xl font-bold">Male</div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl shadow-[0_0_6px_rgba(0,0,0,0.3)] p-4  w-[45vw]">
            <div className="flex justify-between">
              <div className="flex gap-3 mb-3">
                <div className="text-red-500">
                  <MapPin />
                </div>
                <div className="font-bold text-xl">Address</div>
              </div>
              <div className="text-sm text-red-600 bg-red-50 h-fit py-1 px-3 rounded-md ">
                + Add Address
              </div>
            </div>

            {/* <div className='p-3 flex gap-6'>
      <div className='text-red-500'><Home size={25}/></div>
      <div>
        <div className='flex gap-3'></div>
      </div>
      </div> */}
            {/* 1 */}
            <div className=" gap-5 flex p-3 justify-between bg-red-50 rounded-md">
              <div className="flex gap-5">
                <div className=" flex pt-3">
                  <Home size={27} className="text-red-600" />
                </div>
                <div>
                  <div className="px-3 py-2 flex gap-3">
                    <div className="font-bold text-lg">Home</div>
                    <div className="bg-red-300 text-red-600 px-2 rounded-xl text-sm justify-center flex items-center">
                      Default
                    </div>
                  </div>
                  <div className="px-3">
                    <div className="text-sm text-gray-500">
                      Idhag Hills Bhopal,Madhya Pradesh-462001
                    </div>
                    <div className="text-sm text-gray-500">
                      Amees Khan : 7415793311
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-3  items-center">
                <div>
                  <Trash2 size={23} />
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className=" gap-5 flex p-3 justify-between rounded-md">
              <div className="flex gap-5 ">
                <div className=" flex pt-3">
                  <MapPin size={27} className="" />
                </div>
                <div>
                  <div className="px-3 py-2 flex gap-3">
                    <div className="font-bold text-lg">Other</div>
                    {/* <div className='bg-red-300 text-red-600 px-2 rounded-xl text-sm justify-center flex items-center'>Default</div> */}
                  </div>
                  <div className="px-3">
                    <div className="text-sm text-gray-500">
                      Kohefiza Bhopal,Madhya Pradesh-462001
                    </div>
                    <div className="text-sm text-gray-500">
                      Amees Khan : 7415793311
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-3  items-center">
                <div>
                  <Trash2 size={23} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd big row */}

        <div className=" mt-4 flex gap-10 ">
          <div className="rounded-xl  shadow-[0_0_6px_rgba(0,0,0,0.3)] p-3 w-fit h-[22vw]  ">
            <div className="mb-3 flex gap-4">
              <div className="text-red-600 ">
                {" "}
                <History size={22} />
              </div>
              <div className="font-bold text-2xl ">Recent orders</div>
            </div>
            <div className="grid grid-cols-3 w-[43vw]">
              {/* 1 */}
              <div className="col-span-1 flex gap-4 border-b border-gray-300 pb-2">
                <img src={Tabakh} alt="" className="h-20 w-20 rounded" />
                <div className=" pt-3">
                  <div className="font-bold text-xl">Chicken Grill</div>
                  <div className="text-gray-500 text-sm">Tabakh</div>
                </div>
              </div>

              <div className="col-span-1  flex justify-center border-b border-gray-300 pb-2">
                <div className="flex pt-3">
                  <div className="font-bold text-gray-500 text-2xl">$6.24</div>
                </div>
              </div>
              <div className="col-span-1  border-b border-gray-300 pb-2">
                <div className="flex pt-3">
                  <div className="bg-red-300 text-red-600   font-bold  py-1 px-7 rounded-xl  text-xl">
                    Cancelled
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div className="col-span-1 flex gap-4 border-b border-gray-300 py-2">
                <img src={Tabakh} alt="" className="h-20 w-20 rounded" />
                <div className=" pt-3">
                  <div className="font-bold text-xl">Chicken Grill</div>
                  <div className="text-gray-500 text-sm">Tabakh</div>
                </div>
              </div>

              <div className="col-span-1  border-b flex justify-center border-gray-300 py-2">
                <div className="flex pt-3">
                  <div className="font-bold text-gray-500 text-2xl">$6.24</div>
                </div>
              </div>
              <div className="col-span-1  border-b border-gray-300 py-2">
                <div className="flex pt-3">
                  <div className="bg-green-300 text-green-600   font-bold  py-1 px-7 rounded-xl  text-xl">
                    Delivered
                  </div>
                </div>
              </div>
              {/* 3 */}
              <div className="col-span-1 flex gap-4 border-b border-gray-300 py-2">
                <img src={Tabakh} alt="" className="h-20 w-20 rounded" />
                <div className=" pt-3">
                  <div className="font-bold text-xl">Chicken Grill</div>
                  <div className="text-gray-500 text-sm">Tabakh</div>
                </div>
              </div>

              <div className="col-span-1  border-b flex justify-center border-gray-300 py-2">
                <div className="flex pt-3">
                  <div className="font-bold text-gray-500 text-2xl">$6.24</div>
                </div>
              </div>
              <div className="col-span-1  border-b border-gray-300 py-2">
                <div className="flex pt-3">
                  <div className="bg-red-300 text-red-600   font-bold  py-1 px-7 rounded-xl  text-xl">
                    Cancelled
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="b-600 rounded-xl  shadow-[0_0_6px_rgba(0,0,0,0.3)] p-4  w-[43vw] h-[22vw] overflow-x-scroll">
            <div className="mb-3 flex gap-4">
              <div className="text-red-600 ">
                {" "}
                <Heart size={22} />
              </div>
              <div className="font-bold text-2xl sticky top-0 ">Favourites</div>
            </div>
            <div className="grid grid-cols-3 gap-8">
              {/* 1  */}
              <div className="col-span-1 shadow-[0_0_6px_rgba(0,0,0,0.3)] rounded-xl ">
                <img src={Tabakh} alt="" className="rounded-t-xl h-25 w-60" />
                <div className="flex justify-between px-2">
                  <div>
                    <div className="text-lg font-bold">Salad</div>
                    <div className="text-gray-500 text-sm">Tabakh</div>
                  </div>
                  <Heart className="text-red-500 pt-2" size={28} />
                </div>
              </div>
              {/* 2 */}
              <div className="col-span-1 shadow-[0_0_6px_rgba(0,0,0,0.3)] rounded-xl ">
                <img src={Arabian} alt="" className="rounded-t-xl h-25 w-60" />
                <div className="flex justify-between px-2">
                  <div>
                    <div className="text-lg font-bold">Grill Chicken</div>
                    <div className="text-gray-500 text-sm">
                      Arabian Chillies
                    </div>
                  </div>
                  <Heart className="text-red-500 pt-2" size={28} />
                </div>
              </div>
              {/* 3 */}
              <div className="col-span-1 shadow-[0_0_6px_rgba(0,0,0,0.3)] rounded-xl ">
                <img
                  src={ChineseComboImg}
                  alt=""
                  className="rounded-t-xl h-25 w-60"
                />
                <div className="flex justify-between px-2">
                  <div>
                    <div className="text-lg font-bold">Chinese Platter</div>
                    <div className="text-gray-500 text-sm">Radison</div>
                  </div>
                  <Heart className="text-red-500 pt-2" size={28} />
                </div>
              </div>

              {/* 4  */}
              <div className="col-span-1 shadow-[0_0_6px_rgba(0,0,0,0.3)] rounded-xl ">
                <img
                  src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c"
                  alt=""
                  className="rounded-t-xl h-25 w-60"
                />
                <div className="flex justify-between px-2">
                  <div>
                    <div className="text-lg font-bold">Sushi</div>
                    <div className="text-gray-500 text-sm">Tabakh</div>
                  </div>
                  <Heart className="text-red-500 pt-2" size={28} />
                </div>
              </div>
              {/* 5 */}
              <div className="col-span-1 shadow-[0_0_6px_rgba(0,0,0,0.3)] rounded-xl ">
                <img
                  src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002"
                  alt=""
                  className="rounded-t-xl h-25 w-60"
                />
                <div className="flex justify-between px-2">
                  <div>
                    <div className="text-lg font-bold">Cheese Pizza</div>
                    <div className="text-gray-500 text-sm">the pizza slice</div>
                  </div>
                  <Heart className="text-red-500 pt-2" size={28} />
                </div>
              </div>
              {/* 6 */}
              <div className="col-span-1 shadow-[0_0_6px_rgba(0,0,0,0.3)] rounded-xl ">
                <img
                  src="https://crazyaboutpizza.in/pizza/White%20Sauce%20Pasta.jpg"
                  alt=""
                  className="rounded-t-xl h-25 w-60"
                />
                <div className="flex justify-between px-2">
                  <div>
                    <div className="text-lg font-bold"> Pasta</div>
                    <div className="text-gray-500 text-sm">Italian hub</div>
                  </div>
                  <Heart className="text-red-500 pt-2" size={28} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex   my-4  py-2 px-2  justify-end">
          <div className="gap-6 flex">
            <button className=" bg-blue-200 text-xl font-bold text-blue-600 py-1.5 rounded-xl px-3">
              Edit profile
            </button>
            <button className=" bg-red-200 text-xl flex font-bold text-red-600 py-1.5 rounded-xl px-3">
              Log out <ChevronRight className="pt-1" />{" "}
            </button>
          </div>
        </div>
      </div>

      <div
        className="bg-cover bg-center bg-no-repeat p-8 flex justify-between mt-1   px-15 pr-60"
        style={{ backgroundImage: `url(${Profileimg})` }}
      >
        {/* 1 */}
        <div className="flex gap-20">
          <div className="">
            <div className="text-2xl text-red-400 font-extrabold">
              Taaj Food
            </div>
            <div className="text-gray-500 text-lg">
              Good Food Brighter People
            </div>
          </div>
          {/* 2 */}
          <div>
            <div className="font-bold text-lg">Quick Links</div>
            <div>
              <a href="/home" className="text-sm">
                Home
              </a>
            </div>
            <div>
              <a href="/list" className="text-sm">
                Restaurants
              </a>
            </div>
            <div>
              <a href="/offers" className="text-sm">
                Offers
              </a>
            </div>
            <div>
              <a href="/about" className="text-sm">
                About
              </a>
            </div>
          </div>
          {/* 3 */}
          <div>
            <div className="font-bold text-lg">Support</div>
            <div>
              <a href="/home" className="text-sm">
                Help Center
              </a>
            </div>
            <div>
              <a href="/list" className="text-sm">
                Contact Us
              </a>
            </div>
            <div>
              <a href="/offers" className="text-sm">
                Privacy Policy
              </a>
            </div>
            <div>
              <a href="/about" className="text-sm">
                Terms and conditions
              </a>
            </div>
          </div>
        </div>

        <img src={scooterImg} alt="" className="h-40 w-40" />
      </div>
    </div>
  );
};

export default ProfilePage;
