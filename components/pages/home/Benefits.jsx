import React from "react";

const Benefits = () => {
  return (
    <>
      <section className="main">
        <h3>برخی فواید نماز:</h3>
        <ul>
          <li>زنده نگه داشتن یاد خدا در دل‌‌ها</li>
          <li> افزایش میزان صبر و حوصله </li>
          <li>پاکیزگی روح</li>
          <li>دوری از زشتی و گناه</li>
          <li>از بین رفتن غرور</li>
        </ul>
      </section>

      <style jsx>{`
        .main {
          direction: rtl;
          padding: 40px 5vw;
        }

        h3 {
          font-size: 1.6rem;
        }

        ul {
          padding: 10px 40px;
        }

        li {
          font-size: 1.6rem;
          padding: 5px 0;
        }
      `}</style>
    </>
  );
};

export default Benefits;
