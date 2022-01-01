<template>
  <ul class="rating-stars">
    <li
      v-for="(starType, index) in stars"
      :key="index"
    >
      <img
        :src="'/images/star_' + starType + '.svg'"
        :width="size"
        :height="size"
      />
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'

export enum starType {
  Full = 'full',
  Empty = 'empty'
}

export type LocalState = {
  stars: starType[]
}

export default Vue.extend({
  props: {
    size: {
      default: 24,
      type: Number
    },
    rating: {
      default: 0,
      type: Number
    }
  },
  data() {
    return {
      stars: Array(5).fill(starType.Empty)
    }
  },
  mounted() {
    this.stars = this.stars.map((_, i) => {
      return i < this.rating ? starType.Full : starType.Empty
    })
  }
})
</script>

<style scoped lang="scss">
.rating-stars {
  display: flex;
}
</style>