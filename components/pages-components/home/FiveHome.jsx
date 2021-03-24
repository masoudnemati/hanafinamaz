import React from "react";

const FiveHome = () => {
  return (
    <>
      <section>
        <h3>نمازهای پنج‌گانه:</h3>
        <p>نمازهای پنچ‌گانه بر هر مسلمان واجب است که هر روز باید خوانده شوند</p>
        <ol>
          <li>نماز صبح</li>
          <li>نماز ظهر</li>
          <li>نماز عصر</li>
          <li>نماز شب</li>
          <li>نماز عشاء</li>
        </ol>
      </section>

      <style jsx>{`
        section {
          direction: rtl;
          padding: 40px 5vw;
        }

        h3 {
          font-size: 1.6rem;
        }

        p {
          font-size: 1.6rem;
        }

        ol {
          padding: 10px 40px;
          margin-bottom: 10px;
        }

        li {
          font-size: 1.6rem;
          padding: 5px 0;
        }

        a {
          font-size: 1.6rem;
          padding: 10px 28px 10px 15px;
          border-radius: 25px;
          color: white;
          background-image: url("/images/home/icons8-less-than-30.png");
          background-repeat: no-repeat;
          background-position: 107px center;
          background-size: 20px;
          background-color: black;
        }
      `}</style>
    </>
  );
};

export default FiveHome;
