import Head from "next/head";
// import Layout from "../components/layout/Layout";
import Hero from "../components/pages-components/home/Hero";
import Benefis from "../components/pages-components/home/Benefits";
import AhkamHome from "../components/pages-components/home/AhkamHome";
import FiveHome from "../components/pages-components/home/FiveHome";

export default function Home() {
  return (
    <>
      <Head>
        <title>آموزش نماز اهل سنت</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <Benefis />
        <AhkamHome />
        <FiveHome />
      </main>
    </>
  );
}
