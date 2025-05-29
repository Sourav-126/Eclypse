import "./App.css";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Hero_Text } from "./components/Hero_text";
import { Learn } from "./components/Learn";
import { useEffect } from "react"; // Fixed: import useEffect
import { Lowerbody } from "./components/LowerBody";
import { PhotosSection } from "./components/PhotoSection";
import { useLocation } from "react-router";

function App() {
  const location = useLocation();

  useEffect(() => {
    console.log("Current path:", location.pathname); // Debug log

    if (location.pathname === "/checkout") {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black"; // Also change text color if needed
    } else {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }

    return () => {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    };
  }, [location.pathname]);

  return (
    <div className="w-[1440px] h-[5336px] top-[-50px] left-[3067px] justify-between items-center">
      <Header />
      <Hero />
      <Hero_Text />
      <Learn />
      <PhotosSection />
      <Lowerbody />
      <Footer />
    </div>
  );
}

export default App;
