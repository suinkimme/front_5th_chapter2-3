import { useUserStore } from "@/features/user/model/store"
import { useUserByIdQuery } from "@/entities/user/model/queries"

export const useUser = () => {
  const selectedUser = useUserStore((state) => state.selectedUser)
  const showUserModal = useUserStore((state) => state.showUserModal)
  const setSelectedUser = useUserStore((state) => state.setSelectedUser)
  const setShowUserModal = useUserStore((state) => state.setShowUserModal)

  const { data, isLoading, error } = useUserByIdQuery(selectedUser?.id ?? 0, {
    enabled: !!selectedUser,
  })

  return { selectedUser: data, isLoading, error, showUserModal, setShowUserModal, setSelectedUser }
}
