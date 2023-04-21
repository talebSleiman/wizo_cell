import Navbar from "./components/Navbar/Navbar.js";
import Landing from "./components/Landing/Landing.js";
import Up from "./components/Up/Up.js";
import Footer from "./components/Footer/Footer.js";
import Contact from "./components/Contact/Contact.js";
import Services from "./components/Services/Services.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Services />
      <Contact />
      <Footer />
      <Up />
    </div>
  );
}

export default App;
