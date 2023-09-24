import React, { useEffect, useState, useRef } from "react";
import MobileMenuSearch from "./sub-components/MobileSearch";
import MobileNavMenu from "./sub-components/MobileNavMenu";
import MobileLangCurChange from "./sub-components/MobileLangCurrChange";
import MobileWidgets from "./sub-components/MobileWidgets";
import { motion } from "framer-motion/dist/framer-motion";

const MobileMenu = () => {
  const mobileMenuRef = useRef(null);
  const [menuVisible, setMenuVisible] = useState(false);

  const slideInVariants = {
    hidden: { x: "100%" },
    visible: { x: "0%", transition: { duration: 0.5 } },
  };

  const slideInFromTopVariants = {
    hidden: { y: "-100%" },
    visible: { y: "0%", transition: { duration: 0.5 } },
  };

  useEffect(() => {
    const offCanvasNav = document.querySelector("#offcanvas-navigation");
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");
    const anchorLinks = offCanvasNav.querySelectorAll("a");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='menu-expand'><i></i></span>"
      );
    }

    const menuExpand = offCanvasNav.querySelectorAll(".menu-expand");

    for (let i = 0; i < menuExpand.length; i++) {
      menuExpand[i].addEventListener("click", (e) => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        closeMobileMenu();
      });
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Mobile menu is in the viewport, start animating elements
          setMenuVisible(true);
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    // Observe the mobile menu element when it becomes available
    if (mobileMenuRef.current) {
      observer.observe(mobileMenuRef.current);
    }
  }, []);

  const sideMenuExpand = (e) => {
    e.currentTarget.parentElement.classList.toggle("active");
  };

  const closeMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.remove("active");
    setMenuVisible(false);
  };

  return (
    <div
      className={`offcanvas-mobile-menu ${menuVisible ? "active" : ""}`}
      id="offcanvas-mobile-menu"
      ref={mobileMenuRef}
    >
      <button
        className="offcanvas-menu-close"
        id="mobile-menu-close-trigger"
        onClick={() => closeMobileMenu()}
      >
        <i className="pe-7s-close"></i>
      </button>
      <div className="offcanvas-wrapper">
        <MobileMenuSearch />
        <motion.div
          className="offcanvas-inner-content"
          initial="hidden"
          animate={menuVisible ? "visible" : "hidden"}
          variants={slideInVariants}
        >
          {/* mobile nav menu */}
          <motion.div
            className="menu-content"
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            <MobileNavMenu />
          </motion.div>
          {/* mobile widgets */}
          <motion.div
            className="menu-content align-bottom"
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            <MobileWidgets className="align-bottom" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default MobileMenu;
