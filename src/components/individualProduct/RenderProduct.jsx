import React, { useEffect } from 'react'
import Sidebar from '../sidebar/Sidebar';
import styles from "./index.module.css";
import Product from './Product'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux";
import MobileSidebar from '../sidebar/MobileSidebar';

function RenderProduct() {
  let { id } = useParams();
  const productLists = useSelector((state) => state.productList.products);
  const dispatch = useDispatch();

  // console.log('productLists', productLists)
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
    <div className={styles.individualProduct}>
      <div className={styles.left}>
        <Sidebar />
      </div>
      <MobileSidebar />
      <div className={styles.right}>
          <>
            <Product {...getSingleProduct(id)}/>
          </>
      </div>
    </div>
  )
}

export default RenderProduct