import React from "react";
import Link from "next/link";

const AhkamHome = () => {
  return (
    <>
      <section>
        <h3>شرایط نماز و نمازگزار:</h3>
        <ul>
          <li>
            نمازگزار پیش از نماز می‌بایست، بسته به شرایط و موقعیت، وضو، غسل یا
            تیمم کرده باشد.
          </li>
          <li>
            نمازگزار، باید در هنگام خواندن نماز رو به قبله، که همان کعبه است،
            بایستد.
          </li>
          <li>
            بدن نمازگزار باید پاک باشد. لباس نمازگزار نیز باید پاک و پوشانندهٔ
            عورت باشد. همچنین لباس نمازگزار نباید غصبی، از اجزای مردار، از حیوان
            حرام گوشت و ابریشم خاص یا طلا بافت (در مردان) باشد.
          </li>
          <li>
            محلی که نمازگزار در آن نماز می‌خواند، نباید غصبی باشد. همچنین مکان
            نمازگزار باید استقرار داشته باشد و امکان نماز گزاردن در آن جا وجود
            داشته باشد.
          </li>
        </ul>

        <Link href="/ahkam">
          <a>مشاهده بیشتر</a>
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

        ul {
          padding: 10px 40px;
          margin-bottom: 10px;
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
          background-position: 10.7rem center;
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

export default AhkamHome;
