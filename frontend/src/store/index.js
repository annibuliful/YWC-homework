import Vue from 'vue'
import Vuex from 'vuex'
import service from '@/services/index'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    allEvents: [],
    nearDays: []
  },
  mutations: {
    getSomeEventsByDate (state, date) {
      const filtered = state.allEvents.filter(value => {
        return value.date === date
      })
      state.nearDays = filtered
    },
    async getAllEvents (state) {
      const data = await service()
      const allEvents = data.map(value => {
        return {
          title: value.title,
          date: `${value.start.year}/${value.start.month}/${value.start.date}`,
          endDate: value.end,
          location: value.location,
          topics: value.topics
        }
      })

      state.allEvents = allEvents
    }
  }
})

export default store
