export type Uid = string
export type UserId = Uid

export interface User {
  userId: UserId
  createdAt: Date
  updatedAt: Date
  username: string
}
