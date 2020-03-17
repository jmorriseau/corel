import React from "react";
import "./index.css";
import { Header, Hero, HeroText, HeroImage, Footer } from "./components";
import NavItems from "./constants/navmenu.json";

export default function App() {
  return (
    <>
      <Header nav={NavItems} />
      <main className="main-content">
        <p>lorem15</p>
        <Hero>
          <HeroText>
            <h1>Header here</h1>
            <p>Some text to supplement</p>
            <p>Some text to supplement</p>
            <p>Some text to supplement</p>

            <button>Button text</button>
          </HeroText>
          <HeroImage src="https://image.freepik.com/free-vector/group-business-people-avatar-character_24877-57314.jpg" />
        </Hero>
      </main>
      <Footer nav={NavItems} />
    </>
  );
}
