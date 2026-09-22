import React from "react";
import aboutImg from "../assets/about1.png";
import aboutImg2 from "../assets/about2.png";
import joinUsImg from "../assets/join-us-banner.png";

import {
  FaUtensils,
  FaMapMarkerAlt,
  FaUsers,
  FaShieldAlt,
} from "react-icons/fa";

const About = () => {
  return (
    <div>
      <section>
        <div className="w-full flex mx-15 my-15">
          <div>
            <h2 className="text-2xl text-red-600 font-bold">ABOUT US </h2>
            <h2 className="text-6xl mt-2">
              Good Food <br /> Brings People{" "}
              <span className="text-5xl text-red-600">Together</span>
            </h2>
            <p className="text-lg mt-5 text-gray-600">
              At Taj Food App, we belive food is more than just a meal. It's an
              experience that connects <br /> people cultures and communities.
              Our mission is to make great food accessible <br /> to everyone,
              everywhere
            </p>
            <button className="h-15 mt-5 w-fit px-5 rounded-xl text-lg bg-red-600 text-white">
              Explore Restaurants
            </button>
          </div>

          <div className="rounded-xl ml-33 overflow-hidden">
            <img src={aboutImg} alt="" className="w-140 h-90 object-cover" />
          </div>
        </div>
      </section>

      <div className="w-full bg-pink-50 rounded-2xl py-6 px-8 flex justify-around items-center mt-10">
        <div className="text-center">
          <div className="w-14 h-14 mx-auto rounded-full bg-red-100 flex items-center justify-center">
            <FaUtensils className="text-2xl text-red-500" />
          </div>

          <h3 className="mt-3 text-lg font-bold">Wide Variety</h3>

          <p className="mt-1 text-sm text-gray-600">
            From local favourites
            <br />
            to global cuisines
          </p>
        </div>

        <div className="text-center">
          <div className="w-14 h-14 mx-auto rounded-full bg-red-100 flex items-center justify-center">
            <FaMapMarkerAlt className="text-2xl text-red-500" />
          </div>

          <h3 className="mt-3 text-lg font-bold">Across Cities</h3>

          <p className="mt-1 text-sm text-gray-600">
            Serving in 100+
            <br />
            cities
          </p>
        </div>

        <div className="text-center">
          <div className="w-14 h-14 mx-auto rounded-full bg-red-100 flex items-center justify-center">
            <FaUsers className="text-2xl text-red-500" />
          </div>

          <h3 className="mt-3 text-lg font-bold">Trusted by Millions</h3>

          <p className="mt-1 text-sm text-gray-600">
            Loved by foodies
            <br />
            across India
          </p>
        </div>

        <div className="text-center">
          <div className="w-14 h-14 mx-auto rounded-full bg-red-100 flex items-center justify-center">
            <FaShieldAlt className="text-2xl text-red-500" />
          </div>

          <h3 className="mt-3 text-lg font-bold">Safe & Reliable</h3>

          <p className="mt-1 text-sm text-gray-600">
            Your food, our
            <br />
            responsibility
          </p>
        </div>
      </div>

      <section>
        <div className="w-full flex mx-15 my-15">
          <div className="rounded-xl  overflow-hidden">
            <img src={aboutImg2} alt="" className="w-140 h-90 object-cover" />
          </div>
          <div className="ml-30">
            <h2 className="text-2xl text-red-600 font-bold">OUR STORY </h2>
            <h2 className="text-6xl mt-2">
              From a Simple Idea <br /> to a{" "}
              <span className="text-5xl text-red-600">Bigger Purpose</span>
            </h2>
            <p className="text-lg mt-4 text-gray-600">
              What started as a simple idea to help people discover great places{" "}
              <br /> to eat has grown into one of the most trusted food
              platforms in the country. <br />
              Today, Zomato connects millions of customers with thousands of
              restaurants, <br /> making food discovery and delivery simpler,
              faster and more delightful.
            </p>
            <button className="h-15 mt-4 w-fit px-5 rounded-xl text-lg bg-red-600 text-white">
              Explore Restaurants
            </button>
          </div>
        </div>
      </section>

      <div className="w-full bg-pink-50 rounded-2xl py-6 px-8 flex justify-around items-center mt-10">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-red-600">10K+</h2>
          <p className="mt-2 text-gray-600">Happy Customers</p>
        </div>

        <div className="h-16 w-px bg-red-200"></div>

        <div className="text-center">
          <h2 className="text-4xl font-bold text-red-600">5K+</h2>
          <p className="mt-2 text-gray-600">Restaurant Partners</p>
        </div>

        <div className="h-16 w-px bg-red-200"></div>

        <div className="text-center">
          <h2 className="text-4xl font-bold text-red-600">100+</h2>
          <p className="mt-2 text-gray-600">Cities Served</p>
        </div>
      </div>


  <div className="w-full">
 <section
  className="relative h-[300px] mx-8 rounded-2xl my-8 overflow-hidden mt-10 bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${joinUsImg})`,
    backgroundSize: "105% 165%",
  }}
>
        <div className="absolute left-10 top-10">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Let's Make Food
            <br />
            Experiences <span className="text-red-600">Better</span>
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Be a part of our journey towards a tastier,
            <br />
            happier tomorrow.
          </p>

          <button className="mt-5 px-6 py-3 bg-red-600 text-white rounded-xl text-lg">
            Be a Part of Our Story →
          </button>
        </div>
      </section>
  </div>
     
    </div>
  );
};

export default About;
