<template>
  <div class="container">
    <card
      v-for="(event, index) in listArticles"
      :key="index"
      :title="event.title"
      :link="event.link"
    />
    <button class="btn" @click="linkToAdd">Add Article</button>
  </div>
</template>
<script>
import axios from 'axios'
import CardComponent from '@/components/ArticleCard'
export default {
  components: {
    card: CardComponent
  },
  data() {
    return {
      listArticles: []
    }
  },
  methods: {
    linkToAdd: function() {
      this.$router.push('/auth')
    }
  },
  created() {
    const eventName = this.$store.state.selectedEvent.title
    axios
      .get(
        `http://localhost:5000/ywchomework-3cef1/us-central1/getEventArticle?eventName=${eventName}`
      )
      .then(({ data }) => {
        console.log(data)
        this.listArticles = data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 80vw;
  margin-left: auto;
  margin-right: auto;
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
