import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import React from "react";
import Home from './Home'
import AboutUs from "./components/about";
import Services from './components/services'
import ServiceSample from "./components/serviceSample";
import Project from "./components/Projects";
import Projectdetail from "./components/Projectdetail"
import Articles from "./components/Articles&News";
import BlogDetails from "./components/BlogDetails";
import Team from "./components/Team";
import TeamDetail from "./components/TeamDetails";
import ContactUs from "./components/ContactUs";
import Faqs from "./components/faqs";
import Error from "./components/error";
// import Rough from "./components/rough";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/serviceSample" element={<ServiceSample />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Projectdetail/:id" element={<Projectdetail />} />
        <Route path="/Articles" element={<Articles />} />
        <Route path="/BlogDetails/:id" element={<BlogDetails />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/TeamDetail/:id" element={<TeamDetail />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Faqs" element={<Faqs />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>


  )
}

export default App;
