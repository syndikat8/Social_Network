import React from "react";
import styles from './Users.module.css';
import userPhoto from "../../assets/images/images.png"

const Users = (props) =>  {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
    return (
      <div>

        <div>
          {pages.map(p => {
            return <span
              className={props.currentPage === p && styles.selectedPage}
              onClick={ (e) => {props.onPageChanged(p)} }> {p}</span>
          })}
        </div>

        {props.users.map(u => <div key={u.id}>
          <div className={styles.users}>
            <div className={styles.avaButton}>
              <div>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  className={styles.userPhoto}/>
              </div>
              <div>
                {u.followed
                  ? <button onClick={() => {
                    props.unfollow(u.id)
                  }}>UNFOLLOW</button>
                  : <button onClick={() => {
                    props.follow(u.id)
                  }}>FOLLOW</button>}
              </div>
            </div>
            <div className={styles.message}>
              <div>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </div>
              <div>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
              </div>
            </div>
          </div>
        </div>)
        }
      </div>
    )
  };


export default Users;