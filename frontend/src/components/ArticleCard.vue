<template>
  <div class="card">
    <h3 class="text-center">{{ title }}</h3>
    <p class="text-center"><a :href="link">Link</a></p>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>
<style scoped>
.card {
  width: 25%;
  margin: 10px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.3s ease-in-out;
}
.text-center {
  text-align: center;
}

.card:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}
</style>
