<template>
  <div class="bookmark shadow-lg rounded-lg">
    <div class="bookmark-header">
      <a
        :href="bookmark.url"
        target="_blank"
        rel="noopener noreferrer"
        class="bookmark-link"
      >
        {{ bookmark.url }}
      </a>
      <p class="bookmark-date">{{ bookmark.createdAtString.slice(0,10) }}</p>
    </div>
    <div class="rating">
      <Rating
        :rating="bookmark.rating"
        size="16px"
      />
    </div>
    <div class="tags">
      <Tag
        v-for="tag in bookmark.tags"
        :key="tag.id"
        :label="tag"
      />
    </div>
    <p
      v-text="bookmark.note"
      class="bookmark-note"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Rating from '@/components/parts/Rating.vue'
import Tag from '@/components/parts/Tag.vue'

export default Vue.extend({
  components: {
    Rating,
    Tag
  },
  props: {
    bookmark: {
      required: true
    }
  }
})
</script>

<style scoped lang="scss">
.bookmark {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 16px;
  width: 100%;
  padding: 16px;
  background-color: $white;
  border: 1px solid #EEEEFF;
  line-height: 20px;
  &-header {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  &-link {
    word-break: break-all;
    text-align: left;
  }
  &-date {
    color: $text-gray;
    margin-left: 8px;
  }
  &-note {
    text-align: left;
    white-space: pre-wrap;
    word-wrap: break-word;
    font-size: 16px;
    line-height: 24px;
    color: $text-black;
  }
}
.rating {
  margin-top: 8px;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  margin: 4px 0;
}
</style>
