<template>
  <div class="container">
    <h1 class="text-2xl text-gray-700 pb-4">ほしの本棚</h1>
    <AddTag />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AddTag from '@/components/input/AddTag.vue'

export default Vue.extend({
  components: {
    AddTag
  },
  methods: {
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
