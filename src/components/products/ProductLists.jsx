import React, { useEffect } from "react";
import styles from "./index.module.css";
import TableBody from "./TableBody";
import { useDispatch, useSelector } from "react-redux";
import { switchDisplay, fetchProducts } from "../../redux";

function ProductLists() {
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const productLists = useSelector((state) => state.productList.products);
  const currentTableDisplay = useSelector(
    (state) => state.tableDisplay.currentTableDisplay
  );
  const dispatch = useDispatch();

  return (
    <div className={styles.productLists}>
      <div className={styles.container}>
        <div className={styles.table}>
          <div className={styles.displays}>
            <div
              className={styles.display}
              onClick={() => dispatch(switchDisplay("card"))}
            >
              {currentTableDisplay}
            </div>
            <div
              className={styles.display}
              onClick={() => dispatch(switchDisplay("row"))}
            >
              {currentTableDisplay}
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>title</th>
                <th>description</th>
                <th>price</th>
                <th>photo</th>
                <th>rating</th>
                <th>stock</th>
                <th>category</th>
              </tr>
            </thead>
            <tbody>
              <TableBody data={productLists.products} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProductLists;
