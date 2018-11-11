<template>
  <div class="container">
    <div style="width: 100%;">
      <h1 style="text-align: center">Authentication before add a article</h1>
      <button class="btn" @click="auth">Google Login</button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  data() {
    return {}
  },
  methods: {
    auth: function() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(data => {
          this.$router.push('/add')
        })
    }
  }
}
</script>
<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  width: 40vw;
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
