import React from "react";
import { Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import styles from "./index.module.css";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux";

function TableBody(props) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    const result = window.confirm(
      "Are you sure you want yo delete this product"
    );
    if (result) {
      dispatch(deleteProduct(id));
    }
  };

  return (
    <>
      {props.data?.map((product) => (
        <tr key={product.id}>
          <td className={styles.tableId}>{product.id}</td>
          <img src={product.images[0]} alt="product image" />
          <td>
            <Link to={"/product/" + product.id}>{product.title}</Link>
          </td>
          <td>{product.description}</td>
          <td>{product.price}</td>
          <td>{product.rating}</td>
          <td>{product.stock}</td>
          <td>{product.category}</td>
          <td>
            <Link to={"/product/edit/" + product.id}>
              <AiFillEdit className={styles.edit} />
            </Link>
            <RiDeleteBinLine
              onClick={() => handleDelete(product.id)}
              className={styles.delete}
            />
          </td>
        </tr>
      ))}
    </>
  );
}

export default TableBody;
