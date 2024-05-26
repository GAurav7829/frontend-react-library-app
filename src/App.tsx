import React from "react";
import "./App.css";
import { NavBar } from "./layouts/NavbarAndFooter/Navbar";
import { ExploreTopBooks } from "./layouts/HomePage/ExploreTopBooks";
import { Carousel } from "./layouts/HomePage/Carousel";
import { Heros } from "./layouts/HomePage/Heros";

function App() {
  return (
    <>
      <NavBar />
      <ExploreTopBooks />
      <Carousel/>
      <Heros />
    </>
  );
}

export default App;
