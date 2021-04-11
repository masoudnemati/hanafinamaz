import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-3main">
          <div className="left">
            <Link href="/">
              <h1>
                jennet<span className="ir-jennet">.ir</span>
              </h1>
            </Link>
            <p className="des">آموزش اصول و احکام دین ویژه اهل سنت فقه حنفی</p>
            <hr />
            <a
              href="https://atyal.ir/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="atyal">
                Web Design by <span>Atyal.ir</span>
              </p>
            </a>
            <p className="rights">
              &copy; 2020-{new Date().getFullYear()} jennet.ir
              <br />
              All rights reserved.
            </p>
          </div>
          <div className="center">
            <h3>لینک‌های کاربردی:</h3>
            <ul>
              <Link href="/namaz">
                <li>نماز</li>
              </Link>
              <Link href="/vozu">
                <li>وضو و غسل</li>
              </Link>
              <Link href="/fast">
                <li>روزه</li>
              </Link>
              <Link href="/quran">
                <li>قرآن</li>
              </Link>
            </ul>
          </div>
          <div className="right">
            <h3>وب‌سایت‌های مفید دیگر:</h3>
            <ul>
              <li>
                <a
                  href="http://islamhouse.com/fa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  islamhouse.com
                </a>
              </li>
              <li>
                <a
                  href="https://quran.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  quran.com
                </a>
              </li>
              <li>
                <a
                  href="https://sunnah.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  sunnah.com
                </a>
              </li>
              <li>
                <a
                  href="http://www.erfanabad.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  erfanabad.org
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <style jsx>{`
        footer {
          color: white;
          background-color: black;
        }

        .footer-3main {
          padding: 10px 5vw;
          display: flex;
          flex-flow: row;
          justify-content: space-between;
        }

        /*----------------- LEFT FOOTER ---------------- */
        h1 {
          margin: 0;
          padding: 0;
          cursor: pointer;
          color: #91ff91;
        }

        .ir-jennet {
          color: #5fa15f;
        }

        .des {
          padding: 0;
          margin: 0;
          padding-bottom: 20px;
        }

        .atyal span {
          color: skyblue;
          font-weight: bold;
        }

        .rights {
          font-size: small;
        }

        /*-----------------  CENTER FOOTER ---------------- */
        .center {
          direction: rtl;
        }

        h3 {
          margin: 0;
        }

        ul {
          padding: 0;
          margin: 0;
        }

        li {
          padding-top: 0.7rem;
          margin-right: 0.8rem;
          cursor: pointer;
        }

        li:hover {
          color: skyblue;
        }

        /*-----------------  RIGHT FOOTER ---------------- */
        .right {
          direction: rtl;
        }

        .right ul {
          direction: ltr;
        }

        @media only screen and (max-width: 900px) {
          .footer-3main {
            flex-direction: column-reverse;
          }

          ul {
            padding-bottom: 4rem;
            padding-left: 45vw;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
