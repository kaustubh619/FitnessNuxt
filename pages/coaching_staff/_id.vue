<template>
  <div>
    <div class="header-img">
      <span class="header-text">
        <span class="header-text">Coaching Staff</span>
      </span>
    </div>
    <div class="container">
      <div class="row breadcrumb" style="background: transparent;">
        <nuxt-link to="/" class="link">Home</nuxt-link>
        <i
          class="fa fa-circle"
          aria-hidden="true"
          style="margin-left: 5px; margin-right: 5px;"
        ></i>
        <ul>
          <li class="bullet" style=" list-style-type: none">Coaching Staff</li>
        </ul>
      </div>

      <div class="row">
        <div class="col-12">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
            style="position:relative"
          >
            <div class="carousel-inner" role="listbox">
              <div
                v-for="(item, i) in allImages"
                :key="i"
                class="carousel-item"
                :class="i === 0 ? 'active' : ''"
              >
                <img :src="item" class="img_responsive" />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          <div>
            <span class="text-white custom-text">{{ trainer_name }}</span>
            <!-- <span class="blockSpanXS">
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
            </span> -->
          </div>

          <div class="mt-2">
            <div v-for="(item, i) in post" :key="i">
              <post-paragraph v-if="item.type === 'paragraph'" :data="item" />
              <post-list v-if="item.type === 'list'" :data="item" />
            </div>
          </div>

          <div class="row mt-3 p-3">
            <div class="faq-11 text-white">
              <p style="font-size: 16px">Your Review</p>
              <p style="font-size: 16px" v-if="auth_bool">
                <span style="color: #ffce10">Note:</span> Please login to post
                your review
              </p>
              <div class="row" style="display: flex; margin-bottom: 10px;">
                <div>
                  <div style="display: block">
                    <!-- <p style="padding-left: 10px; padding-top: 10px">
                      {{ username }}
                    </p> -->
                  </div>
                  <div class="rating-stars text-center" style="display: block">
                    <ul id="stars">
                      <li
                        class="star"
                        title
                        v-for="(x, y) in 5"
                        :key="y"
                        :value="y + 1"
                        :id="y"
                        @click="postUserRating(y)"
                      >
                        <i class="fa fa-star fa-fw"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <p class="pHover" v-if="review_bool">Write a review</p>
              </div>
              <div class="row" id="review_box" v-if="review_bool">
                <form>
                  <textarea
                    style="margin-left: 10px"
                    name
                    id
                    class="textAreaClass form-control"
                    rows="10"
                    v-model="review_content"
                  ></textarea>
                  <button class="review_button" @click="submitReview">
                    Submit
                  </button>
                </form>
              </div>
              <div v-else>
                <div class="row">
                  <p style="padding-left: 10px" class="qwe">
                    {{ review_content }}
                  </p>
                  <button class="review_button qwe" @click="showHideBlock">
                    Edit Your Review
                  </button>
                </div>
                <div class="row show_hide_box">
                  <form style="display: inline">
                    <textarea
                      style="margin-left: 10px"
                      name
                      id
                      class="textAreaClass form-control"
                      rows="10"
                      v-model="review_content"
                    ></textarea>
                    <button class="review_button" @click="submitReview">
                      Submit
                    </button>
                  </form>

                  <button
                    class="review_button"
                    @click="cancelReview"
                    style="background-color: #a45a52; color: white"
                  >
                    Cancel
                  </button>
                </div>
              </div>
              <div style="margin-top: 20px" class="myDiv2">
                <div class="myDiv">
                  <p
                    style="font-size: 40px; text-align: center; margin-top: 30px"
                  >
                    {{ averageRating }}
                  </p>
                  <div class="star-ratings">
                    <div
                      class="fill-ratings"
                      :style="{ width: `${avgPercent}%` }"
                    >
                      <span>★★★★★</span>
                    </div>
                    <div class="empty-ratings">
                      <span>★★★★★</span>
                    </div>
                  </div>
                  <p
                    style="font-size: 24px; text-align: center; margin-top: 0px"
                  >
                    <i class="fa fa-user fa-fill"></i>
                    <span style="margin-left: 10px"
                      >{{ totalVotes }} Total</span
                    >
                  </p>
                </div>
                <div>
                  <div class="container-fluid" style="display: flex">
                    <p style="margin-right: 10px">5</p>
                    <div class="progress">
                      <div
                        class="progress-bar pbar1"
                        role="progressbar"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        :style="{ width: `${width5}%` }"
                      ></div>
                    </div>
                  </div>
                  <div class="container-fluid" style="display: flex">
                    <p style="margin-right: 10px">4</p>
                    <div class="progress">
                      <div
                        class="progress-bar pbar2"
                        role="progressbar"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        :style="{ width: `${width4}%` }"
                      ></div>
                    </div>
                  </div>
                  <div class="container-fluid" style="display: flex">
                    <p style="margin-right: 10px">3</p>
                    <div class="progress">
                      <div
                        class="progress-bar pbar3"
                        role="progressbar"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        :style="{ width: `${width3}%` }"
                      ></div>
                    </div>
                  </div>
                  <div class="container-fluid" style="display: flex">
                    <p style="margin-right: 10px">2</p>
                    <div class="progress">
                      <div
                        class="progress-bar pbar4"
                        role="progressbar"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        :style="{ width: `${width2}%` }"
                      ></div>
                    </div>
                  </div>
                  <div class="container-fluid" style="display: flex">
                    <p style="margin-right: 15px">1</p>
                    <div class="progress">
                      <div
                        class="progress-bar pbar5"
                        role="progressbar"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        :style="{ width: `${width1}%` }"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row" style="margin-top: 30px">
                <div
                  class="col-xs-12"
                  v-for="(j, k) in raitngswithreviews"
                  :key="k"
                  style="padding: 10px"
                >
                  <p style="font-weight: 400">{{ j.user.username }}</p>
                  <div>
                    <div style="position: absolute">
                      <i
                        class="fa fa-star fa-fill"
                        aria-hidden="true"
                        v-for="(o, p) in 5"
                        :key="p"
                        style="color: white"
                      ></i>
                    </div>
                    <div style="position: absolute">
                      <i
                        class="fa fa-star fa-fill"
                        aria-hidden="true"
                        v-for="(o, p) in j.ratings"
                        :key="p"
                        style="color: #ffce10"
                      ></i>
                    </div>
                  </div>
                  <p style="margin-top: 30px">{{ j.reviews }}</p>
                </div>
              </div>
            </div>
            <!-- <div class="col-12 mb-4">
              <span class="text-white" style="font-size: 1.5rem"
                >Comments ({{ commentCount }})</span
              >
            </div> -->
            <!-- <div
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
            </div> -->
            <!-- <div class="col-12">
              <p
                class="text-theme txt_hover"
                style="text-align: right"
                @click="allComments"
                v-if="showLink"
              >
                Read More
              </p>
            </div> -->
            <!-- <div class="col-12 mt-3 col_addcomment">
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
            </div> -->
          </div>
        </div>
        <div class="col-12 col-sm-4">
          <!-- <div class="row row_category">
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
          </div> -->
          <!-- <div class="row row_post">
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
          </div> -->
        </div>
      </div>
    </div>
    <Login v-if="showLogin" />
  </div>
