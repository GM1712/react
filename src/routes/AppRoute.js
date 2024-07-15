import React from "react";
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

function AppRoute(props) {
    return (
      <Router {...props}>
        <Routes>
          <Route exact path="/" element={<Home />} />
            <Route path="About" element={<About/>} />
            <Route path="contact" element={<Contact />} />
        </Routes>
      </Router>
    );
  }
  export default AppRoute;