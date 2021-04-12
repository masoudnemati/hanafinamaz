import React from "react";
import Fast from "../components/pages-components/fast/Fast";

const fast = () => {
  return (
    <>
      <main>
        <Fast />
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

export default fast;
