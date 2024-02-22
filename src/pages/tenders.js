import React from "react";
import Head from "next/head";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import LeftSidebar from "../Components/Tenders/LeftSidebar";
function Tenders({ posts }) {
  console.log(posts);
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
          backgroundImage: "url(/images/banner.webp)",
          backgroundPosition: "bottom center",
        }}
      >
        <div className="header-overlay" />
        <div className="container">
          <span className="bottom-bar" />
        </div>
      </div>
      <br />
      <section className="page-content-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12 detail-blk txt-justify singel-blk">
              <div className="people-detail people-detail--brief">
                <h2 className="in-heading">TENDERS</h2>
                <div className="b-listing-list-group u-block all-notification-blks">
                  <ul
                    className="list-group__list"
                    itemscope=""
                    itemtype="http://schema.org/ItemList"
                  >
                    {posts.map((item, index) => (
                      <div key={index}>
                        <li className="list-group__item ">
                          <div
                            className="list-group__body list-group__body--s"
                            itemprop="name"
                          >
                            {" "}
                            {item.field_new == "On" ? (
                              <span className="new-img-gif"></span>
                            ) : (
                              ""
                            )}
                            <h3>
                              <a
                                className="list-group__url c-icon-pdf"
                                href={item.field_file}
                                target="_blank"
                              >
                                {item.title}
                              </a>
                            </h3>
                            <ul className="noti-info">
                              <li>
                                <i className="fa fa-calendar"></i>{" "}
                                {item.field_date}
                              </li>
                            </ul>
                          </div>
                        </li>
                      </div>
                    ))}
                  </ul>
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

export default Tenders;

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getServerSideProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  //composer require 'drupal/devel:^5.0'
  const url = `https://${process.env.NEXT_PUBLIC_URL}/pdf-list/32`;
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
