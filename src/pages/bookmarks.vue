<template>
  <div class="container">
    <h1 class="text-2xl text-gray-700 py-4">ブクマ一覧</h1>
    <BookmarkCard
      v-for="bookmark in bookmarks"
      :key="bookmark.id"
      :bookmark="bookmark"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Bookmark } from '@/types/Bookmark'
import Button from '@/components/parts/Button.vue'
import BookmarkCard from '@/components/parts/BookmarkCard.vue'

export default Vue.extend({
  components: {
    Button,
    BookmarkCard
  },
  async asyncData({ store }) {
    store.dispatch('getBookmarks', store.state.uid)
  },
  computed: {
    userId() {
      return this.$store.state.uid
    },
    bookmarks() {
      return this.$store.state.bookmarks
        .sort((a: Bookmark, b: Bookmark) => (a.createdAt > b.createdAt ? -1 : 1))
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