</template>

<script>
  import Login from '@/components/Login.vue'
  import PostParagraph from '~/components/Paragraph.vue'
  import PostList from '~/components/LeftList.vue'

  export default {
    data() {
      return {
        allImages: [],
        trainer_name: '',
        post: [],
        trainer_id: '',
        product_name: '',
        city: '',
        country: '',
        startup: '',
        stage: '',
        users: '',
        app_link: '',
        product_video: '',
        pro_bool: true,
        date_added: '',
        product_cat: '',
        username: '',
        dp_url: '',
        review_content: '',
        review_bool: true,
        user_review: '',
        view_content: '',
        auth_bool: true,
        new_v: '',
        review1: [],
        review2: [],
        review3: [],
        review4: [],
        review5: [],
        width1: '',
        width2: '',
        width3: '',
        width4: '',
        width5: '',
        averageRating: '',
        avgPercent: '',
        totalVotes: '',
        raitngswithreviews: []
      }
    },
    components: {
      Login,
      PostParagraph,
      PostList
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
      this.getTrainerBySlug()
      this.getUser()
      this.getUserRatings()
      this.allProductRatings()
      if (localStorage.getItem('token')) {
        this.auth_bool = false
      }

      $('#stars li')
        .on('mouseover', function() {
          var onStar = parseInt($(this).data('value'), 10) // The star currently mouse on

          // Now highlight all the stars that's not after the current hovered star
          $(this)
            .parent()
            .children('li.star')
            .each(function(e) {
              if (e < onStar) {
                $(this).addClass('hover')
              } else {
                $(this).removeClass('hover')
              }
            })
        })
        .on('mouseout', function() {
          $(this)
            .parent()
            .children('li.star')
            .each(function(e) {
              $(this).removeClass('hover')
            })
        })
    },

    methods: {
      getTrainerBySlug: function() {
        this.$store
          .dispatch('getTrainerBySlug', this.$route.params.id)
          .then(res => {
            this.allImages = res.data.trainer_gallery.split(',')
            this.trainer_name = res.data.trainer_name
            this.post = JSON.parse(res.data.trainer_bio)
            this.trainer_id = res.data.id

            this.review1 = []
            this.review2 = []
            this.review3 = []
            this.review4 = []
            this.review5 = []
            this.$store
              .dispatch('allProductRatings', this.trainer_id)
              .then(res => {
                this.raitngswithreviews = []
                res.data.reverse().map(item => {
                  if (item.reviews != '') {
                    this.raitngswithreviews.push(item)
                  }
                })

                this.totalVotes = res.data.length
                res.data.map(item => {
                  if (item.ratings === 1) {
                    this.review1.push(item)
                  } else if (item.ratings === 2) {
                    this.review2.push(item)
                  } else if (item.ratings === 3) {
                    this.review3.push(item)
                  } else if (item.ratings === 4) {
                    this.review4.push(item)
                  } else if (item.ratings === 5) {
                    this.review5.push(item)
                  }
                })

                let p1 = this.review1.length
                let p2 = this.review2.length
                let p3 = this.review3.length
                let p4 = this.review4.length
                let p5 = this.review5.length
                let ptotal = p1 + p2 + p3 + p4 + p5
                this.width1 = (p1 / ptotal) * 100
                this.width2 = (p2 / ptotal) * 100
                this.width3 = (p3 / ptotal) * 100
                this.width4 = (p4 / ptotal) * 100
                this.width5 = (p5 / ptotal) * 100

                let avg =
                  (p1 * 1 + p2 * 2 + p3 * 3 + p4 * 4 + p5 * 5) /
                  (p1 + p2 + p3 + p4 + p5)

                if (isNaN(avg)) {
                  this.averageRating = 0
                } else {
                  this.averageRating = avg.toFixed(2)
                }

                this.avgPercent = (this.averageRating / 5) * 100
              })

            const form_data = new FormData()
            form_data.append('trainer', this.trainer_id)
            form_data.append('user_id', localStorage.getItem('user_id'))
            this.$store.dispatch('getUserRatings', form_data).then(res => {
              this.review_content = res.data.reviews
              this.new_v = res.data.reviews
              if (res.data.reviews) {
                this.review_bool = false
              } else {
                // console.log("no review");
              }
              var stars = $('#stars li')
                .parent()
                .children('li.star')
              let i
              for (i = 0; i < res.data.ratings; i++) {
                $(stars[i]).addClass('selected')
              }
            })
          })
      },
      getUser: function() {
        const id = localStorage.getItem('user_id')
        this.$store.dispatch('getUser', id).then(res => {
          this.username = res.data.username
        })
      },

      getUserRatings: function() {},

      allProductRatings: function() {},

      postUserRating: function(id) {
        const form_data = new FormData()
        form_data.append('trainer', this.trainer_id)
        form_data.append('user_id', localStorage.getItem('user_id'))
        this.$store
          .dispatch('getUserRatings', form_data)
          .then(res => {
            let i

            var onStar = parseInt($('#' + id).val(), 10)

            var stars = $('#stars li')
              .parent()
              .children('li.star')

            for (i = 0; i < stars.length; i++) {
              $(stars[i]).removeClass('selected')
            }

            for (i = 0; i < onStar; i++) {
              $(stars[i]).addClass('selected')
            }

            if (onStar > 0) {
              const payload = new FormData()
              const id = localStorage.getItem('user_id')
              payload.append('id', res.data.id)
              payload.append('user', id)
              payload.append('trainer', this.trainer_id)
              payload.append('ratings', onStar)

              this.$store.dispatch('updateRatings', payload).then(res => {
                this.allProductRatings()
              })
            }
          })
          .catch(err => {
            if (err.response.status === 500) {
              let i

              var onStar = parseInt($('#' + id).val(), 10)

              var stars = $('#stars li')
                .parent()
                .children('li.star')

              for (i = 0; i < stars.length; i++) {
                $(stars[i]).removeClass('selected')
              }

              for (i = 0; i < onStar; i++) {
                $(stars[i]).addClass('selected')
              }

              if (onStar > 0) {
                const payload = new FormData()
                const id = localStorage.getItem('user_id')
                payload.append('user', id)
                payload.append('trainer', this.trainer_id)
                payload.append('ratings', onStar)

                this.$store.dispatch('postRating', payload)
              }
            }
          })
      },

      submitReview: function() {
        const form_data = new FormData()
        form_data.append('trainer', this.trainer_id)
        form_data.append('user_id', localStorage.getItem('user_id'))
        this.$store
          .dispatch('getUserRatings', form_data)
          .then(res => {
            const payL = new FormData()
            payL.append('id', res.data.id)
            payL.append('ratings', res.data.ratings)
            payL.append('reviews', this.review_content)
            payL.append('user', res.data.user)
            payL.append('trainer', this.trainer_id)
            this.$store.dispatch('updateRatings', payL).then(res => {
              alert('Your review is submitted')
            })
          })
          .catch(err => {
            alert(
              'Please rate this trainer (out of 5 stars) before submitting review'
            )
          })
      },

      showHideBlock: function() {
        $('.show_hide_box').css('display', 'block')
        $('.qwe').css('display', 'none')
      },

      cancelReview: function() {
        $('.show_hide_box').css('display', 'none')
        $('.qwe').css('display', 'block')
        this.review_content = this.new_v
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
    url('~static/images/about-us.jpg');
  background-size: cover;
  background-position: center;
}

.header-text {
  position: relative;
  font-size: 3.5rem;
  font-weight: 400;
  color: white;
  top: 6vh;
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
  font-size: 0.5rem;
  padding-top: 8px;
  margin-right: 7px;
}

.img_responsive {
  width: 100%;
  height: 500px;
  margin-bottom: 20px;
  object-fit: contain;
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

ul {
  text-align: left;
  list-style-type: square !important;
}

ul li {
  text-align: left;
}

.faq-11 {
  display: block;
  text-align: left;
  margin-top: 10px;
  font-weight: 300;
}

.rating-stars ul {
  list-style-type: none;
  padding: 0;

  -moz-user-select: none;
  -webkit-user-select: none;
}
.rating-stars ul > li.star {
  display: inline-block;
}

/* Idle State of the stars */
.rating-stars ul > li.star > i.fa {
  font-size: 2.5em; /* Change the size of the stars */
  color: white; /* Color on idle state */
}

/* Hover state of the stars */
.rating-stars ul > li.star:hover > i.fa {
  color: #1eb48c;
  cursor: pointer;
}

/* Selected state of the stars */
.rating-stars ul > li.star.selected > i.fa {
  color: #f1be03;
}

.pHover {
  padding-left: 10px;
  padding-top: 10px;
  font-size: 16px;
  color: #ffce10;
}

.pHover:hover {
  color: #1eb48c;
}

.textAreaClass {
  width: 600px;
}

@media (max-width: 37.5em) {
  .textAreaClass {
    width: 310px;
    margin-left: 10px;
  }
}

.review_button {
  background-color: #ffce10;
  margin: 10px;
  border: none;
  padding: 10px 20px;
  color: black;
}

.review_button:hover {
  background-color: #1eb48c;
}

.show_hide_box {
  display: none;
}

@media (min-width: 37.5em) {
  .myDiv2 {
    display: flex;
  }
}

.myDiv {
  width: auto;
}

@media (max-width: 37.5em) {
  .myDiv {
    width: 266.56px;
  }
}

.star-ratings {
  unicode-bidi: bidi-override;
  color: white;
  font-size: 64px;
  position: relative;
  margin: 0;
  padding: 0;
  margin-top: -30px;
}

@media (max-width: 37.5em) {
  .star-ratings {
    font-size: 60px;
  }
}

.star-ratings .fill-ratings {
  color: #ffce10;
  padding: 0;
  position: absolute;
  z-index: 1;
  display: block;
  top: 0;
  left: 0;
  overflow: hidden;
}
.star-ratings .fill-ratings span {
  display: inline-block;
}
.star-ratings .empty-ratings {
  padding: 0;
  display: block;
  z-index: 0;
}

.progress {
  width: 300px;
  border-radius: 10px;
}

@media (max-width: 37.5em) {
  .progress {
    width: 240px;
  }
}

.pbar1 {
  background-color: #57bb8a;
}

.pbar2 {
  background-color: #9ace6a;
}

.pbar3 {
  background-color: #ffcf02;
}

.pbar4 {
  background-color: #ff9f02;
}

.pbar5 {
  background-color: #ff6f31;
}

.fa-fill {
  font-size: 20px;
}

.progress {
  background-color: white !important;
}
</style>