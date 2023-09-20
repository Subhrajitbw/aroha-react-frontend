import React, { Fragment, useEffect, useRef } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderTwo from "../../wrappers/hero-slider/HeroSliderTwo";
import BannerTwo from "../../wrappers/banner/BannerTwo";
import TabProductTwo from "../../wrappers/product/TabProductTwo";
import CountDownOne from "../../wrappers/countdown/CountDownOne";
import FeatureIconTwo from "../../wrappers/feature-icon/FeatureIconTwo";
import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";
import ScrollMonitor from "scrollmonitor";
import gsap from "gsap";

const HomeFurniture = () => {
  const heroSliderRef = useRef(null);
  const bannerRef = useRef(null);
  const tabProductRef = useRef(null);
  const countdownRef = useRef(null);
  const featureIconRef = useRef(null);
  const blogFeaturedRef = useRef(null);

  useEffect(() => {
    const heroSliderWatcher = ScrollMonitor.create(heroSliderRef.current);
    const bannerWatcher = ScrollMonitor.create(bannerRef.current);
    const tabProductWatcher = ScrollMonitor.create(tabProductRef.current);
    const countdownWatcher = ScrollMonitor.create(countdownRef.current);
    const featureIconWatcher = ScrollMonitor.create(featureIconRef.current);
    const blogFeaturedWatcher = ScrollMonitor.create(blogFeaturedRef.current);

    // Define animations for each section
    const animateHeroSlider = () => {
      gsap.fromTo(heroSliderRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1.2, ease: "easeOut" });
    };

    const animateBanner = () => {
      gsap.fromTo(bannerRef.current, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 1.2, ease: "easeOut" });
    };

    const animateTabProduct = () => {
      gsap.fromTo(tabProductRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1.2, ease: "easeOut" });
    };

    const animateCountdown = () => {
      gsap.fromTo(countdownRef.current, { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 1.2, ease: "easeOut" });
    };

    const animateFeatureIcon = () => {
      gsap.fromTo(featureIconRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1.2, ease: "easeOut" });
    };

    const animateBlogFeatured = () => {
      gsap.fromTo(blogFeaturedRef.current, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 1.2, ease: "easeOut" });
    };

    // Add listeners to trigger animations when sections enter the viewport
    heroSliderWatcher.enterViewport(animateHeroSlider);
    bannerWatcher.enterViewport(animateBanner);
    tabProductWatcher.enterViewport(animateTabProduct);
    countdownWatcher.enterViewport(animateCountdown);
    featureIconWatcher.enterViewport(animateFeatureIcon);
    blogFeaturedWatcher.enterViewport(animateBlogFeatured);

    // Clean up when the component unmounts
    return () => {
      heroSliderWatcher.destroy();
      bannerWatcher.destroy();
      tabProductWatcher.destroy();
      countdownWatcher.destroy();
      featureIconWatcher.destroy();
      blogFeaturedWatcher.destroy();
    };
  }, []);

  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Furniture Home</title>
        <meta
          name="description"
          content="Furniture home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutOne headerTop="visible">
        {/* hero slider */}
        <div ref={heroSliderRef}>
          <HeroSliderTwo />
        </div>

        {/* banner */}
        <div ref={bannerRef}>
          <BannerTwo spaceTopClass="pt-80" spaceBottomClass="pb-60" />
        </div>

        {/* tab product */}
        <div ref={tabProductRef}>
          <TabProductTwo spaceBottomClass="pb-100" category="furniture" />
        </div>

        {/* countdown */}
        <div ref={countdownRef}>
          <CountDownOne
            spaceTopClass="pt-115"
            spaceBottomClass="pb-115"
            bgImg="/assets/img/bg/bg-1.jpg"
            dateTime="November 13, 2020 12:12:00"
          />
        </div>

        {/* feature icon */}
        <div ref={featureIconRef}>
          <FeatureIconTwo spaceTopClass="pt-100" spaceBottomClass="pb-60" />
        </div>

        {/* blog featured */}
        <div ref={blogFeaturedRef}>
          <BlogFeatured spaceBottomClass="pb-55" />
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFurniture;
