import { useEffect } from "react";
import type { NextPage } from "next";
import $ from "jQuery";

const Home: NextPage = () => {
  const superFunkce = function () {
    // Global variables
    var userAgent = navigator.userAgent.toLowerCase(),
      initialDate = new Date(),
      $document = $(document),
      $window = $(window),
      $html = $("html"),
      $body = $("body"),
      isDesktop = $html.hasClass("desktop"),
      isIE =
        userAgent.indexOf("msie") !== -1
          ? parseInt(userAgent.split("msie")[1], 10)
          : userAgent.indexOf("trident") !== -1
          ? 11
          : userAgent.indexOf("edge") !== -1
          ? 12
          : false,
      isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ),
      windowReady = false,
      isNoviBuilder = false,
      plugins = {
        bootstrapTooltip: $("[data-toggle='tooltip']"),
        bootstrapModalDialog: $(".modal"),
        bootstrapTabs: $(".tabs-custom"),
        customToggle: $("[data-custom-toggle]"),
        counter: $(".counter"),
        circleProgress: $(".progress-bar-circle"),
        captcha: $(".recaptcha"),
        campaignMonitor: $(".campaign-mailform"),
        copyrightYear: $(".copyright-year"),
        checkbox: $("input[type='checkbox']"),
        dateCountdown: $(".DateCountdown"),
        isotope: $(".isotope"),
        lightGallery: $("[data-lightgallery='group']"),
        lightGalleryItem: $("[data-lightgallery='item']"),
        lightDynamicGalleryItem: $("[data-lightgallery='dynamic']"),
        materialParallax: $(".parallax-container"),
        mailchimp: $(".mailchimp-mailform"),
        owl: $(".owl-carousel"),
        popover: $('[data-toggle="popover"]'),
        progressLinear: $(".progress-linear"),
        preloader: $(".preloader"),
        rdNavbar: $(".rd-navbar"),
        rdGoogleMaps: $(".rd-google-map"),
        rdMailForm: $(".rd-mailform"),
        rdInputLabel: $(".form-label"),
        regula: $("[data-constraints]"),
        radio: $("input[type='radio']"),
        swiper: $(".swiper-slider"),
        search: $(".rd-search"),
        searchResults: $(".rd-search-results"),
        statefulButton: $(".btn-stateful"),
        scroller: $(".scroll-wrap"),
        viewAnimate: $(".view-animate"),
        wow: $(".wow"),
        slick: $(".slick-slider"),
        selectFilter: $("select"),
        bootstrapDateTimePicker: $("[data-time-picker]"),
        // tiltHover: $('.js-tilt'),
        youtubeBg: $(".bg-youtube"),
      };

    // Initialize scripts that require a loaded page
    $window.on("load", function () {
      // Page loader & Page transition
      if (plugins.preloader.length && !isNoviBuilder) {
        pageTransition({
          target: document.querySelector(".page"),
          delay: 0,
          duration: 500,
          classIn: "fadeIn",
          classOut: "fadeOut",
          classActive: "animated",
          conditions: function (event, link) {
            return (
              !/(\#|callto:|tel:|mailto:|javascript:void\(0\);|:\/\/)/.test(
                link
              ) && !event.currentTarget.hasAttribute("data-lightgallery")
            );
          },
          onTransitionStart: function (options) {
            setTimeout(function () {
              plugins.preloader.removeClass("loaded");
            }, options.duration * 0.75);
          },
          onReady: function () {
            plugins.preloader.addClass("loaded");
            windowReady = true;
          },
        });
      }
    });
  };

  useEffect(() => {
    superFunkce();
  }, []);
  return (
    <>
      <div className="preloader">
        <div className="preloader-body">
          <div className="cssload-container">
            <div className="cssload-loading">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>
          </div>
        </div>
      </div>
      <div className="page">
        <header className="section page-header">
          <div className="rd-navbar-wrap">
            <nav
              className="rd-navbar rd-navbar-classic rd-navbar-classic-center"
              data-layout="rd-navbar-fixed"
              data-sm-layout="rd-navbar-fixed"
              data-md-layout="rd-navbar-fixed"
              data-md-device-layout="rd-navbar-fixed"
              data-lg-layout="rd-navbar-static"
              data-lg-device-layout="rd-navbar-static"
              data-xl-layout="rd-navbar-static"
              data-xl-device-layout="rd-navbar-static"
              data-lg-stick-up-offset="46px"
              data-xl-stick-up-offset="46px"
              data-xxl-stick-up-offset="46px"
              data-lg-stick-up="true"
              data-xl-stick-up="true"
              data-xxl-stick-up="true"
            >
              <div
                className="rd-navbar-collapse-toggle rd-navbar-fixed-element-1"
                data-rd-navbar-toggle=".rd-navbar-collapse"
              >
                <span></span>
              </div>
              <div className="rd-navbar-aside-outer rd-navbar-collapse">
                <div className="rd-navbar-aside">
                  <div className="header-info">
                    <ul className="list-inline list-inline-md">
                      <li>
                        <div className="unit unit-spacing-xs align-items-center">
                          <div className="unit-left font-weight-bold">
                            Free Call:
                          </div>
                          <div className="unit-body">
                            <a href="tel:#">(073) 123-12-12</a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="unit unit-spacing-xs align-items-center">
                          <div className="unit-left font-weight-bold">
                            Opening Hours:
                          </div>
                          <div className="unit-body"> Mn-Fr: 10 am-8 pm</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="social-block">
                    <ul className="list-inline">
                      <li>
                        <a className="icon fa-facebook" href="#"></a>
                      </li>
                      <li>
                        <a className="icon fa-twitter" href="#"></a>
                      </li>
                      <li>
                        <a className="icon fa-google-plus" href="#"></a>
                      </li>
                      <li>
                        <a className="icon fa-vimeo" href="#"></a>
                      </li>
                      <li>
                        <a className="icon fa-youtube" href="#"></a>
                      </li>
                      <li>
                        <a className="icon fa-pinterest-p" href="#"></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="rd-navbar-main-outer">
                <div className="rd-navbar-main">
                  <div className="rd-navbar-panel">
                    <button
                      className="rd-navbar-toggle"
                      data-rd-navbar-toggle=".rd-navbar-nav-wrap"
                    >
                      <span></span>
                    </button>

                    <div className="rd-navbar-brand">
                      <a href="index.html">
                        <img
                          src="img/logo-dark-main-171x44.png"
                          alt=""
                          width="171"
                          height="44"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="rd-navbar-main-element">
                    <div className="rd-navbar-nav-wrap">
                      <ul className="rd-navbar-nav">
                        <li className="rd-nav-item active">
                          <a className="rd-nav-link" href="index.html">
                            Home
                          </a>
                        </li>
                        <li className="rd-nav-item">
                          <a className="rd-nav-link" href="#">
                            About
                          </a>
                          <ul className="rd-menu rd-navbar-dropdown">
                            <li className="rd-dropdown-item">
                              <a
                                className="rd-dropdown-link"
                                href="our-team.html"
                              >
                                Our Team
                              </a>
                            </li>
                            <li className="rd-dropdown-item">
                              <a
                                className="rd-dropdown-link"
                                href="overview.html"
                              >
                                Overview
                              </a>
                            </li>
                            <li className="rd-dropdown-item">
                              <a
                                className="rd-dropdown-link"
                                href="testimonials.html"
                              >
                                Testimonials
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="rd-nav-item">
                          {" "}
                          <a className="rd-nav-link" href="services.html">
                            Services
                          </a>
                        </li>
                        <li className="rd-nav-brand">
                          <a href="index.html">
                            <img
                              src="img/logo-dark-main-171x44.png"
                              alt=""
                              width="171"
                              height="44"
                            />
                          </a>
                        </li>
                        <li className="rd-nav-item">
                          <a className="rd-nav-link" href="#">
                            Blog
                          </a>
                          <ul className="rd-menu rd-navbar-dropdown">
                            <li className="rd-dropdown-item">
                              <a
                                className="rd-dropdown-link"
                                href="blog-post.html"
                              >
                                Blog post
                              </a>
                            </li>
                            <li className="rd-dropdown-item">
                              <a
                                className="rd-dropdown-link"
                                href="blog-without-sidebar.html"
                              >
                                Blog Without Sidebar
                              </a>
                            </li>
                            <li className="rd-dropdown-item">
                              <a
                                className="rd-dropdown-link"
                                href="blog-classic.html"
                              >
                                Blog class
                              </a>
                            </li>
                            <li className="rd-dropdown-item">
                              <a
                                className="rd-dropdown-link"
                                href="blog-modern.html"
                              >
                                Blog Modern
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="rd-nav-item">
                          <a className="rd-nav-link" href="#">
                            Pages
                          </a>
                          <ul className="rd-menu rd-navbar-megamenu rd-navbar-open-right">
                            <li className="rd-megamenu-item">
                              <h6 className="rd-megamenu-title">Pages 1</h6>
                              <ul className="rd-megamenu-list">
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="typography.html"
                                  >
                                    Typography
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="buttons.html"
                                  >
                                    Buttons
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="forms.html"
                                  >
                                    Forms
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="tabs-and-accordions.html"
                                  >
                                    Tabs and accordions
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="progress-bars.html"
                                  >
                                    Progress bars
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="grid-system.html"
                                  >
                                    Grid system
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="tables.html"
                                  >
                                    Tables
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="rd-megamenu-item">
                              <h6 className="rd-megamenu-title">Pages 2</h6>
                              <ul className="rd-megamenu-list">
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="appointment.html"
                                  >
                                    Appointment
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="privacy-policy.html"
                                  >
                                    Privacy policy
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="careers.html"
                                  >
                                    Careers
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="faq.html"
                                  >
                                    FAQ
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="team-member-profile.html"
                                  >
                                    Team Member Profile
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="pricing.html"
                                  >
                                    Pricing
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="rd-megamenu-item">
                              <h6 className="rd-megamenu-title">Pages 3</h6>
                              <ul className="rd-megamenu-list">
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="under-construction.html"
                                  >
                                    Under Construction
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="maintenance.html"
                                  >
                                    Maintenance
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="login/register.html"
                                  >
                                    Login/Register
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="coming-soon.html"
                                  >
                                    Coming Soon
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="404.html"
                                  >
                                    404
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="503.html"
                                  >
                                    503
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="search-results.html"
                                  >
                                    Search results
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="rd-megamenu-item">
                              <h6 className="rd-megamenu-title">Gallery</h6>
                              <ul className="rd-megamenu-list">
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="grid-gallery.html"
                                  >
                                    Grid Gallery
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="cobbles-gallery.html"
                                  >
                                    Cobbles Gallery
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="masonry-gallery.html"
                                  >
                                    Masonry Gallery
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="gallery-without-padding.html"
                                  >
                                    Gallery without padding
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="rd-nav-item">
                          <a className="rd-nav-link" href="contacts.html">
                            Contacts
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>
        <section
          className="section swiper-container swiper-slider swiper-slider-1 slider-pagination-vertical slider-scale-effect"
          data-loop="false"
          data-autoplay="5500"
          data-simulate-touch="false"
          data-slide-effect="fade"
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div
                className="slide-bg swiper-white-filter"
                style={{
                  backgroundImage: "url(img/slide-4-1-1920x780.jpg)",
                }}
              ></div>
              <div className="swiper-slide-caption section-md">
                <div className="container">
                  <div className="row justify-content-xl-between">
                    <div className="col-sm-8 col-md-6 col-lg-6 col-xl-6 swiper-caption-inner">
                      <h2
                        data-caption-animate="fadeInUp"
                        data-caption-delay="100"
                      >
                        Blameless Nail Salon
                        <br />
                        Creating Beauty
                      </h2>
                      <div
                        className="divider-lg"
                        data-caption-animate="fadeInLeft"
                        data-caption-delay="550"
                      ></div>
                      <p
                        className="lead"
                        data-caption-animate="fadeInUp"
                        data-caption-delay="250"
                      >
                        Our Nail Salon brings unique and custom nail designs to
                        all customers of LA area. We are a team of nail artists
                        specializing on complete nail care.
                      </p>
                      <a
                        className="button button-primary"
                        href="#"
                        data-caption-animate="fadeInUp"
                        data-caption-delay="450"
                      >
                        Read More
                      </a>
                    </div>
                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                      <div className="slider-img-block">
                        <img
                          src="img/slide-img-1.png"
                          alt=""
                          data-caption-animate="fadeInUp"
                          data-caption-delay="500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div
                className="slide-bg swiper-white-filter"
                style={{
                  backgroundImage: "url(img/slide-4-1-1920x780.jpg)",
                }}
              ></div>
              <div className="swiper-slide-caption section-md">
                <div className="container">
                  <div className="row justify-content-xl-between">
                    <div className="col-sm-8 col-md-6 col-lg-6 col-xl-6 swiper-caption-inner">
                      <h2
                        data-caption-animate="fadeInUp"
                        data-caption-delay="100"
                      >
                        Be Different with
                        <br />
                        Our Nail Design
                      </h2>
                      <div
                        className="divider-lg"
                        data-caption-animate="fadeInLeft"
                        data-caption-delay="550"
                      ></div>
                      <p
                        className="lead"
                        data-caption-animate="fadeInUp"
                        data-caption-delay="250"
                      >
                        Our qualified team provides a full range of nail design
                        services to satisfy even the most demanding clients.
                      </p>
                      <a
                        className="button button-primary"
                        href="#"
                        data-caption-animate="fadeInUp"
                        data-caption-delay="450"
                      >
                        Read More
                      </a>
                    </div>
                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                      <div className="slider-img-block">
                        <img
                          src="img/slide-img-2.png"
                          alt=""
                          data-caption-animate="fadeInUp"
                          data-caption-delay="500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div
                className="slide-bg swiper-white-filter"
                style={{
                  backgroundImage: "url(img/slide-4-1-1920x780.jpg)",
                }}
              ></div>
              <div className="swiper-slide-caption section-md">
                <div className="container">
                  <div className="row justify-content-xl-between">
                    <div className="col-sm-8 col-md-6 col-lg-6 col-xl-6 swiper-caption-inner">
                      <h2
                        className="heading-decorate"
                        data-caption-animate="fadeInUp"
                        data-caption-delay="100"
                      >
                        Better Nail Care
                        <br />
                        for Your Pleasure
                      </h2>
                      <div
                        className="divider-lg"
                        data-caption-animate="fadeInLeft"
                        data-caption-delay="550"
                      ></div>
                      <p
                        className="lead"
                        data-caption-animate="fadeInUp"
                        data-caption-delay="250"
                      >
                        We are dedicated to bring you the best nail care
                        services combined with expert techniques used in the
                        nail salon industry.
                      </p>
                      <a
                        className="button button-primary"
                        href="#"
                        data-caption-animate="fadeInUp"
                        data-caption-delay="450"
                      >
                        Read More
                      </a>
                    </div>
                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                      <img
                        src="img/slide-img-3.png"
                        alt=""
                        data-caption-animate="fadeIn"
                        data-caption-delay="500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </section>
        <section className="section section-lg bg-default">
          <div className="container">
            <div className="row row-50 align-items-lg-center justify-content-lg-around">
              <div className="col-md-6 col-lg-5">
                <div className="box-images-parallax">
                  <div
                    className="front-element"
                    data-parallax-scroll='{"y": -10,   "smoothness": 30 }'
                  >
                    <img
                      src="img/home-1-387x440.png"
                      alt=""
                      width="387"
                      height="440"
                    />
                  </div>
                  <div
                    className="back-element"
                    data-parallax-scroll='{"y": 40,  "smoothness": 30 }'
                  >
                    <img
                      src="img/home-1-287x380.png"
                      alt=""
                      width="287"
                      height="380"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-5">
                <h2 className="heading-decorate">
                  Why Our Clients <br />
                  <span className="divider"></span>Choose Us
                </h2>
                <p className="big text-gray-800">
                  Our salon aims to deliver the best nail design experience and
                  top-notch customer service.
                </p>
                <p>
                  We use all-natural, organic body products, hard-to-find polish
                  brands and colors, iPads at every seat, and a drink menu
                  featuring fresh-pressed juices and hand-crafted coffees.
                </p>
                <a
                  className="button button-default-outline"
                  href="overview.html"
                >
                  read more
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="section bg-gray-11">
          <div className="row justify-content-center justify-content-lg-start no-gutters">
            <div className="col-sm-12 col-lg-8 col-xl-7 col-xxl-6">
              <div className="row no-gutters box-icon-classic-bordered justify-content-center">
                <div className="col-sm-10 col-md-6">
                  <div className="box-icon-classic box-icon-classic-vertical">
                    <div className="icon-classic-aside">
                      <div className="icon-classic">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="59.019px"
                          height="76.726px"
                          viewBox="0 0 59.019 76.726"
                          enable-background="new 0 0 59.019 76.726"
                          xmlSpace="preserve"
                        >
                          <g>
                            <path d="M55.564,35.454h-6.282V18.202c0-0.867-0.426-1.632-1.074-2.085l2.984-14.142    c0.092-0.439-0.099-0.89-0.475-1.119C50.574,0.769,49.228,0,46.489,0c-2.712,0-4.163,0.748-4.319,0.833    c-0.402,0.219-0.612,0.689-0.513,1.146l3.059,14.178c-0.616,0.457-1.018,1.203-1.018,2.044v17.252H37.14    c-1.343,0-2.437,1.128-2.435,2.575l1.998,36.182c0,1.388,1.092,2.516,2.436,2.516h14.282c1.343,0,2.436-1.128,2.434-2.453    L58,37.969C58,36.582,56.908,35.454,55.564,35.454z M45.712,35.454V18.202c0-0.24,0.189-0.435,0.421-0.435    c0.126,0,0.246-0.024,0.357-0.068c0.111,0.044,0.231,0.068,0.357,0.068c0.231,0,0.419,0.195,0.419,0.435v17.252H45.712z    M43.815,2.419c0.565-0.161,1.462-0.338,2.673-0.338c1.181,0,2.026,0.168,2.551,0.321l-2.585,12.252L43.815,2.419z M53.843,74.21    c0,0.24-0.189,0.435-0.421,0.435H39.14c-0.232,0-0.421-0.195-0.423-0.494l-1.998-36.182c0-0.239,0.189-0.434,0.422-0.434h7.564    h3.57h7.29c0.232,0,0.421,0.195,0.423,0.371L53.843,74.21z"></path>
                            <path d="M13.197,42.12c3.976,0,6.296-0.651,7.755-2.176c1.488-1.554,1.924-3.843,2.029-7.176    c0.373,1.422,0.592,2.753,0.592,3.674l0.806,39.541C24.391,76.549,24.84,77,25.386,77c0.008,0,0.015,0,0.022,0    c0.556-0.012,0.998-0.488,0.986-1.063l-0.806-39.519c0-2.171-0.993-6.297-2.604-9.313c-0.016-1.465-0.029-3.059-0.015-4.809    c0.056-6.887-0.707-15.959-4.654-20.07C16.897,0.75,15.175,0,13.197,0C6.895,0,3.425,7.915,3.425,22.288    c0,1.778-0.025,3.4-0.049,4.884c-1.59,3.006-2.57,7.102-2.57,9.225L0,75.937c-0.012,0.575,0.43,1.05,0.986,1.063    c0.007,0,0.014,0,0.022,0c0.546,0,0.995-0.451,1.007-1.019l0.806-39.563c0-0.867,0.203-2.123,0.548-3.478    c0.113,3.217,0.567,5.451,2.02,6.976C6.859,41.461,9.194,42.12,13.197,42.12z M5.388,27.378c0.025-1.54,0.052-3.232,0.052-5.09    c0-6.076,0.756-20.207,7.757-20.207c1.44,0,2.647,0.527,3.687,1.611c2.699,2.81,4.144,9.411,4.07,18.587    c-0.017,2.002,0.003,3.813,0.021,5.446c0.062,5.695,0.099,9.132-1.455,10.756c-1.032,1.078-2.982,1.558-6.323,1.558    c-3.365,0-5.331-0.488-6.372-1.581C5.238,36.792,5.295,33.249,5.388,27.378z"></path>
                            <path d="M14.104,23.904c0.268,0,0.534-0.11,0.733-0.327l4.03-4.411c0.382-0.418,0.364-1.076-0.042-1.471    c-0.404-0.393-1.042-0.375-1.424,0.043l-4.03,4.411c-0.382,0.418-0.364,1.076,0.042,1.471    C13.607,23.81,13.856,23.904,14.104,23.904z"></path>
                            <path d="M17.779,22.276l-4.03,4.411c-0.382,0.418-0.364,1.076,0.042,1.471c0.194,0.189,0.443,0.284,0.691,0.284    c0.268,0,0.534-0.11,0.733-0.327l4.03-4.411c0.382-0.418,0.364-1.076-0.042-1.471C18.798,21.839,18.161,21.858,17.779,22.276z"></path>
                          </g>
                        </svg>
                      </div>
                      <h4 className="icon-class-title">
                        <a href="services.html">Manicure</a>
                      </h4>
                    </div>
                    <div className="icon-class-body">
                      <p>
                        Our manicure treatments stimulate nail growth and soften
                        dry, dull skin.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-10 col-md-6">
                  <div className="box-icon-class box-icon-class-vertical">
                    <div className="icon-class-aside">
                      <div className="icon-class">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="56.222px"
                          height="90.23px"
                          viewBox="0 0 56.222 90.23"
                          enable-background="new 0 0 56.222 90.23"
                          xmlSpace="preserve"
                        >
                          <g>
                            <path d="M1.792,50.845c-1.088,3.859-2.214,7.85-1.635,12.067c0.391,2.852,1.636,5.29,3.506,6.866    c1.712,1.443,3.592,2.191,5.483,2.191c0.274,0,0.549-0.016,0.823-0.047c4.973-0.573,8.72-6.093,9.339-10.878    c0.348-2.678,0.187-5.401,0.031-8.036c-0.201-3.41-0.391-6.631,0.436-9.72c0.929-3.482,2.682-6.488,4.537-9.671    c1.752-3.003,3.562-6.108,4.62-9.65c0.801-2.681,1.129-5.849,0.933-9.006c0.092-0.299,0.065-0.609-0.066-0.888    c-0.433-4.58-2.003-9.037-4.938-11.837c-1.657-1.58-3.704-2.389-5.64-2.214c-1.808,0.165-3.371,1.121-4.791,2.131    C9.299,5.802,2.843,11.621,1.22,18.631c-0.5,2.161-0.435,4.283-0.123,6.368c0.001,0.013,0.004,0.024,0.005,0.037    c0.271,1.79,0.717,3.554,1.164,5.289c0.162,0.626,0.322,1.248,0.472,1.864c1.14,4.703,1.18,9.898,0.114,14.63    C2.553,48.15,2.166,49.521,1.792,50.845z M15.879,4.191c1.134-0.806,2.352-1.567,3.567-1.678c0.1-0.009,0.2-0.014,0.302-0.014    c1.127,0,2.346,0.553,3.387,1.546c2.014,1.921,3.264,4.865,3.862,8.063C21.527,9.165,15.131,8.404,9.151,9.944    C11.285,7.69,13.707,5.735,15.879,4.191z M3.388,22.84c-0.067-1.227-0.01-2.445,0.267-3.645c0.452-1.949,1.347-3.813,2.509-5.557    c6.871-3.12,14.901-2.503,21.211,1.6c0.16,2.824-0.134,5.658-0.838,8.015c-0.131,0.438-0.276,0.868-0.43,1.293    C19.423,19.888,10.684,19.241,3.388,22.84z M5.167,31.602c-0.152-0.629-0.315-1.263-0.48-1.901    c-0.357-1.388-0.716-2.795-0.972-4.202c6.788-3.733,15.169-3.172,21.396,1.426c-0.863,1.837-1.892,3.605-2.959,5.436    c-1.856,3.185-3.777,6.479-4.794,10.285c-0.929,3.478-0.718,7.054-0.514,10.512c0.155,2.635,0.302,5.123-0.015,7.568    c-0.502,3.868-3.493,8.293-7.146,8.714c-0.001,0-0.001,0-0.001,0c-1.487,0.176-2.969-0.357-4.407-1.572    c-1.398-1.176-2.334-3.057-2.642-5.294c-0.508-3.701,0.499-7.271,1.564-11.049c0.383-1.356,0.778-2.759,1.093-4.155    C6.44,42.27,6.396,36.67,5.167,31.602z"></path>
                            <path d="M22.421,88.811c1.294,0.939,2.857,1.419,4.594,1.419c0.63,0,1.282-0.063,1.952-0.189    c2.402-0.455,4.684-1.967,6.427-4.259c2.576-3.39,3.556-7.419,4.505-11.316c0.323-1.337,0.66-2.719,1.053-4.024    c1.398-4.647,3.986-9.152,7.288-12.685c0.433-0.465,0.879-0.929,1.328-1.396c1.243-1.291,2.497-2.608,3.611-4.033    c0.007-0.01,0.015-0.019,0.021-0.027c1.296-1.664,2.396-3.48,3.021-5.609c2.031-6.9-0.734-15.142-3.411-20.841    c-0.741-1.577-1.633-3.179-3.127-4.21c-1.592-1.097-3.78-1.402-5.999-0.842c-3.934,0.997-7.491,4.108-10.118,7.885    c-0.248,0.179-0.424,0.434-0.491,0.738c-1.723,2.653-2.992,5.575-3.612,8.304c-0.819,3.605-0.768,7.2-0.718,10.677    c0.053,3.683,0.103,7.162-0.798,10.651c-0.799,3.096-2.547,5.809-4.398,8.681c-1.429,2.218-2.907,4.511-3.92,7.014    C17.818,79.219,18.37,85.868,22.421,88.811z M44.299,23.222c1.522-0.389,2.966-0.213,3.965,0.477    c1.006,0.693,1.692,1.955,2.283,3.214c1.134,2.413,2.283,5.304,3.035,8.315c-4.453-4.28-10.397-6.759-16.607-6.882    C39.068,25.856,41.602,23.905,44.299,23.222z M31.901,38.279c0.546-2.398,1.681-5.012,3.208-7.393    c7.516-0.471,14.811,2.935,19.26,9.029c0.156,2.09,0.021,4.151-0.545,6.07c-0.347,1.181-0.895,2.271-1.557,3.307    c-4.585-6.719-12.516-10.45-20.626-9.675C31.715,39.171,31.8,38.726,31.901,38.279z M21.945,75.685    c0.926-2.283,2.275-4.379,3.705-6.598c1.877-2.912,3.817-5.924,4.717-9.409c0.985-3.814,0.931-7.626,0.878-11.313    c-0.03-2.118-0.058-4.165,0.094-6.189c7.684-0.941,15.259,2.685,19.337,9.271c-0.914,1.1-1.916,2.147-2.909,3.18    c-0.458,0.477-0.913,0.949-1.354,1.422c-3.559,3.809-6.348,8.664-7.855,13.672c-0.412,1.37-0.756,2.786-1.089,4.154    c-0.928,3.815-1.804,7.42-4.064,10.394c-1.367,1.799-3.107,2.976-4.901,3.314c-1.849,0.352-3.402,0.082-4.612-0.796    C20.913,84.625,20.483,79.301,21.945,75.685z"></path>
                          </g>
                        </svg>
                      </div>
                      <h4 className="icon-class-title">
                        <a href="services.html">Pedicure</a>
                      </h4>
                    </div>
                    <div className="icon-class-body">
                      <p>
                        Pedicure services provide full restoration for your
                        nails with extra polishing.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-10 col-md-6">
                  <div className="box-icon-class box-icon-class-vertical">
                    <div className="icon-class-aside">
                      <div className="icon-class">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="68px"
                          height="79px"
                          viewBox="0 0 68 79"
                          enable-background="new 0 0 68 79"
                          xmlSpace="preserve"
                        >
                          <g>
                            <path d="M7.05,78.563h20.743c3.887,0,7.05-3.165,7.05-7.054V44.496c0-3.89-3.162-7.055-7.05-7.055h-2.677v-0.617    c0.235-0.122,0.443-0.294,0.611-0.51c0.304-0.391,0.438-0.878,0.377-1.369c-0.061-0.493-0.31-0.934-0.701-1.239    c-0.091-0.071-0.187-0.133-0.287-0.185v-0.187c0.622-0.364,1.002-1.075,0.909-1.836c-0.075-0.596-0.425-1.092-0.909-1.375v-0.328    c0.622-0.364,1.002-1.075,0.909-1.836c-0.085-0.681-0.531-1.23-1.125-1.481c-0.399-0.916-1.311-1.55-2.367-1.55H12.309    c-1.425,0-2.584,1.16-2.584,2.585v0.748c-0.621,0.364-1.001,1.074-0.908,1.833c0.061,0.493,0.31,0.934,0.701,1.239    c0.066,0.052,0.135,0.099,0.207,0.14v0.325c-0.621,0.364-1.001,1.075-0.908,1.834c0.061,0.493,0.31,0.933,0.701,1.239    c0.066,0.052,0.136,0.099,0.207,0.14v0.28c-0.169,0.111-0.321,0.25-0.449,0.415c-0.305,0.392-0.439,0.88-0.377,1.372    c0.016,0.125,0.044,0.246,0.083,0.362H7.05c-3.887,0-7.05,3.165-7.05,7.055v27.012C0,75.398,3.163,78.563,7.05,78.563z    M22.925,29.637v1.341c0,0.228,0.074,0.447,0.203,0.63l-11.286,1.395c0.046-0.121,0.074-0.252,0.074-0.388v-1.618L22.925,29.637z    M11.84,37.21c-0.053-0.137-0.133-0.264-0.238-0.371c0.195-0.199,0.314-0.471,0.314-0.769v-0.866l11.009-1.361v0.591    c0,0.289,0.114,0.565,0.315,0.769c-0.165,0.168-0.271,0.391-0.301,0.635L11.84,37.21z M12.309,27.12h10.223    c0.186,0,0.335,0.133,0.375,0.309l-10.991,1.359v-1.275C11.916,27.297,12.093,27.12,12.309,27.12z M2.191,44.496    c0-2.681,2.18-4.863,4.859-4.863h3.771c0.204,0,0.393-0.06,0.557-0.157l11.548-1.428v0.489c0,0.605,0.49,1.096,1.095,1.096h3.772    c2.679,0,4.859,2.182,4.859,4.863v27.012c0,2.681-2.18,4.862-4.859,4.862H7.05c-2.679,0-4.859-2.181-4.859-4.862V44.496z"></path>
                            <path d="M45.358,76.438C45.376,77.854,46.533,79,47.952,79h15.177c1.418,0,2.575-1.145,2.594-2.559l2.275-37.28    C67.999,39.139,68,39.117,68,39.095c0-1.432-1.164-2.596-2.595-2.596h-6.668V18.745c0-0.893-0.453-1.682-1.14-2.15l3.169-14.554    c0.099-0.455-0.105-0.923-0.507-1.159C60.105,0.792,58.674,0,55.762,0c-2.884,0-4.427,0.771-4.593,0.858    c-0.43,0.227-0.654,0.713-0.549,1.188l3.25,14.591c-0.654,0.472-1.081,1.241-1.081,2.108v17.754h-6.961    c-1.431,0-2.596,1.165-2.596,2.596c0,0.02,0.001,0.041,0.002,0.061L45.358,76.438z M54.942,36.498V18.745    c0-0.243,0.198-0.441,0.441-0.441c0.134,0,0.262-0.024,0.38-0.069c0.118,0.045,0.246,0.069,0.38,0.069    c0.243,0,0.44,0.198,0.44,0.441v17.754H54.942z M52.928,2.502c0.601-0.165,1.551-0.346,2.834-0.346c1.25,0,2.145,0.172,2.702,0.329    l-2.739,12.578L52.928,2.502z M45.828,38.654h8.038h3.794h7.745c0.235,0,0.428,0.185,0.44,0.418l-2.274,37.266    c-0.001,0.022-0.002,0.044-0.002,0.066c0,0.243-0.198,0.441-0.441,0.441H47.952c-0.243,0-0.441-0.198-0.441-0.441    c0-0.02-0.001-0.041-0.002-0.061l-2.123-37.269C45.397,38.84,45.591,38.654,45.828,38.654z"></path>
                          </g>
                        </svg>
                      </div>
                      <h4 className="icon-class-title">
                        <a href="services.html">Nail Art</a>
                      </h4>
                    </div>
                    <div className="icon-class-body">
                      <p>
                        Let our nail artists create a stunning and sustainable
                        nail design for you.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-10 col-md-6">
                  <div className="box-icon-class box-icon-class-vertical">
                    <div className="icon-class-aside">
                      <div className="icon-class">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="90px"
                          height="80px"
                          viewBox="0 0 90 80"
                          enable-background="new 0 0 90 80"
                          xmlSpace="preserve"
                        >
                          <g>
                            <path d="M23.176,55.473c-0.142-0.078-0.289-0.154-0.473-0.246c-0.109-0.053-0.22-0.107-0.328-0.156       c-2.439-1.119-5.657-1.736-9.061-1.736C5.724,53.335,0,56.244,0,60.1c0,0.054,0.005,0.108,0.007,0.162       c0.001,0.023,0.001,0.046,0.003,0.069c0.023,0.37,0.098,0.74,0.23,1.103l0.001,0c0.006,0.019,0.013,0.038,0.02,0.057       c0.008,0.021,0.015,0.041,0.019,0.05l3.461,8.967c0.586,2.568,4.569,4.417,9.573,4.417c4.994,0,8.896-1.774,9.553-4.328       l3.478-9.052c0.003-0.007,0.009-0.023,0.014-0.036c0.002-0.005,0.004-0.011,0.007-0.016c0.002-0.006,0.02-0.052,0.022-0.058       c0.045-0.125,0.084-0.25,0.114-0.368c0.083-0.315,0.125-0.641,0.125-0.966c0-0.539-0.114-1.073-0.339-1.585       C25.776,57.346,24.728,56.322,23.176,55.473z M13.314,55.844c3.039,0,5.874,0.533,7.986,1.502c0.093,0.042,0.183,0.086,0.282,0.134       c0.119,0.06,0.235,0.119,0.35,0.183c1.022,0.559,1.736,1.214,2.012,1.844c0.051,0.116,0.082,0.23,0.103,0.343       c-1.264,1.516-5.28,3.032-10.733,3.032c-5.44,0-9.45-1.508-10.73-3.021C2.929,57.917,7.397,55.844,13.314,55.844z M20.451,69.785       c-0.022,0.057-0.04,0.116-0.053,0.176c-0.223,1.003-2.874,2.455-7.085,2.455c-4.121,0-6.906-1.445-7.088-2.482       c-0.018-0.104-0.049-0.202-0.091-0.295l-2.309-5.98c2.466,1.087,5.813,1.732,9.489,1.732c3.678,0,7.026-0.646,9.491-1.734       L20.451,69.785z"></path>
                            <path d="M52.295,0H27.611c-1.264,0-2.293,1.012-2.293,2.255c0,0.025,0.001,0.051,0.002,0.076l3.253,52.513       c0.011,0.548,0.229,1.043,0.572,1.429c0.067,0.086,0.142,0.165,0.229,0.232c0.008,0.007,0.015,0.016,0.023,0.023v8.274       c0,1.139,0.431,2.258,1.246,3.235c1.796,2.155,5.316,3.494,9.185,3.494c1.272,0,2.514-0.142,3.672-0.419l0.129-0.031l-0.315-1.215       l0.398,1.195c0.044-0.011,0.087-0.022,0.097-0.025c3.919-1.02,6.451-3.466,6.451-6.233v-8.237c0.045-0.034,0.086-0.07,0.126-0.109       c0.445-0.402,0.731-0.973,0.744-1.609l3.456-52.512c0.002-0.027,0.003-0.054,0.003-0.081C54.588,1.012,53.559,0,52.295,0z       M52.017,2.509L51.85,5.042H28.044l-0.157-2.533H52.017z M43.124,68.619l-0.206,0.051c-0.981,0.234-2.02,0.353-3.09,0.353       c-3.077,0-5.907-1.011-7.211-2.575c-0.443-0.531-0.668-1.085-0.668-1.644v-7.806c2.587,0.276,5.305,0.421,8.119,0.421       c2.65,0,5.208-0.129,7.639-0.375v7.76C47.707,66.372,45.878,67.902,43.124,68.619z M48.6,54.416       c-2.682,0.322-5.542,0.493-8.532,0.493c-3.136,0-6.143-0.186-8.968-0.538L28.2,7.551h23.485L48.6,54.416z"></path>
                            <path d="M90,71.651v-3.784c0-0.172-0.011-0.342-0.032-0.51c-0.001-0.011-0.005-0.023-0.006-0.034       c-0.669-5.074-10.667-7.806-20.096-7.806c-5.056,0-9.862,0.734-13.534,2.066c-4.255,1.545-6.599,3.776-6.599,6.283v3.784       c0,5.423,10.373,8.349,20.132,8.349C79.627,80,90,77.074,90,71.651z M57.216,63.937c3.396-1.232,7.888-1.911,12.65-1.911       c8.898,0,15.803,2.411,17.283,4.875c-4.75,2.425-10.844,3.752-17.298,3.752c-6.446,0-12.527-1.322-17.261-3.736       C53.237,65.864,54.887,64.783,57.216,63.937z M69.867,77.491c-10.062,0-17.581-3.083-17.581-5.84v-2.084       c4.955,2.327,11.102,3.595,17.566,3.595c6.47,0,12.628-1.273,17.597-3.608v2.096C87.448,74.408,79.929,77.491,69.867,77.491z"></path>
                          </g>
                        </svg>
                      </div>
                      <h4 className="icon-class-title">
                        <a href="services.html">Paraffin Wax</a>
                      </h4>
                    </div>
                    <div className="icon-class-body">
                      <p>
                        This is a treatment for hands and feet that complements
                        your manicure and pedicure.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-5 col-xxl-6">
              <div className="block-img-aside">
                <img
                  src="img/home-3-1-974x626.jpg"
                  alt=""
                  width="974"
                  height="626"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="section section-lg bg-default text-center">
          <div className="container">
            <h2>Meet Our Experts</h2>
            <div className="divider-lg"></div>
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-9">
                <p>
                  We employ the best manicurists and pedicurists in the
                  industry. We also educate our own award-winning specialists
                  through constant training. Here are the most prominent talents
                  of our team who make your dreams come true.
                </p>
              </div>
            </div>
            <div className="row row-50 justify-content-center">
              <div className="col-md-6 col-lg-4">
                <div className="team-corporate">
                  <figure className="team-corporate-img">
                    <img
                      src="img/home-3-2-310x280.jpg"
                      alt=""
                      width="310"
                      height="280"
                    />
                  </figure>
                  <div className="team-corporate-caption">
                    <h4 className="team-corporate-title">
                      <a href="team-member-profile.html">Ann Nelson</a>
                    </h4>
                    <p>Founder, Senior Nail Technician</p>
                    <div className="divider"></div>
                    <div className="team-corporate-link">
                      <a href="mailto:#">info@demolink.org</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="team-corporate">
                  <figure className="team-corporate-img">
                    <img
                      src="img/home-3-3-310x280.jpg"
                      alt=""
                      width="310"
                      height="280"
                    />
                  </figure>
                  <div className="team-corporate-caption">
                    <h4 className="team-corporate-title">
                      <a href="team-member-profile.html">Mary Lucas</a>
                    </h4>
                    <p>Manicurist</p>
                    <div className="divider"></div>
                    <div className="team-corporate-link">
                      <a href="mailto:#">info@demolink.org</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="team-corporate">
                  <figure className="team-corporate-img">
                    <img
                      src="img/home-3-4-310x280.jpg"
                      alt=""
                      width="310"
                      height="280"
                    />
                  </figure>
                  <div className="team-corporate-caption">
                    <h4 className="team-corporate-title">
                      <a href="team-member-profile.html">Emily Lawrence</a>
                    </h4>
                    <p>Pedicurist</p>
                    <div className="divider"></div>
                    <div className="team-corporate-link">
                      <a href="mailto:#">info@demolink.org</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <a
                  className="button button-default-outline"
                  href="our-team.html"
                >
                  View all team
                </a>
              </div>
            </div>
          </div>
        </section>
        <section
          className="section parallax-container"
          data-parallax-img="img/parallax-6-1920x780.jpg"
        >
          <div className="parallax-content section-lg text-center ">
            <div className="container">
              <h2>Testimonials</h2>
              <div className="divider-lg"></div>
              <div
                className="owl-carousel carousel-dark-dots"
                data-items="1"
                data-dots="true"
                data-nav="false"
                data-stage-padding="15"
                data-loop="true"
                data-autoplay="true"
                data-margin="30"
                data-mouse-drag="false"
              >
                <div className="quote-modern">
                  <div className="quote-modern-text">
                    <svg
                      className="quote-body-mark"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="66px"
                      height="49px"
                      viewBox="0 0 66 49"
                      enable-background="new 0 0 66 49"
                      xmlSpace="preserve"
                    >
                      <g></g>
                      <path d="M36.903,49v-3.098c9.203-5.315,14.885-12.055,17.042-20.222c-2.335,1.524-4.459,2.288-6.37,2.288									c-3.186,0-5.875-1.29-8.071-3.876c-2.194-2.583-3.293-5.74-3.293-9.479c0-4.133,1.443-7.605,4.327-10.407									C43.425,1.405,46.973,0,51.185,0c4.213,0,7.735,1.784,10.566,5.352C64.585,8.919,66,13.359,66,18.669									c0,7.482-2.85,14.183-8.549,20.112C51.751,44.706,44.902,48.112,36.903,49z M0.69,49v-3.098									c9.205-5.315,14.887-12.055,17.044-20.222c-2.335,1.524-4.478,2.288-6.423,2.288c-3.152,0-5.823-1.29-8.02-3.876									C1.096,21.51,0,18.353,0,14.614c0-4.133,1.434-7.605,4.301-10.407C7.168,1.405,10.709,0,14.92,0c4.247,0,7.778,1.784,10.592,5.352									c2.814,3.567,4.223,8.007,4.223,13.317c0,7.482-2.843,14.183-8.524,20.112C15.53,44.706,8.69,48.112,0.69,49z"></path>
                    </svg>
                    <p>
                      Your salon is meticulous and outstanding in the service
                      that it provides. I always leave happy and refreshed after
                      a manicure. The salon is absolutely clean and sanitary and
                      your team is always ready to help me make a decision about
                      new nail art.
                    </p>
                  </div>
                  <div className="quote-modern-caption">
                    <figure className="quote-modern-img">
                      <img
                        src="img/user-1-90x90.jpg"
                        alt=""
                        width="90"
                        height="90"
                      />
                    </figure>
                    <h4 className="quote-modern-title">Amanda Smith</h4>
                    <p className="big">Client</p>
                  </div>
                </div>
                <div className="quote-modern">
                  <div className="quote-modern-text">
                    <svg
                      className="quote-body-mark"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="66px"
                      height="49px"
                      viewBox="0 0 66 49"
                      enable-background="new 0 0 66 49"
                      xmlSpace="preserve"
                    >
                      <g></g>
                      <path d="M36.903,49v-3.098c9.203-5.315,14.885-12.055,17.042-20.222c-2.335,1.524-4.459,2.288-6.37,2.288									c-3.186,0-5.875-1.29-8.071-3.876c-2.194-2.583-3.293-5.74-3.293-9.479c0-4.133,1.443-7.605,4.327-10.407									C43.425,1.405,46.973,0,51.185,0c4.213,0,7.735,1.784,10.566,5.352C64.585,8.919,66,13.359,66,18.669									c0,7.482-2.85,14.183-8.549,20.112C51.751,44.706,44.902,48.112,36.903,49z M0.69,49v-3.098									c9.205-5.315,14.887-12.055,17.044-20.222c-2.335,1.524-4.478,2.288-6.423,2.288c-3.152,0-5.823-1.29-8.02-3.876									C1.096,21.51,0,18.353,0,14.614c0-4.133,1.434-7.605,4.301-10.407C7.168,1.405,10.709,0,14.92,0c4.247,0,7.778,1.784,10.592,5.352									c2.814,3.567,4.223,8.007,4.223,13.317c0,7.482-2.843,14.183-8.524,20.112C15.53,44.706,8.69,48.112,0.69,49z"></path>
                    </svg>
                    <p>
                      I have been getting my nails done since high school and
                      have been to a lot of different salons. Ann from Blameless
                      salon is by far the best nail tech I have been to. I
                      recommend this salon to every girl looking for the best
                      nail art and customer service.
                    </p>
                  </div>
                  <div className="quote-modern-caption">
                    <figure className="quote-modern-img">
                      <img
                        src="img/user-2-90x90.jpg"
                        alt=""
                        width="90"
                        height="90"
                      />
                    </figure>
                    <h4 className="quote-modern-title">Janice Bradley</h4>
                    <p className="big">Client</p>
                  </div>
                </div>
                <div className="quote-modern">
                  <div className="quote-modern-text">
                    <svg
                      className="quote-body-mark"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="66px"
                      height="49px"
                      viewBox="0 0 66 49"
                      enable-background="new 0 0 66 49"
                      xmlSpace="preserve"
                    >
                      <g></g>
                      <path d="M36.903,49v-3.098c9.203-5.315,14.885-12.055,17.042-20.222c-2.335,1.524-4.459,2.288-6.37,2.288									c-3.186,0-5.875-1.29-8.071-3.876c-2.194-2.583-3.293-5.74-3.293-9.479c0-4.133,1.443-7.605,4.327-10.407									C43.425,1.405,46.973,0,51.185,0c4.213,0,7.735,1.784,10.566,5.352C64.585,8.919,66,13.359,66,18.669									c0,7.482-2.85,14.183-8.549,20.112C51.751,44.706,44.902,48.112,36.903,49z M0.69,49v-3.098									c9.205-5.315,14.887-12.055,17.044-20.222c-2.335,1.524-4.478,2.288-6.423,2.288c-3.152,0-5.823-1.29-8.02-3.876									C1.096,21.51,0,18.353,0,14.614c0-4.133,1.434-7.605,4.301-10.407C7.168,1.405,10.709,0,14.92,0c4.247,0,7.778,1.784,10.592,5.352									c2.814,3.567,4.223,8.007,4.223,13.317c0,7.482-2.843,14.183-8.524,20.112C15.53,44.706,8.69,48.112,0.69,49z"></path>
                    </svg>
                    <p>
                      I did some search online for a place to get my nails done,
                      and shortly afterward I came across Blameless. Since my
                      first visit, I have always left their salon fully
                      satisfied. Their team is highly qualified and knows how to
                      treat my nails the best way.
                    </p>
                  </div>
                  <div className="quote-modern-caption">
                    <figure className="quote-modern-img">
                      <img
                        src="img/user-3-90x90.jpg"
                        alt=""
                        width="90"
                        height="90"
                      />
                    </figure>
                    <h4 className="quote-modern-title">Mary Matthews</h4>
                    <p className="big">Client</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-md bg-default text-center">
          <div className="container">
            <h2>Special Pricing</h2>
            <div className="divider-lg"></div>
            <p className="block-sm">
              We provide a wide variety of affordable nail and skin treatments
              for you. Below you can learn more about the price range of our
              services.
            </p>
            <div className="row justify-content-center">
              <div className="col-sm-10 col-lg-12">
                <div className="pricing-list-class">
                  <div className="pricing-class-item">
                    <div className="pricing-class-body">
                      <h4>Essential</h4>
                      <p>60 – 100 Minute Sessions </p>
                    </div>
                    <div className="price-value">
                      <h4>$40.00</h4>
                    </div>
                  </div>
                  <div className="pricing-class-item">
                    <div className="pricing-class-body">
                      <h4>Elemental Nature</h4>
                      <p>30 – 40 Minute Sessions </p>
                    </div>
                    <div className="price-value">
                      <h4>$35.00</h4>
                    </div>
                  </div>
                  <div className="pricing-class-item">
                    <div className="pricing-class-body">
                      <h4>Neroli Spa</h4>
                      <p>40 – 60 Minute Sessions </p>
                    </div>
                    <div className="price-value">
                      <h4>$30.00</h4>
                    </div>
                  </div>
                  <div className="pricing-class-item">
                    <div className="pricing-class-body">
                      <h4>Gel Polish</h4>
                      <p>90 – 120 Minute Sessions </p>
                    </div>
                    <div className="price-value">
                      <h4>$55.00</h4>
                    </div>
                  </div>
                  <div className="pricing-class-item">
                    <div className="pricing-class-body">
                      <h4>Stone Therapy</h4>
                      <p>60 – 100 Minute Sessions </p>
                    </div>
                    <div className="price-value">
                      <h4>$40.00</h4>
                    </div>
                  </div>
                  <div className="pricing-class-item">
                    <div className="pricing-class-body">
                      <h4>Nail Design</h4>
                      <p>30 – 40 Minute Sessions </p>
                    </div>
                    <div className="price-value">
                      <h4>$35.00</h4>
                    </div>
                  </div>
                  <div className="pricing-class-item">
                    <div className="pricing-class-body">
                      <h4>Paraffin Treatment</h4>
                      <p>40 – 60 Minute Sessions </p>
                    </div>
                    <div className="price-value">
                      <h4>$30.00</h4>
                    </div>
                  </div>
                  <div className="pricing-class-item">
                    <div className="pricing-class-body">
                      <h4>Gel Polish Add-On</h4>
                      <p>90 – 120 Minute Sessions </p>
                    </div>
                    <div className="price-value">
                      <h4>$15.00</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a className="button button-primary" href="pricing.html">
              View More
            </a>
          </div>
        </section>
        <section className="section bg-gray-11 section-two-column">
          <div className="section-block-aside section-map">
            <div
              className="rd-google-map rd-google-map__model"
              data-marker="img/gmap_marker.png"
              data-marker-active="img/gmap_marker_active.png"
              data-styles='[{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]'
              data-zoom="14"
              data-x="-73.9874068"
              data-y="40.643180"
            >
              <ul className="map_locations">
                <li data-y="40.643180" data-x="-73.9874068">
                  <p>9870 St Vincent Place, Glasgow, DC 45 Fr 45.</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="section-md text-lg-left text-center">
            <div className="section-two-column-content">
              <h2>Get In Touch</h2>
              <div className="divider-lg"></div>
              <p>
                Have any questions? Feel free to use the contact form below to
                get in touch with us. We will answer you as soon as possible!
              </p>
              <form
                className="rd-form rd-mailform rd-form-icon"
                data-form-output="form-output-global"
                data-form-type="contact"
                method="post"
                action="bat/rd-mailform.php"
              >
                <div className="form-wrap">
                  <input
                    className="form-input"
                    id="contact-name"
                    type="text"
                    name="name"
                    data-constraints="@Required"
                  />
                  <label className="form-label" htmlFor="contact-name">
                    Your Name
                  </label>
                  <span className="icon mercury-icon-user input-icon"></span>
                </div>
                <div className="form-wrap">
                  <input
                    className="form-input"
                    id="contact-email"
                    type="email"
                    name="email"
                    data-constraints="@Email @Required"
                  />
                  <label className="form-label" htmlFor="contact-email">
                    Your Email
                  </label>
                  <span className="icon mercury-icon-e-mail input-icon"></span>
                </div>
                <div className="form-wrap">
                  <input
                    className="form-input"
                    id="contact-phone"
                    type="text"
                    name="phone"
                    data-constraints="@Numeric"
                  />
                  <label className="form-label" htmlFor="contact-phone">
                    Your Phone
                  </label>
                  <span className="icon mercury-icon-phone input-icon"></span>
                </div>
                <div className="form-wrap textarea-wrap">
                  <label className="form-label" htmlFor="contact-message">
                    Your Message
                  </label>
                  <textarea
                    className="form-input"
                    id="contact-message"
                    name="message"
                    data-constraints="@Required"
                  ></textarea>
                  <span className="icon mercury-icon-pencil input-icon"></span>
                </div>
                <div className="button-block">
                  <button className="button button-primary" type="submit">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <footer className="section bg-default section-sm footer-modern">
          <div className="container">
            <div className="row row-50">
              <div className="col-sm-6 col-lg-3">
                <p className="footer-title">About Us</p>
                <div className="divider-lg"></div>
                <p>
                  Blameless Nail Salon has been offering an extensive range of
                  nail services and skin treatments since 1999.
                </p>
              </div>
              <div className="col-sm-6 col-lg-3">
                <p className="footer-title">Recent Posts</p>
                <div className="divider-lg"> </div>
                <div className="footer-post">
                  <h5>
                    <a href="blog-post.html">
                      Top 5 Reasons to Visit the Nearest Nail Salon
                    </a>
                  </h5>
                  <ul className="list-inline">
                    <li>June 10, 2020</li>
                    <li>3 Comments </li>
                  </ul>
                </div>
                <div className="footer-post">
                  <h5>
                    <a href="blog-post.html">
                      One Day from the Life of a Nail Artist
                    </a>
                  </h5>
                  <ul className="list-inline">
                    <li>June 12, 2020</li>
                    <li>3 Comments</li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <p className="footer-title">Opening Hours</p>
                <div className="divider-lg"></div>
                <ul className="list">
                  <li>Mon-Fri: 9 am – 6 pm</li>
                  <li>Saturday: 9 am – 4 pm</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
              <div className="col-sm-6 col-lg-3">
                <p className="footer-title">Contact Information</p>
                <div className="divider-lg"></div>
                <ul className="footer-contact-info">
                  <li>
                    <span className="icon mdi mdi-map-marker icon-primary"></span>
                    <a href="#">
                      Washington, USA 6036 Richmond hwy., Alexandria, VA, 2230{" "}
                    </a>
                  </li>
                  <li>
                    <span className="icon mdi mdi-phone icon-primary"></span>
                    <a href="tel:#">+1 (409) 987–5874</a>
                  </li>
                  <li>
                    <span className="icon mdi mdi-email-outline icon-primary"></span>
                    <a href="mailto:#">info@demolink.org</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        <section className="bg-gray-100 section-xxs text-center">
          <div className="container">
            <div className="row row-30 align-items-lg-center">
              <div className="col-lg-3 text-lg-left">
                <a href="index.html">
                  <img
                    src="img/logo-footer-133x31.png"
                    alt=""
                    width="133"
                    height="31"
                  />
                </a>
              </div>
              <div className="col-lg-6 text-lg-center">
                <p className="rights">
                  <span>&copy;&nbsp; </span>
                  <span className="copyright-year"></span>
                  <span>&nbsp;</span>
                  <span>Blameless</span>
                  <span>.&nbsp;</span>
                  <a href="privacy-policy.html">Privacy Policy</a>
                </p>
              </div>
              <div className="col-lg-3 text-lg-right">
                <div className="social-block-footer">
                  <ul className="list-inline">
                    <li>
                      <a className="icon fa-facebook" href="#"></a>
                    </li>
                    <li>
                      <a className="icon fa-twitter" href="#"></a>
                    </li>
                    <li>
                      <a className="icon fa-google-plus" href="#"></a>
                    </li>
                    <li>
                      <a className="icon fa-vimeo" href="#"></a>
                    </li>
                    <li>
                      <a className="icon fa-youtube" href="#"></a>
                    </li>
                    <li>
                      <a className="icon fa-pinterest-p" href="#"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="snackbars" id="form-output-global"></div>
    </>
  );
};

export default Home;
