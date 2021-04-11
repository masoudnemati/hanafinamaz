import React, { useState } from "react";
import RightNav from "./RightNav";

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <aside className="burger-main" onClick={() => setOpen(!open)}>
        <div className="burger burger1" />
        <div className="burger burger2" />
        <div className="burger burger3" />

        <style jsx>{`
          .burger-main {
            width: 50px;
            height: 35px;
            position: fixed;
            top: 0.9rem;
            right: 3.7vw;
            z-index: 20;
            display: none;
            margin-right: 0;
          }

          .burger {
            box-sizing: content-box;
            width: 40px;
            background-color: ${open ? "red" : "white"};
            border: 1px solid black;
            transform-origin: 1px;
            transition: all 0.3s linear;
            border-radius: 3px;
          }

          .burger1 {
            height: 4px;
            transform: ${open ? "rotate(45deg)" : "rotate(0)"};
          }
          .burger2 {
            height: 4px;
            transform: ${open ? "translateX(100%)" : "translateX(0)"};
            opacity: ${open ? "0" : "1"};
          }
          .burger3 {
            height: 4px;
            transform: ${open ? "rotate(-45deg)" : "rotate(0)"};
          }

          @media only screen and (max-width: 780px) {
            .burger-main {
              display: flex;
              justify-content: space-around;
              flex-flow: column nowrap;
            }
          }
        `}</style>
      </aside>
      <RightNav open={open} />
    </>
  );
};

export default Burger;
