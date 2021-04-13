import Link from "next/link";

const RightNav = ({ open }) => {
  return (
    <div>
      <ul className="nav-ul" open={open}>
        <Link href="/">
          <li className="home-li">
            <a>صفحه اصلی</a>
          </li>
        </Link>
        <Link href="/namaz">
          <li className="songs-li">
            <a>نماز</a>
          </li>
        </Link>
        <Link href="/vozu">
          <li className="songs-li">
            <a>وضو و غسل</a>
          </li>
        </Link>
        <Link href="/fast">
          <li className="songs-li">
            <a>روزه</a>
          </li>
        </Link>
        <Link href="/quran">
          <li className="songs-li">
            <a>قرآن</a>
          </li>
        </Link>

        <style jsx>{`
          ul {
            padding-right: 0;
            list-style: none;
            display: flex;
            flex-flow: row-reverse nowrap;
            margin-top: 10px;
          }

          li {
            padding-top: 1rem;
            padding-right: 5vw;
            margin: 0;
            cursor: pointer;
            font-size: 1.1rem;
          }

          li:hover {
            text-decoration: underline;
          }

          /* .home-li {
            background-image: url("/icons/icons8-home-24.png");
            background-repeat: no-repeat;
            background-position: right center;
          }

          .songs-li {
            background-image: url("/icons/icons8-musical-notes-24.png");
            background-repeat: no-repeat;
            background-position: right center;
          }

          .video-li {
            background-image: url("/icons/icons8-video-call-24.png");
            background-repeat: no-repeat;
            background-position: right center;
          }

          .about-us-li {
            background-image: url("/icons/icons8-about-24.png");
            background-repeat: no-repeat;
            background-position: right center;
          }

          .contact-us-li {
            background-image: url("/icons/icons8-phone-24.png");
            background-repeat: no-repeat;
            background-position: right center;
          } */

          @media only screen and (max-width: 780px) {
            ul {
              padding-right: 5vw;
            }

            .nav-ul {
              flex-flow: column;
              direction: rtl;
              color: black;
              background-color: rgba(255, 255, 255, 0.94);
              position: fixed;
              margin: 0;
              transform: ${open ? "translateX(0)" : "translateX(100%)"};
              top: 0;
              right: 0;
              height: 100vh;
              width: 65vw;
              padding-top: 75px;
              transition: transform 0.3s ease-in-out;
            }
          }
        `}</style>
      </ul>
    </div>
  );
};

export default RightNav;
