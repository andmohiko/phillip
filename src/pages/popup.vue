<template>
  <div class="container">
    <div class="add-bookmark pt-2 pb-6">
    <p class="text-xl text-gray-700 pb-2">新しくリンクを保存</p>
    <TagsSelecter
      ref="tags"
      :is-popup="true"
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '@/components/parts/Button.vue'
import TextField from '@/components/input/TextField.vue'
import TextArea from '@/components/input/TextArea.vue'
import TagsSelecter from '@/components/parts/TagsSelecter.vue'

export default Vue.extend({
  components: {
    Button,
    TextField,
    TextArea,
    TagsSelecter
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin
    }
  },
  methods: {
    login() {
      this.$store.dispatch("loginGoogle")
    },
  }
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
