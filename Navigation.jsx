import { BrowserRouter as Router, Link, Route, Routes, NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Help from "./Help";
import Footer from "./Footer";  // Import the Footer component
import "./Navigation.css";
import logo from "./logo.jpg"

const Navigation = () => {
    return (
      <Router>
        <header>
          <nav className="nav-container">
            {/* Left Side - Logo and Title */}
            <div className="nav-left">
              <img src={logo} alt="FoodMate Logo" className="nav-logo" />
              <h1 className="nav-title">FoodMate</h1>
            </div>
  
            {/* Right Side - Navigation Links */}
            <ul className="nav-list">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" activeclassname="active">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link" activeclassname="active">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link" activeclassname="active">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/help" className="nav-link" activeclassname="active">Help</NavLink>
              </li>
            </ul>
          </nav>
        </header>
  
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/help" element={<Help />} />
            
          </Routes>
        </main>
  
        {/* Add Footer Here */}
        <Footer />
      </Router>
    );
  };
  
  export default Navigation;                                                                                                                               