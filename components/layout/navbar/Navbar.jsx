import React from "react";
import Burger from "./Burger";

const Navbar = () => {
  return (
    <header className="navbar-main ">
      <div className="logo">
        {/* <img
          src="/icons/dalitoporlogo.png"
          alt="dali topar"
          width="69px"
          height="69px"
        /> */}
        LOGO
      </div>
      <Burger />

      <style jsx>{`
        .navbar-main {
          position: fixed;
          color: white;
          width: 100%;
          top: 0;
          left: 0;
          height: 105px;
          margin: 0;
          padding: 0;
          background-color: rgba(255, 0, 0, 0.555);
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid black;
          transition: all 0.5s linear;
          z-index: 10;
        }

        .navbar-scroll {
          color: black;
          background-color: rgba(255, 255, 255, 0.94);
          padding: 0 20px;
          height: 90px;
        }
        /* .logo {
          padding-top: 7px;
          margin-bottom: 20px;
          margin-left: 20px;
        } */
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
