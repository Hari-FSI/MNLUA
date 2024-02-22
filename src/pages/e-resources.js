import React from "react";
import Head from "next/head";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import TopMenu from "../Components/Library/TopMenu";
import LeftSidebar from "../Components/Library/LeftSidebar";

import ResourceIconTile from "../Components/ResourceIconTile";
import Accordion from "../Components/Accordion-icons";
function Library({ posts, opensource }) {
  const body = posts;
  //const opensource = opensource;

  return (
    <div>
      <style jsx>{`
        .print-resources .col-md-9 .in-heading {
          display: block;
          background: #f7f3ec !important;
          width: 100%;
          margin: 0 0 10px 0;
          color: #41679c;
          font-size: 22px;
          font-weight: 500;
          text-transform: uppercase;
          line-height: 28px;
          letter-spacing: 0px;
        }
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

      <section className="page-content-sec print-resources">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <LeftSidebar />
            </div>
            <div className="col-md-9">
              <h3 class="in-heading">ONLINE RESOURCES</h3>
              {body.map((data, index) => (
                <>
                  <h3>{data.title}</h3>{" "}
                  <div className="e-resources-ul">
                    <span>
                      {" "}
                      <ResourceIconTile
                        images={data.field_icon}
                        links={data.field_icon_1}
                      />
                    </span>
                  </div>
                </>
              ))}

              <div className="detail-blk txt-justify e_resources">
                <h4 class="inheading">Open Source</h4>

                <div className="accordion ">
                  {opensource.map((data, index) => (
                    <>
                      {" "}
                      <Accordion
                        title={data.title}
                        images={data.field_icon}
                        links={data.field_icon_1}
                      />
                    </>
                  ))}{" "}
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
  //e-resources-opensources
  const url = `https://${process.env.NEXT_PUBLIC_URL}/e-resources`;
  console.log(url);
  const res = await fetch(url);
  const posts = await res.json();

  const url1 = `https://${process.env.NEXT_PUBLIC_URL}/e-resources-opensources`;

  const res1 = await fetch(url1);
  const opensource = await res1.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
      opensource,
    },
    revalidate: 100, // Rebuild the page every 1 second to check for updates
  };
}
