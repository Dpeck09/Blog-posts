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
        axios.get('/posts.json').then((response) => {
          console.log(response.data);
          this.posts = response.data;
        })
      }
    },
  };
</script>

<template>
  <!-- <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="post in posts">
    <p>{{ post.image }}</p> 
   
    </div>
  </div> -->

<div class="card" style="width: 18rem;">
  <img src="{{ post.image }}" class="card-img-top" alt="...">
  <div v-for="post in posts" class="card-body">
    <p> {{ post.title }}</p>
    <p> {{ post.body }}</p>
  </div>
</div>

    
    
     
</template>




<style>

.card {
  margin: 5, 10, 15, 15;
  width: 100%;
}

</style>