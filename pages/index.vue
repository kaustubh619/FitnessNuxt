<template>
  <div>
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
      style="position:relative"
    >
      <div class="container" style="display: flex">
        <button class="btn-bmr" @click="getBMRCalculator">
          <span class="hideOnHover">CALCULATE YOUR BMR</span>
          <img src="~static/images/heartbeat@3x.png" class="img-cst" />
        </button>
        <button class="btn-trainer" @click="getTrainerForm">
          <span class="hideOnHover1">FIND A TRAINER</span>
          <img src="~static/images/trainer-icon.png" class="img-cst1" />
        </button>
        <button class="btn-shop" @click="goToShop">
          <span class="hideOnHover2">GO TO SHOP</span>
          <img src="~static/images/shop.png" class="img-cst2" />
        </button>
        <button class="btn-plans">
          <span class="hideOnHover3">SUBSCRIPTION PLANS</span>
          <img src="~static/images/plans.png" class="img-cst3" />
        </button>
        <!-- <nuxt-link to="/find_trainer" class="btn-trainer"
          >Find A Trainer
        </nuxt-link> -->
      </div>
      <div class="carousel-inner" role="listbox">
        <div
          v-for="(item, i) in allImages"
          :key="i"
          class="carousel-item"
          :class="i === 1 ? 'active' : ''"
        >
          <img :src="item.img" class="iheight w-100" />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class="container mt-5" style="margin-bottom: 80px">
      <div class="text-center" style="margin-bottom: 80px">
        <p class="fontp">
          START
          <span class="yellow-text">YOUR TRAINING</span> TODAY
        </p>
      </div>
      <div class="row mb-5">
        <div class="col-lg-4 h_col">
          <div class="d-flex flex-column">
            <div class="text-center">
              <div class="rotated-image">
                <img
                  style="height: 100px;object-fit: contain;object-position: left;padding: 20px;"
                  src="~static/images/Untitled-1.png"
                  alt="Lightweight UI components for Vue.js based on Bulma"
                />
              </div>

              <h5 class="underline">WHO WE TRAIN</h5>
            </div>
            <div class="text-center" style="padding-top: 15px">
              <p
                style="font-size:12px;color: rgb(133, 133, 133);max-width: 240px;margin:auto"
              >
                We welcome anyone and everyone looking to shed some pounds or to
                pack on some muscle. Meet your fitness goals with certified
                personal trainers. Take your fitness aspirations to new heights.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 h_col">
          <div class="d-flex flex-column">
            <div class="text-center">
              <div class="rotated-image">
                <img
                  style="height: 100px;object-fit: contain;object-position: left;padding: 20px;"
                  src="~static/images/Untitled-1.png"
                  alt="Lightweight UI components for Vue.js based on Bulma"
                />
              </div>
              <h5 class="underline">SCHEDULE & PRICING</h5>
            </div>
            <div class="text-center" style="padding-top: 15px">
              <p
                style="font-size:12px;color: rgb(133, 133, 133);max-width: 240px;margin:auto"
              >
                Get access to a custom training regimen to suit your BMR/ BMI
                needs, Schedule, and your Budget. Flexible & Hassle free
                Scheduling to offer you a great workout experience.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 h-col">
          <div class="d-flex flex-column">
            <div class="text-center">
              <div class="rotated-image">
                <img
                  style="height: 100px;object-fit: contain;object-position: left;padding: 20px;"
                  src="~static/images/Untitled-1.png"
                  alt="Lightweight UI components for Vue.js based on Bulma"
                />
              </div>
              <h5 class="underline">NUTRITION</h5>
            </div>
            <div class="text-center" style="padding-top: 15px">
              <p
                style="font-size:12px;color: rgb(133, 133, 133);max-width: 240px;margin:auto"
              >
                Maximize your workout efforts with our wide selection of
                supplements including protein powder, pre workout, vitamins,
                BCAAs, and more. Choose good nutrition for the best results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5 container" id="sub-plans">
      <div style="margin-bottom: 40px;">
        <p class="fontp left-margin-lg" style="text-align: center;">
          PERSONAL
          <span class="yellow-text">TRAINING</span> MEMBERSHIP
        </p>
      </div>
      <div class="row w-100">
        <div
          class="col-12 offset-lg-2 col-lg-8"
          style="margin-bottom: 20px;"
          v-for="(x, y) in subscriptionPLans"
          :key="y"
        >
          <div class="pad black text-center">
            <div>
              <p class="font" style="font-size:32px">{{ x.title }}</p>
              <p class="font" style="font-size:32px">₹ {{ x.cost }} / MONTH</p>
            </div>
            <div style="text-center">
              <div v-for="(item, i) in JSON.parse(x.plan_features)" :key="i">
                <post-list v-if="item.type === 'list'" :data="item" />
              </div>
            </div>
            <div class="w-100 padrl">
              <button
                type="button"
                class="btn btn-lg w-100"
                style="margin-top:20px "
              >
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Login v-if="showLogin" />
  </div>
