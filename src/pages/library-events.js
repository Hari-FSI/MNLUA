import React from "react";
import Head from "next/head";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import TopMenu from "../Components/Library/TopMenu";
import LeftSidebar from "../Components/Library/LeftSidebar";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Image from "next/image";

function Library({ posts }) {
  Fancybox.bind("[data-fancybox]", {
    speed: 1000,
  });
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

      <section className="page-content-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <LeftSidebar />
            </div>
            <div className="col-md-9">
              {/* <div
                className="library"
                dangerouslySetInnerHTML={{
                  __html: posts.data.attributes.body[0].value,
                }}
              /> */}

              <div className="detail-blk txt-justify">
                <h2 className="in-heading">Library Events</h2>

                <h3 style={{ margin: "0 0 15px 0" }}>
                  Book Exhibition March 2023
                </h3>
                <section className="p-gallery-sec l-gallery-sec">
                  <div className="">
                    <div className="row">
                      <aside className="col-md-4">
                        <div className="inblock">
                          <a
                            className="block-link"
                            href="/images/library-events/book-exhibition-march2023-1.png"
                            data-fancybox="bookexhibition23"
                            data-caption="Book Exhibition March 2023"
                          >
                            <Image
                              src="/images/library-events/book-exhibition-march2023-1.png"
                              alt="Book Exhibition March 2023"
                              title="Book Exhibition March 2023"
                              width="262"
                              height="175"
                            />
                          </a>
                        </div>
                      </aside>

                      <aside className="col-md-4">
                        <div className="inblock">
                          <a
                            className="block-link"
                            href="/images/library-events/book-exhibition-march2023-2.png"
                            data-fancybox="bookexhibition23"
                            data-caption="Book Exhibition March 2023"
                          >
                            <Image
                              src="/images/library-events/book-exhibition-march2023-2.png"
                              alt="Book Exhibition March 2023"
                              title="Book Exhibition March 2023"
                              width="262"
                              height="175"
                            />
                          </a>
                        </div>
                      </aside>

                      <aside className="col-md-4">
                        <div className="inblock">
                          <a
                            className="block-link"
                            href="/images/library-events/book-exhibition-march2023-3.jpg"
                            data-fancybox="bookexhibition23"
                            data-caption="Book Exhibition March 2023"
                          >
                            <Image
                              src="/images/library-events/book-exhibition-march2023-3.jpg"
                              alt="Book Exhibition March 2023"
                              title="Book Exhibition March 2023"
                              width="262"
                              height="175"
                            />
                          </a>
                        </div>
                      </aside>

                      <aside className="col-md-4">
                        <div className="inblock">
                          <a
                            className="block-link"
                            href="/images/library-events/book-exhibition-march2023-4.jpg"
                            data-fancybox="bookexhibition23"
                            data-caption="Book Exhibition March 2023"
                          >
                            <Image
                              src="/images/library-events/book-exhibition-march2023-4.jpg"
                              alt="Book Exhibition March 2023"
                              title="Book Exhibition March 2023"
                              width="262"
                              height="175"
                            />
                          </a>
                        </div>
                      </aside>

                      <aside className="col-md-4">
                        <div className="inblock">
                          <a
                            className="block-link"
                            href="/images/library-events/book-exhibition-march2023-5.jpg"
                            data-fancybox="bookexhibition23"
                            data-caption="Book Exhibition March 2023"
                          >
                            <Image
                              src="/images/library-events/book-exhibition-march2023-5.jpg"
                              alt="Book Exhibition March 2023"
                              title="Book Exhibition March 2023"
                              width="262"
                              height="175"
                            />
                          </a>
                        </div>
                      </aside>

                      <aside className="col-md-4">
                        <div className="inblock">
                          <a
                            className="block-link"
                            href="/images/library-events/book-exhibition-march2023-6.jpg"
                            data-fancybox="bookexhibition23"
                            data-caption="Book Exhibition March 2023"
                          >
                            <Image
                              src="/images/library-events/book-exhibition-march2023-6.jpg"
                              alt="Book Exhibition March 2023"
                              title="Book Exhibition March 2023"
                              width="262"
                              height="175"
                            />
                          </a>
                        </div>
                      </aside>

                      <aside className="col-md-4">
                        <div className="inblock">
                          <a
                            className="block-link"
                            href="/images/library-events/book-exhibition-march2023-7.jpg"
                            data-fancybox="bookexhibition23"
                            data-caption="Book Exhibition March 2023"
                          >
                            <Image
                              src="/images/library-events/book-exhibition-march2023-7.jpg"
                              alt="Book Exhibition March 2023"
                              title="Book Exhibition March 2023"
                              width="262"
                              height="175"
                            />
                          </a>
                        </div>
                      </aside>

                      <aside className="col-md-4">
                        <div className="inblock">
                          <a
                            className="block-link"
                            href="/images/library-events/book-exhibition-march2023-8.jpg"
                            data-fancybox="bookexhibition23"
                            data-caption="Book Exhibition March 2023"
                          >
                            <Image
                              src="/images/library-events/book-exhibition-march2023-8.jpg"
                              alt="Book Exhibition March 2023"
                              title="Book Exhibition March 2023"
                              width="262"
                              height="175"
                            />
                          </a>
                        </div>
                      </aside>

                      <aside className="col-md-4">
                        <div className="inblock">
                          <a
                            className="block-link"
                            href="/images/library-events/book-exhibition-march2023-9.jpg"
                            data-fancybox="bookexhibition23"
                            data-caption="Book Exhibition March 2023"
                          >
                            <Image
                              src="/images/library-events/book-exhibition-march2023-9.jpg"
                              alt="Book Exhibition March 2023"
                              title="Book Exhibition March 2023"
                              width="262"
                              height="175"
                            />
                          </a>
                        </div>
                      </aside>

                      <aside className="col-md-4">
                        <div className="inblock">
                          <a
                            className="block-link"
                            href="/images/library-events/book-exhibition-march2023-10.jpg"
                            data-fancybox="bookexhibition23"
                            data-caption="Book Exhibition March 2023"
                          >
                            <Image
                              src="/images/library-events/book-exhibition-march2023-10.jpg"
                              alt="Book Exhibition March 2023"
                              title="Book Exhibition March 2023"
                              width="262"
                              height="175"
                            />
                          </a>
                        </div>
                      </aside>

                      <aside className="col-md-4">
                        <div className="inblock">
                          <a
                            className="block-link"
                            href="/images/library-events/book-exhibition-march2023-11.jpg"
                            data-fancybox="bookexhibition23"
                            data-caption="Book Exhibition March 2023"
                          >
                            <Image
                              src="/images/library-events/book-exhibition-march2023-11.jpg"
                              alt="Book Exhibition March 2023"
                              title="Book Exhibition March 2023"
                              width="262"
                              height="175"
                            />
                          </a>
                        </div>
                      </aside>

                      <aside className="col-md-4">
                        <div className="inblock">
                          <a
                            className="block-link"
                            href="/images/library-events/book-exhibition-march2023-12.jpg"
                            data-fancybox="bookexhibition23"
                            data-caption="Book Exhibition March 2023"
                          >
                            <Image
                              src="/images/library-events/book-exhibition-march2023-12.jpg"
                              alt="Book Exhibition March 2023"
                              title="Book Exhibition March 2023"
                              width="262"
                              height="175"
                            />
                          </a>
                        </div>
                      </aside>

                      <aside className="col-md-4">
                        <div className="inblock">
                          <a
                            className="block-link"
                            href="/images/library-events/book-exhibition-march2023-13.jpg"
                            data-fancybox="bookexhibition23"
                            data-caption="Book Exhibition March 2023"
                          >
                            <Image
                              src="/images/library-events/book-exhibition-march2023-13.jpg"
                              alt="Book Exhibition March 2023"
                              title="Book Exhibition March 2023"
                              width="262"
                              height="175"
                            />
                          </a>
                        </div>
                      </aside>

                      <aside className="col-md-4">
                        <div className="inblock">
                          <a
                            className="block-link"
                            href="/images/library-events/book-exhibition-march2023-14.jpg"
                            data-fancybox="bookexhibition23"
                            data-caption="Book Exhibition March 2023"
                          >
                            <Image
                              src="/images/library-events/book-exhibition-march2023-14.jpg"
                              alt="Book Exhibition March 2023"
                              title="Book Exhibition March 2023"
                              width="262"
                              height="175"
                            />
                          </a>
                        </div>
                      </aside>

                      <aside className="col-md-4">
                        <div className="inblock">
                          <a
                            className="block-link"
                            href="/images/library-events/book-exhibition-march2023-15.jpg"
                            data-fancybox="bookexhibition23"
                            data-caption="Book Exhibition March 2023"
                          >
                            <Image
                              src="/images/library-events/book-exhibition-march2023-15.jpg"
                              alt="Book Exhibition March 2023"
                              title="Book Exhibition March 2023"
                              width="262"
                              height="175"
                            />
                          </a>
                        </div>
                      </aside>

                      <div className="clearfix"></div>
                    </div>
                  </div>
                </section>
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
// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   //composer require 'drupal/devel:^5.0'
//   const url = `https://${process.env.NEXT_PUBLIC_URL}/jsonapi/node/page/			642fa353-d230-4b81-be72-b0beead47331`;
//   console.log(url);
//   const res = await fetch(url);
//   const posts = await res.json();

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//     },
//     revalidate: 100, // Rebuild the page every 1 second to check for updates
//   };
// }
