<template>
  <div>
    <div class="flex flex-col mb-4">
      <label
        v-show="isLabelShow"
        class="text-gray-700 text-left"
        >{{ label }}
      </label>
      <textarea
        v-model="input"
        rows="3"
        :placeholder="placeholder"
        type="text"
        class="form-textarea mt-2 block w-full border py-2 px-3 text-grey-darkest"
      ></textarea>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    label: {
      required: true,
      type: String
    },
    placeholder: {
      required: true,
      type: String
    },
    isLabelShow: {
      default: true,
      type: Boolean
    },
    allowEmpty: {
      default: true,
      type: Boolean
    },
    maxLength: {
      required: false,
      type: Number
    },
    defaultValue: {
      default: '',
      type: String
    }, 
  },
  data() {
    return {
      input: this.defaultValue
    }
  },
  computed: {
    isOverLength(): boolean {
      return !!(this.maxLength && this.input.length > this.maxLength)
    },
    isValid(): boolean {
      if (!this.allowEmpty && this.input === '') return false
      if (this.isOverLength) return false
      return true
    }
  },
  methods: {
    get(): string | null {
      if (!this.isValid) return null
      return this.input
    }
  }
})
</script>

<style scoped lang="scss">
textarea {
  border-radius: 8px;
}
</style>