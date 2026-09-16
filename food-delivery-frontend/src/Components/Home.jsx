import React from "react";
import "./Home.css";

import {
  FaTruck,
  FaCrown,
  FaShieldAlt,
  FaHeadset,
  FaMotorcycle,
  FaHeart,
} from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
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
      <div className="home-wrapper">
        <section className="Hero">
          <div className="hero-content">
            <h1>
              Delicious Food <br />
              <span className="Delivered-text">Delivered</span> To You{" "}
            </h1>
            <p>
              Discover the best restaurants near you, <br /> Order your
              favourite meals and enjoy fast delivery at your door step
            </p>

            <button className="hero-order-btn">Order Now</button>
            <button className="hero-explore-restaurants-btn">
              Explore Restaurants
            </button>

            <div className="choose">
              <div className="choose-item">
                <FaTruck size={28} />
                <div>
                  <h3>Fast Delivery</h3>
                  <p>On time, every time</p>
                </div>
              </div>

              <div className="choose-item">
                <FaUtensils size={28} />
                <div>
                  <h3>Wide Variety</h3>
                  <p>From local to global</p>
                </div>
              </div>

              <div className="choose-item">
                <FaStar size={28} />
                <div>
                  <h3>Trusted By Millions</h3>
                  <p>Safe and secure</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-img">
            <img src={foodImage} alt="" />
          </div>
        </section>

        <section className="categories-section">
          <h2> What are you craving ?</h2>
          <p>Explore our wide range of cuisines</p>

          <div className="categories-list">
            <div>
              <img src={pizzaImage} alt="" />
              <span>Pizza</span>
            </div>
            <div>
              <img src={burgerImage} alt="" />
              <span>Burger</span>
            </div>
            <div>
              <img src={chickenImage} alt="" />
              <span>Chicken</span>
            </div>
            <div>
              <img src={noodelesImage} alt="" />
              <span>Noodles</span>
            </div>
            <div>
              <img src={indianFoofImage} alt="" />
              <span>Indian</span>
            </div>
            <div>
              <img src={dessertsImage} alt="" />
              <span>Desserts</span>
            </div>
            <div>
              <img src={bevaragesImage} alt="" />
              <span>Bevarages</span>
            </div>
            <div>
              
            </div>
          </div>
        </section>

        <section className="restaurants-section">
          <h2>Popular Restaurants Near You</h2>
          <p>Discover The most loved restaurants in your area</p>

          <div className="restaurants-card-container">
            <div className="restaurantscard">
              <img src={chickenBiryaniImg} alt="" />
              <h3>The Food Hub</h3>
              <span>North indian, Chinese</span>
              <p>4.6</p>
            </div>
            <div className="restaurantscard">
              <img src={choleBhatureImg} alt="" />
              <h3>Food Court</h3>
              <span>Mexican, Italian</span>
              <p>4.3</p>
            </div>
            <div className="restaurantscard">
              <img src={tikkaImg} alt="" />
              <h3>Urban Bites</h3>
              <span>Continental, Italian</span>
              <p>3.9</p>
            </div>
            <div className="restaurantscard">
              <img src={sweetImg} alt="" />
              <h3>Spice Villa</h3>
              <span>Biryani, Mughlai</span>
              <p>4.5</p>
            </div>
          </div>
        </section>

        <section className="offers-section">
          <div className="offers-card-container">
            <div className="offer-card">
              <div>
                <h2>Get 50% Off</h2>
                <p>On your first order</p>
                <button>Order Now</button>
              </div>
              <img src={pizzaOfferImage} alt="" />
            </div>

            <div className="offer-card meal-offer-bg">
              <div>
                <h2>
                  Tasty Meals <br />
                  At Grater Prices
                </h2>
                <p>
                  Enjoy Delicious Food without <br />
                  breaking the bank
                </p>
                <button>Order Now</button>
              </div>
              <img src={mealOfferImage} alt="" />
            </div>
          </div>
        </section>

        <section className="footer-section">
          <h2>Why Choose Us?</h2>

          <div className="services">
            <div className="service-speciality">
              <FaMotorcycle size={43} color="red" />

              <div className="service-text">
                <h4>
                  Fast & Reliable <br />
                  Delivery
                </h4>
              </div>
            </div>

            <div className="service-speciality">
              <FaCrown size={39} color="red" />
              <div>
                <h4>
                  Wide Range <br />
                  Of Restaurants
                </h4>
              </div>
            </div>

            <div className="service-speciality">
              <FaShieldAlt size={39} color="red" />
              <div>
                <h4>Safe and secure</h4>
              </div>
            </div>

            <div className="service-speciality">
              <FaHeadset size={39} color="red" />
              <div>
                <h4>
                  24/7 <br /> Customer Support
                </h4>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="home-footer">
        <div className="footer-content">
          <span>Good Food Brings People Together </span>
          <FaHeart size={18} color="red" />
        </div>
      </footer>
    </>
  );
};

export default Home;
