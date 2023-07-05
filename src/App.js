import Navbar from "./components/Navbar/Navbar.js";
import Landing from "./components/Landing/Landing.js";
import Up from "./components/Up/Up.js";
import Footer from "./components/Footer/Footer.js";
import Contact from "./components/Contact/Contact.js";
import Services from "./components/Services/Services.js";
import Cart from "./components/Cart/Cart.js";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={
          <>
            <Navbar />
            <Landing />
            <Services />
            <Contact />
            {/* <Footer /> */}
            <Up />
          </>
        } />
        <Route path="/cart" element={<Cart />} />
      </Routes>

    </div>
  );
}

export default App;
