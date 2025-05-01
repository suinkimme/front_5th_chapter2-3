import { create } from "zustand"
import { IUser } from "@/entities/user/model/types"

interface UserState {
  showUserModal: boolean
  selectedUser: IUser | null

  setSelectedUser: (user: IUser) => void
  setShowUserModal: (show: boolean) => void
}

export const useUserStore = create<UserState>((set) => ({
  showUserModal: false,
  selectedUser: null,

  setSelectedUser: (user: IUser) => set({ selectedUser: user }),
  setShowUserModal: (show: boolean) => set({ showUserModal: show }),
}))
