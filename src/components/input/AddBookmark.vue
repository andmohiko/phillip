<template>
  <div class="add-bookmark pb-6">
    <p class="text-xl text-gray-700 pb-2">新しくリンクを保存</p>
    <TextField
      ref="url"
      label="URL"
      placeholder="www.google.com"
    />
    <span v-if="flashMessage" class="flashMessage">{{ flashMessage }}</span>
    <TagsSelecter
      ref="tags"
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
      width="120px"
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
import TagsSelecter from '@/components/parts/TagsSelecter.vue'

export type LocalState = {
  flashMessage: string
}

export default Vue.extend({
  components: {
    Button,
    TextField,
    TextArea,
    TagsSelecter
  },
  data() {
    return {
      flashMessage: ''
    }
  },
  computed: {
    userId() {
      return this.$store.state.uid
    }
  },
  methods: {
    addBookmark() {
      const urlRef: any = this.$refs.url
      const url: string = urlRef.get()
      const tagsRef: any = this.$refs.tags
      const tags: Label[] = tagsRef.get().sort()
      const noteRef: any = this.$refs.note
      const note: string = noteRef.get()
      const ratingRef: any = this.$refs.rating
      const rating: number = Number(ratingRef.get())
      if (!url) {
        this.flashMessage = 'URLを入力してください'
        return
      }
      const urlRegex = /https?:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+/g
      if (!url.match(urlRegex)) {
        this.flashMessage = 'URLではないものが入力されています'
        return
      }
      const bookmark: CreateBookmarkDto = {
        userId: this.userId,
        createdAt: serverTimestamp,
        updatedAt: serverTimestamp,
        url,
        tags,
        note,
        rating
      }
      if (!this.userId) {
        console.log('not login')
        return
      }
      const db = firebase.firestore()
      try {
        db.collection('bookmarks')
          .doc()
          .set(bookmark)
      } catch (error) {
        console.log('error in adding bookmark', error)
      }
    }
  }
})
</script>

<style scoped lang="scss">
.flashMessage {
  display: flex;
  text-align: left;
  color: #FF6666;
  margin-bottom: 4px;
}
</style>