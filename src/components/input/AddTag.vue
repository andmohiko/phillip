<template>
  <div class="add-tag">
    <p class="text-xl text-gray-700 pb-2">新しくタグを追加</p>
    <TextField
      ref="tagLabel"
      label="タグ"
      placeholder="デザイン"
    />
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

export default Vue.extend({
  components: {
    Button,
    TextField
  },
  methods: {
    addTag() {
      const tagLabelRef: any = this.$refs.tagLabel
      const label: string = tagLabelRef.get()
      const tag: CreateTagDto = {
        label,
        createdAt: serverTimestamp,
        updatedAt: serverTimestamp,
        bookmarks: 0
      }
      const db = firebase.firestore()
      try {
        db.collection('users')
          .doc('andmohiko')
          .collection('tags')
          .add(tag)
      } catch (error) {
        console.log('error in adding tag', error)
      }
    }
  }
})
</script>

<style scoped lang="scss">
</style>