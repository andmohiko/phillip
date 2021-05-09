<template>
  <div class="add-bookmark pb-6 border border-blue-400">
    <p class="text-l pb-2">タグ一覧</p>
    {{ tags }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    tags() {
      return this.$store.state.tags
    }
  }
})
</script>

<style scoped lang="scss">
</style>