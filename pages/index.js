import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>SAPEXIM | Electric Equipment Supplier in Delhi NCR India</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="SAPEXIM" />
        <p>Website is under development</p>
      </main>

      <Footer />
    </div>
  );
}
