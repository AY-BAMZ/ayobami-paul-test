import React from "react";
import ProductLists from "../products/ProductLists";
import Search from "../products/Search";
import Sidebar from "../sidebar/Sidebar";
import styles from "./index.module.css";
import { useSelector } from "react-redux";

function Home() {
  const currentSidebarDisplay = useSelector(
    (state) => state.sidebarDisplay.currentSidebarDisplay
  );

  return (
    <div className={styles.home}>
      <div className={styles.left}>
        <Sidebar />
      </div>
      <div className={styles.right}>
        {currentSidebarDisplay === "products" && (
          <>
            <Search />
            <ProductLists />
          </>
        )}
        {currentSidebarDisplay === "create_product" && (
          <>
            <h1>hello there</h1>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
