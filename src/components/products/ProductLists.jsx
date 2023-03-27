import React, { useEffect } from "react";
import styles from "./index.module.css";
import TableBody from "./TableBody";
import { useDispatch, useSelector } from "react-redux";
import { switchDisplay, fetchProducts } from "../../redux";
import { ImList2 } from "react-icons/im";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaSort } from "react-icons/fa";
import Card from "./Cards";

function ProductLists() {
  const productLists = useSelector((state) => state.productList.products);
  console.log('productLists', productLists)
  useEffect(() => {
    if (productLists.length < 1) dispatch(fetchProducts());
  }, [productLists]);

  const currentTableDisplay = useSelector(
    (state) => state.tableDisplay.currentTableDisplay
  );
  const dispatch = useDispatch();

  return (
    <div className={styles.productLists}>
      <div className={styles.container}>
        <div className={styles.table}>
          <div className={styles.displays}>
            <h3>Products</h3>
            <div className={styles.switchContainer}>
              <h6>Switch Display:</h6>
              <div className={styles.switch}>
                <div
                  title="Card view"
                  className={
                    currentTableDisplay === "row"
                      ? styles.activeDisplay
                      : styles.display
                  }
                  onClick={() => dispatch(switchDisplay("row"))}
                >
                  <ImList2 />
                </div>
                <div
                  title="List view"
                  className={
                    currentTableDisplay === "card"
                      ? styles.activeDisplay
                      : styles.display
                  }
                  onClick={() => dispatch(switchDisplay("card"))}
                >
                  <BsFillGrid3X3GapFill />
                </div>
              </div>
            </div>
          </div>
          {currentTableDisplay === "row" && (
            <div className={styles.table}>
              
            <table>
              <thead>
                <tr>
                  <th className={styles.tableId}>ID  <FaSort /></th>
                  <th>photo </th>
                  <th>title <FaSort /></th>
                  <th>description <FaSort /></th>
                  <th>price <FaSort /></th>
                  <th>rating <FaSort /></th>
                  <th>stock <FaSort /></th>
                  <th>category <FaSort /></th>
                  <th>Delete/edit </th>
                </tr>
              </thead>
              <tbody>
                <TableBody data={productLists} />
              </tbody>
            </table>
            </div>
          )}
          {currentTableDisplay === "card" && (
            <div className={styles.grid}>
              <Card data={productLists} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductLists;
