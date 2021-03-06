import React, {useState} from "react";
import styles from './Paginator.module.css';

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  let portionCount = Math.ceil(pagesCount / portionSize)
  let [portionNumber, setPortionNumber] = useState(1)
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  let rightPortionPageNumber = portionNumber * portionSize


  return (
    <div className={styles.paginator}>
      {portionNumber > 1 &&
      <span className={styles.paginatorArrow} onClick={() => setPortionNumber(portionNumber - 1)}> « </span>
      }

      {pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((p, i) => {
          return <span
            key={i}
            className={`${styles.paginatorItem} ${currentPage === p && styles.selectedPage}`}
            onClick={() => {
              onPageChanged(p)
            }}> {p}</span>
        })}

      {portionCount > portionNumber &&
      <span className={styles.paginatorArrow} onClick={() => setPortionNumber(portionNumber + 1)}> » </span>
      }
    </div>
  )
}

export default Paginator;
