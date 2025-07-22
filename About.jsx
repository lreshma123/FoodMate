import React from 'react';
import './about.css';
import about1 from './about1.jpg'

const About = () => {
  return (
      
     <div className="about-business">
      <div className='space'></div>
      <h1>About Our Business</h1>
      <div className="main">
        <p>FoodMate is a passionate food-serving platform where connecting hungry students and staff of colleges and universities with the canteen system. 
        Through this process, we can reduce people waiting in queue lines and minimize food wastage through integrated facilities in the application.</p>
        {/* <img src={about1} width="500px" height="500px"/> */}
      </div>
      
      <div className="business-story">
        <h2>Our Business Story</h2>
        <p>
          Our story started after seeing the real struggles faced by many students and staff waiting in queue lines for food,
          some of them return with empty stomachs.this kind of situtions made us to do something about the issue,
          then we came up with "FOODMATE!!.." to solve all this problems 
        </p>
      </div>
      
      <div className="mission-section">
        <h2>Our Mission</h2>
        <p>
          To deliver fresh and delicious food with speed,care and reliability while supporting our
          food businesses and creating memorable dining experiences and No one 
          go with empty stomachs,
          where people stomach and mouth will be satsified.
        </p>
      </div>
      
      <div className="services-section">
        <h2>Services We Provide</h2>
        <ul>
          <li>No waiting in queue lines</li>
  
          <li>No Food wastage</li>
          <li>Customize your own meal plate</li>
          <li>Fresh and Hygiene Food is our main priority</li>
        </ul>
        <div className="l">
          <p>#FoodMateFamily🍽❤</p>
        </div>
      </div>
    </div>
  );
}

export default About;