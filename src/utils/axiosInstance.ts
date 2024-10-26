import axios from "axios"

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || ""

const AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

AxiosInstance.interceptors.request.use(
  (config) => {
    const requiresAuth = !config.headers["skipAuth"]

    if (requiresAuth) {
      const token = localStorage.getItem("token")

      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`
      }
    } else {
      delete config.headers["Authorization"]
    }

    delete config.headers["skipAuth"]
    return config
  },
  (error) => Promise.reject(error)
)

export default AxiosInstance
