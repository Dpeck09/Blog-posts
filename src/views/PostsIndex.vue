<script>
import axios from 'axios';
  export default {
    data: function () {
      return {
        message: "I hope that this will work soon",
        posts: []
      };
    },
    created: function () {
      console.log('posting blogs...');
      this.showPosts();
    },
    methods: {
      showPosts: function () {
        axios.get("/posts"). then((response) => {
          console.log(response.data);
          this.posts = response.data;
        });
      },
    },
  };
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p> {{ posts }}</p>
  </div>
</template>

<style></style>