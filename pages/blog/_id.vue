<template>
  <div>
    <div class="header-img">
      <span class="header-text">
        <span class="blockClass">{{ dateStr }}</span>
        <span>{{ blogPost.title }}</span>
      </span>
    </div>
    <div class="container">
      <div class="row breadcrumb" style="background: transparent;">
        <nuxt-link to="/" class="link">Home</nuxt-link>
        <i class="fa fa-circle" aria-hidden="true"></i>
        <ul>
          <li class="bullet">
            <nuxt-link to="/blog/post" class="link">Blog</nuxt-link>
          </li>
        </ul>
        <i class="fa fa-circle" aria-hidden="true"></i>
        <ul>
          <li class="bullet">Posts</li>
        </ul>
      </div>
      <div class="row">
        <div class="col-12 col-sm-8">
          <img :src="blogPost.blog_img" class="img_responsive" />
          <div>
            <span class="text-white custom-text mr-2">{{ dateStr }}</span>
            <span class="text-white custom-text">{{ blogPost.title }}</span>
            <span class="blockSpanXS">
              <i
                class="fa fa-comments"
                style="color: #f1be03; font-size: 0.9rem; margin-right: 5px"
              ></i>
              <span class="text-white">{{ comments }}</span>
              <i
                id="heart"
                class="fa-hover fa fa-heart"
                style="font-size: 0.9rem; margin-right: 5px"
                @click="likeBlog"
              ></i>
              <span class="text-white">{{ likes }}</span>
            </span>
          </div>

          <div class="mt-4 mb-5">
            <span class="custom-text-1">{{ blogPost.content }}</span>
          </div>
          <hr class="hrstyle" />

          <div class="row row_comment">
            <div class="col-12 mb-4">
              <span class="text-white" style="font-size: 1.5rem"
                >Comments ({{ commentCount }})</span
              >
            </div>
            <div
              class="col-12 mb-2"
              style="color: grey"
              v-for="(x, y) in blogComments"
              :key="y"
            >
              <div style="display: flex">
                <span class="flex1">
                  <img
                    src="~static/images/cw.jpg"
                    style="width: 60px; height: 60px; border-radius: 50%; object-fit: cover"
                  />
                </span>
                <span class="flex2">
                  <p style="text-align: justify">{{ x.comment }}</p>
                </span>
              </div>
            </div>
            <div class="col-12">
              <p
                class="text-theme txt_hover"
                style="text-align: right"
                @click="allComments"
                v-if="showLink"
              >
                Read More
              </p>
            </div>
            <div class="col-12 mt-3 col_addcomment">
              <span class="text-white">Add Comment</span>
              <span class="text-grey"
                >Your email address will not be published. Required fields are
                marked *</span
              >
              <form class="form-body">
                <div class="row">
                  <div class="col-12 col-sm-6">
                    <div class="form-group margin-top-25">
                      <input
                        id="fullname"
                        type="text"
                        v-model="fullname"
                        class="form-control material-input"
                        maxlength="50"
                        placeholder="Full Name"
                        required
                      />
                      <label class="control-label noselect material-input"
                        >Full Name*</label
                      >
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <div class="form-group margin-top-25">
                      <input
                        id="email"
                        type="text"
                        v-model="email"
                        class="form-control material-input"
                        maxlength="50"
                        placeholder="Email"
                        required
                      />
                      <label class="control-label noselect material-input"
                        >Email*</label
                      >
                    </div>
                  </div>
                </div>
                <div class="form-group margin-top-25">
                  <textarea
                    id="comment"
                    type="text"
                    v-model="comment"
                    placeholder="Your Comment"
                    cols="30"
                    rows="5"
                    style="width: 100%; padding: 50px 20px;"
                    required
                  ></textarea>
                  <label
                    class="control-label noselect material-input"
                    style="display: block"
                    >Your Comment*</label
                  >
                </div>
                <div class="form-group margin-top-25">
                  <input type="checkbox" id="radio" required />
                  <span class="text-white ml-2" style="display: inline"
                    >I accept the</span
                  >
                  <span class="text-theme" style="display: inline"
                    >Privacy Policy</span
                  >
                  <span class="text-white" style="display: inline">*</span>
                </div>
                <div class="form-group margin-top-25">
                  <button @click="postComment" class="comment_btn">
                    POST A COMMENT
                  </button>
                </div>
              </form>
            </div>
          </div>
          <hr class="hrstyle" />

          <div class="row pt-5 pb-5">
            <div class="col-12 col-sm-5">
              <img src="~static/images/cw.jpg" class="img_con" />
            </div>
            <div class="col-12 col-sm-7 col_content">
              <span class="text-theme mt-3">CONTENT SPECIALIST</span>
              <span class="text-white">Farheen Ahmed</span>
              <span class="text-grey mt-3"
                >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam</span
              >
              <span class="text-grey"
                >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam</span
              >
              <span class="mt-3">
                <nuxt-link to>
                  <img class="img_link1" src="~static/images/fb_yellow.png" />
                </nuxt-link>
                <nuxt-link to>
                  <img
                    class="img_link2"
                    src="~static/images/twitter_yellow.png"
                  />
                </nuxt-link>
                <nuxt-link to>
                  <img
                    class="img_link3"
                    src="~static/images/insta_yellow.png"
                  />
                </nuxt-link>
                <nuxt-link to>
                  <img
                    class="img_link3"
                    src="~static/images/linkedin_yellow.png"
                  />
                </nuxt-link>
              </span>
            </div>
          </div>
          <hr class="hrstyle" />
          <div class="row" style="margin-bottom: -10px">
            <div class="col-12">
              <p class="text-white mb-4" style="font-size: 1.5rem!important">
                Related Posts
              </p>
              <div class="row">
                <div
                  class="col-6 col-sm-6 col-lg-5"
                  v-for="(item, i) in blogListByCat"
                  :key="i"
                  style="padding: 10px;"
                >
                  <nuxt-link
                    :to="{ name: 'blog-id', params: { id: item.slug } }"
                    style="text-decoration: none"
                  >
                    <img :src="item.blog_img" class="i_resp" />
                    <div class="block-resp display_large">
                      <div>
                        <span
                          v-for="(a, b) in 10"
                          :key="b"
                          class="text-white text_responsive"
                          >{{ item.posted_on[b] }}</span
                        >
                      </div>
                      <div>
                        <span
                          v-for="(a, b) in 16"
                          :key="b"
                          class="text-white text_responsive"
                          >{{ item.title[b] }}</span
                        >
                        <span
                          style="font-size: 1.6rem; line-height: 0rem"
                          class="text-white"
                          >...</span
                        >
                      </div>
                    </div>
                    <div class="block-resp display_small">
                      <div>
                        <span
                          v-for="(a, b) in 10"
                          :key="b"
                          class="text-white text_responsive"
                          >{{ item.posted_on[b] }}</span
                        >
                      </div>
                      <div>
                        <span
                          v-for="(a, b) in 13"
                          :key="b"
                          class="text-white text_responsive"
                          >{{ item.title[b] }}</span
                        >
                        <span
                          style="font-size: 1.6rem; line-height: 0rem"
                          class="text-white"
                          >...</span
                        >
                      </div>
                    </div>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
          <hr class="hrstyle" />
        </div>
        <div class="col-12 col-sm-4">
          <div class="row row_category">
            <p class="text-white" style="text-align: center; font-size: 1.5rem">
              Categories
            </p>
            <div class="mt-4">
              <span
                style="font-size: 1rem; display: block; cursor: pointer"
                class="text-white"
                v-for="(item, i) in catList"
                :key="i"
                v-bind:id="item.id"
                @click="getCat"
              >
                {{ item.category_name }}
                <img
                  src="~static/images/long-arrow-pointing-up.png"
                  style="float: right; width: 15px; padding-top: 10px;"
                />
                <hr class="hrstyle" />
              </span>
            </div>
          </div>
          <div class="row row_post">
            <span class="text-white">Recent Posts</span>
            <div class="mt-4">
              <span
                style="font-size: 0.9rem; display: block"
                class="text-white"
                v-for="(item, i) in blogList"
                :key="i"
                v-bind:id="item.id"
              >
                <nuxt-link
                  :to="{ name: 'blog-id', params: { id: item.slug } }"
                  class="text-white"
                  style="text-decoration: none"
                >
                  <div class="row">
                    <div class="col-12">
                      <img
                        :src="item.blog_img"
                        style="width: 60px; height: 60px; border-radius: 50%; object-fit: cover"
                      />
                    </div>
                    <div class="col-12">
                      <span v-for="(a, b) in 20" :key="b">{{
                        item.title[b]
                      }}</span>
                      <span style="font-size: 1.6rem; line-height: 0rem;"
                        >...</span
                      >
                      <div>
                        <span class="text-grey" v-for="(i, j) in 10" :key="j">{{
                          item.posted_on[j]
                        }}</span>
                        <p class="p_responsive">
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
                      </div>
                    </div>
                  </div>
                </nuxt-link>
              </span>
            </div>
          </div>
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
        blogPost: [],
        dateStr: '',
        likes: 0,
        comments: 0,
        catList: [],
        blogList: [],
        blogListByCat: [],
        dateCatStr: '',
        blogComments: [],
        showLink: true,
        commentCount: '',
        fullname: '',
        email: '',
        comment: '',
        blog_id: ''
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
      this.getBlogPost()
      this.getBlogCategoryList()
      this.getAllBlogWP()
    },

    methods: {
      getBlogCategoryList: function() {
        this.$store.dispatch('getBlogCategoryList').then(res => {
          this.catList = res.data
        })
      },

      getBlogPost: function() {
        this.$store.dispatch('getBlogPost', this.$route.params.id).then(res => {
          this.blogPost = res.data

          const likeObj = {}

          const likedId = []

          res.data.likes.map(item => {
            likeObj[item.id] = { id: item.id }
            likedId.push(item.id)

            for (this.i in likedId) {
              if (likedId[this.i] == localStorage.getItem('user_id')) {
                $('#heart').css('color', '#f1be03')
              }
            }
          })

          this.blog_id = res.data.id

          this.blogComments = res.data.blog_comments.reverse().slice(0, 2)

          this.commentCount = res.data.blog_comments.length

          if (res.data.blog_comments.length < 3) {
            this.showLink = false
          }

          for (this.i = 0; this.i < 10; this.i++) {
            this.dateStr += res.data.posted_on[this.i]
          }
          for (this.i = 0; this.i < res.data.blog_comments.length; this.i++) {
            this.comments += 1
          }
          for (this.i = 0; this.i < res.data.likes.length; this.i++) {
            this.likes += 1
          }
          this.$store
            .dispatch('getBlogsByCategory', this.blogPost.category.id)
            .then(res => {
              this.blogListByCat = res.data.slice(0, 2)
            })
        })
      },

      getAllBlogWP: function() {
        this.$store.dispatch('getAllBlogWP').then(res => {
          this.blogList = res.data.slice(-4, -1)

          res.data.map(item => {
            this.$store.dispatch('getBlogComment', item.id).then(res => {
              this.blogComment = res.data
            })
          })
        })
      },

      allComments: function() {
        this.$store.dispatch('getBlogPost', this.$route.params.id).then(res => {
          this.blogPost = res.data

          this.blogComments = res.data.blog_comments.reverse()

          const arrayL = res.data.blog_comments

          this.showLink = false
        })
      },

      postComment: function() {
        var payload = new FormData()
        payload.append('user', localStorage.getItem('user_id'))
        payload.append('comment', this.comment)
        payload.append('blog', this.blog_id)
        if (
          localStorage.getItem('token') !== null &&
          $('#radio').is(':checked')
        ) {
          this.$store.dispatch('postComment', payload).then(res => {})
        } else if (localStorage.getItem('token') === null) {
          alert('Please login to post your comments!')
          this.$store.commit('showLogin', true)
        }
      },

      likeBlog: function() {
        if (localStorage.getItem('user_id') !== null) {
          this.$store.dispatch('getBlogPost', this.$route.params.id).then(res => {
            this.blogPost = res.data

            const likeObj = {}
            const likedId = []

            res.data.likes.map(item => {
              likeObj[item.id] = { id: item.id }
              likedId.push(item.id)
            })

            if (likedId.includes(parseInt(localStorage.getItem('user_id')))) {
              likedId.pop(parseInt(localStorage.getItem('user_id')))
              var payload = {
                likes: { likes: likedId },
                slug: this.$route.params.id
              }
              this.$store.dispatch('likePost', payload).then(res => {})
              $('#heart').css('color', 'white')
              this.likes -= 1
            } else {
              likedId.push(parseInt(localStorage.getItem('user_id')))
              var payload = {
                likes: { likes: likedId },
                slug: this.$route.params.id
              }
              this.$store.dispatch('likePost', payload).then(res => {})
              $('#heart').css('color', '#f1be03')
              this.likes += 1
            }
          })
        } else {
          alert('Please login to like this post!')
          this.$store.commit('showLogin', true)
        }
      },

      getCat: function(event) {
        this.$store.commit('category', event.target.id)
        this.$router.push('/blog/post')
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
  font-size: 2rem;
  font-weight: 600;
  color: white;
  top: 10vh;
  display: block;
  text-align: center;
}

@media (max-width: 37.5em) {
  .header-text {
    font-size: 1rem;
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

/* .blockClass {
  margin-right: 10px;
} */

@media (max-width: 75em) {
  .blockClass {
    display: block;
  }
}

.img_responsive {
  width: 100%;
  height: 500px;
  margin-bottom: 20px;
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
    height: 250px;
  }
}

@media (min-width: 56.25em) and (max-width: 75em) {
  .img_responsive {
    width: 100%;
    height: 300px;
  }
}

.custom-text {
  font-size: 1.5rem;
}

.custom-text-1 {
  color: grey;
  font-size: 1rem;
}

@media (max-width: 37.5em) {
  .custom-text {
    font-size: 1rem;
  }
  .custom-text-1 {
    color: grey;
    font-size: 0.9rem;
  }
}

.hrstyle {
  border: 0;
  height: 1px;
  background: grey;
  /* background-image: linear-gradient(to right, #ccc, #333, #ccc); */
}

.img_con {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 5px solid #f1be03;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.col_content span {
  display: block;
  text-align: left;
}

.col_content span:nth-child(2) {
  font-size: 1.4rem;
}

.col_content span:nth-child(3) {
  font-size: 0.9rem;
}

.col_content span:nth-child(4) {
  font-size: 0.9rem;
}

@media (max-width: 37.5em) {
  .col_content span {
    text-align: center;
  }
}

.img_link1 {
  width: 10px;
  margin-right: 10px;
}

.img_link2 {
  width: 22px;
  margin-right: 10px;
}

.img_link3 {
  width: 20px;
  margin-right: 10px;
}

@media (max-width: 75em) {
  .blockSpanXS {
    display: block;
  }
}

.row_category {
  background-color: #353535;
  padding: 30px 50px;
  display: block;
}

.row_category span:first-child {
  font-size: 1.5rem;
}

.row_post {
  background-color: #353535;
  padding: 30px 50px;
  display: block;
  text-align: center;
}

@media (max-width: 75em) {
  .row_category {
    padding: 10px 15px;
  }
  .row_post {
    padding: 10px 15px;
  }
}

.row_post span:first-child {
  font-size: 1.5rem;
}

.p_responsive {
  display: inline;
}

.i_resp {
  width: 250px;
  height: 360px;
  object-fit: cover;
}

.block-resp {
  background-color: #000000;
  opacity: 0.89;
  width: 250px;
  height: 60px;
  padding: 4px 10px;
  margin-top: -60px;
}

@media (min-width: 37.5em) and (max-width: 75em) {
  .i_resp {
    width: 170px;
    height: 220px;
  }
  .block-resp {
    width: 170px;
  }
}

@media (max-width: 37.5em) {
  .i_resp {
    width: 140px;
    height: 175px;
  }
  .block-resp {
    width: 140px;
  }
}

.text_responsive {
  font-size: 1rem;
}

@media (max-width: 37.5em) {
  .text_responsive {
    font-size: 0.8rem;
  }
}

@media (min-width: 75em) {
  .display_small {
    display: none;
  }
}

@media (max-width: 75em) {
  .display_large {
    display: none;
  }
}

.flex1 {
  flex: 1;
  padding: 10px;
}

.flex2 {
  flex: 10;
  padding: 10px;
  font-size: 0.9rem;
}

.txt_hover:hover {
  color: white;
  cursor: pointer;
}

.col_addcomment span {
  display: block;
}

.col_addcomment span:first-child {
  font-size: 2rem;
  font-weight: 600;
}
@media (max-width: 37.5em) {
  .col_addcomment span:first-child {
    font-size: 1.5rem;
  }
}

.form-body .form-group:not(:last-child) {
  margin-bottom: 25px;
}

input,
textarea {
  border-radius: 0px;
  background-color: #353535 !important;
  border: 0 !important;
  color: #929292 !important;
  font-size: 1rem;
}

/* input:focus,
textarea:focus {
  background-color: #e8f0fe !important;
  border: 1px solid #7367f0 !important;
} */

.control-label {
  color: #909090;
  font-size: 1.05rem;
}

.form-control {
  padding: 12px 20px 0;
  height: 50px;
  line-height: 50px;
}
label.material-input {
  order: -1;
  padding-left: 20px;
  transition: all 0.1s ease-in;
  transform: translateY(15px);
  pointer-events: none;
  position: absolute;
  top: 0;
}
label.added {
  transform: translateY(10px);
  font-size: 10px;
}

label.material-input,
input.material-input {
  transition: all 0.2s;
  touch-action: manipulation;
}

/**
* Translate down and scale the label up to cover the placeholder,
* when following an input (with placeholder-shown support).
* Also make sure the label is only on one row, at max 2/3rds of the
* field—to make sure it scales properly and doesn't wrap.
*/
input.material-input:placeholder-shown + label {
  /* transform: translate(0, 2.125rem) scale(1.5); */
}
/**
* By default, the placeholder should be transparent. Also, it should 
* inherit the transition.
*/
::-webkit-input-placeholder {
  opacity: 0;
  transition: inherit;
}
/**
* Show the placeholder when the input is focused.
*/
input.material-input:focus::-webkit-input-placeholder {
  opacity: 1;
}
/**
* When the element is focused, remove the label transform.
* Also, do this when the placeholder is _not_ shown, i.e. when 
* there's something in the input at all.
*/
input.material-input:not(:placeholder-shown) + label.material-input,
input.material-input:focus + label.material-input {
  transform: translateY(7px);
  font-size: 10px;
  font-family: 'Bold';
}

.form-label-group input.material-input:-webkit-autofill ~ label.material-input {
  /* CSS property  */
  transform: translateY(7px);
  font-size: 10px;
}

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Opera and Firefox */
}

input[data-v-4b7e1cc6]:focus,
textarea[data-v-4b7e1cc6]:focus {
  border: 0px solid black !important;
  outline: none;
  /* background-color: transparent !important; */
}

.form-control:focus {
  box-shadow: none;
  border: 0px;
}

.comment_btn {
  background-color: #f1be03;
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 1.2rem;
  border-radius: 5px;
}

.comment_btn:hover {
  transform: scale(1.01);
}

@media (max-width: 37.5em) {
  .comment_btn {
    background-color: #f1be03;
    border: none;
    color: white;
    padding: 8px 16px;
    font-size: 1rem;
    border-radius: 5px;
  }
}

.fa-hover {
  color: white;
}

.fa-hover:hover {
  color: #f1be03;
  cursor: pointer;
}

[type='color'],
[type='date'],
[type='datetime-local'],
[type='datetime'],
[type='email'],
[type='month'],
[type='number'],
[type='password'],
[type='search'],
[type='tel'],
[type='text'],
[type='time'],
[type='url'],
[type='week'],
textarea {
  width: 100%;
}
</style>
