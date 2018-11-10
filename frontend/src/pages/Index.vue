<template>
  <div>
    <vue-event-calendar
      title="Tech Event Calendar"
      :events="allEvents"
      @day-changed="onDayChange"
    >
      <div
        @click="selectedEvent(event)"
        v-for="(event, index) in nearDays"
        class="event-item"
        :key="index"
      >
        <div class="wrapper">
          <h3 class="title" v-if="event.title.length < 40">
            {{ event.title }}
          </h3>
          <h3 class="title" v-if="event.title.length > 40">
            {{ event.title.substr(0, 55) }}
          </h3>
        </div>
      </div>
    </vue-event-calendar>
  </div>
</template>
<script>
export default {
  computed: {
    nearDays() {
      return this.$store.state.nearDays
    },
    allEvents() {
      return this.$store.state.allEvents
    }
  },
  methods: {
    onDayChange: function({ date, events }) {
      this.$store.commit('getSomeEventsByDate', date)
    },
    selectedEvent: function(event) {
      this.$store.commit('selectedEvent', event)
      this.$router.push('/articles')
    }
  },
  created() {
    this.$store.commit('getAllEvents')
  }
}
</script>
<style scoped>
.add-info {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  background-color: #4fc3f7;
  border-color: #4fc3f7;
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
  cursor: pointer;
  width: 60%;
}

.title {
  line-height: 0px;
}
</style>
