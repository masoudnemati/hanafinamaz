import React from "react";
import Burger from "./Burger";

const Navbar = () => {
  return (
    <header className="navbar-main ">
      <div className="logo">
        <img
          src="/logo/allah-logo.png"
          alt="allah"
          width="40px"
          height="30px"
        />
      </div>
      <Burger />

      <style jsx>{`
        .navbar-main {
          position: fixed;
          color: white;
          width: 100%;
          top: 0;
          left: 0;
          height: 80px;
          margin: 0;
          padding: 0;
          background-color: rgb(23, 23, 25);
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid black;
          transition: all 0.5s linear;
          z-index: 10;
        }

        .logo {
          padding: 9px 5px 0px 5px;
          margin-bottom: 15px;
          margin-top: 15px;

          margin-left: 20px;
          background-color: rgba(255, 255, 255);
          border: 1px 0 solid white;
          border-radius: 10% 35% 10% 35%;
        }

        .navbar-scroll {
          box-sizing: content-box;
          color: black;
          background-color: rgba(255, 255, 255, 0.94);
          margin-top: -5px;
          height: 70px;
        }
      `}</style>
    </header>
  );
};

if (typeof window !== "undefined") {
  // browser code
  window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.classList.toggle("navbar-scroll", window.scrollY > 0);
  });
}

export default Navbar;
