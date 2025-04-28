import { useQuery } from "@tanstack/react-query"
import { userApi } from "@/entities/user/api/userApi"
import { USER_QUERIES } from "@/entities/user/model/constants"

export const useUsersQuery = () => {
  return useQuery({
    queryKey: USER_QUERIES.all,
    queryFn: userApi.getUsers,
  })
}

export const useUserByIdQuery = (id: number) => {
  return useQuery({
    queryKey: USER_QUERIES.byId(id),
    queryFn: () => userApi.getUserById(id),
  })
}
