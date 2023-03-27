import React from "react";
import styles from "./index.module.css";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

function Cards(props) {
  return (
    <div className={styles.productCards}>
      {props.data?.map((product) => (
        <div key={product.id} className={styles.cardContainer}>
          <Link to={"/product/" + product.id}>
            <img src={product.images[0]} alt="product image" />
            <div className={styles.details}>
              <h5>{product.title}</h5>
              <p className={styles.description}>{product.description}</p>
              <div className={styles.flex}>
                <div>
                  {product.rating}
                  <AiFillStar className={styles.star} />
                </div>
                <p>{product.stock} remaining</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Cards;
