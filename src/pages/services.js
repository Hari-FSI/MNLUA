import React from "react";
import Head from "next/head";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import TopMenu from "../Components/Library/TopMenu";
import LeftSidebar from "../Components/Library/LeftSidebar";
import Accordion from "../Components/Accordion";

function Library({ posts }) {
  const body = posts.data.attributes.body;
  console.log(body);

  const array = body.map((item) => {
    const titleRegex = /<h2[^>]*>(.*?)<\/h2>/i;
    const match = item.value.match(titleRegex);

    let title = "";
    let content = "";

    if (match && match[1]) {
      title = match[1].trim();
      content = item.value.replace(match[0], "").trim();
    }

    return {
      title: title,
      content: content,
    };
  });
  console.log(array);
  function parseText(text) {
    if (typeof text !== "string") {
      return null; // Return null if the input is not a string
    }

    const titleRegex = /<h2[^>]*>(.*?)<\/h2>/i;
    const match = text.match(titleRegex);

    if (match && match[1]) {
      const title = match[1].trim();
      const content = text.replace(match[0], "").trim();

      return {
        title: title,
        content: content,
      };
    }

    return null; // Return null if no <h2> tag found
  }

  const accordionData = array;

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

      <TopMenu />

      <section className="page-content-sec print-resources">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <LeftSidebar />
            </div>
            <div className="col-md-9">
              <div className="detail-blk txt-justify">
                <h2 class="in-heading">SERVICES</h2>
                <div className="accordion">
                  {" "}
                  <Accordion items={accordionData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Library;
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  //composer require 'drupal/devel:^5.0'
  const url = `https://${process.env.NEXT_PUBLIC_URL}/jsonapi/node/page/ca13e75f-feda-421c-9986-6e3f49f90bfe`;
  console.log(url);
  const res = await fetch(url);
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
    revalidate: 100, // Rebuild the page every 1 second to check for updates
  };
}
