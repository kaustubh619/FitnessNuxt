<template>
  <div>
    <div class="header-img">
      <span class="header-text">About Us</span>
    </div>
    <div class="container">
      <div class="row breadcrumb" style="background: transparent;">
        <nuxt-link to="/" class="link">Home</nuxt-link>
        <i class="fa fa-circle" aria-hidden="true"></i>
        <ul>
          <li class="bullet">About Us</li>
        </ul>
      </div>
      <div class="row block1">
        <span>WHO WE ARE?</span>
        <span>
          START
          <p style="color:#f1be03;display:inline">YOUR TRAINING</p>TODAY
        </span>
        <span>
          We believe the quality of our health determines the quality of our lives—and nothing is more important than that. We believe fitness is about strengthening and conditioning your body and mind so you can get out there,
          explore the world, seek new adventures and be the person you were meant to be.
        </span>
        <span>
          Windy City Strength & Conditioning is a dedicated, full time strength and conditioning facility, and the home of Windy City CrossFit—the first CrossFit facility in Chicago.
          We use kettlebells, barbells, dumbbells, bumper plates, jump boxes, medicine balls, rowers, gymnastics rings, parallettes and pull-up bars to effectively train our athletes every day.
        </span>
      </div>
      <div class="row" style="margin-top: 3rem">
        <video width="100%" height="100%" poster="images/ma.jpg" controls>
          <source src="~static/video/fit2.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="row block2">
        <span>CrossFit in 100 Words</span>
        <span>
          Eat meat and vegtables, nuts and seeds, some fruit, little starch and no sugar. Keep intake to levels that will support exercise but not body fat.
          Practice and train all major lifts: Deadlift, clean, squat, presses, clean and jerks, and snatch. Similarly, master the basics of gymnastics:
          Pull ups, dips, rope climb, push ups, sit ups, presses to handstands, pirouettes, flips, splits, and holds. Bike, run, swim, row, etc.
          hard and fast five to six days per week mix these elements in as many combinations and patterns as creativity will allow.
          Routine is the enemy. Keep workouts short and intense. Regularly learn and play new sports.
        </span>
      </div>
      <div class="row block3">
        <div id="demo" class="carousel slide" data-ride="carousel">
          <!-- The slideshow -->
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="~static/images/crossfit2.jpg" class="w-100 iheight" />
            </div>
            <div class="carousel-item">
              <img src="~static/images/crossfit.jpg" class="w-100 iheight" />
            </div>
            <div class="carousel-item">
              <img src="~static/images/body3.jpg" class="w-100 iheight" />
            </div>
          </div>

          <!-- Left and right controls -->
          <a class="carousel-control-prev" href="#demo" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#demo" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>
      <div class="row block4">
        <span>
          Our
          <p style="color:#f1be03;display:inline">Coaching</p>Staff
        </span>
        <span>
          Our coaches are all highly trained and certified professionals with a life-long dedication to wellness, health, fitness and livin’ BIG.
          Experienced at managing groups, as well as working with individuals in a one-on-one setting, our staff will teach,
          motivate and inspire you to get (and stay) in shape.
        </span>
      </div>
      <div class="row mt-5">
        <div v-for="p in 4" :key="p" class="col-lg-3 col-sm-6 col-12 divheight">
          <div>
            <div class="trainer">
              <p class="trainer-img-back"></p>
              <div class="text-center trainer-name">
                <p class="font pt-2">John Addison</p>
                <p
                  class="font m-0"
                  style="color: grey"
                >Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
              </div>
              <div class="buybtn m-2">
                <button type="button" class="btn btn-lg w-100">
                  Read More
                  <img src="~static/images/long-arrow-pointing-up.png" style="width: 20px" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row block5">
        <span>
          <a href="#">
            Read More about Our Team and Awards
            <img
              src="~static/images/long-arrow-pointing-up-yellow.png"
              style="width: 20px"
            />
          </a>
        </span>
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
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
              </h6>
              <img src="~static/images/t1.png" class="gheight" />
            </div>
            <div class="carousel-item">
              <h6 style="color: #989595; margin-bottom: 20px">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
              </h6>
              <img src="~static/images/t2.png" class="gheight" />
            </div>
            <div class="carousel-item">
              <h6 style="color: #989595; margin-bottom: 20px">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
              </h6>
              <img src="~static/images/t3.png" class="gheight" />
            </div>
          </div>
        </div>
      </div>
      <div class="row" style="margin-top: 4rem">
        <div class="col-md-12 heroSlider-fixed">
          <div class="overlay"></div>
          <!-- Slider -->
          <div class="slider responsive">
            <div>
              <img src="~static/images/s2.png" class="sliderimg" />
            </div>
            <div>
              <img src="~static/images/s1.png" class="sliderimg" />
            </div>
            <div>
              <img src="~static/images/s3.png" class="sliderimg" />
            </div>
            <div>
              <img src="~static/images/s4.png" class="sliderimg" />
            </div>
            <div>
              <img src="~static/images/s1.png" class="sliderimg" />
            </div>
            <div>
              <img src="~static/images/s3.png" class="sliderimg" />
            </div>
            <div>
              <img src="~static/images/s2.png" class="sliderimg" />
            </div>
            <div>
              <img src="~static/images/s4.png" class="sliderimg" />
            </div>
          </div>
          <!-- control arrows -->
          <div class="prev">
            <i
              class="fa fa-arrow-left"
              style="font-size: 1.1rem; border: 4px solid #f1be03; border-radius: 50%; padding: 6px 8px"
            ></i>
          </div>
          <div class="next">
            <i
              class="fa fa-arrow-right"
              style="font-size: 1.1rem; border: 4px solid #f1be03; border-radius: 50%; padding: 6px 8px"
            ></i>
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
    return {}
  },

  components: {
    Login
  },

  computed: {
    showLogin: {
      get: function() {
        return this.$store.state.showLogin
      },
      set: function(newName) {
        // this.$store.dispatch('addName',newName);
      }
    }
  },

  mounted() {
    $('.responsive').slick({
      dots: true,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    })
  },

  methods: {}
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
    url('~static/images/about-us.jpg');
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

.block4 {
  color: white;
  margin-top: 4.5rem;
  display: grid;
}

.block4 span:first-child {
  font-size: 1.9rem;
  font-weight: 600;
  letter-spacing: 0.2rem;
}

.block4 span:nth-child(2) {
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
  background: url('~static/images/trainer.png');
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
  height: 120px;
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
  margin-top: 3rem;
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
</style>  
