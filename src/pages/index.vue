<template>
  <div class="container">
    <template v-if="isShowAddModal">
      <ModalBase @close="closeModal">
        <AddTagModal @close="closeModal" />
      </ModalBase>
    </template>
    <header class="header">
      <h1 class="text-2xl text-gray-700 py-4">ほしの本棚</h1>
      <button @click="openModal" class="add-tag">
        <img src="/images/tag.svg" />
        <img src="/images/plus.svg" />
      </button>
    </header>
    <div v-show="!isLogin" class="goole-login">
      <Button @onClick="login" label="googleでログイン" />
    </div>
    <AddBookmark />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AddBookmark from '@/components/input/AddBookmark.vue'
import Button from '@/components/parts/Button.vue'
import AddTagModal from '@/components/modals/AddTagModal.vue'
import ModalBase from '@/components/modals/ModalBase.vue'

export type LocalState = {
  isShowAddModal: boolean
}

export default Vue.extend({
  components: {
    AddBookmark,
    Button,
    ModalBase,
    AddTagModal
  },
  data(): LocalState {
    return {
      isShowAddModal: false
    }
  },
  // async fetch({ store }) {
  //   store.dispatch('getTags', store.state.uid)
  // },
  computed: {
    isLogin() {
      return this.$store.state.isLogin
    }
  },
  methods: {
    login() {
      this.$store.dispatch("loginGoogle")
    },
    openModal() {
      // @ts-ignore
      this.isShowAddModal = true
      // this.$store.dispatch('setIsShowModal', false)
    },
    closeModal() {
      // @ts-ignore
      this.isShowAddModal = false
      // this.$store.dispatch('setIsShowModal', false)
    }
  }
})
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}
.header {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  h1 {
    width: 100%;
    padding-left: 60px;
  }
  .add-tag {
    display: flex;
    justify-content: center;
    border: solid 2px $primary;
    padding: 2px 4px;
    border-radius: 8px;
    width: 60px;
    img {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
