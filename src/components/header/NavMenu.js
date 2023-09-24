import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";
import { motion } from "framer-motion/dist/framer-motion";

const NavMenu = ({ strings, menuWhiteClass, sidebarMenu }) => {
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className={`${
        sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
      }`}
      initial="hidden"
      animate="visible"
      variants={menuVariants}
    >
      <nav>
        <ul>
          <motion.li variants={itemVariants} className="nav-item">
            <Link to={process.env.PUBLIC_URL + "/"}>
              {strings["home"]}
              
            </Link>
            
          </motion.li>
          <motion.li variants={itemVariants} className="nav-item">
            <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
              {strings["shop"]}
              
            </Link>
            
          </motion.li>
          {/* <motion.li variants={itemVariants} className="nav-item">
            <Link to={process.env.PUBLIC_URL + "/collection"}>
              {strings["collection"]}
            </Link>
          </motion.li> */}
          {/* <motion.li variants={itemVariants} className="nav-item">
            <Link to={process.env.PUBLIC_URL + "/"}>
              {strings["pages"]}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="submenu">
              <motion.li variants={itemVariants}>
                <Link to={process.env.PUBLIC_URL + "/cart"}>
                  {strings["cart"]}
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link to={process.env.PUBLIC_URL + "/checkout"}>
                  {strings["checkout"]}
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link to={process.env.PUBLIC_URL + "/wishlist"}>
                  {strings["wishlist"]}
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link to={process.env.PUBLIC_URL + "/compare"}>
                  {strings["compare"]}
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link to={process.env.PUBLIC_URL + "/my-account"}>
                  {strings["my_account"]}
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link to={process.env.PUBLIC_URL + "/login-register"}>
                  {strings["login_register"]}
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link to={process.env.PUBLIC_URL + "/about"}>
                  {strings["about_us"]}
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link to={process.env.PUBLIC_URL + "/contact"}>
                  {strings["contact_us"]}
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link to={process.env.PUBLIC_URL + "/not-found"}>
                  {strings["404_page"]}
                </Link>
              </motion.li>
            </ul>
          </motion.li> */}
          <motion.li variants={itemVariants} className="nav-item">
            <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
              {strings["blog"]}
              {/* {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )} */}
            </Link>
            {/* <ul className="submenu">
              <motion.li variants={itemVariants}>
                <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                  {strings["blog_standard"]}
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link to={process.env.PUBLIC_URL + "/blog-no-sidebar"}>
                  {strings["blog_no_sidebar"]}
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link to={process.env.PUBLIC_URL + "/blog-right-sidebar"}>
                  {strings["blog_right_sidebar"]}
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                  {strings["blog_details_standard"]}
                </Link>
              </motion.li>
            </ul> */}
          </motion.li>
          <motion.li variants={itemVariants} className="nav-item">
            <Link to={process.env.PUBLIC_URL + "/contact"}>
              {strings["contact_us"]}
            </Link>
          </motion.li>
        </ul>
      </nav>
    </motion.div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
  strings: PropTypes.object,
};

export default multilanguage(NavMenu);
