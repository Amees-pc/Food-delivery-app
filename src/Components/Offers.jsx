import React from "react";
import "./Offers.css";
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
import burgerOfferImg from "../assets/burger-offer.png";
import parathaImg from "../assets/paratha.png";
import pizzaOfferImage from "../assets/pizza-offer.png";
import burgerFriesImg from "../assets/combo-offer.png";
import scooterImg from "../assets/delivery-scooter.png";

import offerImage from "../assets/offers.png";

const Offers = () => {
  return (
    <div className="offer-page-container">
      <section className="offer-page-section">
        <div className="offer-page-content">
          <h3>EXCLUSIVE OFFERS</h3>
          <h1>
            Hot Deals <br />
            On Your Favourite <br /> Food
          </h1>
          <p>
            Discover the best restaurants near you, <br /> Order your favourite
            meals and enjoy fast delivery at your door step
          </p>

          <div className="offer-search">
            <input
              type="text"
              placeholder="Search offers restaurant or cuisines..."
            />
            <div>
              <button className="offer-page-search-btn"> Search</button>
            </div>
          </div>
        </div>

        <div className="offer-header-img">
          <img src={offerImage} alt="" />
        </div>
      </section>

      <section className="offer-page-body">
        <h2>OFFERS BY CUISINE</h2>
        <p>Find the best deals on your favorite cuisines</p>

        <div className="offer-page-categories-list">
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
          <div></div>
        </div>
        <h2>TOP OFFERS FOR YOU</h2>
        <p>Handpicked deals to make your meal special</p>

        <div className="offer-page-card-container">
          <div className="offer-page-card off50">
            <div>
              <h2>Get 50% Off</h2>
              <p>On your first order</p>
              <button>Order Now</button>
            </div>
            <img src={pizzaOfferImage} alt="" />
          </div>

          <div className="offer-page-card flat-off-card">
            <div>
                <span>FLAT</span>
              <h2>
               RS 100 OFF
              </h2>
              <p>
                On orders above <span>299</span> 
              </p>
              <button>Order Now</button>
            </div>
            <img src={burgerFriesImg} alt="" />
          </div>

          <div className="offer-page-card free-delivery">
            <div>
              <h2>
                <span> FREE </span>
               <br />
                DELIVERY
              </h2>
              <p>
                On selected restaurants
              </p>
              <button>Order Now</button>
            </div>
            <img src={scooterImg} alt="" />
          </div>

          <div className="offer-page-card combo-offer">
            <div>
              <h2>
                Combo Deals 
               
              </h2>
              <p>
               Starting at RS 199
              </p>
              <button>Order Now</button>
            </div>
            <img src={burgerFriesImg} alt="" />
          </div>
        </div>
      </section>

      <section className="offer-restaurants-section">
        <h2>RESTAURANTS WITH BEST DEALS</h2>

        <div className="offer-restaurants-card-container">
          <div className="offer-restaurantscard">
            <img src={burgerOfferImg} alt="" />
            <h3>Buger Point</h3>
            <span>indian, Fast Food</span>
            <p>4.6</p>
            <span>(3520)</span>
          </div>
          <div className="offer-restaurantscard">
            <img src={chickenBiryaniImg} alt="" />
            <h3>The Food Hub</h3>
            <span>North indian, Chinese</span>
            <p>4.6</p>
            <span>(3520)</span>
          </div>
          <div className="offer-restaurantscard">
            <img src={parathaImg} alt="" />
            <h3>Food Court</h3>
            <span>Mexican, Italian</span>
            <p>4.3</p>
            <span>(3520)</span>
          </div>
          <div className="offer-restaurantscard">
            <img src={tikkaImg} alt="" />
            <h3>Urban Bites</h3>
            <span>Continental, Italian</span>
            <p>3.9</p>
            <span>(3520)</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;
