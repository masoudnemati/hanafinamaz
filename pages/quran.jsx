import React from "react";
import Quran from "../components/pages-components/quran/Quran";

const quran = () => {
  return (
    <>
      <main>
        <Quran />
      </main>

      <style jsx>{`
        main {
          direction: rtl;
          padding: 100px 5vw;
          text-align: right;
          text-align: justify;
        }
      `}</style>
    </>
  );
};

export default quran;
