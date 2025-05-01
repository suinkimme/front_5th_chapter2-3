import { create } from "zustand"
import { IPostUser } from "@/entities/user/model/types"

interface UserState {
  showUserModal: boolean
  selectedUser: IPostUser | null

  setSelectedUser: (user: IPostUser) => void
  setShowUserModal: (show: boolean) => void
}

export const useUserStore = create<UserState>((set) => ({
  showUserModal: false,
  selectedUser: null,

  setSelectedUser: (user: IPostUser) => set({ selectedUser: user }),
  setShowUserModal: (show: boolean) => set({ showUserModal: show }),
}))
