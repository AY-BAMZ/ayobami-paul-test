import React, { useEffect } from "react";
import styles from "./index.module.css";
import TableBody from "./TableBody";
import { useDispatch, useSelector } from "react-redux";
import { switchDisplay, fetchProducts, fetchProductSuccess } from "../../redux";
import { ImList2 } from "react-icons/im";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaSort } from "react-icons/fa";
import Card from "./Cards";

function ProductLists() {
  const productLists = useSelector((state) => state.productList);
  const sortByNumericValue = (colName) => {
    productLists.products.sort((a, b) => a[colName] - b[colName]);

    dispatch(
      fetchProductSuccess({
        products: productLists.products,
      })
    );
  };

  const sortCol = (col) => {
    productLists.products.sort((a, b) => {
      if (a[col].toLowerCase() < b[col].toLowerCase()) return -1;
      if (a[col].toLowerCase() > b[col].toLowerCase()) return 1;
      return 0;
    });
    dispatch(
      fetchProductSuccess({
        products: productLists.products,
      })
    );
  };

  useEffect(() => {
    if (productLists.products.length < 1) dispatch(fetchProducts());
  }, [productLists.products]);

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
                    <th className={styles.tableId}>
                      ID{" "}
                      <FaSort
                        onClick={() => sortByNumericValue("id")}
                        title="sort by title"
                      />
                    </th>
                    <th>photo </th>
                    <th>
                      title{" "}
                      <FaSort
                        onClick={() => sortCol("title")}
                        title="sort by title"
                      />
                    </th>
                    <th>
                      description
                      <FaSort
                        onClick={() => sortCol("description")}
                        title="sort by title"
                      />
                    </th>
                    <th>
                      price{" "}
                      <FaSort onClick={() => sortByNumericValue("price")} />
                    </th>
                    <th>
                      rating{" "}
                      <FaSort onClick={() => sortByNumericValue("rating")} />
                    </th>
                    <th>
                      stock{" "}
                      <FaSort onClick={() => sortByNumericValue("stock")} />
                    </th>
                    <th>
                      category <FaSort onClick={() => sortCol("category")} />
                    </th>
                    <th>Delete/edit </th>
                  </tr>
                </thead>
                <tbody>
                  <TableBody data={productLists.products} />
                </tbody>
              </table>
            </div>
          )}
          {currentTableDisplay === "card" && (
            <div className={styles.grid}>
              <Card data={productLists.products} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductLists;
