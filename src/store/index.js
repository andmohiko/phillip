import firebase from '@/plugins/firebase'
import { serverTimestamp } from '@/plugins/firebase'
import { date2string } from '@/utils/date.js'
import createPersistedState from "vuex-persistedstate"

const db = firebase.firestore()
// import "firebase/auth"
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  user: {},
  uid: '',
  tags: [],
  bookmarks: [],
  isLogin: false
}

const actions = {
  loginGoogle ({ dispatch }) {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider).then(result => {
      dispatch('checkLogin')
    }).catch(error => {
      console.log(error)
    })
  },
  async checkLogin ({ commit, dispatch }) {
    await firebase.auth().onAuthStateChanged(user => {
      if (!user) return
      console.log(user)
      commit('setUid', user.uid)
      dispatch('isUser', user)
    })
  },
  async isUser({ commit, dispatch }, user) {
    await db
      .collection('users')
      .doc(user.uid)
      .get()
      .then((doc) => {
        if (!doc.exists) {
          // createUser
          dispatch('createUser', user)
        } else {
          console.log('is already user')
          dispatch('getTags', user.uid)
        }
      })
    commit('setIsLogin', true)
  },
  async createUser({}, user) {
    try {
      db.collection('users')
        .doc(user.uid)
        .set({
          createdAt: serverTimestamp,
          updatedAt: serverTimestamp,
          userId: user.uid,
          username: user.displayName
        })
    } catch (error) {
      console.log('error in creating user', error)
    }
  },
  async getUser ({ commit }, userId) {
    const user = await getUser(userId)
    commit('setUser', {
      userId,
      ...user
    })
  },
  async getBookmarks({ commit }, userId) {
    let bookmarksArray = []
    db.collection('bookmarks')
      .where("userId", "==", userId)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let bookmark = doc.data()
          bookmark.docId = bookmark.id
          bookmark.createdAt = bookmark.createdAt.toDate()
          bookmark.updatedAt = bookmark.updatedAt.toDate()
          bookmark.createdAtString = date2string(bookmark.createdAt)
          bookmarksArray.push(bookmark)
        })
    })
    commit('setBookmarks', bookmarksArray)
  },
  async getTags({ commit }, userId) {
    let tagsArray = []
    db.collection('users')
      .doc(userId)
      .collection('tags')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const tag = doc.data()
          tagsArray.push(tag.label)
        })
    })
    commit('setTags', tagsArray)
  },
  setNotice ({ commit }, notice) {
    commit('setNotice', notice)
  }
}

const mutations = {
  setUser(state, payload) {
    state.user = payload
  },
  setIsLogin(state, payload) {
    state.isLogin = payload
  },
  setUid(state, payload) {
    state.uid = payload
  },
  setBookmarks(state, payload) {
    state.bookmarks = payload
  },
  setTags(state, payload) {
    state.tags = payload
  },
  setNotice(state, payload) {
    state.notice = payload
  },
  setVersion(state, payload) {
    state.version = payload
  },
}

const store = () => {
  return new Vuex.Store({
    state,
    mutations,
    actions,
    plugins: [createPersistedState()]
  })
}

export default store
