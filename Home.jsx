import React from "react";
import "./Home.css";
import logo from "./logo.jpg";
import scroll1 from "./scroll1.jpg"
import scroll2 from "./scroll2.jpg"
import scroll3 from "./scroll3.jpg"
import scroll4 from "./scroll4.jpg"
import scroll5 from "./scroll5.jpg"
import cards1 from "./cards1.jpg"
import cards2 from "./cards2.jpg"
import cards3 from "./cards3.jpg"
import cards4 from "./cards4.jpg"
import cards5 from "./cards5.jpg"
import cards6 from "./cards6.jpg"



const Home = () => {
  return (
    <div>
      <div className="space1"></div>

      {/* Scrolling Images Section */}
      <div className="scrollingimages-container"> {/* NEW: Added wrapper for smooth scrolling */}
        <div className="scrollingimages">
          <img src={scroll4} alt="Scroll Image 1" className="scrollimg" />
          <img src={scroll1} alt="Scroll Image 2" className="scrollimg" />
          <img src={scroll2} alt="Scroll Image 3" className="scrollimg" />
          <img src={scroll5} alt="Scroll Image 4" className="scrollimg" />
          <img src={scroll3} alt="Scroll Image 5" className="scrollimg" />

          {/* Duplicate images for seamless looping */}
          <img src={scroll4} alt="Scroll Image 1" className="scrollimg" />
          <img src={scroll1} alt="Scroll Image 2" className="scrollimg" />
          <img src={scroll2} alt="Scroll Image 3" className="scrollimg" />
          <img src={scroll5} alt="Scroll Image 4" className="scrollimg" />
          <img src={scroll3} alt="Scroll Image 5" className="scrollimg" />
        </div>
      </div>
      {/* Search Box Section */}
<div className="searchbox">
  <input type="text" placeholder="Search your favorite food..." />
</div>
      
<div className="cardsblock">
  <div className="card">
    <img src={cards1} alt="Biryani" />
    <div className="card-info">
      <h3>Biryani</h3>
      <p>₹150</p>
    </div>
  </div>

  <div className="card">
    <img src={cards5} alt="Dosa" />
    <div className="card-info">
      <h3>Dosa</h3>
      <p>₹70</p>
    </div>
  </div>

  <div className="card">
    <img src={cards3} alt="Chapathi" />
    <div className="card-info">
      <h3>Chapathi</h3>
      <p>₹60</p>
    </div>
  </div>

  <div className="card">
    <img src={cards4} alt="Parotta" />
    <div className="card-info">
      <h3>Parotta</h3>
      <p>₹80</p>
    </div>
  </div>

  <div className="card">
    <img src={cards2} alt="Paneer Fried Rice" />
    <div className="card-info">
      <h3>Paneer Fried Rice</h3>
      <p>₹120</p>
    </div>
  </div>

  <div className="card">
    <img src={cards6} alt="Meals" />
    <div className="card-info">
      <h3>Meals</h3>
      <p>₹100</p>
    </div>
  </div>
</div>

    </div>
  );
};

export default Home;
