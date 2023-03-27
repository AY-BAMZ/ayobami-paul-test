import React from "react";
import styles from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { switchSidebarDisplay } from "../../redux";
import { IoIosCreate } from "react-icons/io";
import { CiShoppingBasket } from "react-icons/ci";
import { Link } from "react-router-dom";

function MobileSidebar() {
  const dispatch = useDispatch();
  const currentSidebarDisplay = useSelector(
    (state) => state.sidebarDisplay.currentSidebarDisplay
  );
  return (
    <div className={styles.mobileSidebar}>
      <div className={styles.container}>
        <div className={styles.sideLinks}>
          <Link to={"/"}>
            <li
              className={
                currentSidebarDisplay === "products"
                  ? styles.activeLink
                  : styles.link
              }
              onClick={() => dispatch(switchSidebarDisplay("products"))}
            >
              <CiShoppingBasket className={styles.icon} />
              <span>Products</span>
            </li>
          </Link>
          <Link to={"/"}>
            <li
              className={
                currentSidebarDisplay === "create_product"
                  ? styles.activeLink
                  : styles.link
              }
              onClick={() => dispatch(switchSidebarDisplay("create_product"))}
            >
              <IoIosCreate className={styles.icon} />
              <span>Create Product</span>
            </li>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MobileSidebar;
