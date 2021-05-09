<template>
  <div class="tags-selecter pb-6">
    <p class="text-gray-700 text-left">タグ一覧</p>
    <div>
      <Tag
        v-for="(tag, i) in tags"
        :key="tag.id"
        :label="tag"
        :isSelected="isSelectedArray[i]"
        @onSelect="selectTag(i)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Label } from '@/types/Tag'
import Tag from '@/components/parts/Tag.vue'

export type LocalState = {
  isSelectedArray: boolean[]
}

export default Vue.extend({
  components: {
    Tag
  },
  data(): LocalState {
    return {
      isSelectedArray: []
    }
  },
  mounted() {
    this.isSelectedArray = new Array(this.tags.length).fill(false);
  },
  computed: {
    tags() {
      return this.$store.state.tags
    }
  },
  methods: {
    selectTag(idx: number) {
      this.isSelectedArray = this.isSelectedArray.map((flag, i) => {
        if (i === idx) {
          return !flag
        }
        return flag
      })
    },
    get(): Label[] {
      return this.tags.filter((tag, i: number) => this.isSelectedArray[i])
    }
  }
})
</script>

<style scoped lang="scss">
.tag {
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