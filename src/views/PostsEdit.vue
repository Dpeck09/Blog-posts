<script>
  // make proper request to backend
  // prefill in data about this recipe
  import axios from "axios";
  export default {
    data: function () {
      return {
        editPostsParams: {},
        errors: [],
      };
    },
    methods: {
      submit: function () {
        axios
          .patch(`/posts/${this.$route.params.id}.json`, this.editPostsParams)
          .then((response) => {
            console.log(response.data);
            this.$router.push("/posts");
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
      },
    },
    created: function() {
      axios.get(`/posts/${this.$route.params.id}.json`).then(response => {
        console.log(response.data);
        this.editPostsParams = response.data;
      })
    }
  };
</script>


<template>
  <div class="posts-edit">
    <form v-on:submit.prevent="submit()">
      <h1>Edit Post</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Title:</label>
        <input type="text" v-model="editRecipeParams.title" />
      </div>
      <div>
        <label>Body:</label>
        <input type="text" v-model="editRecipeParams.body" />
      </div>
      <div>
        <label>Image Url:</label>
        <input type="text" v-model="editRecipeParams.image" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>