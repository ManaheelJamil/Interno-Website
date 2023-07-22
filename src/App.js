import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import Home from './Home'
import AboutUs from "./components/about";
import Services from './components/services'
import ServiceSample from "./components/serviceSample";
import Project from "./components/Projects";
import Projectdetail from "./components/Projectdetail"
import Articles from "./components/Articles&News";
import BlogDetails from "./components/BlogDetails";
function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>   
          <Route path="/about" element={<AboutUs />}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/serviceSample" element={<ServiceSample/>}/>
          <Route path="/Project" element={<Project />}/>
          <Route path="/Projectdetail" element={<Projectdetail />}/>
          <Route path="/Articles" element={<Articles />}/>
          <Route path="/BlogDetails" element={<BlogDetails />}/>
        </Routes>
      </Router>


    </>

  );
}

export default App;
