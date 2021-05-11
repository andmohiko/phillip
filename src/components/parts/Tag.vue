<template>
  <button
    @click="$emit('onSelect')"
    class="tag"
    :class="{ tagSelected: isSelected }"
  >
    {{ label }}
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    label: {
      required: true,
      type: String
    },
    isSelected: {
      default: false,
      type: Boolean
    }
  }
})
</script>

<style scoped lang="scss">
.tag {
  display: inline-block;
  border: 2px solid #AAAAFF;
  padding: 2px 10px;
  margin: 4px 4px 4px 0;
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
