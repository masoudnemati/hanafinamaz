import React from "react";
import Link from "next/link";

const FiveHome = () => {
  return (
    <>
      <section>
        <h3>نمازهای پنج‌گانه:</h3>
        <ol>
          <li>۱. نماز صبح</li>
          <li>۲.نماز ظهر</li>
          <li>۳. نماز عصر</li>
          <li>۴. نماز مغرب</li>
          <li>۵. نماز عشاء</li>
        </ol>
        <Link href="/daily-prays">
          <a>آموزش نمازهای پنج‌گانه</a>
        </Link>
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
          padding: 1rem 4rem;
          margin-bottom: 10px;
          list-style: none;
        }

        li {
          font-size: 1.6rem;
          padding: 5px 0;
        }

        a {
          font-size: 1.6rem;
          padding: 1rem 2.8rem 1rem 1.5rem;
          border-radius: 25px;
          color: white;
          background-image: url("/images/home/icons8-less-than-30.png");
          background-repeat: no-repeat;
          background-position: 16.2rem center;
          background-size: 2rem;
          background-color: black;
        }

        a:hover {
          color: black;
          font-weight: bold;
          background-color: white;
          border: 0.1rem solid black;
        }
      `}</style>
    </>
  );
};

export default FiveHome;
