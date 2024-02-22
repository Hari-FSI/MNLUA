import React from "react";
import Head from "next/head";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import TopMenu from "../Components/Library/TopMenu";
import LeftSidebar from "../Components/Library/LeftSidebar";
import Accordion from "../Components/Accordion-individual";

function Library({ posts }) {
  const accordianBody = posts.data.attributes.body[1].value;
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

  const Accord = parseText(accordianBody);
  console.log(Accord);
  const accordionData = [Accord];

  return (
    <div>
      <style>{`
      // .collapse {
      //   display: block;
      //   visibility: visible;
      // }
      
      `}</style>
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

      <section className="page-content-sec labrary_accordion">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <LeftSidebar />
            </div>
            <div className="col-md-9">
              <div
                className="library"
                dangerouslySetInnerHTML={{
                  __html: posts.data.attributes.body[0].value,
                }}
              />

              <div className="accordion">
                {accordionData.map(({ title, content }) => (
                  <Accordion key={title} title={title} content={content} />
                ))}
              </div>
              <br />
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
  const url = `https://${process.env.NEXT_PUBLIC_URL}/jsonapi/node/page/b8c72e2d-1139-4c90-ba83-28df4de69d5e`;
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
