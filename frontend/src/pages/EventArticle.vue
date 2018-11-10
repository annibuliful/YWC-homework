<template> </template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      listArticles: []
    }
  },
  created() {
    const eventName = this.$route.params.title
    axios
      .get(
        `http://localhost:5000/ywchomework-3cef1/us-central1/getEventArticle?eventName=${eventName}`
      )
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
