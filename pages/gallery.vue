<template>
  <div @click="removeCss">
    <div class="header-img">
      <span class="header-text">Gallery</span>
    </div>
    <div class="container">
      <div class="row breadcrumb" style="background: transparent;">
        <nuxt-link to="/" class="link">Home</nuxt-link>
        <i class="fa fa-circle" aria-hidden="true"></i>
        <ul>
          <li class="bullet">Gallery</li>
        </ul>
      </div>
    </div>
    <div class="container mb-5">
      <div class="row">
        <div class="col-12 col-sm-4 asd" v-for="(x,y) in imageURLs" :key="y" style="padding:0px;">
          <img :src="x" class="imageRes" v-bind:id="y" @click="getId" />
        </div>
      </div>
    </div>
    <Login v-if="showLogin" />
  </div>
</template>

<script>
import Login from '@/components/Login.vue'
export default {
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      inquiry: '',
      imageURLs: [],
      imageObj: {}
    }
  },
  components: {
    Login
  },
  computed: {
    showLogin: {
      get: function() {
        return this.$store.state.showLogin
      },
      set: function(newName) {}
    }
  },
  mounted() {
    this.getGalleryImages()
  },
  methods: {
    getGalleryImages: function() {
      this.$store.dispatch('getGalleryImages').then(res => {
        // console.log(res.data)
        const imageObj = {}

        res.data.map(item => {
          this.imageURLs = item.gallery_images.split(',')
        })
      })
    },
    getId: function(event) {
      $(event.target).addClass('imageTransform')
      $(event.target).css('opacity', 1)
      $(event.target)
        .parent()
        .siblings()
        .children()
        .removeClass('imageTransform')
      $(event.target)
        .parent()
        .siblings()
        .children()
        .css('opacity', 0.2)
    },
    removeCss: function(event) {
      $(event.target)
        .children()
        .children()
        .children()
        .children()
        .removeClass('imageTransform')
      $(event.target)
        .children()
        .children()
        .children()
        .children()
        .css('opacity', 1)
    }
  }
}
</script>

<style scoped>
.header-img {
  height: 50vh;
  background-image: linear-gradient(
      to right bottom,
      rgba(128, 128, 128, 0.65),
      rgba(0, 0, 0, 0.65)
    ),
    url('~static/images/body2.jpg');
  background-size: cover;
  background-position: center;
}

.header-text {
  position: relative;
  font-size: 3.5rem;
  font-weight: 600;
  color: white;
  top: 20vh;
  display: block;
  text-align: center;
}

@media (max-width: 37.5em) {
  .header-text {
    font-size: 2.5rem;
  }
}

.breadcrumb {
  padding: 0;
  padding-top: 20px;
  color: white;
}

.link {
  text-decoration: none;
  color: white;
}

.link:hover {
  color: #f1be03;
}

.fa {
  margin-left: 10px;
  font-size: 0.5rem;
  padding-top: 8px;
  margin-right: 10px;
}

.imageRes {
  width: 100%;
  height: 250px;
  object-fit: cover;
  position: relative;
  transition: all 0.2s ease-in;
}

.imageRes:hover {
  cursor: pointer;
}

.imageTransform {
  transform: scale(1.5);
  z-index: 1;
  object-fit: contain;
}

@media (max-width: 37.5em) {
  .imageTransform {
    transform: scale(1.1);
    padding: 5px;
  }
}

@media (min-width: 37.5em) and (max-width: 75em) {
  .imageRes {
    height: 150px;
  }
  .imageTransform {
    transform: scale(1.4);
  }
}
</style>
