import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "../Components/NewImage";
import Head from "next/head";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import AltText from "../Components/AltText";

function altText(imageUrl) {
  const altText = imageUrl.split("alt=").at(1);

  return altText;
}
function Mous({ posts }) {
  console.log(posts[0].field_image);
  const imageField = posts[0].field_image;
  let imgs = imageField.split(",");
  console.log(imgs);
  function extractAltText(htmlString) {
    const altTextArray = [];
    const regex = /alt\s*=\s*['"]([^'"]+)['"]/g;

    let match;
    while ((match = regex.exec(htmlString)) !== null)
      altTextArray.push(match[1]);

    return altTextArray;
  }

  // Use regex to match the file names with paths
  const fileNamesWithPath = imageField.match(/\/[^, ]+/g);
  const altTextArray = extractAltText(imageField);
  console.log(altTextArray);
  console.log(fileNamesWithPath);
  return (
    <>
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
      <div
        className="page-bannar"
        style={{
          backgroundImage: "url(/images/banner.webp)",
          backgroundPosition: "bottom center",
        }}
      >
        <div className="header-overlay" />
        <div className="container">
          <h1>MOUS</h1>
          <span className="bottom-bar" />
        </div>
      </div>
      <br />
      <div className="inclients-logos mous">
        {imgs.map((imageUrl, index) => (
          <div key={index}>
            {" "}
            <span className="">
              <AltText url={imageUrl} index={index} />
            </span>
          </div>
        ))}

        {/* <div
					className=" container-fluid"
					dangerouslySetInnerHTML={{
						__html: posts.data.attributes.body[0].value,
					}}
				/> */}
      </div>
      <Footer />
    </>
  );
}

export default Mous;
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  //composer require 'drupal/devel:^5.0'
  //const url = `https://${process.env.NEXT_PUBLIC_URL}/jsonapi/node/page/f7f7e92b-debe-4364-9a5f-a6ef1546f9dd`;
  const url = `https://${process.env.NEXT_PUBLIC_URL}/basic-page-images/499`;
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
