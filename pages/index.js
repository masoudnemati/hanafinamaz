import Head from "next/head";
// import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>آموزش نماز اهل سنت</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>آموزش نماز اهل سنت (حنفی)</main>
      <style jsx>{`
        main {
          direction: rtl;
          padding-top: 200px;
          margin: 0;
        }
      `}</style>
    </>
  );
}
