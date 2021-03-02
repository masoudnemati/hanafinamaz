import Head from "next/head";
// import Layout from "../components/layout/Layout";
import Hero from "../components/pages/home/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>آموزش نماز اهل سنت</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
      </main>
    </>
  );
}
