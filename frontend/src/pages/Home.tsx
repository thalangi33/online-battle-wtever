import React from "react";
import Word_UI from '../components/Word_UI/Word_UI'
import "./Home.sass";
import VirtualKeyboard from "../components/VirtualKeyboard/VirtualKeyboard";

const Home = () => {
  return (
    <main>
      <Word_UI />
      <VirtualKeyboard />
    </main>
  );
};

export default Home;