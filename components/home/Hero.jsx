import React from "react";

const Hero = () => {
  return (
    <>
      <main className="hero-main">
        <h1>آموزش نماز اهل سنت مذهب حنفی</h1>
      </main>
      <style jsx>{`
        .hero-main {
          height: 87vh;
          direction: rtl;
          padding-top: 200px;
          margin-top: 80px;
          background-image: url("/images/home/hero-bg-man.jpeg");
          background-repeat: no-repeat;
          background-size: contain;
          background-position: top;
          background-color: #09090b;
          text-align: center;
        }

        h1 {
          padding: 20px;
          display: inline-block;
          color: white;
          background-color: rgba(0, 0, 0, 0.7);
        }
      `}</style>
    </>
  );
};

export default Hero;
