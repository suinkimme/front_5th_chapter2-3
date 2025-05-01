export const API_URL = "/front_5th_chapter2-3/api"

export const request = async <T>(endpoint: string, options?: RequestInit): Promise<T> => {
  const defaultHeaders = {
    "Content-Type": "application/json",
  }

  const config: RequestInit = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options?.headers,
    },
  }

  try {
    const response = await fetch(`${API_URL}${endpoint}`, config)

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || "API 요청 실패")
    }

    return response.json()
  } catch (error) {
    console.error("API 요청 중 오류 발생", error)
    throw error
  }
}
