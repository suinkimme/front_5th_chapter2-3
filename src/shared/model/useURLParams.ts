import { useNavigate, useSearchParams, useLocation } from "react-router-dom"

interface URLParams {
  skip?: number
  limit?: number
  search?: string
  sortBy?: string
  sortOrder?: string
  tag?: string
}

export const useURLParams = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams] = useSearchParams()

  const updateURL = (params: URLParams) => {
    const newParams = new URLSearchParams()
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== "") {
        newParams.set(key, value.toString())
      }
    })
    const path = location.pathname
    const url = `${path}?${newParams.toString()}`
    navigate(url)
  }

  const getParam = (key: keyof URLParams) => {
    return searchParams.get(key) || undefined
  }

  return {
    updateURL,
    getParam,
  }
}
