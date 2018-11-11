<template>
  <nav>
    <div class="nav-item">
      <router-link to="/"><h3>Home</h3></router-link>
    </div>
  </nav>
</template>
<style scoped>
a,
a:hover,
a:visited {
  text-decoration: none;
  color: black;
}
.nav-item {
  padding-left: 20px;
}
nav {
  display: flex;
  margin-bottom: 30px;
  background-color: rgb(242, 149, 67);
}
</style>
