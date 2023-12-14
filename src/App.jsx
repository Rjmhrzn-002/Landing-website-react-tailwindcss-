import React from "react";
import Header from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Social from "./components/Social";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Analytics />
      <Newsletter />
      <Card />
      <Footer />
      <Social />
    </>
  );
}

export default App;
