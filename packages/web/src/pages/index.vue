<script>
export default {
  head() {
    return {
      title: "Home - Encryptr"
    }
  },
  data() {
    return {
      message: "bruj",
      count: 1
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
</script>

<template>
  <div>
    <Brand variant="logo" />
    <h1>hellow world</h1>
    <NuxtLink to="/home">Home page</NuxtLink>
    <br />

    <h1>{{ message }}</h1>
    <p>count is: {{ count }}</p>
    <input type="text" v-model="message">
    <button @click="increment">click</button>
    <!-- <span>Message: {{ message }}</span> -->
  </div>
</template>

<style lang="scss" scoped>
button {
  background: red;
}
</style>