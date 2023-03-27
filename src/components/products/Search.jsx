import React, { useState } from "react";
import styles from "./index.module.css";
import { useDispatch } from "react-redux";
import { searchProduct } from "../../redux";

function Search() {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");

  return (
    <div className={styles.search}>
      <div className={styles.container}>
        <h3>Search Product</h3>
        <div className={styles.searchBox}>
          <input
            value={searchValue}
            type="text"
            onChange={(e) => {
              setSearchValue(e.target.value);
              dispatch(searchProduct(e.target.value));
            }}
            placeholder="Search product with any keyword"
          />
          <button onClick={() => setSearchValue("")}>Clear</button>
        </div>
      </div>
    </div>
  );
}

export default Search;
