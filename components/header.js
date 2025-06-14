import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import HeaderNavbar from './header-navbar'

const Header = (props) => {
  return (
    <>
      <div id="header" className="header-header">
        <HeaderNavbar
          text={
            <Fragment>
              <span className="header-text10">Get Started</span>
            </Fragment>
          }
          link1={
            <Fragment>
              <span className="header-text11">Home</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="header-text12">About</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="header-text13">Products &amp; Services</span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="header-text14">Contact us</span>
            </Fragment>
          }
          page1={
            <Fragment>
              <span className="header-text15">Home</span>
            </Fragment>
          }
          page2={
            <Fragment>
              <span className="header-text16">About Us</span>
            </Fragment>
          }
          page3={
            <Fragment>
              <span className="header-text17">Services</span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="header-text18">Contact</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="header-text19">Sign Up</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="header-text20">Get Started</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="header-text21">...</span>
            </Fragment>
          }
          link11={
            <Fragment>
              <span className="header-text22">Home</span>
            </Fragment>
          }
          link21={
            <Fragment>
              <span className="header-text23">About</span>
            </Fragment>
          }
          link31={
            <Fragment>
              <span className="header-text24">Products &amp; Services</span>
            </Fragment>
          }
          description1={
            <Fragment>
              <span className="header-text25">
                Learn more about our company.
              </span>
            </Fragment>
          }
          description2={
            <Fragment>
              <span className="header-text26">
                Discover who we are and what we do.
              </span>
            </Fragment>
          }
          description3={
            <Fragment>
              <span className="header-text27">
                Explore the services we offer.
              </span>
            </Fragment>
          }
          description4={
            <Fragment>
              <span className="header-text28">
                Get in touch with us for any inquiries.
              </span>
            </Fragment>
          }
          rootClassName="header-navbarroot-class-name"
        ></HeaderNavbar>
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="header-image"
        />
        <div className="header-container">
          <div className="header-max-width thq-section-max-width">
            <div className="header-column">
              <div className="header-content">
                <h1 className="header-text29">
                  {props.text1 ?? (
                    <Fragment>
                      <span className="header-text30">
                        <span>We</span>
                        <br></br>
                        <span>
                          make
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <br></br>
                        <span>
                          solutions
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <br></br>
                        <span>work.</span>
                      </span>
                    </Fragment>
                  )}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .header-header {
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .header-text10 {
            display: inline-block;
          }
          .header-text11 {
            display: inline-block;
          }
          .header-text12 {
            display: inline-block;
          }
          .header-text13 {
            display: inline-block;
          }
          .header-text14 {
            display: inline-block;
          }
          .header-text15 {
            display: inline-block;
          }
          .header-text16 {
            display: inline-block;
          }
          .header-text17 {
            display: inline-block;
          }
          .header-text18 {
            display: inline-block;
          }
          .header-text19 {
            display: inline-block;
          }
          .header-text20 {
            display: inline-block;
          }
          .header-text21 {
            display: inline-block;
          }
          .header-text22 {
            display: inline-block;
          }
          .header-text23 {
            display: inline-block;
          }
          .header-text24 {
            display: inline-block;
          }
          .header-text25 {
            display: inline-block;
          }
          .header-text26 {
            display: inline-block;
          }
          .header-text27 {
            display: inline-block;
          }
          .header-text28 {
            display: inline-block;
          }
          .header-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .header-container {
            right: -1px;
            width: 100%;
            bottom: 1px;
            display: flex;
            position: absolute;
            align-items: flex-end;
            justify-content: flex-end;
          }
          .header-max-width {
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: flex-start;
          }
          .header-column {
            gap: 24px;
            width: auto;
            display: flex;
            z-index: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .header-content {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            animation-name: fadeInLeftBig;
            flex-direction: column;
            animation-delay: 0s;
            animation-duration: 500ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .header-text29 {
            color: #ffffff;
            margin: var(--dl-layout-space-fourunits);
            font-size: 36px;
            font-family: 'Maven Pro';
            font-weight: 700;
            text-transform: capitalize;
            text-decoration: none;
          }
          .header-text30 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .header-header {
              justify-content: center;
            }
            .header-max-width {
              justify-content: center;
            }
            .header-column {
              width: 100%;
            }
            .header-text29 {
              font-size: 56px;
            }
          }
          @media (max-width: 479px) {
            .header-image {
              width: 478px;
            }
          }
        `}
      </style>
    </>
  )
}

Header.defaultProps = {
  imageSrc:
    'https://images.unsplash.com/photo-1569150219201-a51caac04011?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGJva2VofGVufDB8fHx8MTc0OTgwMzQxMHww&ixlib=rb-4.1.0&w=1500',
  text1: undefined,
  imageAlt: 'image',
}

Header.propTypes = {
  imageSrc: PropTypes.string,
  text1: PropTypes.element,
  imageAlt: PropTypes.string,
}

export default Header
