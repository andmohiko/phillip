<template>
  <div class="container">
    <div class="add-tag">
      <p class="text-xl text-gray-700 pb-2">新しくタグを追加</p>
      <TextField
        ref="tag"
        label="タグ"
        placeholder="デザイン"
      />
      <Button @onClick="addTag" label="タグを追加" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '@/components/parts/Button.vue'
import TextField from '@/components/input/TextField.vue'

export default Vue.extend({
  components: {
    Button,
    TextField
  },
  data() {
    return {
      url: 'www.google.com'
    }
  },
  methods: {
    addTag() {
      const tagRef: any = this.$refs.tag
      const tag: string = tagRef.get()
      console.log(tag)
    }
  }
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
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
