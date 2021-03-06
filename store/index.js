import getTimeline from '../assets/timeline.js'

export const state = () => ({
  counter: 0,
  timeline: [],
})

export const mutations = {
  increment(state) {
    state.counter++
  },
  setTimeline(state, timeline) {
    state.timeline = Array.from(timeline)
  },
}

export const actions = {
  async setTimeline(context) {
    const timeline = await getTimeline()
    console.log({ timeline })
    context.commit('setTimeline', timeline)
  },
}
