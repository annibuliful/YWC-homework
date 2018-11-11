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
      <button class="btn" @click="addArticle">add Article</button>
      <h2 v-if="created">Created!</h2>
      <h5 v-if="isNotInput" style="color: red">Please Input all!!!!!!!</h5>
      <h5 v-if="error" style="color: red">Service Unavailable!!!</h5>
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
      link: '',
      created: false,
      isNotInput: false,
      error: false
    }
  },
  methods: {
    addArticle: async function() {
      if (this.title !== '' && this.link !== '') {
        try {
          const data = await axios.post(
            'http://localhost:5000/ywchomework-3cef1/us-central1/addArticle',
            qs.stringify({
              title: this.title,
              link: this.link,
              eventName: this.$store.state.selectedEvent.title
            })
          )
          this.title = ''
          this.link = ''
          this.created = true
        } catch (e) {
          console.log(e)
          this.error = true
        }
      } else {
        this.isNotInput = true
      }
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
.btn {
  margin-top: 50px;
  border-radius: 10px;
  border-color: rgb(242, 149, 67);
  background-color: rgb(242, 149, 67);
  color: white;
  font-size: 28px;
  height: 40px;
  width: 100%;
}
</style>
