<template>
  <!-- <div>{{ allEvents }}</div> -->
  <vue-event-calendar title="Tech Event Calendar" :events="allEvents">
    <div v-for="(event, index) in allEvents" class="event-item" :key="index">
      <div class="wrapper">
        <h3 class="title">{{ event.title }}</h3>
        <p class="time">{{ event.date }}</p>
        <p class="desc">{{ event.categories }}</p>
      </div>
    </div>
  </vue-event-calendar>
</template>
<script>
export default {
  computed: {
    allEvents() {
      return store.state.allEvents
    }
  },
  data() {
    return {
      demoEvents: [
        {
          date: '2016/11/12', // Required
          title: 'Foo' // Required
        },
        {
          date: '2016/12/15',
          title: 'Bar',
          desc: 'description',
          customClass: 'disabled highlight' // Custom classes to an calendar cell
        }
      ]
    }
  },
  computed: {
    allEvents() {
      return this.$store.state.allEvents
    }
  },
  created() {
    this.$store.commit('getAllEvents')
  }
}
</script>
