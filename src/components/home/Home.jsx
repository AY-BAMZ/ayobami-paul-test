import React from "react";
import ProductLists from "../products/ProductLists";
import Search from "../products/Search";
import Sidebar from "../sidebar/Sidebar";
import styles from "./index.module.css";
import { useSelector } from "react-redux";
import CreateProduct from "../create_product/CreateProduct";
import MobileSidebar from "../sidebar/MobileSidebar";

function Home() {
  const currentSidebarDisplay = useSelector(
    (state) => state.sidebarDisplay.currentSidebarDisplay
  );

  return (
    <div className={styles.home}>
      <div className={styles.left}>
        <Sidebar />
      </div>
        <MobileSidebar />
      <div className={styles.right}>
        {currentSidebarDisplay === "products" && (
          <>
            <Search />
            <ProductLists />
          </>
        )}
        {currentSidebarDisplay === "create_product" && (
          <>
            <CreateProduct />
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
