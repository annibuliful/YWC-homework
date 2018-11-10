<template>
  <div class="container">
    <card
      v-for="(event, index) in listArticles"
      :key="index"
      :title="event.title"
      :link="event.link"
    />
    <button>Add Article</button>
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
  created() {
    const eventName = this.$store.state.selectedEvent.title
    axios
      .get(
        `https://us-central1-ywchomework-3cef1.cloudfunctions.net/getEventArticle?eventName=${eventName}`
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
  width: 80vw;
  margin-left: auto;
  margin-right: auto;
}
</style>
