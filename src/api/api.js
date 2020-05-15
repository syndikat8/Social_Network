import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "a4868654-1346-4601-9c9f-2bf29679e35a"
  }
})


export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data
      })
  }
}

export const unfollowAPI = {
  getUnfollow(userId) {
    return instance.delete(`follow/${userId}`)
      .then(response => {
        return response.data
      })
  }
}

export const followAPI = {
  getFollow(userId) {
    return instance.post(`follow/${userId}`)
      .then(response => {
        return response.data
      })
  }
}

export const authAPI = {
  getAuth() {
    return instance.get(`auth/me`)
      .then(response => {
        return response.data
      })
  }
}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`)
      .then(response => {
        return response.data
      })
  }
}