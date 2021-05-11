import firebase from '@/plugins/firebase'

import { UserId } from './User'
import { Label } from './Tag'
export type Url = string

export interface Bookmark {
  userId: UserId
  createdAt: Date
  updatedAt: Date
  createdAtString: string
  url: Url
  tags: Label[]
  note: string
  rating: number
}

export interface CreateBookmarkDto {
  userId: Bookmark['userId']
  createdAt: firebase.firestore.FieldValue
  updatedAt: firebase.firestore.FieldValue
  url: Bookmark['url']
  tags: Bookmark['tags']
  note: Bookmark['note']
  rating: Bookmark['rating']
}
