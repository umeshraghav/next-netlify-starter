import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Hero from "@components/Hero/Hero";
import Services from "@components/Hero/Services";
import Clients from "@components/Clients";
import Stats from "@components/Stats";
export default function Home() {
  return (
    <div className="container-fluid">
      <Head>
        <title>SAPEXIM | Electric Equipment Supplier in Delhi NCR India</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="SAPEXIM" />
        <Hero />
        <Stats />
        <Services />
        <Clients />
      </main>

      <Footer />
    </div>
  );
}
