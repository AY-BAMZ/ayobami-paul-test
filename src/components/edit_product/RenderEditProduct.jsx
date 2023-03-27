import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux";
import EditProduct from "./EditProduct";
import styles from "./index.module.css";
import Sidebar from "../sidebar/Sidebar";

function RenderEditProduct() {
  let { id } = useParams();

  const productLists = useSelector((state) => state.productList.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (productLists.length < 1) dispatch(fetchProducts());
  }, [productLists]);

  const getSingleProduct = (id) => {
    const filtered = productLists.filter(
      (product) => parseInt(product.id) === parseInt(id)
    );
    return filtered[0];
  };

  return (
    <div className={styles.edit}>
      <div className={styles.left}>
        <Sidebar />
      </div>
      <div className={styles.right}>
        <EditProduct {...getSingleProduct(id)}/>
      </div>
    </div>
  );
}

export default RenderEditProduct;
