<template>
  <div class="container">
    <div style="width: 100%;">
      <h3 style="text-align: center">{{ selectedEvent.title }}</h3>
    </div>
    <div>
      <h5>Title:</h5>
      <input type="text" v-model="title" />
    </div>
    <div>
      <h5>Link:</h5>
      <input type="text" v-model="link" />
    </div>
    <div style="width: 100%;">
      <button @click="addArticle">add Article</button>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import qs from 'qs'
export default {
  computed: {
    selectedEvent: function() {
      return this.$store.state.selectedEvent
    }
  },
  data() {
    return {
      title: '',
      link: ''
    }
  },
  methods: {
    addArticle: async function() {
      const data = await axios.post(
        'http://localhost:5000/ywchomework-3cef1/us-central1/addArticle',
        qs.stringify({
          title: this.title,
          link: this.link,
          eventName: this.$store.state.selectedEvent.title
        })
      )
      console.log(data)
    }
  }
}
</script>
<style scoped>
h5 {
  margin-block-end: 0;
}
.container {
  display: flex;
  flex-wrap: wrap;
}
input {
  border-radius: 10px;
  width: 100%;
  height: 25px;
  font-size: 20px;
}
.container > div {
  width: 60%;
  margin-left: 20%;
  margin-right: 20%;
}
</style>
