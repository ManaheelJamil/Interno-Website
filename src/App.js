import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import Home from './Home'
import AboutUs from "./components/about";
import Services from './components/services'
function App() {
  return (
    <>

      <Router>
        {/* <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>AboutUs</Link>
          </li>
        </ul> */}
        <Routes>
          <Route path="/" element={<Home />}/>
        
      
          <Route path="/about" element={<AboutUs />}/>
          <Route path="/services" element={<Services/>}/>
        </Routes>
      </Router>


    </>

  );
}

export default App;
