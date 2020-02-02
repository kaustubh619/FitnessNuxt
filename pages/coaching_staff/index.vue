<template>
  <div>
    <div class="header-img">
      <span class="header-text">Coaching Staff</span>
    </div>
    <div class="container">
      <div class="row breadcrumb" style="background: transparent;">
        <nuxt-link to="/" class="link">Home</nuxt-link>
        <i class="fa fa-circle" aria-hidden="true"></i>
        <ul>
          <li class="bullet">Coaching Staff</li>
        </ul>
      </div>

      <div class="row block-n">
        <span>
          Our
          <p style="color:#f1be03;display:inline">Coaching</p>
          Staff
        </span>
        <span>
          Our coaches are all highly trained and certified professionals with a
          life-long dedication to wellness, health, fitness and livin’ BIG.
          Experienced at managing groups, as well as working with individuals in
          a one-on-one setting, our staff will teach, motivate and inspire you
          to get (and stay) in shape.
        </span>
      </div>
      <div class="row mt-5">
        <div
          v-for="(x, y) in trainers_list"
          :key="y"
          class="col-lg-3 col-sm-6 col-12 divheight"
        >
          <div>
            <div class="trainer">
              <p
                class="trainer-img-back"
                :style="{
                  background: `url(${
                    x.trainer_gallery.split(',')[0]
                  }) top center no-repeat`
                }"
              ></p>
              <div class="text-center trainer-name">
                <p class="font pt-2">{{ x.trainer_name }}</p>
              </div>
              <div class="buybtn m-2">
                <nuxt-link
                  :to="{
                    name: 'coaching_staff-id',
                    params: { id: x.slug, trainer_id: x.id }
                  }"
                  style="text-decoration: none; color: #f1be03; font-size: 1rem;"
                >
                  <button type="button" class="btn btn-lg w-100">
                    Portfolio
                    <img
                      src="~static/images/long-arrow-pointing-up.png"
                      style="width: 20px"
                    />
                  </button>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row block5">
        <span> </span>
        <span>TESTIMONIALS</span>
        <span>WHAT THEY SAY</span>
        <span>"</span>
        <div id="demo-2" class="carousel slide" data-ride="carousel">
          <!-- Indicators -->
          <ul class="carousel-indicators">
            <li data-target="#demo-2" data-slide-to="0" class="active"></li>
            <li data-target="#demo-2" data-slide-to="1"></li>
            <li data-target="#demo-2" data-slide-to="2"></li>
          </ul>

          <!-- The slideshow -->
          <div class="carousel-inner">
            <div class="carousel-item active">
              <h6 style="color: #989595; margin-bottom: 20px">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur
              </h6>
              <img src="~static/images/t1.png" class="gheight" />
            </div>
            <div class="carousel-item">
              <h6 style="color: #989595; margin-bottom: 20px">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur
              </h6>
              <img src="~static/images/t2.png" class="gheight" />
            </div>
            <div class="carousel-item">
              <h6 style="color: #989595; margin-bottom: 20px">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur
              </h6>
              <img src="~static/images/t3.png" class="gheight" />
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
        trainers_list: []
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
      this.getTrainersList()
    },

    methods: {
      getTrainersList: function() {
        this.$store.dispatch('getTrainersList').then(res => {
          this.trainers_list = res.data.sort(function(a, b) {
            return Math.random() - 0.5
          })
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
    url('~static/images/about-us.jpg');
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

.block1 {
  color: white;
  display: grid;
}

.block1 span:first-child {
  margin-top: 2rem;
}

.block1 span:nth-child(2) {
  margin-top: 0.5rem;
  font-size: 1.9rem;
  font-weight: 600;
}

.block1 span:nth-child(3) {
  margin-top: 2rem;
}

.block1 span:nth-child(4) {
  margin-top: 1.5rem;
}

video:focus {
  outline: none;
}

.block2 {
  color: white;
  display: grid;
}

.block2 span:first-child {
  margin-top: 30px;
  font-size: 1.2rem;
}

.block2 span:nth-child(2) {
  margin-top: 20px;
}

.block3 {
  margin-top: 50px;
}

.iheight {
  height: 50vh;
  object-fit: cover;
  object-position: top;
}

.gheight {
  height: 200px;
  width: 200px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}

.block-n {
  color: white;

  display: grid;
}

.block-n span:first-child {
  font-size: 1.9rem;
  font-weight: 600;
  letter-spacing: 0.2rem;
}

.block-n span:nth-child(2) {
  margin-top: 2rem;
}

.divheight {
  height: 400px;
}

@media (max-width: 37.5em) {
  .divheight {
    height: 480px;
  }
}

@media (min-width: 37.5em) and (max-width: 75em) {
  .divheight {
    height: 420px;
  }
}

.trainer {
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
}

.trainer-img-back {
  /* background: url('~static/images/trainer.png'); */
  background-size: cover;
  background-position: top;
  height: 250px;
  width: 100%;
  object-fit: contain;
}

@media (max-width: 37.5em) {
  .trainer-img-back {
    height: 300px;
  }
}

.trainer-name {
  background-color: #353535;
  height: 60px;
}

.font {
  color: #ffffff;
}

.buybtn {
  margin-top: -20px !important;
}

.btn {
  background-color: #f1be03;
  color: white;
  border-radius: 3px;
  font-size: 1.2rem;
}

.f-a {
  font-size: 1.05rem;
  margin-left: 5px;
}

.block5 {
  display: grid;
  text-align: center;
  margin-bottom: 60px;
}

.block5 span:first-child a {
  text-decoration: none;
  color: white;
}

.block5 span:first-child a:hover {
  color: #f1be03;
}

.block5 span:nth-child(2) {
  color: #f1be03;
  font-size: 2rem;
  font-weight: 600;

  letter-spacing: 0.2rem;
}

.block5 span:nth-child(3) {
  color: grey;
  font-size: 3rem;
  font-weight: 600;
  margin-top: 0.1rem;
}

.block5 span:nth-child(4) {
  font-family: SnapITC;
  font-size: 100px;
  font-weight: 900;
  color: #f1be03;
  margin: -20px;
  margin-bottom: -80px;
}

.sliderimg {
  margin-left: 15%;
  width: 70%;
  height: auto;
  padding: 5px;
}

.prev {
  color: #f1be03;
  position: absolute;
  top: 38%;
  left: -2em;
  font-size: 1.5em;
}

.prev :hover {
  cursor: pointer;
}

.next {
  color: #f1be03;
  position: absolute;
  top: 38%;
  right: -2em;
  font-size: 1.5em;
}

.next :hover {
  cursor: pointer;
}

@media (max-width: 37.5em) {
  .prev {
    display: none !important;
  }
  .next {
    display: none !important;
  }
}

.slider {
  background-color: transparent;
  height: auto;
}

.btn-lg:hover {
  color: black;
}
</style>  
