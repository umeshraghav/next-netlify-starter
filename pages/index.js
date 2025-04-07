import Head from "next/head";
import Header from "@components/Header";
import Hero from "@components/Hero/Hero";
import Services from "@components/Services/Services";
import Footer from "@components/Footer";
import About from "@components/About";
import WhyUs from "@components/WhyUs";
export default function Home() {
  return (
    <>
      <Head>
        <title>SAPEXIM | Electric Equipment Supplier in Delhi NCR India</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&family=Roboto:wght@500;700;900&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />
      </Head>

      <main>
        <Header title="SAPEXIM" />
        <Hero />
        <About/>
        <Services/>
        <WhyUs/>
        <Footer/>
      </main>
    </>
  );
}