</template>

<script>
  import axios from 'axios'
  // import calc from '@/components/calc.vue'
  import Login from '@/components/Login.vue'
  import PostList from '~/components/List.vue'

  export default {
    data() {
      return {
        allImages: [],
        subscriptionPLans: [],
        featureList: []
      }
    },

    components: {
      // calc,
      Login,
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
      this.getImages()
      this.getPlans()
      $('.btn-plans').click(function() {
        $('html,body').animate(
          {
            scrollTop: $('#sub-plans').offset().top
          },
          'slow'
        )
      })
    },

    async asyncData() {
      const { data } = await axios.get(
        'http://mytruestrength.com/backend/carousel_image'
      )
      return { imgs: data }
    },

    methods: {
      getPlans: function() {
        this.$store.dispatch('getPlans').then(res => {
          this.subscriptionPLans = res.data
        })
      },

      checkBMR: function() {
        this.showLogin = true
      },

      getImages: function() {
        this.$store.dispatch('getImages').then(res => {
          this.allImages = res.data
        })
      },

      activeCssClass(item) {
        return item === 0 ? 'active' : ''
      },

      getBMRCalculator: function() {
        if (localStorage.getItem('token') !== null) {
          this.$router.push('/bmr_calculator')
        } else {
          this.$store.commit('showLogin', true)
        }
      },
      getTrainerForm: function() {
        this.$router.push('/find_trainer')
      },
      goToShop: function() {
        this.$router.push('/all_products')
      }
    }
  }
</script>

<style scoped>
.iheight {
  height: 100vh;
  object-fit: cover;
  object-position: center;
  opacity: 0.6;
}

h6 {
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
}
.black-background {
  background-color: black;
}

.black p {
  line-height: 41px;
  color: #dfdfdf;
  font-size: 13px;
}
.pad {
  padding: 13px 0;
}
.black {
  background-color: black;
  padding: 30px 40px;
}
.font {
  color: #ffffff;
}
.btn {
  background-color: #f1be03;
  color: black;
}
.padrl {
  padding: 0 10px 0 10px;
}
.bg-image {
  background: url('~static/images/logo.png');
  background-color: black;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
}
.product {
  background: url('~static/images/yelloeproductbackground.png');
  height: 150px;
  width: 100%;
  object-fit: contain;
}
.product2 {
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
}
.product-name {
  background-color: #353535;
  height: 120px;
}
.btn2 {
  background-color: #f1be03;
  color: #ffffff;
}
.buybtn {
  margin-top: -29px !important;
}

.fontp {
  font-size: 25px;
  font-style: italic;
  font-weight: 900;
  background-color: #242424;
}

p,
h4,
h5 {
  color: white;
}

.underline {
  position: relative;
  padding: 15px 0;
}
.underline:after {
  content: '';
  border-bottom: 2px solid #f1be03;
  position: absolute;
  width: 45px;
  bottom: 0;
  left: 0;
  opacity: 1;
  right: 0;
  margin: auto;
}

.rotated-image {
  position: relative;
  margin-bottom: 35px;
}

