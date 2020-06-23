import React from "react";
import styles from './Paginator.module.css';

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  return (
    <div className={styles.pageList}>
      <span>Выбрать страницу</span>
      <div className={styles.drop}>
        {pages.map(p => {
          return <span
            className={currentPage === p && styles.selectedPage}
            onClick={() => {
              onPageChanged(p)
            }}> {p}</span>
        })}
      </div>
    </div>
  )
}

export default Paginator;