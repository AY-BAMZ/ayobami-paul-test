import React from "react";
import styles from "./index.module.css";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux";
import { Link, unstable_HistoryRouter, useNavigate } from "react-router-dom";

function Product(props) {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  // let history = unstable_HistoryRouter();
  const handleDelete = (id) => {
    const result = window.confirm(
      "Are you sure you want yo delete this product"
    );
    if (result) {
      dispatch(deleteProduct(id));
      navigate("/");
    }
  };

  return (
    <div className={styles.productPage}>
      <div className={styles.container}>
        <h5 onClick={() => navigate(-1)}>Back</h5>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.image}>
              <img src={props.images[0]} alt="" />
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.productDetails}>
              <h4>{props.title}</h4>
              <p>{props.description}</p>
              <h2>${props.price}</h2>
              <h6>
                Brand: <span>{props.brand}</span>
              </h6>
              <h6>
                Category: <span>{props.category}</span>
              </h6>
              <p className={styles.stock}>{props.stock} items remaining</p>
              <h6 className={styles.rating}>
                {props.rating}
                <AiFillStar className={styles.star} />
              </h6>
              <div className={styles.buttons}>
                <Link to={"/product/edit/" + props.id}>
                  <button>Edit</button>
                </Link>
                <button
                  onClick={() => handleDelete(props.id)}
                  className={styles.delete}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
