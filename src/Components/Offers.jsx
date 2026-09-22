import React from "react";
import { FaPlus } from "react-icons/fa";
import pizzaImage from "../assets/pizza.png";
import burgerImage from "../assets/burger.png";
import chickenImage from "../assets/chicken.png";
import noodelesImage from "../assets/noodles.png";
import indianFoofImage from "../assets/indian-food.png";
import dessertsImage from "../assets/desserts.png";
import bevaragesImage from "../assets/bevarages.png";
import chickenBiryaniImg from "../assets/chickenBiryani.png";
import tikkaImg from "../assets/chickenTikka.png";
import burgerOfferImg from "../assets/burger-offer.png";
import parathaImg from "../assets/paratha.png";
import pizzaOfferImage from "../assets/pizza-offer.png";
import burgerFriesImg from "../assets/combo-offer.png";
import scooterImg from "../assets/delivery-scooter.png";
import pizzaComboImg from "../assets/pizza-combo.png";
import biryaniraitaImg from "../assets/biryani-raita-combo.png";
import burgerComboImg from "../assets/burger-combo.png";
import ChineseComboImg from "../assets/chinese-combo.png";
import footerPizzaImg from "../assets/footer-pizza.png";

import offerImage from "../assets/offers.png";
import { useNavigate } from "react-router-dom";

