<template>
  <div class="rating">
    <ul class="rating-star-ul">
      <li
        v-for="(starType, index) in stars"
        :key="index"
        class="rating-star-container"
        @click="rate(index)"
      >
        <img
          :src="'/images/star_' + starType + '.svg'"
          :width="size"
          :height="size"
          class="rating-star-container"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export enum starType {
  Full = 'full',
  Empty = 'empty'
}

export type LocalState = {
  flashMessage: string
  rating: number
  stars: starType[]
}

export default Vue.extend({
  props: {
    size: {
      default: 24,
      type: Number
    }
  },
  data() {
    return {
      flashMessage: '',
      rating: 0,
      stars: Array(5).fill(starType.Empty)
    }
  },
  computed: {
  },
  methods: {
    rate(index: number) {
      this.stars = this.stars.map((_, i) => {
        return i <= index ? starType.Full : starType.Empty
      })
      // Ratingの数字も決まる
      this.rating = this.stars.filter(star => star === starType.Full).length
      return this.stars
    },
    get(): number | null {
      if (this.rating === 0) return null
      return this.rating
    },
    clearField() {
      this.rating = 0
      this.stars = Array(5).fill(starType.Empty)
    }
  }
})
</script>

<style scoped lang="scss">
.flashMessage {
  display: flex;
  text-align: left;
  color: #FF6666;
  margin-bottom: 4px;
}
.rating-star {
  &-ul {
    display: flex;
  }
}
</style>