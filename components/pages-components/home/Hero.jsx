import React from "react";

const Hero = () => {
  return (
    <>
      <main className="hero-main">
        <h1>
          آموزش نماز اهل سنت مذهب حنفی <br />
        </h1>
      </main>
      <style jsx>{`
        .hero-main {
          direction: rtl;
          padding-top: 100px;
          /* background-image: url("/images/home/hero-bg-man.jpeg"); */
          /* background-repeat: no-repeat;
          background-size: contain;
          background-position: top;
          background-color: #09090b; */
          text-align: center;
        }

        h1 {
          padding: 20px;
          display: inline-block;
          color: black;

          padding-bottom: 6px;
        }
      `}</style>
    </>
  );
};

export default Hero;
