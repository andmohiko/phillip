<template>
  <button
    :style="widthStyle"
    class="button max-w-max shadow-sm hover:shadow-md"
    @click="$emit('onClick')"
  >
    {{ label }}
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    label: {
      default: 'ボタン',
      type: String
    },
    width: {
      default: '240px',
      type: String
    }
  },
  data() {
    return {
      widthStyle: {
        width: this.width
      }
    }
  }
})
</script>

<style lang="scss">
.button {
  margin: 0 auto;
  display: block;
  border: solid 1px $primary;
  border-radius: 8px;
  color: $primary;
  padding: 15px 0;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 1px;
}
</style>