.rotated-image:after {
  content: '';
  border: 2px solid #f1be03;
  position: absolute;
  width: 100px;
  height: 100px;
  bottom: 0;
  left: 0;
  opacity: 1;
  right: 0;
  transform: rotate(45deg);
  margin: auto;
}

.yellow-text {
  color: #f1be03;
}

.background-image img {
  opacity: 0.4;
}
.background-image {
  height: 270px;
}

.background-image:after {
  content: '';
  background-color: red;
}

.relative {
  position: relative;
}

.blog-images {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.calculator {
  z-index: 1;
  position: absolute;
}

@media (max-width: 75em) {
  .h_col {
    height: 360px;
  }
}

.container .row {
  margin: 0px;
}

@media (min-width: 1666px) {
  .left-margin-lg {
    margin-left: -25px;
  }
}

.btn-bmr {
  color: white;
  position: absolute;
  top: 56%;
  left: 25%;
  width: 15%;
  z-index: 8;
  transform: translate(-50%, -46%);
  background-color: transparent;
  padding: 14px 24px;
  font-size: 17px;
  border-bottom: 3px solid #ffce10;
  transition: all 0.3s;
}

.btn-trainer {
  color: white;
  position: absolute;
  top: 56%;
  left: 42%;
  width: 15%;
  z-index: 8;
  transform: translate(-50%, -46%);
  background-color: transparent;
  padding: 14px 24px;
  font-size: 17px;
  border-bottom: 3px solid #ffce10;
  text-decoration: none;
  transition: all 0.3s;
}

.btn-shop {
  color: white;
  position: absolute;
  top: 56%;
  left: 59%;
  width: 15%;
  z-index: 8;
  transform: translate(-50%, -46%);
  background-color: transparent;
  padding: 14px 24px;
  font-size: 17px;
  border-bottom: 3px solid #ffce10;
  transition: all 0.3s;
}

.btn-plans {
  color: white;
  position: absolute;
  top: 56%;
  left: 76%;
  width: 15%;
  z-index: 8;
  transform: translate(-50%, -46%);
  background-color: transparent;
  padding: 14px 24px;
  font-size: 17px;
  border-bottom: 3px solid #ffce10;
  transition: all 0.3s;
}

@media (max-width: 1510px) {
  .btn-bmr {
    top: 36%;
    left: 50%;
    width: 240px;
    transform: translateX(-50%);
  }
  .btn-trainer {
    top: 43%;
    left: 50%;
    width: 240px;
    transform: translateX(-50%);
  }
  .btn-shop {
    top: 50%;
    left: 50%;
    width: 240px;
    transform: translateX(-50%);
  }
  .btn-plans {
    top: 57%;
    left: 50%;
    width: 240px;
    transform: translateX(-50%);
  }
}

@media (max-width: 37.5em) {
  .btn-bmr {
    font-size: 15px;
    padding: 8px 24px;
  }
  .btn-trainer {
    font-size: 15px;
    padding: 8px 24px;
  }
  .btn-shop {
    font-size: 15px;
    padding: 8px 24px;
  }
  .btn-plans {
    font-size: 15px;
    padding: 8px 24px;
  }
}

.btn-bmr:hover,
.btn-trainer:hover,
.btn-shop:hover,
.btn-plans:hover {
  border: 3px solid #ffce10;
}

.img-cst,
.img-cst1,
.img-cst2,
.img-cst3 {
  width: 0px;
  transition: all 0.5s;
}

.btn-bmr:hover > .img-cst {
  width: 26px;
}

.btn-bmr:hover {
  font-size: 0px;
}

.btn-trainer:hover > .img-cst1 {
  width: 24px;
}

.btn-trainer:hover {
  font-size: 0px;
}

.btn-shop:hover > .img-cst2 {
  width: 20px;
}

.btn-shop:hover {
  font-size: 0px;
}

.btn-plans:hover > .img-cst3 {
  width: 26px;
}

.btn-plans:hover {
  font-size: 0px;
}

.btn-bmr:focus,
.btn-trainer:focus,
.btn-shop:focus,
.btn-plans:focus {
  outline: none;
}
</style>

