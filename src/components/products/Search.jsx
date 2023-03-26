import React from 'react'
import styles from "./index.module.css"

function Search() {
  return (
    <div className={styles.search}>
        <div className="container">
            <input type="text" />
            {/* <button>Search</button> */}
        </div>
    </div>
  )
}

export default Search