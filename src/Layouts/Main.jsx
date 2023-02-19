import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useState, useEffect } from "react";
import '../Assets/SiginForm/G.scss'

export default function Main() {
  const [color, setColor] = useState("rgb(19, 15, 15");
  const click = (color) => {
    setColor(color);
  };
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);
  return (
    <>
      <Navbar />
      <div className="btncolor">
        <siv className="change-col" onClick={() => click("#A18062")}>Background</siv>
      </div>
      <Outlet />
      <Footer />
    </>
  );
}
