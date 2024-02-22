import React from "react";
import Head from "next/head";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import TopNavbtn from "../Components/Media/TopNavbtn";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function PhotoGallery() {
  const [activeTab, setActiveTab] = useState("tab-2023");

  const handleClick = (value) => () => {
    console.log(value);
    setActiveTab(value);
  };

  Fancybox.bind("[data-fancybox]", {
    speed: 1000,
  });

  return (
    <>
      <style jsx>{`
        .tabs-fillter {
          display: flex;
          gap: 8px;
          margin: 25px 0;
        }

        .tabs-fillter button {
          background: #fff;
          border: none;
          outline: none;
          font-style: normal;
          font-weight: 600;
          color: #fff;
          padding-right: 30px;
          background-color: #001641;
          font-size: 16px;
          line-height: 22px;
          border: none;
          border-radius: 0;
          text-transform: uppercase;

          position: relative;
          display: block;
          padding: 10px 15px;
        }

        .tabs-fillter button:hover,
        .tabs-fillter button.btn-active {
          color: #ee2446;
          background-color: #fff;
          border: none;
          border-radius: 0;
        }

        .hmstab-wapper .tab-pane {
          display: none;
          padding: 5px;
          border: 1px solid #eaeaea;
          border-radius: 5px;
          border-top-left-radius: 0px;
          min-height: 350px;
        }

        .hmstab-wapper .tab-pane h2.in-heading {
          display: block;
          background: #f7f3ec;
          width: 100%;
          padding: 6px 12px;
          margin: 0 0 10px 0;
          color: #41679c;
          font-size: 22px;
          font-weight: 500;
          text-transform: uppercase;
          line-height: 28px;
          letter-spacing: 0px;
        }

        .hmstab-wapper .tab-pane.active {
          display: block;
        }

        .hmstab-wapper .tab-pane aside {
          margin: 0 0 30px 0;
        }

        .hmstab-wapper .tab-pane aside img {
          height: 220px;
          width: 100%;
          margin-bottom: 10px;
        }
      `}</style>

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
            <h1>PHOTO GALLERY</h1>
            <span className="bottom-bar" />
          </div>
        </div>
        <TopNavbtn />

        <div className="container photo-gallery">
          <div className="tabs-fillter">
            <button
              type="button"
              className="btn-active"
              onClick={handleClick("tab-2023")}
            >
              2023 {activeTab === "tab-2023" ? "-" : "+"}
            </button>
            <button
              type="button"
              className={activeTab === "tab-2022" ? "btn-active" : ""}
              onClick={handleClick("tab-2022")}
            >
              2022 {activeTab === "tab-2022" ? "-" : "+"}
            </button>
            <button
              type="button"
              className={activeTab === "tab-2021" ? "btn-active" : ""}
              onClick={handleClick("tab-2021")}
            >
              2021 {activeTab === "tab-2021" ? "-" : "+"}
            </button>
          </div>
        </div>

        <div className="container">
          <div className="hmstab-wapper photo-gallery">
            <div
              className={
                activeTab == "tab-2023" ? "tab-pane active" : "tab-pane"
              }
              id="tab-2023"
            >
              <h2 className="in-heading">MNLUA INDUCTION PROGRAMME 2022</h2>
              <div className="row">
                <aside className="col-md-4 col-sm-6">
                  <div className="inblock">
                    <a
                      className="block-link"
                      href="images/gallery/pg2-1.jpg"
                      data-fancybox="pg2"
                      data-caption="MNLUA INDUCTION PROGRAMME 2022"
                    >
                      <Image
                        src="/images/gallery/pg2-1.jpg"
                        alt="MNLUA INDUCTION PROGRAMME 2022"
                        title="Picture of the author"
                        width="356"
                        height="220"
                      />
                    </a>
                  </div>
                </aside>

                <aside className="col-md-4 col-sm-6">
                  <div className="inblock">
                    <a
                      className="block-link"
                      href="images/gallery/pg2-2.jpg"
                      data-fancybox="pg2"
                      data-caption="MNLUA INDUCTION PROGRAMME 2022"
                    >
                      <Image
                        src="/images/gallery/pg2-2.jpg"
                        alt="MNLUA INDUCTION PROGRAMME 2022"
                        title="Picture of the author"
                        width="356"
                        height="220"
                      />
                    </a>
                  </div>
                </aside>

                <aside className="col-md-4 col-sm-6">
                  <div className="inblock">
                    <a
                      className="block-link"
                      href="images/gallery/pg2-3.jpg"
                      data-fancybox="pg2"
                      data-caption="MNLUA INDUCTION PROGRAMME 2022"
                    >
                      <Image
                        src="/images/gallery/pg2-3.jpg"
                        alt="MNLUA INDUCTION PROGRAMME 2022"
                        width="356"
                        height="220"
                      />
                    </a>
                  </div>
                </aside>

                <aside className="col-md-4 col-sm-6">
                  <div className="inblock">
                    <a
                      className="block-link"
                      href="images/gallery/pg2-4.jpg"
                      data-fancybox="pg2"
                      data-caption="MNLUA INDUCTION PROGRAMME 2022"
                    >
                      <Image
                        src="/images/gallery/pg2-4.jpg"
                        alt="MNLUA INDUCTION PROGRAMME 2022"
                        width="356"
                        height="220"
                      />
                    </a>
                  </div>
                </aside>

                <aside className="col-md-4 col-sm-6">
                  <div className="inblock">
                    <a
                      className="block-link"
                      href="images/gallery/pg2-5.jpg"
                      data-fancybox="pg2"
                      data-caption="MNLUA INDUCTION PROGRAMME 2022"
                    >
                      <Image
                        src="/images/gallery/pg2-5.jpg"
                        alt="MNLUA INDUCTION PROGRAMME 2022"
                        width="356"
                        height="220"
                      />
                    </a>
                  </div>
                </aside>

                <aside className="col-md-4 col-sm-6">
                  <div className="inblock">
                    <a
                      className="block-link"
                      href="images/gallery/pg2-6.jpg"
                      data-fancybox="pg2"
                      data-caption="MNLUA INDUCTION PROGRAMME 2022"
                    >
                      <Image
                        src="/images/gallery/pg2-6.jpg"
                        alt="MNLUA INDUCTION PROGRAMME 2022"
                        width="356"
                        height="220"
                      />
                    </a>
                  </div>
                </aside>
                <div className="clearfix"></div>
              </div>
            </div>

            <div
              className={
                activeTab == "tab-2022" ? "tab-pane active" : "tab-pane"
              }
              id="tab-2022"
            >
              <h2 className="in-heading">
                VISIT OF HONBLE CHANCELLOR SHRI. JUSTICE ABHAY SHREENIWAS OKA,
                JUDGE, SUPREME COURT OF INDIA ON SEPTEMBER 2022
              </h2>
              <div className="row">
                <aside className="col-md-4 col-sm-6">
                  <div className="inblock">
                    <a
                      className="block-link"
                      href="images/gallery/pg1-1.jpg"
                      data-fancybox="pg1"
                      data-caption="VISIT OF HON'BLE CHANCELLOR SHRI. JUSTICE ABHAY SHREENIWAS OKA, JUDGE, SUPREME COURT OF INDIA ON SEPTEMBER 2022"
                    >
                      <Image
                        src="/images/gallery/pg1-1.jpg"
                        alt="SUPREME COURT OF INDIA ON SEPTEMBER 2022"
                        width="356"
                        height="220"
                      />
                    </a>
                  </div>
                </aside>

                <aside className="col-md-4 col-sm-6">
                  <div className="inblock">
                    <a
                      className="block-link"
                      href="images/gallery/pg1-2.jpg"
                      data-fancybox="pg1"
                      data-caption="VISIT OF HON'BLE CHANCELLOR SHRI. JUSTICE ABHAY SHREENIWAS OKA, JUDGE, SUPREME COURT OF INDIA ON SEPTEMBER 2022"
                    >
                      <Image
                        src="/images/gallery/pg1-2.jpg"
                        alt="SUPREME COURT OF INDIA ON SEPTEMBER 2022"
                        width="356"
                        height="220"
                      />
                    </a>
                  </div>
                </aside>

                <aside className="col-md-4 col-sm-6">
                  <div className="inblock">
                    <a
                      className="block-link"
                      href="images/gallery/pg1-3.jpg"
                      data-fancybox="pg1"
                      data-caption="VISIT OF HON'BLE CHANCELLOR SHRI. JUSTICE ABHAY SHREENIWAS OKA, JUDGE, SUPREME COURT OF INDIA ON SEPTEMBER 2022"
                    >
                      <Image
                        src="/images/gallery/pg1-3.jpg"
                        alt="SUPREME COURT OF INDIA ON SEPTEMBER 2022"
                        width="356"
                        height="220"
                      />
                    </a>
                  </div>
                </aside>

                <aside className="col-md-4 col-sm-6">
                  <div className="inblock">
                    <a
                      className="block-link"
                      href="images/gallery/pg1-4.jpg"
                      data-fancybox="pg1"
                      data-caption="VISIT OF HON'BLE CHANCELLOR SHRI. JUSTICE ABHAY SHREENIWAS OKA, JUDGE, SUPREME COURT OF INDIA ON SEPTEMBER 2022"
                    >
                      <Image
                        src="/images/gallery/pg1-4.jpg"
                        alt="SUPREME COURT OF INDIA ON SEPTEMBER 2022"
                        width="356"
                        height="220"
                      />
                    </a>
                  </div>
                </aside>

                <aside className="col-md-4 col-sm-6">
                  <div className="inblock">
                    <a
                      className="block-link"
                      href="images/gallery/pg1-5.jpg"
                      data-fancybox="pg1"
                      data-caption="VISIT OF HON'BLE CHANCELLOR SHRI. JUSTICE ABHAY SHREENIWAS OKA, JUDGE, SUPREME COURT OF INDIA ON SEPTEMBER 2022"
                    >
                      <Image
                        src="/images/gallery/pg1-5.jpg"
                        alt="SUPREME COURT OF INDIA ON SEPTEMBER 2022"
                        width="356"
                        height="220"
                      />
                    </a>
                  </div>
                </aside>

                <aside className="col-md-4 col-sm-6">
                  <div className="inblock">
                    <a
                      className="block-link"
                      href="images/gallery/pg1-6.jpg"
                      data-fancybox="pg1"
                      data-caption="VISIT OF HON'BLE CHANCELLOR SHRI. JUSTICE ABHAY SHREENIWAS OKA, JUDGE, SUPREME COURT OF INDIA ON SEPTEMBER 2022"
                      >
                      <Image
                        src="/images/gallery/pg1-6.jpg"
                        alt="SUPREME COURT OF INDIA ON SEPTEMBER 2022"
                        width="356"
                        height="220"
                      />
                    </a>
                  </div>
                </aside>

                <div className="clearfix"></div>
              </div>

              <h2 className="in-heading">MNLUA INDUCTION PROGRAMME 2022</h2>
              <div className="row">
                <aside className="col-md-4 col-sm-6">
                  <div className="inblock">
                    <a
                      className="block-link"
                      href="images/gallery/pg2-1.jpg"
                      data-fancybox="pg2"
                      data-caption="MNLUA INDUCTION PROGRAMME 2022"
                      >
                      <Image
                        src="/images/gallery/pg2-1.jpg"
                        alt="MNLUA INDUCTION PROGRAMME 2022"
                        width="356"
                        height="220"
                      />
                    </a>
                  </div>
                </aside>

                <aside className="col-md-4 col-sm-6">
                  <div className="inblock">
                    <a
                      className="block-link"
                      href="images/gallery/pg2-2.jpg"
                      data-fancybox="pg2"
                      data-caption="MNLUA INDUCTION PROGRAMME 2022"
                      >
                      <Image
                        src="/images/gallery/pg2-2.jpg"
                        alt="MNLUA INDUCTION PROGRAMME 2022"
                        width="356"
                        height="220"
                      />
                    </a>
                  </div>
                </aside>

                <aside className="col-md-4 col-sm-6">
                  <div className="inblock">
                    <a
                      className="block-link"
                      href="images/gallery/pg2-3.jpg"
                      data-fancybox="pg2"
                      data-caption="MNLUA INDUCTION PROGRAMME 2022"
                    >
                      <Image
                        src="/images/gallery/pg2-3.jpg"
                        alt="MNLUA INDUCTION PROGRAMME 2022"
                        width="356"
                        height="220"
                      />
                    </a>
                  </div>
                </aside>

                <aside className="col-md-4 col-sm-6">
                  <div className="inblock">
                    <a
                      className="block-link"
                      href="images/gallery/pg2-4.jpg"
                      data-fancybox="pg2"
                      data-caption="MNLUA INDUCTION PROGRAMME 2022"
                    >
                      <Image
                        src="/images/gallery/pg2-4.jpg"
                        alt="MNLUA INDUCTION PROGRAMME 2022"
                        width="356"
                        height="220"
                      />
                    </a>
                  </div>
                </aside>

                <aside className="col-md-4 col-sm-6">
                  <div className="inblock">
                    <a
                      className="block-link"
                      href="images/gallery/pg2-5.jpg"
                      data-fancybox="pg2"
                      data-caption="MNLUA INDUCTION PROGRAMME 2022"
                      >
                      <Image
                        src="/images/gallery/pg2-5.jpg"
                        alt="MNLUA INDUCTION PROGRAMME 2022"
                        width="356"
                        height="220"
                      />
                    </a>
                  </div>
                </aside>

                <aside className="col-md-4 col-sm-6">
                  <div className="inblock">
                    <a
                      className="block-link"
                      href="images/gallery/pg2-6.jpg"
                      data-fancybox="pg2"
                      data-caption="MNLUA INDUCTION PROGRAMME 2022"
                    >
                      <Image
                        src="/images/gallery/pg2-6.jpg"
                        alt="MNLUA INDUCTION PROGRAMME 2022"
                        width="356"
                        height="220"
                      />
                    </a>
                  </div>
                </aside>
                <div className="clearfix"></div>
              </div>

              <h2 className="in-heading">CONVOCATION 2022</h2>
              <div className="row">
                <aside className="col-md-4 col-sm-6">
                  <div className="inblock">
                    <a
                      className="block-link"
                      href="images/gallery/pg3-1.jpg"
                      data-fancybox="pg3"
                      data-caption="CONVOCATION 2022"
                    >
                      <Image
                        src="/images/gallery/pg3-1.jpg"
                        alt="CONVOCATION 2022"
                        width="356"
                        height="220"
                      />
                    </a>
                  </div>
                </aside>

                <aside className="col-md-4 col-sm-6">
                  <div className="inblock">
                    <a
                      className="block-link"
                      href="images/gallery/pg3-2.jpg"
                      data-fancybox="pg3"
                      data-caption="CONVOCATION 2022"
                    >
                      <Image
                        src="/images/gallery/pg3-2.jpg"
                        alt="CONVOCATION 2022"
                        width="356"
                        height="220"
                      />
                    </a>
                  </div>
                </aside>

                <aside className="col-md-4 col-sm-6">
                  <div className="inblock">
                    <a
                      className="block-link"
                      href="images/gallery/pg3-3.jpg"
                      data-fancybox="pg3"
                      data-caption="CONVOCATION 2022"
                    >
                      <Image
                        src="/images/gallery/pg3-3.jpg"
                        alt="CONVOCATION 2022"
                        width="356"
                        height="220"
                      />
                    </a>
                  </div>
                </aside>

                <aside className="col-md-4 col-sm-6">
                  <div className="inblock">
                    <a
                      className="block-link"
                      href="images/gallery/pg3-4.jpg"
                      data-fancybox="pg3"
                      data-caption="CONVOCATION 2022"
                    >
                      <Image
                        src="/images/gallery/pg3-4.jpg"
                        alt="CONVOCATION 2022"
                        width="356"
                        height="220"
                      />
                    </a>
                  </div>
                </aside>

                <aside className="col-md-4 col-sm-6">
                  <div className="inblock">
                    <a
                      className="block-link"
                      href="images/gallery/pg3-5.jpg"
                      data-fancybox="pg3"
                      data-caption="CONVOCATION 2022"
                    >
                      <Image
                        src="/images/gallery/pg3-5.jpg"
                        alt="CONVOCATION 2022"
                        width="356"
                        height="220"
                      />
                    </a>
                  </div>
                </aside>

                <aside className="col-md-4 col-sm-6">
                  <div className="inblock">
                    <a
                      className="block-link"
                      href="images/gallery/pg3-6.jpg"
                      data-fancybox="pg3"
                      data-caption="CONVOCATION 2022"
                    >
                      <Image
                        src="/images/gallery/pg3-6.jpg"
                        alt="CONVOCATION 2022"
                        width="356"
                        height="220"
                      />
                    </a>
                  </div>
                </aside>

                <div className="clearfix"></div>
              </div>
            </div>

            <div
              className={
                activeTab == "tab-2021" ? "tab-pane active" : "tab-pane"
              }
              id="tab-2021"
            >
              <h2 className="in-heading">CONVOCATION 2022</h2>
              <div className="row">
                <aside className="col-md-4 col-sm-6">
                  <div className="inblock">
                    <a
                      className="block-link"
                      href="images/gallery/pg3-1.jpg"
                      data-fancybox="pg3"
                      data-caption="CONVOCATION 2022"
                    >
                      <Image
                        src="/images/gallery/pg3-1.jpg"
                        alt="CONVOCATION 2022"
                        width="356"
                        height="220"
                      />
                    </a>
                  </div>
                </aside>

                <aside className="col-md-4 col-sm-6">
                  <div className="inblock">
                    <a
                      className="block-link"
                      href="images/gallery/pg3-2.jpg"
                      data-fancybox="pg3"
                      data-caption="CONVOCATION 2022"
                    >
                      <Image
                        src="/images/gallery/pg3-2.jpg"
                        alt="CONVOCATION 2022"
                        width="356"
                        height="220"
                      />
                    </a>
                  </div>
                </aside>

                <aside className="col-md-4 col-sm-6">
                  <div className="inblock">
                    <a
                      className="block-link"
                      href="images/gallery/pg3-3.jpg"
                      data-fancybox="pg3"
                      data-caption="CONVOCATION 2022"
                    >
                      <Image
                        src="/images/gallery/pg3-3.jpg"
                        alt="CONVOCATION 2022"
                        width="356"
                        height="220"
                      />
                    </a>
                  </div>
                </aside>

                <aside className="col-md-4 col-sm-6">
                  <div className="inblock">
                    <a
                      className="block-link"
                      href="images/gallery/pg3-4.jpg"
                      data-fancybox="pg3"
                      data-caption="CONVOCATION 2022"
                    >
                      <Image
                        src="/images/gallery/pg3-4.jpg"
                        alt="CONVOCATION 2022"
                        width="356"
                        height="220"
                      />
                    </a>
                  </div>
                </aside>

                <aside className="col-md-4 col-sm-6">
                  <div className="inblock">
                    <a
                      className="block-link"
                      href="images/gallery/pg3-5.jpg"
                      data-fancybox="pg3"
                      data-caption="CONVOCATION 2022"
                    >
                      <Image
                        src="/images/gallery/pg3-5.jpg"
                        alt="CONVOCATION 2022"
                        width="356"
                        height="220"
                      />
                    </a>
                  </div>
                </aside>

                <aside className="col-md-4 col-sm-6">
                  <div className="inblock">
                    <a
                      className="block-link"
                      href="images/gallery/pg3-6.jpg"
                      data-fancybox="pg3"
                      data-caption="CONVOCATION 2022"
                    >
                      <Image
                        src="/images/gallery/pg3-6.jpg"
                        alt="CONVOCATION 2022"
                        width="356"
                        height="220"
                      />
                    </a>
                  </div>
                </aside>

                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default PhotoGallery;
