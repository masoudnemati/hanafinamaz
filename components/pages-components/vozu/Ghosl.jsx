import React from "react";

const Ghosl = () => {
  return (
    <>
      <main>
        <br />
        <br />
        <hr />
        <p>
          يكي ديگر از شرايطی كه نمازگزار بايد داشته باشد پاك بودن از جنابت(شستن
          تمام بدن) است. به اين عمل «<b>غُسل</b>» می‌گويند.
          <br />
          برای انجام آن ابتدا دست‌ها را شسته و سپس نجاست را از بدن پاك می‌كنيم و
          وضو می‌گيريم.
        </p>

        <h3>غسل را میتوان به دو طريق انجام داد:</h3>
        <ol>
          <li>
            ميتوان به نيت غسل تمام بدن را به يكباره در آب فرو برد. مثلاً در آب
            دريا و رودخانه.
          </li>
          <li>
            ابتدا از سر و گردن و بعد از نيمه‌ی راست بدن و سپس از نيمه ی چپ بدن
            از هر كدام سه بار آب ميريزيم طوريكه هيچ جايی از بدن خشك باقی نماند.
          </li>
        </ol>
        <p>
          بهتر است قبل از غسل نيز همانند وضو با گفتن بسم الله الرحمن الرحيم نيت
          بكنيم. يعنی غسل را برای اطاعت از دستور خداوند و نيز به جهت تقرب به
          درگاه وی انجام می‌دهيم.
        </p>
      </main>

      <style jsx>{`
        p,
        li {
          line-height: 1.9;
        }

        li {
          list-style: arabic-indic;
        }
      `}</style>
    </>
  );
};

export default Ghosl;
