import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Hero from "@components/Hero/Hero";
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>SAPEXIM | Electric Equipment Supplier in Delhi NCR India</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="SAPEXIM" />
        <Hero />
      </main>

      <Footer />
    </div>
  );
}
