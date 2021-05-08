<template>
  <div class="add-bookmark pb-6">
    <p class="text-xl text-gray-700 pb-2">新しくリンクを保存</p>
    <TextField
      ref="url"
      label="URL"
      placeholder="www.google.com"
    />
    <TextField
      ref="tags"
      label="タグ"
      placeholder="デザイン"
    />
    <TextArea
      ref="note"
      label="メモ"
      placeholder="ここが役に立った"
    />
    <TextField
      ref="rating"
      label="評価"
      placeholder="3"
    />
    <Button @onClick="addBookmark" label="リンクを保存" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import firebase from '@/plugins/firebase'
import { serverTimestamp } from '@/plugins/firebase'
import { CreateBookmarkDto } from '@/types/Bookmark'
import { Label } from '@/types/Tag'
import Button from '@/components/parts/Button.vue'
import TextField from '@/components/input/TextField.vue'
import TextArea from '@/components/input/TextArea.vue'

export default Vue.extend({
  components: {
    Button,
    TextField,
    TextArea
  },
  methods: {
    addBookmark() {
      const urlRef: any = this.$refs.url
      const url: string = urlRef.get()
      const tagsRef: any = this.$refs.tags
      const tags: Label[] = this.getTagsArray(tagsRef.get())
      const noteRef: any = this.$refs.note
      const note: string = noteRef.get()
      const ratingRef: any = this.$refs.rating
      const rating: number = Number(ratingRef.get())
      const bookmark: CreateBookmarkDto = {
        userId: 'andmohiko',
        createdAt: serverTimestamp,
        updatedAt: serverTimestamp,
        url,
        tags,
        note,
        rating
      }
      const db = firebase.firestore()
      try {
        db.collection('bookmarks')
          .doc()
          .set(bookmark)
      } catch (error) {
        console.log('error in adding bookmark', error)
      }
    },
    getTagsArray(tags: string): Label[] {
      return tags.split(',').sort()
    }
  }
})
</script>

<style scoped lang="scss">
</style>