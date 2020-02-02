<template>
  <div>
    <div class="header-img">
      <span class="header-text">Blog</span>
    </div>
    <div class="container">
      <div class="row breadcrumb" style="background: transparent;">
        <nuxt-link to="/" class="link">Home</nuxt-link>
        <i class="fa fa-circle" aria-hidden="true"></i>
        <ul>
          <li class="bullet">Blog</li>
        </ul>
      </div>

      <div class="nav row">
        <ul>
          <li @click="blogAll" id="0">
            <button
              id="allblog"
              :class="activeCategory === 'allblog' ? 'btc' : 'bta'"
            >
              All
            </button>
          </li>
          <li v-for="(item, i) in catList" :key="i" class="cssToggle">
            <button
              v-bind:id="item.id"
              style="margin-right:5px;"
              class="bta"
              @click="getBlogsByCategory(item.id)"
            >
              {{ item.category_name }}
            </button>
          </li>
        </ul>
      </div>
      <div class="row" v-if="blogList.results">
        <div
          class="col-12 col-sm-6 col-lg-4 col-blog"
          v-for="(item, i) in blogList.results"
          :key="i"
          style="padding: 15px!important; color: white; margin-bottom: 20px;"
        >
          <img :src="item.blog_img" class="img_responsive" />
          <p style="font-size: 1rem">
            <span v-for="(a, b) in 20" :key="b">{{ item.title[b] }}</span>
            <span style="font-size: 1.6rem; line-height: 0rem">...</span>
          </p>
          <p style="font-size: 0.8rem">
            Posted
            <span v-for="(i, j) in 10" :key="j">{{ item.posted_on[j] }}</span>
            <i
              class="fa fa-comments"
              style="color: #f1be03; font-size: 0.9rem; margin-right: 5px"
            ></i>
            {{ item.blog_comments.length }}
            <i
              class="fa fa-heart"
              style="color: #f1be03; font-size: 0.9rem; margin-right: 5px"
            ></i>
            {{ item.likes.length }}
          </p>
          <p
            style="margin-top: 15px; font-size: 1rem; color: grey; margin-bottom: 15px;"
          >
            <span v-for="(x, y) in 140" :key="y">{{ item.content[y] }}</span>
            <span style="font-size: 2rem; line-height: 0rem">...</span>
          </p>
          <nuxt-link
            :to="{ name: 'blog-id', params: { id: item.slug } }"
            style="text-decoration: none; color: #f1be03; font-size: 1rem;"
          >
            Read More
            <img
              src="~static/images/long-arrow-pointing-up-yellow.png"
              style="width: 20px; margin-left: 10px;"
            />
          </nuxt-link>
        </div>
      </div>
      <div class="row" v-else>
        <div
          class="col-12 col-sm-6 col-lg-4 col-blog"
          v-for="(item, i) in blogList"
          :key="i"
          style="padding: 15px!important; color: white; margin-bottom: 20px;"
        >
          <img :src="item.blog_img" class="img_responsive" />
          <p style="font-size: 1rem">
            <span v-for="(a, b) in 20" :key="b">{{ item.title[b] }}</span>
            <span style="font-size: 1.6rem; line-height: 0rem">...</span>
          </p>
          <p style="font-size: 0.8rem">
            Posted
            <span v-for="(i, j) in 10" :key="j">{{ item.posted_on[j] }}</span>
            <i
              class="fa fa-comments"
              style="color: #f1be03; font-size: 0.9rem; margin-right: 5px"
            ></i>
            {{ item.blog_comments.length }}
            <i
              class="fa fa-heart"
              style="color: #f1be03; font-size: 0.9rem; margin-right: 5px"
            ></i>
            {{ item.likes.length }}
          </p>
          <p
            style="margin-top: 15px; font-size: 1rem; color: grey; margin-bottom: 15px;"
          >
            <span v-for="(x, y) in 140" :key="y">{{ item.content[y] }}</span>
            <span style="font-size: 2rem; line-height: 0rem">...</span>
          </p>
          <nuxt-link
            :to="{ name: 'blog-id', params: { id: item.slug } }"
            style="text-decoration: none; color: #f1be03; font-size: 1rem;"
          >
            Read More
            <img
              src="~static/images/long-arrow-pointing-up-yellow.png"
              style="width: 20px; margin-left: 10px;"
            />
          </nuxt-link>
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <button @click="getPrevList" class="post_btn" id="btn-prev">
          <i class="fabtn fa fa-angle-double-left" aria-hidden="true"></i>
        </button>
        <button @click="getNextList" class="post_btn" id="btn-next">
          <i class="fabtn fa fa-angle-double-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <Login v-if="showLogin" />
  </div>
</template>

