import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Hero from "@components/Hero/Hero";
// import Services from "@components/Hero/Services";
import Services from "@components/Services";
import Clients from "@components/Clients";
import Stats from "@components/Stats";
export default function Home() {
  return (
    <>
      <Head>
        <title>SAPEXIM | Electric Equipment Supplier in Delhi NCR India</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
        />
      </Head>

      <main>
        <Header title="SAPEXIM" />
        <Hero />
        <Services />
        <Stats />

        <Clients />
      </main>

      <Footer />
    </>
  );
}
