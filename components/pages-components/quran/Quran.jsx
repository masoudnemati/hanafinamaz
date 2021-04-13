import React from "react";

const Quran = () => {
  return (
    <>
      <section className="main">
        <p>
          <b>قرآن </b>
          کتاب مقدس دین اسلام است و در باور ما مسلمانان سخنان خداست که به صورت
          وحی از سوی او توسط جبرئیل بر پیامبر اسلام، محمد بن عبدالله، نازل شده‌
          است.
          <br />
          مسلمانان، قرآن را بزرگترین معجزهٔ محمد و روشن‌ترین دلیل بر پیامبری او
          می‌دانند.
        </p>
        <p>
          یکی از بهترین نرم‌افزارهای قرآن، نرم افزار
          <b> Quran for Android </b>
          می‌باشد که از طریق لینک‌های زیر می‌توانید آن را دانلود کنید.
        </p>

        <a
          href="https://play.google.com/store/apps/details?id=com.quran.labs.androidquran"
          target="_blank"
          rel="noopener noreferrer"
        >
          دانلود از گوگل پلی
        </a>
      </section>

      <style jsx>{`
        a {
          color: white;
          background-color: black;
          font-weight: bold;
          font-size: large;
          display: inline-block;
          padding: 30px 70px 30px 15px;
          background-image: url("/images/quran/Google_Play-Icon-Logo.wine.svg");
          background-repeat: no-repeat;
          background-position: 110px center;
          background-size: 130px;
          border: 3px double gray;
          border-radius: 20px;
          transition: all 0.4s linear;
        }

        a:hover {
          box-shadow: inset 0 0 15px white;
        }
      `}</style>
    </>
  );
};

export default Quran;
