import React from "react";
import "./App.css";
import { NavBar } from "./layouts/NavbarAndFooter/Navbar";
import { ExploreTopBooks } from "./layouts/HomePage/ExploreTopBooks";
import { Carousel } from "./layouts/HomePage/Carousel";

function App() {
  return (
    <>
      <NavBar />
      <ExploreTopBooks />
      <Carousel/>
    </>
  );
}

export default App;