import React, { useState, Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navbar from '../components/navbar'
import Header from '../components/header'
import Footer from '../components/footer'

const Home = (props) => {
  const [link5AccordionOpen, setLink5AccordionOpen] = useState(false)
  const [link5DropdownVisible, setLink5DropdownVisible] = useState(false)
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>INSOL Website</title>
          <meta property="og:title" content="INSOL Website" />
        </Head>
        <Navbar
          text={
            <Fragment>
              <span className="home-text10">Get Started</span>
            </Fragment>
          }
          link1={
            <Fragment>
              <span className="home-text11">Home</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text12">About</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text13">Products &amp; Services</span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="home-text14">Contact us</span>
            </Fragment>
          }
          page1={
            <Fragment>
              <span className="home-text15">Home</span>
            </Fragment>
          }
          page2={
            <Fragment>
              <span className="home-text16">About Us</span>
            </Fragment>
          }
          page3={
            <Fragment>
              <span className="home-text17">Services</span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="home-text18">Contact</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="home-text19">Sign Up</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="home-text20">Get Started</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="home-text21">...</span>
            </Fragment>
          }
          link11={
            <Fragment>
              <span className="home-text22">Home</span>
            </Fragment>
          }
          link21={
            <Fragment>
              <span className="home-text23">About</span>
            </Fragment>
          }
          link31={
            <Fragment>
              <span className="home-text24">Products &amp; Services</span>
            </Fragment>
          }
          description1={
            <Fragment>
              <span className="home-text25">Learn more about our company.</span>
            </Fragment>
          }
          description2={
            <Fragment>
              <span className="home-text26">
                Discover who we are and what we do.
              </span>
            </Fragment>
          }
          description3={
            <Fragment>
              <span className="home-text27">
                Explore the services we offer.
              </span>
            </Fragment>
          }
          description4={
            <Fragment>
              <span className="home-text28">
                Get in touch with us for any inquiries.
              </span>
            </Fragment>
          }
          rootClassName="navbarroot-class-name"
        ></Navbar>
        <Header
          text1={
            <Fragment>
              <span className="home-text29">We make solutions work.</span>
            </Fragment>
          }
          imageSrc="https://images.unsplash.com/photo-1521549847464-717382d302b6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQwfHxib2tlaHxlbnwwfHx8fDE3NDk4MDM0MTl8MA&amp;ixlib=rb-4.1.0&amp;w=1500"
        ></Header>
        <div className="home-container2 thq-section-padding">
          <div className="home-max-width thq-section-max-width">
            <div className="home-container3">
              <div className="home-container4">
                <h2 className="thq-heading-2 home-text30">About</h2>
                <img
                  alt="image"
                  src="/logo_insol_signature-1400w.png"
                  className="home-image"
                />
              </div>
              <p className="home-text31 Content">
                <span>
                  Brief in our company profile says, &quot;Established in 2008
                  in Bekasi, Indonesia, PT. Integritas Solusi Indonesia or INSOL
                  for short, is a software development company, specializing in
                  web and mobile apps, client-server applications and
                  business-grade, enterprise-level information systems.
                </span>
                <br></br>
                <br></br>
                <span>
                  With a vast portfolio comprising major telco, banking and
                  financial institutions as well as distribution companies, we
                  strive to build solutions for lifestyle and business apps
                  alike. We have had a good run in developing mobile and web
                  apps, to digital payment services connected to payment
                  gateways in Indonesia.
                </span>
                <br></br>
                <br></br>
                <span>
                  We keep a tremendous record of loyalty and service excellence
                  to our projects.
                </span>
              </p>
              <div className="home-actions">
                <button className="thq-button-filled home-button1">
                  <span className="thq-body-small">Main action</span>
                </button>
                <button className="thq-button-outline home-button2">
                  <span className="thq-body-small">Secondary action</span>
                </button>
              </div>
            </div>
            <div className="home-container5 thq-grid-2">
              <img
                alt="Logo"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&amp;force_format=original"
                className="home-logo1 thq-img-ratio-16-9"
              />
              <img
                alt="Logo"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&amp;force_format=original"
                className="home-logo2 thq-img-ratio-16-9"
              />
              <img
                alt="Logo"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&amp;force_format=original"
                className="home-logo3 thq-img-ratio-16-9"
              />
              <img
                alt="Logo"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&amp;force_format=original"
                className="home-logo4 thq-img-ratio-16-9"
              />
              <img
                alt="Logo"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&amp;force_format=original"
                className="home-logo5 thq-img-ratio-16-9"
              />
              <img
                alt="Logo"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&amp;force_format=original"
                className="home-logo6 thq-img-ratio-16-9"
              />
              <img
                alt="Logo"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&amp;force_format=original"
                className="home-logo7 thq-img-ratio-16-9"
              />
              <img
                alt="Logo"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&amp;force_format=original"
                className="home-logo8 thq-img-ratio-16-9"
              />
            </div>
          </div>
        </div>
        <Footer
          link1={
            <Fragment>
              <span className="home-text39">Home</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text40">About Us</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text41">Contact Us</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text42">FAQs</span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="home-text43">Terms of Service</span>
            </Fragment>
          }
          link6={
            <Fragment>
              <span className="home-text44">Privacy Policy</span>
            </Fragment>
          }
          link7={
            <Fragment>
              <span className="home-text45">Careers</span>
            </Fragment>
          }
          link8={
            <Fragment>
              <span className="home-text46">Blog</span>
            </Fragment>
          }
          link9={
            <Fragment>
              <span className="home-text47">Testimonials</span>
            </Fragment>
          }
          link10={
            <Fragment>
              <span className="home-text48">Get in Touch</span>
            </Fragment>
          }
          logoSrc="/logo_insol_white-1400w.png"
          copyright={
            <Fragment>
              <span className="home-text49">
                © 2022 Company. All Rights Reserved.
              </span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="home-text50">/terms</span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="home-text51">/cookies</span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="home-text52">/privacy</span>
            </Fragment>
          }
          column1Title={
            <Fragment>
              <span className="home-text53">Company</span>
            </Fragment>
          }
          column2Title={
            <Fragment>
              <span className="home-text54">Services</span>
            </Fragment>
          }
          rootClassName="footerroot-class-name"
        ></Footer>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text10 {
            display: inline-block;
          }
          .home-text11 {
            display: inline-block;
          }
          .home-text12 {
            display: inline-block;
          }
          .home-text13 {
            display: inline-block;
          }
          .home-text14 {
            display: inline-block;
          }
          .home-text15 {
            display: inline-block;
          }
          .home-text16 {
            display: inline-block;
          }
          .home-text17 {
            display: inline-block;
          }
          .home-text18 {
            display: inline-block;
          }
          .home-text19 {
            display: inline-block;
          }
          .home-text20 {
            display: inline-block;
          }
          .home-text21 {
            display: inline-block;
          }
          .home-text22 {
            display: inline-block;
          }
          .home-text23 {
            display: inline-block;
          }
          .home-text24 {
            display: inline-block;
          }
          .home-text25 {
            display: inline-block;
          }
          .home-text26 {
            display: inline-block;
          }
          .home-text27 {
            display: inline-block;
          }
          .home-text28 {
            display: inline-block;
          }
          .home-text29 {
            display: inline-block;
          }
          .home-container2 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-max-width {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-container3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container4 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-image {
            height: 128px;
            object-fit: cover;
          }
          .home-text31 {
            text-align: left;
          }
          .home-actions {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .home-container5 {
            gap: var(--dl-layout-space-twounits);
            width: 50%;
            padding: var(--dl-layout-space-fourunits);
          }
          .home-logo1 {
            object-fit: contain;
          }
          .home-logo2 {
            object-fit: contain;
          }
          .home-logo3 {
            object-fit: contain;
          }
          .home-logo4 {
            object-fit: contain;
          }
          .home-logo5 {
            object-fit: contain;
          }
          .home-logo6 {
            object-fit: contain;
          }
          .home-logo7 {
            object-fit: contain;
          }
          .home-logo8 {
            object-fit: contain;
          }
          .home-text39 {
            display: inline-block;
          }
          .home-text40 {
            display: inline-block;
          }
          .home-text41 {
            display: inline-block;
          }
          .home-text42 {
            display: inline-block;
          }
          .home-text43 {
            display: inline-block;
          }
          .home-text44 {
            display: inline-block;
          }
          .home-text45 {
            display: inline-block;
          }
          .home-text46 {
            display: inline-block;
          }
          .home-text47 {
            display: inline-block;
          }
          .home-text48 {
            display: inline-block;
          }
          .home-text49 {
            display: inline-block;
          }
          .home-text50 {
            display: inline-block;
          }
          .home-text51 {
            display: inline-block;
          }
          .home-text52 {
            display: inline-block;
          }
          .home-text53 {
            display: inline-block;
          }
          .home-text54 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .home-max-width {
              flex-direction: column;
            }
            .home-container3 {
              width: 100%;
            }
            .home-container5 {
              width: 100%;
              padding: var(--dl-layout-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .home-container5 {
              padding: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .home-container2 {
              gap: var(--dl-layout-space-unit);
            }
            .home-container3 {
              align-items: center;
            }
            .home-text30 {
              text-align: center;
            }
            .home-actions {
              width: 100%;
              flex-direction: column;
            }
            .home-button1 {
              width: 100%;
            }
            .home-button2 {
              width: 100%;
            }
            .home-container5 {
              padding: var(--dl-layout-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
