import React from "react";
import "./App.css";
import { NavBar } from "./layouts/NavbarAndFooter/Navbar";
import { ExploreTopBooks } from "./layouts/HomePage/ExploreTopBooks";
import { Carousel } from "./layouts/HomePage/Carousel";
import { Heros } from "./layouts/HomePage/Heros";
import { LibraryServices } from "./layouts/HomePage/LibraryServices";

function App() {
  return (
    <>
      <NavBar />
      <ExploreTopBooks />
      <Carousel/>
      <Heros />
      <LibraryServices/>
    </>
  );
}

export default App;
