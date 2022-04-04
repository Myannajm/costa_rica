<template>
<div class="home">
    <h1>Welcome to the Community Page!</h1>
    <h3>This space is for community insights and experiences. Feel free to upload your own photos and comments here!</h3>
  <section class="image-gallery">
    <div class="image" v-for="item in items" :key="item.id">
      <h2>{{item.title}}</h2>
      <img :src="item.path" />
      <h4>{{item.description}}</h4>
      <star-rating @rating-selected ="setRating(item.rating)" 
        v-bind:show-rating = true
        v-bind:round-start-rating = true>
      </star-rating>
    </div>
  </section>

</div>
</template>

<script>
import axios from 'axios';
import StarRating from 'vue-star-rating'
export default{
    name: 'comment-view',
    data(){
        return{
            items: [],
        }
    },
    components: {
      StarRating
    },
    created(){
        this.getItems();
    },
    methods: {
    setRating(rating){
      this.rating = rating;
    },  
    async getItems() {
      try {
        let response = await axios.get("/api/items");
        this.items = response.data;
        return true;
      } catch (error) {
        // console.log(error);
      }
    },
  },
}
</script>
<style scoped>
h1,h3{
    font-family: "Lato", sans-serif;
    text-align: center;
}
h4{
  font-family: "Lato", sans-serif;
}
.image h2 {
  font-family: "Lato", sans-serif;
  font-style: italic;
}
/* Masonry */
*,
*:before,
*:after {
  box-sizing: inherit;
}

.image-gallery {
  column-gap: 1.5em;
}

.image {
  margin: 0 0 1.5em;
  display: inline-block;
  width: 100%;
}

.image img {
  width: 100%;
}

/* Masonry on large screens */
@media only screen and (min-width: 1024px) {
  .image-gallery {
    column-count: 4;
  }
}

/* Masonry on medium-sized screens */
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .image-gallery {
    column-count: 3;
  }
}

/* Masonry on small screens */
@media only screen and (max-width: 767px) and (min-width: 540px) {
  .image-gallery {
    column-count: 2;
  }
}
</style>