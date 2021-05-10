<template>
  <div class="bookmark">
    <span>
      <a :href="bookmark.url" target="_blank" rel="noopener noreferrer">
        {{ bookmark.url }}
      </a>
    </span>
    <div class="tags">
      <Tag
        v-for="tag in bookmark.tags"
        :key="tag.id"
        :label="tag"
      />
    </div>
    <p
      style="white-space:pre-wrap; word-wrap:break-word;"
      v-text="bookmark.note"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Tag from '@/components/parts/Tag.vue'

export default Vue.extend({
  components: {
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
  align-items: center;
  margin-bottom: 24px;
}
.tags {
  display: flex;
}
.tag {
  display: inline-block;
  border: 2px solid #AAAAFF;
  padding: 4px 12px;
  margin: 4px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: bold;
  color: #888888;
  text-align: center;
}
.tagSelected {
  color: #FFFFFF;
  background: #AAAAFF;
}
</style>
