<template>
    <label class="inline-flex items-center text-left mt-2 mr-3">
      <input v-model="input" type="checkbox" class="form-checkbox h-5 w-5 text-orange-600">
      <span class="ml-2 text-gray-900 whitespace-nowrap">{{ label }}</span>
    </label>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    label: {
      required: true,
      type: String
    },
    defaultValue: {
      default: false,
      type: Boolean
    }, 
  },
  data() {
    return {
      input: this.defaultValue || false
    }
  },
  methods: {
    get(): boolean {
      return this.input
    }
  }
})
</script>

<style scoped lang="scss">
</style>