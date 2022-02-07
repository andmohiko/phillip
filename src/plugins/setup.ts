export default async ({ store }: any) => {
  try {
    const uid = store.state.uid
    console.log('setup got uid', Boolean(uid))
    if (!uid) return
    store.dispatch('getTags', store.state.uid)
  } catch (error) {
    console.log('error in setup', error)
  }
}
