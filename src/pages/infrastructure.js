import React from "react";
import Head from "next/head";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Image from "next/image";
function Infrastructure({ posts }) {
  Fancybox.bind("[data-fancybox]", {
    speed: 1000,
  });
  return (
    <div>
      <style jsx>
        {`
          .detail-blk {
            padding: 15px 0;
          }

          .p-gallery-sec aside {
            margin: 15px 0;
          }
        `}
      </style>
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
          <h1>INFRASTRUCTURE</h1>
          <span className="bottom-bar" />
        </div>
      </div>
      {/* <div
				className="infrastructure"
				dangerouslySetInnerHTML={{
					__html: posts.data.attributes.body[0].value,
				}}
			/> */}

      <section className="p-gallery-sec detail-blk">
        <div className="container">
          <h2 className="in-heading">Centre Of Excellence</h2>

          <div className="row">
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/coe5.png"
                  data-fancybox="is-1"
                  data-caption="Centre Of Excellence"
                >
                  <Image
                    src="/images/infra/coe5.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>

            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/coe6.png"
                  data-fancybox="is-1"
                  data-caption="Centre Of Excellence"
                >
                  <Image
                    src="/images/infra/coe6.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>

            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/coe1.png"
                  data-fancybox="is-1"
                  data-caption="Centre Of Excellence"
                >
                  <Image
                    src="/images/infra/coe1.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>

            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/coe2.png"
                  data-fancybox="is-1"
                  data-caption="Centre Of Excellence"
                >
                  <Image
                    src="/images/infra/coe2.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>

            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/coe3.png"
                  data-fancybox="is-1"
                  data-caption="Centre Of Excellence"
                >
                  <Image
                    src="/images/infra/coe3.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>

            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/coe4.png"
                  data-fancybox="is-1"
                  data-caption="Centre Of Excellence"
                >
                  <Image
                    src="/images/infra/coe4.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>
          </div>

          <h2 className="in-heading">VICE-CHANCELLOR Office</h2>

          <div className="row">
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/vco6.png"
                  data-fancybox="is-1"
                  data-caption="Centre Of Excellence"
                >
                  <Image
                    src="/images/infra/vco6.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/vco1.png"
                  data-fancybox="is-1"
                  data-caption="VC Office"
                >
                  <Image
                    src="/images/infra/vco1.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/vco2.png"
                  data-fancybox="is-1"
                  data-caption="Centre Of Excellence"
                >
                  <Image
                    src="/images/infra/vco2.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/vco3.png"
                  data-fancybox="is-1"
                  data-caption="Centre Of Excellence"
                >
                  <Image
                    src="/images/infra/vco3.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/vco4.png"
                  data-fancybox="is-1"
                  data-caption="Centre Of Excellence"
                >
                  <Image
                    src="/images/infra/vco4.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/vco5.png"
                  data-fancybox="is-1"
                  data-caption="Centre Of Excellence"
                >
                  <Image
                    src="/images/infra/vco5.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>
          </div>

          <h2 className="in-heading">Registrar Office</h2>
          <div className="row">
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/ro1.png"
                  data-fancybox="is-1"
                  data-caption="Registrar Office"
                >
                  <Image
                    src="/images/infra/ro1.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>

            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/ro2.png"
                  data-fancybox="is-1"
                  data-caption="Registrar Office"
                >
                  <Image
                    src="/images/infra/ro2.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>

            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/ro3.png"
                  data-fancybox="is-1"
                  data-caption="Registrar Office"
                >
                  <Image
                    src="/images/infra/ro3.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>

            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/ro4.png"
                  data-fancybox="is-1"
                  data-caption="Registrar Office"
                >
                  <Image
                    src="/images/infra/ro4.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>

            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/ro5.png"
                  data-fancybox="is-1"
                  data-caption="Registrar Office"
                >
                  <Image
                    src="/images/infra/ro5.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>

            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/ro6.png"
                  data-fancybox="is-1"
                  data-caption="Registrar Office"
                >
                  <Image
                    src="/images/infra/ro6.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>
          </div>

          <h2 className="in-heading">FAO Office</h2>
          <div className="row">
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/faoo1.png"
                  data-fancybox="is-1"
                  data-caption="FAO Office"
                >
                  <Image
                    src="/images/infra/faoo1.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>

            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/faoo2.png"
                  data-fancybox="is-1"
                  data-caption="FAO Office"
                >
                  <Image
                    src="/images/infra/faoo2.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>

            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/faoo3.png"
                  data-fancybox="is-1"
                  data-caption="FAO Office"
                >
                  <Image
                    src="/images/infra/faoo3.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>

            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/faoo4.png"
                  data-fancybox="is-1"
                  data-caption="FAO Office"
                >
                  <Image
                    src="/images/infra/faoo4.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>
          </div>

          <h2 className="in-heading">Engineer Office</h2>
          <div className="row">
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/eo1.png"
                  data-fancybox="is-1"
                  data-caption="Enginner Office"
                >
                  <Image
                    src="/images/infra/eo1.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/eo2.png"
                  data-fancybox="is-1"
                  data-caption="Enginner Office"
                >
                  <Image
                    src="/images/infra/eo2.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/eo3.png"
                  data-fancybox="is-1"
                  data-caption="Enginner Office"
                >
                  <Image
                    src="/images/infra/eo3.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/eo4.png"
                  data-fancybox="is-1"
                  data-caption="Enginner Office"
                >
                  <Image
                    src="/images/infra/eo4.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>
          </div>

          <h2 className="in-heading">Dean Research Office</h2>

          <div className="row">
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/dro1.png"
                  data-fancybox="is-1"
                  data-caption="Dean Research Office"
                >
                  <Image
                    src="/images/infra/dro1.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/dro2.png"
                  data-fancybox="is-1"
                  data-caption="Dean Research Office"
                >
                  <Image
                    src="/images/infra/dro2.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/dro3.png"
                  data-fancybox="is-1"
                  data-caption="Dean Research Office"
                >
                  <Image
                    src="/images/infra/dro3.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>
          </div>

          <h2 className="in-heading">PG Exam</h2>

          <div className="row">
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/pge1.png"
                  data-fancybox="is-1"
                  data-caption="PG Exam"
                >
                  <Image
                    src="/images/infra/pge1.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/pge2.png"
                  data-fancybox="is-1"
                  data-caption="PG Exam"
                >
                  <Image
                    src="/images/infra/pge2.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/pge3.png"
                  data-fancybox="is-1"
                  data-caption="PG Exam"
                >
                  <Image
                    src="/images/infra/pge3.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>
          </div>

          <h2 className="in-heading">UG Exam</h2>
          <div className="row">
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/uge1.png"
                  data-fancybox="is-1"
                  data-caption="UG Exam"
                >
                  <Image
                    src="/images/infra/uge1.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/uge2.png"
                  data-fancybox="is-1"
                  data-caption="UG Exam"
                >
                  <Image
                    src="/images/infra/uge2.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/uge3.png"
                  data-fancybox="is-1"
                  data-caption="UG Exam"
                >
                  <Image
                    src="/images/infra/uge3.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/uge4.png"
                  data-fancybox="is-1"
                  data-caption="UG Exam"
                >
                  <Image
                    src="/images/infra/uge4.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>
          </div>

          <h2 className="in-heading">IT Dept</h2>
          <div className="row">
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/itd2.png"
                  data-fancybox="is-1"
                  data-caption="IT Dept"
                >
                  <Image
                    src="/images/infra/itd2.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>
          </div>

          <h2 className="in-heading">Academic Committee</h2>
          <div className="row">
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/ac1.png"
                  data-fancybox="is-1"
                  data-caption="Academic Committee"
                >
                  <Image
                    src="/images/infra/ac1.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>
          </div>

          <h2 className="in-heading">Hostel</h2>
          <div className="row">
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/h1.png"
                  data-fancybox="is-1"
                  data-caption="Hostel"
                >
                  <Image
                    src="/images/infra/h1.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/h2.png"
                  data-fancybox="is-1"
                  data-caption="Hostel"
                >
                  <Image
                    src="/images/infra/h2.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/h3.png"
                  data-fancybox="is-1"
                  data-caption="Hostel"
                >
                  <Image
                    src="/images/infra/h3.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/h4.png"
                  data-fancybox="is-1"
                  data-caption="Hostel"
                >
                  <Image
                    src="/images/infra/h4.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/h5.png"
                  data-fancybox="is-1"
                  data-caption="Hostel"
                >
                  <Image
                    src="/images/infra/h5.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/h6.png"
                  data-fancybox="is-1"
                  data-caption="Hostel"
                >
                  <Image
                    src="/images/infra/h6.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>
          </div>

          <h2 className="in-heading">Staff Quarters</h2>
          <div className="row">
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/sq1.png"
                  data-fancybox="is-1"
                  data-caption="STAFF QUARTER"
                >
                  <Image
                    src="/images/infra/sq1.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
                <div class="caption">STAFF QUARTER</div>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/sq2.png"
                  data-fancybox="is-1"
                  data-caption="STAFF QUARTER"
                >
                  <Image
                    src="/images/infra/sq2.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
                <div class="caption">ENTRY GATE</div>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/sq3.png"
                  data-fancybox="is-1"
                  data-caption="A BLOCK"
                >
                  <Image
                    src="/images/infra/sq3.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
                <div class="caption">A BLOCK</div>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/sq4.png"
                  data-fancybox="is-1"
                  data-caption="B BLOCK"
                >
                  <Image
                    src="/images/infra/sq4.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
                <div class="caption">B BLOCK</div>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/sq5.png"
                  data-fancybox="is-1"
                  data-caption="C BLOCK"
                >
                  <Image
                    src="/images/infra/sq5.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
                <div class="caption">C BLOCK</div>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/sq6.png"
                  data-fancybox="is-1"
                  data-caption="D BLOCK"
                >
                  <Image
                    src="/images/infra/sq6.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
                <div class="caption">D BLOCK</div>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/sq7.png"
                  data-fancybox="is-1"
                  data-caption="E BLOCK"
                >
                  <Image
                    src="/images/infra/sq7.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
                <div class="caption">E BLOCK</div>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/sq8.png"
                  data-fancybox="is-1"
                  data-caption="F BLOCK"
                >
                  <Image
                    src="/images/infra/sq8.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
                <div class="caption">F BLOCK</div>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/sq9.png"
                  data-fancybox="is-1"
                  data-caption="G BLOCK"
                >
                  <Image
                    src="/images/infra/sq9.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
                <div class="caption">G BLOCK</div>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/sq10.png"
                  data-fancybox="is-1"
                  data-caption="H BUNGLOW"
                >
                  <Image
                    src="/images/infra/sq10.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
                <div class="caption">H BUNGLOW</div>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/sq11.png"
                  data-fancybox="is-1"
                  data-caption="I BUNGLOW"
                >
                  <Image
                    src="/images/infra/sq11.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
                <div class="caption">I BUNGLOW</div>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/sq12.png"
                  data-fancybox="is-1"
                  data-caption="J BLOCK"
                >
                  <Image
                    src="/images/infra/sq12.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
                <div class="caption">J BUNGLOW</div>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/sq13.png"
                  data-fancybox="is-1"
                  data-caption="K BLOCK"
                >
                  <Image
                    src="/images/infra/sq13.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
                <div class="caption">K BLOCK</div>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/sq14.png"
                  data-fancybox="is-1"
                  data-caption="L BLOCK"
                >
                  <Image
                    src="/images/infra/sq14.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
                <div class="caption">L BLOCK</div>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/sq15.png"
                  data-fancybox="is-1"
                  data-caption="MOOT COURT HALL"
                >
                  <Image
                    src="/images/infra/sq15.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
                <div class="caption">MOOT COURT HALL</div>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/sq16.png"
                  data-fancybox="is-1"
                  data-caption="TABLE TENNIS"
                >
                  <Image
                    src="/images/infra/sq16.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
                <div class="caption">TABLE TENNIS</div>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/sq17.png"
                  data-fancybox="is-1"
                  data-caption="VOLLEYBALL GROUND"
                >
                  <Image
                    src="/images/infra/sq17.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
                <div class="caption">VOLLEYBALL GROUND</div>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/sq18.png"
                  data-fancybox="is-1"
                  data-caption="GYM"
                >
                  <Image
                    src="/images/infra/sq18.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
                <div class="caption">GYM</div>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/sq19.png"
                  data-fancybox="is-1"
                  data-caption="GYM"
                >
                  <Image
                    src="/images/infra/sq19.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
                <div class="caption">GYM</div>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/sq20.png"
                  data-fancybox="is-1"
                  data-caption="GYM"
                >
                  <Image
                    src="/images/infra/sq20.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
                <div class="caption">GYM</div>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/sq21.png"
                  data-fancybox="is-1"
                  data-caption="GUEST HOUSE"
                >
                  <Image
                    src="/images/infra/sq21.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
                <div class="caption">GUEST HOUSE</div>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/sq22.png"
                  data-fancybox="is-1"
                  data-caption="GUEST HOUSE"
                >
                  <Image
                    src="/images/infra/sq22.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
                <div class="caption">GUEST HOUSE</div>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/sq23.png"
                  data-fancybox="is-1"
                  data-caption="GUEST HOUSE"
                >
                  <Image
                    src="/images/infra/sq23.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
                <div class="caption">GUEST HOUSE</div>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/sq24.png"
                  data-fancybox="is-1"
                  data-caption="STAFF QUARTER"
                >
                  <Image
                    src="/images/infra/sq24.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
                <div class="caption">STAFF QUARTER</div>
              </div>
            </aside>
          </div>

          <h2 className="in-heading">Library</h2>

          <div className="row">
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/ip1.png"
                  data-fancybox="is-1"
                  data-caption="Library"
                >
                  <Image
                    src="/images/infra/ip1.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/ip2.png"
                  data-fancybox="is-1"
                  data-caption="Library"
                >
                  <Image
                    src="/images/infra/ip2.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/ip3.png"
                  data-fancybox="is-1"
                  data-caption="Library"
                >
                  <Image
                    src="/images/infra/ip3.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/ip4.png"
                  data-fancybox="is-1"
                  data-caption="Library"
                >
                  <Image
                    src="/images/infra/ip4.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/ip5.png"
                  data-fancybox="is-1"
                  data-caption="Library"
                >
                  <Image
                    src="/images/infra/ip5.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/ip6.png"
                  data-fancybox="is-1"
                  data-caption="Library"
                >
                  <Image
                    src="/images/infra/ip6.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>
            <aside className="col-md-4">
              <div className="inblock">
                <a
                  className="block-link"
                  href="/images/infra/ip7.png"
                  data-fancybox="is-1"
                  data-caption="Library"
                >
                  <Image
                    src="/images/infra/ip7.png"
                    alt="MNLUA INDUCTION PROGRAMME 2022"
                    title="Picture of the author"
                    width="360"
                    height="280"
                  />
                </a>
              </div>
            </aside>
          </div>

          {/* ----------------------- */}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Infrastructure;

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   //composer require 'drupal/devel:^5.0'
//   const url = `https://${process.env.NEXT_PUBLIC_URL}/jsonapi/node/page/0f575c9b-543f-48c4-a61c-7d14093963e4`;
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
