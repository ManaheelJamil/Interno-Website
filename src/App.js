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
import Team from "./components/Team";
import TeamDetail1 from "./components/TeamDetails1";
import TeamDetail2 from "./components/TeamDetails2";
import TeamDetail3 from "./components/TeamDetails3";
import TeamDetail4 from "./components/TeamDetails4";
import TeamDetail5 from "./components/TeamDetails5";
import TeamDetail6 from "./components/TeamDetails6";
import TeamDetail7 from "./components/TeamDetails7";
import TeamDetail8 from "./components/TeamDetails8";
import ContactUs from "./components/ContactUs";
import Faqs from "./components/faqs";
import Error from "./components/error";
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
          <Route path="/Team" element={<Team />}/>
          <Route path="/TeamDetail1" element={<TeamDetail1 />}/>
          <Route path="/TeamDetail2" element={<TeamDetail2 />}/>
          <Route path="/TeamDetail3" element={<TeamDetail3 />}/>
          <Route path="/TeamDetail4" element={<TeamDetail4 />}/>
          <Route path="/TeamDetail5" element={<TeamDetail5 />}/>
          <Route path="/TeamDetail6" element={<TeamDetail6 />}/>
          <Route path="/TeamDetail7" element={<TeamDetail7 />}/>
          <Route path="/TeamDetail8" element={<TeamDetail8 />}/>
          <Route path="/ContactUs" element={<ContactUs />}/>
          <Route path="/Faqs" element={<Faqs />}/>
          <Route  path="*" element={<Error/>}/>
        </Routes>
      </Router>


    </>

  );
}

export default App;
