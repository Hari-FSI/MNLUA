import React, { useState } from "react";
import Head from "next/head";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Link from "next/link";
import NewImage from "../Components/NewImage";
import TopMenu from "../Components/AcademicMenu/TopMenu";
import TopSecondMenu from "../Components/AcademicMenu/TopSecondMenu";
function Faculty({ posts }) {
  console.log(posts);

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = posts.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      <div
        className="page-bannar"
        style={{
          backgroundImage: "url(images/banner.webp)",
          backgroundPosition: "bottom center",
        }}
      >
        <div className="header-overlay" />
        <div className="container">
          <h1>Core Faculty</h1>
          <span className="bottom-bar" />
        </div>
      </div>
      <TopMenu />
      <TopSecondMenu />
      <div className="page-content faculty__listing__search">
        <div className="container">
          <p class="title_tex">Search within</p>
          <div class="facetwp-input-wrap">
            <i class="facetwp-icon"></i>
            <input
              type="text"
              className="facetwp-search form-control"
              placeholder="By name or title"
              onChange={handleChange}
              autocomplete="off"
            />
          </div>
        </div>
      </div>
      <div className="page-content professor-area faculty">
        <div className="container ">
          <div className="d-flex">
            {filteredData.map((item, index) => (
              <div
                key={item.index}
                className="people-detail__block people-detail__block--with-link"
              >
                <div className="people-detail__block-left">
                  <figure className="people-detail__block-figure">
                    <NewImage
                      src={item.field_image}
                      width={103}
                      height={83}
                      alt={item.title}
                    />
                  </figure>
                </div>

                <div className="people-detail__block-content">
                  <p className="people-detail__block-name">{item.title}</p>
                  <p className="people-detail__block-designation text-right">
                    {item.field_designation}
                  </p>
                  <div className="people-detail__block-social people-detail__block-social--link">
                    <Link
                      href={`/faculty/${item.uuid}`}
                      className="people-detail__link"
                    >
                      <i className="fa fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Faculty;
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  //composer require 'drupal/devel:^5.0'
  const url = `https://${process.env.NEXT_PUBLIC_URL}/faculty-core.json`;
  console.log(url);
  const res = await fetch(url);
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}
