<template>
  <button
    :style="widthStyle"
    class="uppercase rounded-full max-w-max shadow-sm hover:shadow-md button"
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
  border: solid 1px #69a5ff;
  color: #69a5ff;
  padding: 15px 0;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 1px;
}
</style>
