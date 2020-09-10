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
    return instance.put(`profile/status`, {
        status: newStatus
      }
    )
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
  },
  savePhoto(photoFile) {
    const formData = new FormData()
    formData.append("image", photoFile)
    return instance.put(`profile/photo`, formData, {
        "Content-Type": " multipart/form-data"
      }
    )
  },
  saveProfile(profile) {
    return instance.put(`profile`, profile)
  }
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  },
  login(email, password, rememberMe = false, captcha) {
    return instance.post(`auth/login`, {
      email,
      password,
      rememberMe,
      captcha
    })
  },
  logout() {
    return instance.delete(`auth/login`)
  }
}

export const securityAPI = {
  getCaptchaUrl(){
    return instance.get("security/get-captcha-url")
  }
}


