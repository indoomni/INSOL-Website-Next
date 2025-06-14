import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Navbar = (props) => {
  return (
    <>
      <div id="navbar" className={`navbar-container1 ${props.rootClassName} `}>
        <header data-thq="thq-navbar" className="navbar-navbar">
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="navbar-image1"
          />
          <div data-thq="thq-navbar-nav" className="navbar-desktop-menu">
            <nav className="navbar-links1">
              <a
                href={props.link1Url}
                className="navbar-link11 thq-body-small thq-link"
              >
                {props.link1 ?? (
                  <Fragment>
                    <span className="navbar-text23">Home</span>
                  </Fragment>
                )}
              </a>
              <a
                href={props.link2Url}
                className="navbar-link21 thq-body-small thq-link"
              >
                {props.link2 ?? (
                  <Fragment>
                    <span className="navbar-text20">About</span>
                  </Fragment>
                )}
              </a>
              <a
                href={props.link3Url}
                target="_blank"
                rel="noreferrer noopener"
                className="navbar-link31 thq-body-small thq-link"
              >
                {props.link3 ?? (
                  <Fragment>
                    <span className="navbar-text28">
                      Products &amp; Services
                    </span>
                  </Fragment>
                )}
              </a>
              <div onClick={() => {}} className="navbar-link4-dropdown-trigger">
                <div className="navbar-icon-container1">
                  <div className="navbar-container2">
                    <svg viewBox="0 0 1024 1024" className="navbar-icon10">
                      <path d="M298 426h428l-214 214z"></path>
                    </svg>
                  </div>
                  <div className="navbar-container3">
                    <svg viewBox="0 0 1024 1024" className="navbar-icon12">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </nav>
            <div className="navbar-buttons1">
              <button className="navbar-action11 thq-button-animated thq-button-outline">
                <span>
                  {props.text ?? (
                    <Fragment>
                      <span className="navbar-text24">Get Started</span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="navbar-action21 thq-button-animated thq-button-outline">
                <span>
                  {props.text5 ?? (
                    <Fragment>
                      <span className="navbar-text19">...</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="navbar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="navbar-icon14">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="navbar-mobile-menu">
            <div className="navbar-nav">
              <div className="navbar-top">
                <img
                  alt={props.logoAlt}
                  src={props.logoSrc}
                  className="navbar-logo"
                />
                <div data-thq="thq-close-menu" className="navbar-close-menu">
                  <svg viewBox="0 0 1024 1024" className="navbar-icon16">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="navbar-links2">
                <a
                  href={props.link1Url1}
                  className="navbar-link12 thq-body-small thq-link"
                >
                  {props.link11 ?? (
                    <Fragment>
                      <span className="navbar-text26">Home</span>
                    </Fragment>
                  )}
                </a>
                <a href={props.link2Url1} className="thq-body-small thq-link">
                  {props.link21 ?? (
                    <Fragment>
                      <span className="navbar-text14">About</span>
                    </Fragment>
                  )}
                </a>
                <a
                  href={props.link3Url1}
                  className="navbar-link32 thq-body-small thq-link"
                >
                  {props.link31 ?? (
                    <Fragment>
                      <span className="navbar-text27">
                        Products &amp; Services
                      </span>
                    </Fragment>
                  )}
                </a>
                <div className="navbar-link4-accordion">
                  <div onClick={() => {}} className="navbar-trigger">
                    <span className="thq-body-small thq-link">
                      {props.link5 ?? (
                        <Fragment>
                          <span className="navbar-text17">Contact us</span>
                        </Fragment>
                      )}
                    </span>
                    <div className="navbar-icon-container2">
                      <div className="navbar-container4">
                        <svg viewBox="0 0 1024 1024" className="navbar-icon18">
                          <path d="M298 426h428l-214 214z"></path>
                        </svg>
                      </div>
                      <div className="navbar-container5">
                        <svg viewBox="0 0 1024 1024" className="navbar-icon20">
                          <path d="M426 726v-428l214 214z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="navbar-container6">
                    <a href={props.menuItemUrl}>
                      <div className="navbar-menu-item1">
                        <img
                          alt={props.page1ImageAlt}
                          src={props.page1ImageSrc}
                          className="navbar-page1-image"
                        />
                        <div className="navbar-content1">
                          <span className="navbar-page1 thq-body-large">
                            {props.page1 ?? (
                              <Fragment>
                                <span className="navbar-text18">Home</span>
                              </Fragment>
                            )}
                          </span>
                          <span className="thq-body-small">
                            {props.description1 ?? (
                              <Fragment>
                                <span className="navbar-text22">
                                  Learn more about our company.
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                      </div>
                    </a>
                    <a href={props.menuItemUrl1}>
                      <div className="navbar-menu-item2">
                        <img
                          alt={props.page2ImageAlt}
                          src={props.page2ImageSrc}
                          className="navbar-page2-image"
                        />
                        <div className="navbar-content2">
                          <span className="navbar-page2 thq-body-large">
                            {props.page2 ?? (
                              <Fragment>
                                <span className="navbar-text30">About Us</span>
                              </Fragment>
                            )}
                          </span>
                          <span className="thq-body-small">
                            {props.description2 ?? (
                              <Fragment>
                                <span className="navbar-text32">
                                  Discover who we are and what we do.
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                      </div>
                    </a>
                    <a href={props.menuItemUrl2}>
                      <div className="navbar-menu-item3">
                        <img
                          alt={props.page3ImageAlt}
                          src={props.page3ImageSrc}
                          className="navbar-page3-image"
                        />
                        <div className="navbar-content3">
                          <span className="navbar-page3 thq-body-large">
                            {props.page3 ?? (
                              <Fragment>
                                <span className="navbar-text21">Services</span>
                              </Fragment>
                            )}
                          </span>
                          <span className="thq-body-small">
                            {props.description3 ?? (
                              <Fragment>
                                <span className="navbar-text16">
                                  Explore the services we offer.
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                      </div>
                    </a>
                    <a href={props.menuItemUrl3}>
                      <div className="navbar-menu-item4">
                        <img
                          alt={props.page4ImageAlt}
                          src={props.page4ImageSrc}
                          className="navbar-page4-image"
                        />
                        <div className="navbar-content4">
                          <span className="navbar-page4 thq-body-large">
                            {props.page4 ?? (
                              <Fragment>
                                <span className="navbar-text29">Contact</span>
                              </Fragment>
                            )}
                          </span>
                          <span className="thq-body-small">
                            {props.description4 ?? (
                              <Fragment>
                                <span className="navbar-text15">
                                  Get in touch with us for any inquiries.
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </nav>
              <div className="navbar-buttons2">
                <button className="thq-button-filled">
                  <span>
                    {props.text2 ?? (
                      <Fragment>
                        <span className="navbar-text31">Sign Up</span>
                      </Fragment>
                    )}
                  </span>
                </button>
                <button className="thq-button-outline">
                  <span>
                    {props.text3 ?? (
                      <Fragment>
                        <span className="navbar-text25">Get Started</span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
            <div className="navbar-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="thq-icon-x-small"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="thq-icon-x-small"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="thq-icon-small"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <style jsx>
        {`
          .navbar-container1 {
            display: flex;
            position: relative;
          }
          .navbar-navbar {
            top: 0px;
            left: 0px;
            width: 100%;
            display: flex;
            z-index: 100;
            position: fixed;
            max-width: auto;
            align-items: center;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: space-between;
            background-image: linear-gradient(
              0deg,
              rgba(189, 195, 199, 0) 4%,
              rgb(0, 0, 0) 99%
            );
          }
          .navbar-image1 {
            height: var(--dl-layout-size-small);
          }
          .navbar-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .navbar-links1 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            display: flex;
            align-items: center;
            margin-left: var(--dl-layout-space-twounits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .navbar-link11 {
            color: #ffffff;
          }
          .navbar-link21 {
            color: #ffffff;
          }
          .navbar-link31 {
            color: #ffffff;
            text-decoration: none;
          }
          .navbar-link4-dropdown-trigger {
            gap: 4px;
            cursor: pointer;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .navbar-icon-container1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .navbar-container2 {
            display: flex;
            align-items: center;
            animation-name: rotateInDownLeft;
            flex-direction: row;
            animation-delay: 0s;
            justify-content: flex-end;
            animation-duration: 500ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .navbar-icon10 {
            width: 24px;
            height: 24px;
          }
          .navbar-container3 {
            display: flex;
            align-items: center;
            animation-name: rotateInDownRight;
            flex-direction: row;
            animation-delay: 0s;
            justify-content: flex-end;
            animation-duration: 500ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .navbar-icon12 {
            width: 24px;
            height: 24px;
          }
          .navbar-buttons1 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navbar-action11 {
            color: #ffffff;
            display: flex;
            border-color: #ffffff;
            flex-direction: row;
          }
          .navbar-action21 {
            color: #ffffff;
            display: flex;
            border-color: #ffffff;
            flex-direction: row;
          }
          .navbar-burger-menu {
            display: none;
          }
          .navbar-icon14 {
            fill: var(--dl-color-theme-neutral-light);
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .navbar-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            z-index: 100;
            position: absolute;
            transform: translateX(100%);
            transition: 0.5s;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .navbar-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .navbar-logo {
            height: 3rem;
          }
          .navbar-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar-icon16 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .navbar-links2 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: flex-start;
            flex-direction: column;
          }
          .navbar-link12 {
            text-decoration: none;
          }
          .navbar-link32 {
            text-decoration: none;
          }
          .navbar-link4-accordion {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-trigger {
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-icon-container2 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .navbar-container4 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .navbar-icon18 {
            width: 24px;
            height: 24px;
          }
          .navbar-container5 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .navbar-icon20 {
            width: 24px;
            height: 24px;
          }
          .navbar-container6 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-layout-space-halfunit);
            grid-template-columns: 1fr;
          }
          .navbar-menu-item1 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-layout-space-oneandhalfunits);
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .navbar-page1-image {
            width: 50px;
            height: 50px;
          }
          .navbar-content1 {
            width: 340px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .navbar-page1 {
            font-style: normal;
            font-weight: 600;
          }
          .navbar-menu-item2 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-layout-space-oneandhalfunits);
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .navbar-page2-image {
            width: 50px;
            height: 50px;
          }
          .navbar-content2 {
            width: 340px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .navbar-page2 {
            font-style: normal;
            font-weight: 600;
          }
          .navbar-menu-item3 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-layout-space-oneandhalfunits);
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .navbar-page3-image {
            width: 50px;
            height: 50px;
          }
          .navbar-content3 {
            width: 340px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .navbar-page3 {
            font-style: normal;
            font-weight: 600;
          }
          .navbar-menu-item4 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-layout-space-oneandhalfunits);
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .navbar-page4-image {
            width: 50px;
            height: 50px;
          }
          .navbar-content4 {
            width: 340px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .navbar-page4 {
            font-style: normal;
            font-weight: 600;
          }
          .navbar-buttons2 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            margin-top: var(--dl-layout-space-twounits);
            align-items: center;
            flex-direction: row;
          }
          .navbar-icon-group {
            gap: var(--dl-layout-space-twounits);
            display: flex;
          }
          .navbar-text14 {
            display: inline-block;
          }
          .navbar-text15 {
            display: inline-block;
          }
          .navbar-text16 {
            display: inline-block;
          }
          .navbar-text17 {
            display: inline-block;
          }
          .navbar-text18 {
            display: inline-block;
          }
          .navbar-text19 {
            display: inline-block;
          }
          .navbar-text20 {
            display: inline-block;
          }
          .navbar-text21 {
            display: inline-block;
          }
          .navbar-text22 {
            display: inline-block;
          }
          .navbar-text23 {
            display: inline-block;
          }
          .navbar-text24 {
            display: inline-block;
          }
          .navbar-text25 {
            display: inline-block;
          }
          .navbar-text26 {
            display: inline-block;
          }
          .navbar-text27 {
            display: inline-block;
          }
          .navbar-text28 {
            display: inline-block;
          }
          .navbar-text29 {
            display: inline-block;
          }
          .navbar-text30 {
            display: inline-block;
          }
          .navbar-text31 {
            display: inline-block;
          }
          .navbar-text32 {
            display: inline-block;
          }
          .navbarroot-class-name {
            display: none;
          }
          @media (max-width: 767px) {
            .navbar-navbar {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .navbar-desktop-menu {
              display: none;
            }
            .navbar-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .navbar-mobile-menu {
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .navbar-container6 {
              grid-gap: 0;
            }
          }
          @media (max-width: 479px) {
            .navbar-navbar {
              padding: var(--dl-layout-space-unit);
            }
            .navbar-mobile-menu {
              padding: var(--dl-layout-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Navbar.defaultProps = {
  link21: undefined,
  logoSrc: '/logo_insol_white-1500h.png',
  description4: undefined,
  description3: undefined,
  link2Url: 'https://www.teleporthq.io',
  link1Url: 'https://www.teleporthq.io',
  menuItemUrl: 'https://www.teleporthq.io',
  link5: undefined,
  page1: undefined,
  text5: undefined,
  link2: undefined,
  menuItemUrl2: 'https://www.teleporthq.io',
  logoAlt: 'Company Logo',
  page3: undefined,
  menuItemUrl1: 'https://www.teleporthq.io',
  description1: undefined,
  link1: undefined,
  text: undefined,
  page4ImageAlt: 'Contact Image',
  text3: undefined,
  link1Url1: 'https://www.teleporthq.io',
  page2ImageAlt: 'About Us Image',
  link3Url1: 'https://www.teleporthq.io',
  image1Alt: 'Company Logo',
  image1Src: '/logo_insol_white-1500h.png',
  page4ImageSrc:
    'https://images.unsplash.com/photo-1605745141160-8892dc674e94?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxyb3VuZHxlbnwwfHx8fDE3MTYzOTkzNDR8MA&ixlib=rb-4.0.3&w=1400',
  link11: undefined,
  rootClassName: '',
  link31: undefined,
  page1ImageSrc:
    'https://images.unsplash.com/photo-1514285490982-4130e9aefedb?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHJvdW5kfGVufDB8fHx8MTcxNjM5OTM0NHww&ixlib=rb-4.0.3&w=1400',
  link3Url: 'https://www.teleporthq.io',
  page3ImageSrc:
    'https://images.unsplash.com/photo-1524448789231-1bb0771e7d45?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fHJvdW5kfGVufDB8fHx8MTcxNjM5OTM0NHww&ixlib=rb-4.0.3&w=1400',
  page1ImageAlt: 'Home Image',
  link3: undefined,
  page4: undefined,
  link2Url1: 'https://www.teleporthq.io',
  page2: undefined,
  page2ImageSrc:
    'https://images.unsplash.com/photo-1618034100983-e1d78be0dc80?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE3fHxyb3VuZHxlbnwwfHx8fDE3MTYzOTkzNDR8MA&ixlib=rb-4.0.3&w=1400',
  menuItemUrl3: 'https://www.teleporthq.io',
  page3ImageAlt: 'Services Image',
  text2: undefined,
  description2: undefined,
}

Navbar.propTypes = {
  link21: PropTypes.element,
  logoSrc: PropTypes.string,
  description4: PropTypes.element,
  description3: PropTypes.element,
  link2Url: PropTypes.string,
  link1Url: PropTypes.string,
  menuItemUrl: PropTypes.string,
  link5: PropTypes.element,
  page1: PropTypes.element,
  text5: PropTypes.element,
  link2: PropTypes.element,
  menuItemUrl2: PropTypes.string,
  logoAlt: PropTypes.string,
  page3: PropTypes.element,
  menuItemUrl1: PropTypes.string,
  description1: PropTypes.element,
  link1: PropTypes.element,
  text: PropTypes.element,
  page4ImageAlt: PropTypes.string,
  text3: PropTypes.element,
  link1Url1: PropTypes.string,
  page2ImageAlt: PropTypes.string,
  link3Url1: PropTypes.string,
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
  page4ImageSrc: PropTypes.string,
  link11: PropTypes.element,
  rootClassName: PropTypes.string,
  link31: PropTypes.element,
  page1ImageSrc: PropTypes.string,
  link3Url: PropTypes.string,
  page3ImageSrc: PropTypes.string,
  page1ImageAlt: PropTypes.string,
  link3: PropTypes.element,
  page4: PropTypes.element,
  link2Url1: PropTypes.string,
  page2: PropTypes.element,
  page2ImageSrc: PropTypes.string,
  menuItemUrl3: PropTypes.string,
  page3ImageAlt: PropTypes.string,
  text2: PropTypes.element,
  description2: PropTypes.element,
}

export default Navbar
