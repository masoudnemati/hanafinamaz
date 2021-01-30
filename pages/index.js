import Head from "next/head";

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
        }
      `}</style>
    </>
  );
}
