import "./App.css";
// import Home from "../pages/Home";
import About from "../pages/About";
import Future from "../pages/Future";
import HopMart from "../pages/Hopmart";
import ToDomagotchi from "../pages/ToDomagotchi";
import Portfolio from "../pages/Portfolio";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Routes, Route } from "react-router-dom";
import Frontpage from "../pages/Frontpage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/*" element={<Home />} /> */}
        <Route path="/*" element={<Frontpage/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/future" element={<Future />} />
        <Route path="/hopmart" element={<HopMart />} />
        <Route path="/todomagotchi" element={<ToDomagotchi />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* vvv will implement contact page once backend is working vvv */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
