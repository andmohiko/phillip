<template>
  <div class="footer">
    <nav>
      <ul>
        <li>
          <nuxt-link to="/">
            <div class="menu-item">
              <div class="menu-icon">
                <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path v-if="routename === 'index'" d="M21.6667 16.6667V5L6.66669 23.3333H18.3334V35L33.3334 16.6667H21.6667Z" stroke="#565ac2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path v-else d="M21.6667 16.6667V5L6.66669 23.3333H18.3334V35L33.3334 16.6667H21.6667Z" stroke="#4a5568d9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span class="menu-title" :class="{ textBlue: routename === 'index' }">トップ</span>
            </div>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/bookmarks">
            <div class="menu-item">
              <div class="menu-icon">
                <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path v-if="routename === 'bookmarks'" d="M1 16.5H21M1 1.5H21H1ZM1 6.5H21H1ZM1 11.5H21H1Z" stroke="#565ac2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path v-else d="M1 16.5H21M1 1.5H21H1ZM1 6.5H21H1ZM1 11.5H21H1Z" stroke="#4a5568d9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span class="menu-title" :class="{ textBlue: routename === 'bookmarks' }">一覧</span>
            </div>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/mypage">
            <div class="menu-item">
              <div class="menu-icon">
                <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path v-if="routename === 'mypage'"  d="M26.6667 11.6667C26.6667 15.3486 23.6818 18.3333 20 18.3333C16.3181 18.3333 13.3333 15.3486 13.3333 11.6667C13.3333 7.98477 16.3181 5 20 5C23.6818 5 26.6667 7.98477 26.6667 11.6667Z" stroke="#565ac2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path v-else  d="M26.6667 11.6667C26.6667 15.3486 23.6818 18.3333 20 18.3333C16.3181 18.3333 13.3333 15.3486 13.3333 11.6667C13.3333 7.98477 16.3181 5 20 5C23.6818 5 26.6667 7.98477 26.6667 11.6667Z" stroke="#4a5568d9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path v-if="routename === 'mypage'"  d="M20 23.3333C13.5567 23.3333 8.33334 28.5567 8.33334 35H31.6667C31.6667 28.5567 26.4433 23.3333 20 23.3333Z" stroke="#565ac2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path v-else  d="M20 23.3333C13.5567 23.3333 8.33334 28.5567 8.33334 35H31.6667C31.6667 28.5567 26.4433 23.3333 20 23.3333Z" stroke="#4a5568d9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span class="menu-title" :class="{ textBlue: routename === 'mypage' }">マイページ</span>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>

export default {
  computed: {
    user() {
      return this.$store.state.user
    },
    routename() {
      return this.$route.name
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.footer {
  height: 70px;
  width: 100%;
  padding: 0 30px;
  border-top: solid 1px #4a55683a;
  background-color: $white;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  nav {
    width: 450px;
  }
  ul {
    display: flex;
    justify-content: space-between;
  }
  li {
    // margin-left: 4rem;
    list-style-type: none;
  }
}
.menu-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 4.5rem;
}
.menu-icon {
  height: 30px;
  width: 30px;
  margin-bottom: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu-title {
  font-size: 10px;
  font-weight: 600;
  color: #4a5568d9;
}
.textBlue {
  color: $primary-light;
}
.coming-soon {
  font-size: 10px;
  color: #a8b1c2d9;
}
</style>