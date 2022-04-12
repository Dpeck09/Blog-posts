<script>
  import axios from 'axios'
  export default {
    data: function () {
      return {
        message: "Welcome to the show!",
        posts: {}
      };
    },
    created: function () {
      this.showPosts();
    },
    methods: {
      showPosts: function() {
        console.log('showing posts...')
        // get data from rails show action
        console.log(this.$route.params.id);
        axios.get(`/posts/${this.$route.params.id}.json`).then(response => {        
          console.log(response.data);
          this.post = response.data;
        })
      }
    },
  };
</script>

<template>
  <div class="posts-show">
    <h1>{{ message }}</h1>
    <p>id: {{ post.id }} </p>
    <p>title: {{ post.title }} </p>
    <p>image_url: {{ post.image_url }} </p>
    <img v-bind:src="post.image_url">
    <p>user_id: {{ post.user_id }} </p>
    <a href="/posts">All posts</a>
  </div>
</template>

<style></style>