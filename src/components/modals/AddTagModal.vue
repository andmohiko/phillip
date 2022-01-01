<template>
  <div class="flex flex-col overflow-auto">
    <div class="modal-header">
      <h2 class="text-xl py-2 border-b">新しくタグを追加</h2>
    </div>
    <TextField
      ref="tagLabel"
      label="タグ"
      placeholder="デザイン"
    />
    <span v-if="flashMessage" class="flashMessage">{{ flashMessage }}</span>
    <div class="modal-footer border-t pt-2">
      <div class="submit">
        <Button @onClick="submit" label="登録する" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import firebase from '@/plugins/firebase'
import { serverTimestamp } from '@/plugins/firebase'
import { CreateTagDto } from '@/types/Tag'

import TextField from '@/components/input/TextField.vue'
import Button from '@/components/parts/Button.vue'

export type LocalState = {
  flashMessage: string
}

export default Vue.extend({
  components: {
    Button,
    TextField,
  },
  data(): LocalState {
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
    submit() {
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
        this.onClose()
      } catch (error) {
        console.log('error in adding tag', error)
      }
    },
    onClose() {
      this.$emit('close')
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
