<template>
  <div class="add-tag pb-6">
    <p class="text-xl text-gray-700 pb-2">新しくタグを追加</p>
    <TextField
      ref="tagLabel"
      label="タグ"
      placeholder="デザイン"
    />
    <span v-if="flashMessage" class="flashMessage">{{ flashMessage }}</span>
    <Button @onClick="addTag" label="タグを追加" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import firebase from '@/plugins/firebase'
import { serverTimestamp } from '@/plugins/firebase'
import { CreateTagDto } from '@/types/Tag'
import Button from '@/components/parts/Button.vue'
import TextField from '@/components/input/TextField.vue'

export type LocalState = {
  flashMessage: string
}

export default Vue.extend({
  components: {
    Button,
    TextField
  },
  data() {
    return {
      flashMessage: ''
    }
  },
  computed: {
    userId() {
      return this.$store.state.uid
    },
    tags() {
      return this.$store.state.tags
    }
  },
  methods: {
    addTag() {
      const tagLabelRef: any = this.$refs.tagLabel
      const label: string = tagLabelRef.get()
      if (!label) {
        this.flashMessage = 'タグを入力してください'
        return
      }
      if (this.tags.includes(label)) {
        this.flashMessage = 'すでに追加済みのタグです'
        return
      }
      const tag: CreateTagDto = {
        label,
        createdAt: serverTimestamp,
        updatedAt: serverTimestamp,
        bookmarks: 0
      }
      const db = firebase.firestore()
      try {
        db.collection('users')
          .doc(this.userId)
          .collection('tags')
          .add(tag)
        let tags = this.tags.slice()
        tags.push(label)
        this.$store.commit('setTags', tags)
        this.clearInputs()
        this.flashMessage = 'タグを追加しました'
      } catch (error) {
        console.log('error in adding tag', error)
      }
    },
    clearInputs() {
      const tagLabelRef: any = this.$refs.tagLabel
      tagLabelRef.clearField()
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