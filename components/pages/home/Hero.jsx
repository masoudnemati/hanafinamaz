import React from "react";

const Hero = () => {
  return (
    <>
      <main className="hero-main">
        <h1>آموزش نماز اهل سنت مذهب حنفی</h1>
        <p>به زبان ترکمنی</p>
      </main>
      <style jsx>{`
        .hero-main {
          height: 87vh;
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
        }
      `}</style>
    </>
  );
};

export default Hero;
