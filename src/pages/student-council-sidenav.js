import React from "react";
import Head from "next/head";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
function StudentCouncilSidenav() {
  return (
    <div>
      <Head>
        <title>MAHARASHTRA NATIONAL LAW UNIVERSITY - AURANGABAD</title>
        <meta
          name="description"
          content="MNLUA – MAHARASHTRA NATIONAL LAW UNIVERSITY - AURANGABAD"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      student-council-sidenav
      <Footer />
    </div>
  );
}

export default StudentCouncilSidenav;
