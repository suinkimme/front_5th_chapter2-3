import { request } from "@/shared/api/base"
import { ENDPOINTS } from "@/shared/api/endpoints"

export const userApi = {
  getUsers: () => request(ENDPOINTS.USERS.GET),
  getUserById: (id: number) => request(ENDPOINTS.USERS.GET_BY_ID(id)),
}
