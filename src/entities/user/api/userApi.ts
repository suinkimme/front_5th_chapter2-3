import { request } from "@/shared/api/base"
import { ENDPOINTS } from "@/shared/api/endpoints"
import { IUsersResponse } from "@/entities/user/model/types"

export const userApi = {
  getUsers: () => request<IUsersResponse>(ENDPOINTS.USERS.GET),
  getUserById: (id: number) => request(ENDPOINTS.USERS.GET_BY_ID(id)),
}