<script>
  import Login from '@/components/Login.vue'
  import axios from 'axios'
  export default {
    data() {
      return {
        catList: [],
        blogList: [],
        blogComment: [],
        nextLink: '',
        prevLink: '',
        activeCategory: this.$store.state.category
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
      },
      category: {
        get: function() {
          return this.$store.state.category
        }
      }
    },

    mounted() {
      this.getBlogCategoryList()
      // this.getAllBlog()
      // $('#allblog').click()
      $('#btn-prev').attr('disabled', true)
      this.catselect()
    },

    methods: {
      catselect: function() {
        this.getBlogsByCategory(this.$store.state.category)
      },

      getBlogCategoryList: function() {
        this.$store.dispatch('getBlogCategoryList').then(res => {
          this.catList = res.data
        })
      },

      getAllBlog: function() {
        this.$store.dispatch('getAllBlog').then(res => {
          this.blogList = res.data

          this.nextLink = res.data.next

          res.data.results.map(item => {
            this.$store.dispatch('getBlogComment', item.id).then(res => {
              this.blogComment = res.data
            })
          })
        })
      },

      blogAll: function() {
        this.$store.dispatch('getAllBlog').then(res => {
          this.blogList = res.data
        })
        $('#0')
          .children()
          .removeClass('bta')
          .addClass('btc')
        $('.cssToggle')
          .children()
          .removeClass('btc')
          .addClass('bta')
        $('#btn-prev').removeClass('hide-btn')
        $('#btn-next').removeClass('hide-btn')
      },

      getBlogsByCategory: function(id) {
        // var id = $(event.target).attr('id')

        if (id) {
          $('#btn-prev').addClass('hide-btn')
          $('#btn-next').addClass('hide-btn')

          this.$store.dispatch('getBlogsByCategory', id).then(res => {
            this.blogList = res.data

            $('#' + id)
              .removeClass('bta')
              .addClass('btc')
              .parent()
              .siblings()
              .children()
              .removeClass('btc')
              .addClass('bta')
          })
        } else {
          this.getAllBlog()
          $('#allblog')
            .removeClass('bta')
            .addClass('btc')
        }
      },

      getNextList: function() {
        $('#btn-prev').attr('disabled', false)

        axios({
          method: 'GET',
          url: this.nextLink
        }).then(res => {
          this.prevLink = res.data.previous
          this.nextLink = res.data.next
          this.blogList = res.data
          if (res.data.next === null) {
            $('#btn-next').attr('disabled', true)
          }
        })
      },

      getPrevList: function() {
        $('#btn-next').attr('disabled', false)
        axios({
          method: 'GET',
          url: this.prevLink
        }).then(res => {
          this.prevLink = res.data.previous
          this.nextLink = res.data.next
          this.blogList = res.data
          if (res.data.previous === null) {
            $('#btn-prev').attr('disabled', true)
          }
        })
      }
    }
  }
</script>

<style scoped>
.header-img {
  height: 30vh;
  background-image: linear-gradient(
      to right bottom,
      rgba(128, 128, 128, 0.65),
      rgba(0, 0, 0, 0.65)
    ),
    url('~static/images/b_rope.jpg');
  background-size: cover;
  background-position: center;
}

.header-text {
  position: relative;
  font-size: 3.5rem;
  font-weight: 600;
  color: white;
  top: 10vh;
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

.nav {
  display: flex;
  justify-content: center;
}

.nav li {
  display: inline-block;
}

.nav li .bta {
  color: black;
  background-color: #f1be03;
  font-size: 0.8rem;
  width: 54px;
  height: 28px;
  border: none;
  text-align: center;
}

.nav li .bta:hover {
  background-color: #353535;
  color: white;
}

.bta:focus {
  outline: none;
}

.btc {
  color: white;
  background-color: #353535;
  font-size: 0.8rem;
  width: 54px;
  height: 28px;
  border: none;
  text-align: center;
  outline: none;
}

/* .nav li .bta:focus {
    background-color: #353535;
    color: white;
    outline: none;
} */

.img_responsive {
  width: 100%;
  height: 250px;
  border-radius: 5px;
}

@media (max-width: 37.5em) {
  .img_responsive {
    width: 100%;
    height: 210px;
  }
}

@media (min-width: 37.5em) and (max-width: 56.25em) {
  .img_responsive {
    width: 100%;
    height: 190px;
  }
}

@media (min-width: 56.25em) and (max-width: 75em) {
  .img_responsive {
    width: 100%;
    height: 150px;
  }
}

.post_btn {
  background-color: #f1be03;
  border: none;
  padding: 0px 10px;
  margin: 2px;
}

.post_btn:focus {
  outline: none;
}

.post_btn:hover {
  color: white;
}

.fabtn {
  font-size: 1.2rem;
  padding-bottom: 10px;
}

.hide-btn {
  display: none;
}
</style>
