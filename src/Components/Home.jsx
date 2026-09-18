import React from "react";

import {
  FaTruck,
  FaCrown,
  FaShieldAlt,
  FaHeadset,
  FaMotorcycle,
  FaHeart,
  FaUtensils,
  FaStar,
} from "react-icons/fa";

import foodImage from "../assets/food.png";
import pizzaImage from "../assets/pizza.png";
import burgerImage from "../assets/burger.png";
import chickenImage from "../assets/chicken.png";
import noodelesImage from "../assets/noodles.png";
import indianFoofImage from "../assets/indian-food.png";
import dessertsImage from "../assets/desserts.png";
import bevaragesImage from "../assets/bevarages.png";

import chickenBiryaniImg from "../assets/chickenBiryani.png";
import choleBhatureImg from "../assets/choleBhature.png";
import tikkaImg from "../assets/chickenTikka.png";
import sweetImg from "../assets/sweet.png";

import pizzaOfferImage from "../assets/pizza-offer.png";
import mealOfferImage from "../assets/meal-offer.png";

const Home = () => {
  return (
    <>
      <div className="w-full ml-7">


        <section className="flex mt-1 ml-9 items-center">

          <div>

            <h1 className="text-[55px] font-bold leading-tight mb-1">
              Delicious Food <br />
              <span className="text-red-600">Delivered</span> To You
            </h1>

            <p className="text-[17px] text-gray-600 tracking-wide mt-3">
              Discover the best restaurants near you, <br />
              Order your favourite meals and enjoy fast delivery at your door step
            </p>


            <div className="flex items-center gap-3 mt-6">

              <button className="text-white bg-red-600 px-7 py-4 rounded-lg text-[17px]">
                Order Now
              </button>

              <button className="text-gray-800 bg-white px-7 py-4 rounded-lg text-[17px] border border-gray-400">
                Explore Restaurants
              </button>

            </div>



            <div className="flex items-center gap-10 mt-9">

              <div className="flex items-center gap-4">

                <FaTruck size={28} />

                <div>
                  <h3 className="text-xl font-semibold">
                    Fast Delivery
                  </h3>

                  <p className="text-xs text-gray-600 mt-1">
                    On time, every time
                  </p>
                </div>

              </div>


              <div className="flex items-center gap-4">

                <FaUtensils size={28} />

                <div>
                  <h3 className="text-xl font-semibold">
                    Wide Variety
                  </h3>

                  <p className="text-xs text-gray-600 mt-1">
                    From local to global
                  </p>
                </div>

              </div>


              <div className="flex items-center gap-4">

                <FaStar size={28} />

                <div>
                  <h3 className="text-xl font-semibold">
                    Trusted By Millions
                  </h3>

                  <p className="text-xs text-gray-600 mt-1">
                    Safe and secure
                  </p>
                </div>

              </div>

            </div>

          </div>



          <div className="ml-36">

            <img
              src={foodImage}
              alt=""
              className="w-[560px] h-[550px] object-cover"
            />

          </div>

        </section>



        <section className="text-center mt-2 mx-7">

          <h2 className="text-[39px] font-bold mb-1">
            What are you craving?
          </h2>

          <p className="mt-2 mb-8 text-[15px] text-gray-600 font-semibold tracking-wide">
            Explore our wide range of cuisines
          </p>


          <div className="flex gap-13">

            <div className="text-center">
              <img
                src={pizzaImage}
                alt=""
                className="w-[150px] h-[150px] object-cover"
              />
              <span className="text-base font-semibold">
                Pizza
              </span>
            </div>


            <div className="text-center">
              <img
                src={burgerImage}
                alt=""
                className="w-[150px] h-[150px] object-cover"
              />
              <span className="text-base font-semibold">
                Burger
              </span>
            </div>


            <div className="text-center">
              <img
                src={chickenImage}
                alt=""
                className="w-[150px] h-[150px] object-cover"
              />
              <span className="text-base font-semibold">
                Chicken
              </span>
            </div>


            <div className="text-center">
              <img
                src={noodelesImage}
                alt=""
                className="w-[150px] h-[150px] object-cover"
              />
              <span className="text-base font-semibold">
                Noodles
              </span>
            </div>


            <div className="text-center">
              <img
                src={indianFoofImage}
                alt=""
                className="w-[150px] h-[150px] object-cover"
              />
              <span className="text-base font-semibold">
                Indian
              </span>
            </div>


            <div className="text-center">
              <img
                src={dessertsImage}
                alt=""
                className="w-[150px] h-[150px] object-cover"
              />
              <span className="text-base font-semibold">
                Desserts
              </span>
            </div>


            <div className="text-center">
              <img
                src={bevaragesImage}
                alt=""
                className="w-[150px] h-[150px] object-cover"
              />
              <span className="text-base font-semibold">
                Bevarages
              </span>
            </div>

          </div>

        </section>



        <section className="mt-10 ml-6 mr-20">

          <h2 className="text-[34px] font-bold mb-1">
            Popular Restaurants Near You
          </h2>

          <p className="mt-2 text-[15px] text-gray-600 font-semibold">
            Discover The most loved restaurants in your area
          </p>


          <div className="flex gap-9 mt-7 w-[1360px]">


            <div className="pb-4 h-[345px] w-[480px] bg-white shadow-lg rounded-2xl overflow-hidden">

              <img
                src={chickenBiryaniImg}
                alt=""
                className="h-[240px] w-full object-cover"
              />

              <h3 className="text-[19px] mt-2 ml-4 font-semibold">
                The Food Hub
              </h3>

              <span className="text-[15px] ml-4 text-gray-600">
                North Indian, Chinese
              </span>

              <div className="mt-1 ml-4">

                <span className="inline-block bg-green-600 text-white px-2 py-1 rounded text-sm">
                  ★ 4.6
                </span>

                <span className="ml-2 text-sm text-gray-600">
                  (2302)
                </span>

              </div>

            </div>



            <div className="pb-4 h-[345px] w-[480px] bg-white shadow-lg rounded-2xl overflow-hidden">

              <img
                src={choleBhatureImg}
                alt=""
                className="h-[240px] w-full object-cover"
              />

              <h3 className="text-[19px] mt-2 ml-4 font-semibold">
                Food Court
              </h3>

              <span className="text-[15px] ml-4 text-gray-600">
                Mexican, Italian
              </span>

              <div className="mt-1 ml-4">

                <span className="inline-block bg-green-600 text-white px-2 py-1 rounded text-sm">
                  ★ 4.6
                </span>

                <span className="ml-2 text-sm text-gray-600">
                  (2302)
                </span>

              </div>

            </div>



            <div className="pb-4 h-[345px] w-[480px] bg-white shadow-lg rounded-2xl overflow-hidden">

              <img
                src={tikkaImg}
                alt=""
                className="h-[240px] w-full object-cover"
              />

              <h3 className="text-[19px] mt-2 ml-4 font-semibold">
                Urban Bites
              </h3>

              <span className="text-[15px] ml-4 text-gray-600">
                Continental, Italian
              </span>

              <div className="mt-1 ml-4">

                <span className="inline-block bg-green-600 text-white px-2 py-1 rounded text-sm">
                  ★ 4.1
                </span>

                <span className="ml-2 text-sm text-gray-600">
                  (2302)
                </span>

              </div>

            </div>



            <div className="pb-4 h-[345px] w-[480px] bg-white shadow-lg rounded-2xl overflow-hidden">

              <img
                src={sweetImg}
                alt=""
                className="h-[240px] w-full object-cover"
              />

              <h3 className="text-[19px] mt-2 ml-4 font-semibold">
                Spice Villa
              </h3>

              <span className="text-[15px] ml-4 text-gray-600">
                Biryani, Mughlai
              </span>

              <div className="mt-1 ml-4">

                <span className="inline-block bg-green-600 text-white px-2 py-1 rounded text-sm">
                  ★ 4.3
                </span>

                <span className="ml-2 text-sm text-gray-600">
                  (2302)
                </span>

              </div>

            </div>

          </div>

        </section>



        <section className="ml-6 mb-10">

          <div className="flex gap-8 mt-7 mr-8 w-[1470px]">



            <div className="flex justify-between items-center h-[220px] w-[660px] p-5 bg-red-200 shadow-lg rounded-2xl overflow-hidden">

              <div>

                <h2 className="text-[38px] font-bold text-red-700">
                  Get 50% Off
                </h2>

                <p className="mt-2 text-sm text-gray-700">
                  On your first order
                </p>

                <h3 className="mt-2 text-base font-semibold">
                  Save more, Eat more
                </h3>

                <button className="mt-5 bg-white px-5 py-2 rounded-lg text-base font-bold text-red-600 shadow-lg">
                  Order Now
                </button>

              </div>

              <img
                src={pizzaOfferImage}
                alt=""
                className="h-[200px] w-[225px] object-contain"
              />

            </div>



            <div className="flex justify-between items-center h-[220px] w-[669px] p-5 bg-orange-300 shadow-lg rounded-2xl overflow-hidden">

              <div>

                <h2 className="text-[32px] font-bold text-black">
                  Tasty Meals <br />
                  At Greater Prices
                </h2>

                <p className="mt-2 text-sm text-gray-700">
                  Enjoy Delicious Food without <br />
                  breaking the bank
                </p>

                <button className="mt-3 bg-white px-3 py-2 rounded-lg text-sm font-bold text-red-600 shadow-lg">
                  Order Now
                </button>

              </div>

              <img
                src={mealOfferImage}
                alt=""
                className="h-[200px] w-[225px] object-contain"
              />

            </div>

          </div>

        </section>



        <section className="text-center ml-16 mr-20">

          <h2 className="text-[32px] font-bold mb-6">
            Why Choose Us?
          </h2>


          <div className="flex items-center justify-center gap-42 mr-39">



            <div className="flex flex-col items-center justify-center text-sm">

              <FaMotorcycle size={45} color="red" />

              <h4 className="mt-2 font-semibold">
                Fast & Reliable <br />
                Delivery
              </h4>

            </div>



            <div className="flex flex-col items-center justify-center text-sm">

              <FaCrown size={43} color="red" />

              <h4 className="mt-2 font-semibold">
                Wide Range <br />
                Of Restaurants
              </h4>

            </div>



            <div className="flex flex-col items-center justify-center text-sm">

              <FaShieldAlt size={43} color="red" />

              <h4 className="mt-2 font-semibold">
                Safe and secure
              </h4>

            </div>



            <div className="flex flex-col items-center justify-center text-sm">

              <FaHeadset size={43} color="red" />

              <h4 className="mt-2 font-semibold">
                24/7 <br />
                Customer Support
              </h4>

            </div>

          </div>

        </section>

      </div>



      <footer className="w-full text-center border-t border-gray-300 mt-3 py-5">

        <div className="flex items-center justify-center gap-1">

          <span className="text-[13px] text-gray-700">
            Good Food Brings People Together
          </span>

          <FaHeart size={19} color="red" />

        </div>

      </footer>

    </>
  );
};

export default Home;