import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";

const Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, followingInProgress, unfollow, follow, users}) => {

  return (
    <div >
      {users.map(u => <User
        key={u.id}
        user={u}
        followingInProgress={followingInProgress}
        unfollow={unfollow}
        follow={follow}
      />)}

      <Paginator
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChanged={onPageChanged}
        totalUsersCount={totalUsersCount}
      />
    </div>
  )
};


export default Users;