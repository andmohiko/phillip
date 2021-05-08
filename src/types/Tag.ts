import firebase from '@/plugins/firebase'

export type Label = string

export interface Tag {
  label: Label
  createdAt: Date
  updatedAt: Date
  bookmarks: number
}

export interface CreateTagDto {
  label: Tag['label']
  createdAt: firebase.firestore.FieldValue
  updatedAt: firebase.firestore.FieldValue
  bookmarks: Tag['bookmarks']
}