const Offers = () => {
  const naviagate = useNavigate()
  const handleNavigation=()=>{
    naviagate(`/list`)
  }
  return (
    <div>
      <section className="w-full px-8 py-3 flex bg-pink-100 h-[460px] overflow-hidden">
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-red-600 mb-1">
            EXCLUSIVE OFFERS
          </h3>

          <h1 className="text-5xl font-semibold leading-tight mb-0">
            Hot Deals <br />
            On Your Favourite <br />
            Food
          </h1>

          <p className="mt-2 text-base text-gray-700 tracking-wide">
            Discover the best restaurants near you, <br />
            Order your favourite meals and enjoy fast delivery at your door step
          </p>

          <div className="flex gap-5 mt-6">
            <input
              type="text"
              placeholder="Search offers restaurant or cuisines..."
              className="bg-white w-80 px-5 py-3 border border-gray-300 rounded-lg outline-none text-sm"
            />

            <button className="bg-red-500 text-white px-7 py-3 rounded-lg text-sm hover:bg-red-600">
              Search
            </button>
          </div>
        </div>

        <div className="ml-48">
          <img
            src={offerImage}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </section>

      <section className="mx-7 mt-10">
        <h2 className="text-3xl ml-2 font-semibold text-gray-800">
          OFFERS BY CUISINE
        </h2>

        <p className="mt-2 ml-2 mb-8 text-gray-600 text-sm font-semibold">
          Find the best deals on your favorite cuisines
        </p>

        <div className="flex gap-18">
          <div className="text-center">
            <img
              src={pizzaImage}
              alt=""
              className="w-35 h-35
               object-cover"
            />
            <span className="text-base font-semibold">Pizza</span>
          </div>

          <div className="text-center">
            <img src={burgerImage} alt="" className="w-35 h-35 object-cover" />
            <span className="text-base font-semibold">Burger</span>
          </div>

          <div className="text-center">
            <img src={chickenImage} alt="" className="w-35 h-35 object-cover" />
            <span className="text-base font-semibold">Chicken</span>
          </div>

          <div className="text-center">
            <img
              src={noodelesImage}
              alt=""
              className="w-35 h-35 object-cover"
            />
            <span className="text-base font-semibold">Noodles</span>
          </div>

          <div className="text-center">
            <img
              src={indianFoofImage}
              alt=""
              className="w-35 h-36 object-cover"
            />
            <span className="text-base font-semibold">Indian</span>
          </div>

          <div className="text-center">
            <img
              src={dessertsImage}
              alt=""
              className="w-35 h-35 object-cover"
            />
            <span className="text-base font-semibold">Desserts</span>
          </div>

          <div className="text-center">
            <img
              src={bevaragesImage}
              alt=""
              className="w-35 h-35 object-cover"
            />
            <span className="text-base font-semibold">Beverages</span>
          </div>
        </div>

        <div className="mt-10 ml-4">
          <h2 className="text-3xl font-semibold text-gray-800">
            TOP OFFERS FOR YOU
          </h2>

          <p className="mt-1 text-gray-600 text-sm font-medium">
            Handpicked deals to make your meal special
          </p>

          <div className="flex flex-wrap gap-8 mt-7">
            <div className="flex justify-between items-center w-83 h-52 p-5 bg-red-200 shadow-lg rounded-2xl overflow-hidden">
              <div>
                <h2 className="text-2xl font-bold text-red-700">Get 50% Off</h2>

                <p className="mt-2 text-sm text-gray-700">
                  On your first order
                </p>

                <button className="mt-2 bg-white px-3 py-2 rounded-lg text-sm font-bold text-red-600 shadow-lg">
                  Order Now
                </button>
              </div>

              <img
                src={pizzaOfferImage}
                alt=""
                className="w-44 h-32 object-contain"
              />
            </div>

            <div className="flex justify-between items-center w-83 h-52 p-5 bg-orange-200 shadow-lg rounded-2xl overflow-hidden">
              <div>
                <span className="text-base font-semibold">FLAT</span>

                <h2 className="text-2xl font-bold text-red-600">$1.00 OFF</h2>
                <p className="mt-2 text-sm text-gray-700">
                  On orders above{" "}
                  <span className="font-semibold mt-2 text-red-500">
                    {" "}
                    <br />
                    $5.00
                  </span>
                </p>

                <button className="mt-2 bg-white px-3 py-2 rounded-lg text-sm font-bold text-red-600 shadow-lg">
                  Order Now
                </button>
              </div>

              <img
                src={burgerFriesImg}
                alt=""
                className="w-44 h-32 object-contain"
              />
            </div>

            <div className="flex justify-between items-center w-83 h-52 p-4 bg-green-200 shadow-lg rounded-2xl overflow-hidden">
              <div>
                <h2 className="text-2xl font-bold leading-tight">
                  <span className="text-2xl">FREE</span>
                  <br />
                  DELIVERY
                </h2>

                <p className="mt-2 text-sm text-gray-700">
                  On selected restaurants
                </p>

                <button className="mt-5 bg-white px-3 py-2 rounded-lg text-sm font-bold text-red-600 shadow-lg">
                  Order Now
                </button>
              </div>

              <img
                src={scooterImg}
                alt=""
                className="w-24 h-32 object-contain ml-2"
              />
            </div>

            <div className="flex justify-between items-center w-83 h-52 p-5 bg-pink-200 shadow-lg rounded-2xl overflow-hidden">
              <div>
                <h2 className="text-2xl font-bold text-red-600 leading-tight">
                  Combo Deals
                </h2>

                <p className="mt-2 text-sm text-gray-700">
                  Starting at{" "}
                  <span className="text-red-500 text-lg font-bold">$2</span>
                </p>
                <button className="mt-5 bg-white px-3 py-2 rounded-lg text-sm font-bold text-red-600 shadow-lg">
                  Order Now
                </button>
              </div>

              <img
                src={burgerFriesImg}
                alt=""
                className="w-40 h-32 object-contain mt-4"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-10 mt-20 mb-10">
        <h2 className="text-3xl font-semibold text-gray-800">
          RESTAURANTS WITH BEST DEALS
        </h2>

        <p className="mt-2 text-sm text-gray-600">
          Enjoy exclusive offers from top-rated restaurants
        </p>

        <div className="w-full flex gap-6  mt-7">
          <div className="w-85 bg-white shadow-xl rounded-2xl overflow-hidden">
            <img
              src={burgerOfferImg}
              alt=""
              className="w-full h-48 object-cover"
            />

            <h3 className="mt-2 ml-5 text-lg font-semibold">Burger Point</h3>

            <p className="mt-1 ml-5 text-sm text-gray-500">Indian, Fast Food</p>

            <div className="mt-2 ml-4">
              <span className="bg-green-600 text-white text-sm px-2 py-1 rounded-md">
                ★ 4.6
              </span>

              <span className="ml-2 text-sm text-gray-500">(3520)</span>
            </div>

            <div className="mt-3  ml-4 w-72 p-2 bg-red-100 border border-dashed border-red-500 rounded-lg text-sm">
              <div>50% OFF up to $2.41</div>

              <div className="mt-1">
                Use Code
                <span className="bg-red-300 ml-2 px-2 py-1 rounded font-semibold">
                  ZOMATO50
                </span>
              </div>
            </div>
          </div>

          <div className="w-85 bg-white shadow-xl rounded-2xl overflow-hidden">
            <img
              src={chickenBiryaniImg}
              alt=""
              className="w-full h-48 object-cover"
            />

            <h3 className="mt-2 ml-5 text-lg font-semibold">The Food Hub</h3>

            <p className="mt-1 ml-5 text-sm text-gray-500">
              North Indian, Chinese
            </p>

            <div className="mt-2 ml-4">
              <span className="bg-green-600 text-white text-sm px-2 py-1 rounded-md">
                ★ 4.6
              </span>

              <span className="ml-2 text-sm text-gray-500">(3520)</span>
            </div>

            <div className="mt-3 mb-4 ml-4 w-72 p-2 bg-red-100 border border-dashed border-red-500 rounded-lg text-sm">
              <div>40% OFF up to $5.00</div>

              <div className="mt-1">
                Use Code
                <span className="mb-2 bg-red-300 ml-2 px-2 py-1 rounded font-semibold">
                  BIRYANI40
                </span>
              </div>
            </div>
          </div>

          <div className="w-85  bg-white shadow-xl rounded-2xl overflow-hidden">
            <img src={parathaImg} alt="" className="w-full h-48 object-cover" />

            <h3 className="mt-2 ml-5 text-lg font-semibold">Food Court</h3>

            <p className="mt-1 ml-5 text-sm text-gray-500">Mexican, Italian</p>

            <div className="mt-2 ml-4">
              <span className="bg-green-600 text-white text-sm px-2 py-1 rounded-md">
                ★ 4.6
              </span>

              <span className="ml-2 text-sm text-gray-500">(3520)</span>
            </div>

            <div className="mt-3 ml-4 w-72 p-2 bg-red-100 border border-dashed border-red-500 rounded-lg text-sm">
              <div>25% OFF up to $5.00</div>

              <div className="mt-1">
                Use Code
                <span className="bg-red-300 ml-2 px-2 py-1 rounded font-semibold">
                  NEW25
                </span>
              </div>
            </div>
          </div>

          <div className="w-85  bg-white shadow-xl rounded-2xl overflow-hidden">
            <img src={tikkaImg} alt="" className="w-full h-48 object-cover " />

            <h3 className="mt-2 ml-5 text-lg font-semibold">Urban Bites</h3>

            <p className="mt-1 ml-5 text-sm text-gray-500">
              Continental, Italian
            </p>

            <div className="mt-2 ml-4">
              <span className="bg-green-600 text-white text-sm px-2 py-1 rounded-md">
                ★ 4.6
              </span>

              <span className="ml-2 text-sm text-gray-500">(3520)</span>
            </div>

            <div className="mt-3 ml-4 w-72 p-2 bg-red-100 border border-dashed border-red-500 rounded-lg text-sm">
              <div>30% OFF up to $3.00</div>

              <div className="mt-1">
                Use Code{" "}
                <span className="bg-red-300 px-2 py-1 rounded font-semibold">
                  FREE30
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-10 mt-13 mb-10">
        <h2 className="text-3xl font-semibold text-gray-800">
          EXCLUSIVE COMBOS
        </h2>
        <p className="mt-2 text-sm text-gray-600">Great Taste, greater value</p>

        <div className="w-full flex gap-7 mt-7 ">
          <div className="h-42 flex w-90 shadow-2xl rounded-2xl overflow-hidden">
            <div className="w-55 h-50">
              <img src={pizzaComboImg} alt="" className="h-full object-cover" />
            </div>
            <div className="w-full pl-6 bg-white shadow-2xl rounded-2xl overflow-hidden">
              <h3 className="mt-5 text-lg font-bold">Pizza Feast Combo</h3>
              <p className=" mt-2 text-xs text-gray-600">
                Pizza + Garlic Bread + Coke
              </p>
              <p className="mt-3">
                <span className="font-bold">$</span>3.60{" "}
                <span className="ml-2 text-gray-500 line-through">$6.00</span>
              </p>

              <div className="flex items-center gap-8 mt-3">
                <span className="bg-red-300 py-1 px-2 text-sm text-red-700 rounded-md">
                  40% OFF
                </span>

                <button className="w-7 h-7 bg-red-600 text-white rounded-full flex items-center justify-center">
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>

          <div className="h-42 flex w-90 shadow-2xl rounded-2xl overflow-hidden">
            <div className="w-55 h-50">
              <img
                src={biryaniraitaImg}
                alt=""
                className="h-full object-cover"
              />
            </div>
            <div className="w-full pl-6 bg-white shadow-2xl rounded-2xl overflow-hidden">
              <h3 className="mt-5 text-lg font-bold"> Biryani Speacial</h3>
              <p className=" mt-2 text-xs text-gray-600">
                Biryani + Raita + Cold Drink
              </p>
              <p className="mt-3">
                <span className="font-bold">$</span>3.00{" "}
                <span className="ml-2 text-gray-500 line-through">$4.80</span>
              </p>

              <div className="flex items-center gap-8 mt-3">
                <span className="bg-red-300 py-1 px-2 text-sm text-red-700 rounded-md">
                  37% OFF
                </span>

                <button className="w-7 h-7 bg-red-600 text-white rounded-full flex items-center justify-center">
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>

          <div className="h-42 flex w-90 shadow-2xl rounded-2xl overflow-hidden">
            <div className="w-65 h-50">
              <img
                src={burgerComboImg}
                alt=""
                className="h-full object-cover"
              />
            </div>
            <div className="w-full pl-6 bg-white shadow-2xl rounded-2xl overflow-hidden">
              <h3 className="mt-5 text-lg font-bold">Burger Combo</h3>
              <p className=" mt-2 text-xs text-gray-600">
                Burger + Fries + Coke
              </p>
              <p className="mt-3">
                <span className="font-bold">$</span>2.40{" "}
                <span className="ml-2 text-gray-500 line-through">$4.80</span>
              </p>

              <div className="flex items-center gap-8 mt-3">
                <span className="bg-red-300 py-1 px-2 text-sm text-red-700 rounded-md">
                  33% OFF
                </span>

                <button className="w-7 h-7 bg-red-600 text-white rounded-full flex items-center justify-center">
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>

          <div className="h-42 flex w-90 shadow-2xl rounded-2xl overflow-hidden">
            <div className="w-55 h-50">
              <img
                src={ChineseComboImg}
                alt=""
                className="h-full object-cover"
              />
            </div>
            <div className="w-full pl-6 bg-white shadow-2xl rounded-2xl overflow-hidden">
              <h3 className="mt-5 text-lg font-bold">Chinese Combo</h3>
              <p className=" mt-2 text-xs text-gray-600">
                Noodles + Manchuarian + Drink
              </p>
              <p className="mt-3">
                {" "}
                <span className="font-bold">$</span>2.8{" "}
                <span className="ml-2 text-gray-500 line-through">$3.2</span>
              </p>

              <div className="flex items-center gap-8 mt-3">
                <span className="bg-red-300 py-1 px-2 text-sm text-red-700 rounded-md">
                  37% OFF
                </span>

                <button className="w-7 h-7 bg-red-600 text-white rounded-full flex items-center justify-center">
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-10 mt-13 mb-10">
        <div className="w-full h-59 flex px-10 py-8 shadow-xl rounded-xl bg-red-200">
          <div className="mt-2">
            <h2 className="text-4xl font-semibold text-black-700">
              Hungry? <br /> Great Offers are just a click away!
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Order now and enjoy delicious food at amazing prices
            </p>
          </div>

          <div className="mt-0">
            <img
              src={footerPizzaImg}
              alt=""
              className="w-150 h-50 mb-2 object-contain"
            />
          </div>

          <div>   <button onClick={handleNavigation} className="h-15 mt-15 mr-17 w-57 px-8 rounded-xl text-lg bg-red-600 text-white">
              Explore Restaurants
            </button></div>
         
        </div>
      </section>
    </div>
  );
};

export default Offers;
