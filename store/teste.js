export const state = () => ({
  counter: 10
})

export const mutations = {
  increment(state){
    state.counter++;
  }
}