<template>
  <div class="add-bookmark pt-2 pb-6">
    <p class="text-xl text-gray-700 pb-2">新しくリンクを保存</p>
    <TextField
      ref="url"
      label="URL"
      placeholder="www.google.com"
    />
    <span v-if="flashErrorMessage" class="flashErrorMessage">{{ flashErrorMessage }}</span>
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
    <div class="submit">
      <span v-if="flashSuccessMessage" class="flashSuccessMessage">{{ flashSuccessMessage }}</span>
      <Button @onClick="addBookmark" label="リンクを保存" />
    </div>
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
  flashErrorMessage: string,
  flashSuccessMessage: string
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
      flashErrorMessage: '',
      flashSuccessMessage: ''
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
        this.flashErrorMessage = 'URLを入力してください'
        this.flashSuccessMessage = ''
        return
      }
      const urlRegex = /https?:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+/g
      if (!url.match(urlRegex)) {
        this.flashErrorMessage = 'URLではないものが入力されています'
        this.flashSuccessMessage = ''
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
        this.clearInputs()
        this.flashErrorMessage = ''
        this.flashSuccessMessage = 'URLを保存しました'
      } catch (error) {
        console.log('error in adding bookmark', error)
      }
    },
    clearInputs() {
      const urlRef: any = this.$refs.url
      urlRef.clearField()
      const tagsRef: any = this.$refs.tags
      tagsRef.clearSelected()
      const noteRef: any = this.$refs.note
      noteRef.clearField()
      const ratingRef: any = this.$refs.rating
      ratingRef.clearField()
      urlRef.clearField()
    }
  }
})
</script>

<style scoped lang="scss">
.flashErrorMessage {
  display: flex;
  text-align: left;
  color: #FF6666;
  margin-bottom: 4px;
}
.submit {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.flashSuccessMessage {
  display: flex;
  color: #FF6666;
  margin-bottom: 8px;
}
</style>