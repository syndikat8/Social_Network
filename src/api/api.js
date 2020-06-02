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
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
      .then(response => {
        return response.data
      })
  },
  follow(userId) {
    return instance.post(`follow/${userId}`)
      .then(response => {
        return response.data
      })
  },
  getProfile(userId) {
    console.warn("Obsolete method. Please use profileAPI object")
    return profileAPI.getProfile(userId)
  }
}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`)
  },
  updateStatus(newStatus) {
    return instance.put(`/profile/status`,
      {status: newStatus}
    )
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
  }
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  },
  login(login,password,rememberMe){
    debugger
    return instance.post(`/auth/login`,{
      email: login,
      password: password,
      rememberMe: rememberMe,
      captcha: false
    })
  }
}



