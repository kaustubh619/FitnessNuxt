<template>
  <div>
    <div class="header-img">
      <span class="header-text">Nutrition</span>
    </div>
    <div class="container">
      <div class="row breadcrumb" style="background: transparent;">
        <nuxt-link to="/" class="link">Home</nuxt-link>
        <i class="fa fa-circle" aria-hidden="true"></i>
        <ul>
          <li class="bullet">Shop</li>
        </ul>
      </div>
      <div class="row block1">
        <span style="text-transform: uppercase;">What To Eat?</span>
        <span>
          OUR
          <p style="color:#f1be03;display:inline">PHILOSOPHY</p>
        </span>
        <span
          >“Eat meat and vegetables, nuts and seeds, some fruit, little starch
          and no sugar. Keep intake to levels that will support exercise but not
          body fat.”</span
        >
        <p>
          (CrossFit Journal, September 2002, “The Garage Gym”, “World Class
          Fitness in 100 Words”)
        </p>
        <span>
          I’m sure you’ve all heard that nutrition is the foundation for
          performance. In fact, nutrition is the base of the pyramid Crossfit
          founder Greg Glassman created, with met-cons, gymnastics, weight
          lifting and sport all being supported by it. What we put into our
          bodies greatly affects how we look, feel, and perform, but most
          athletes make nutrition secondary in their training.
        </span>
      </div>
      <div class="row d-flex mt-5">
        <div class="col-12 col-sm-7 col_1 p-0">
          <span>BUILDING A STRONGER COMMUNITY</span>
          <span>
            FOCUS ON
            <p style="display: inline; color: #f1be03">FITNESS</p>
          </span>
          <span>
            <button
              class="btn"
              style="width: 180px; height: 50px; font-size: 1.1rem"
            >
              GET STARTED
              <img
                src="~static/images/long-arrow-pointing-up.png"
                style="width: 20px; padding-bottom: 2px;"
              />
            </button>
          </span>
        </div>
        <div class="col-12 col-sm-5 p-0">
          <img src="~static/images/nutri.jpg" class="nutImg" />
        </div>
      </div>
      <div class="row block4">
        <span>FROM OUR STORE</span>
        <span>
          <p style="color:#f1be03;display:inline">NUTRITION</p>
          FOR BETTER RESULTS
        </span>
        <span>
          Integer vitae enim vel nisi feugiat ultricies. Phasellus hendrerit
          pharetra posuere. In hac habitasse platea dictumst. Integer diam
          nulla, condimentum sit amet pretium id, lobortisvel tellus. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Aliquam id dictum libero, at cursus lorem. Duis
          sed aliquet augue.
        </span>
      </div>
      <div class="row mt-5">
        <div
          v-for="(x, y) in allProducts"
          :key="y"
          class="col-lg-3 col-sm-6 col-12 divheight"
        >
          <div>
            <div class="product2">
              <img class="product" :src="imageURLs[y]" />
              <div class="text-center product-name">
                <p class="font showLG">
                  <span v-for="(i, j) in 40" :key="j">{{
                    x.product_name[j]
                  }}</span>
                  <span style="font-size: 1.6rem; line-height: 0rem;">...</span>
                </p>
                <p class="font showXS">
                  <span v-for="(i, j) in 30" :key="j">{{
                    x.product_name[j]
                  }}</span>
                  <span style="font-size: 1.6rem; line-height: 0rem;">...</span>
                </p>
                <p class="font m-0">₹{{ x.price }}</p>
              </div>
              <div class="buybtn m-2">
                <nuxt-link
                  :to="{
                    name: 'product_description-id',
                    params: { id: x.slug, product_id: x.id }
                  }"
                  type="button"
                  class="btn btn-lg w-100"
                  >View Product</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row block5">
        <span>
          <nuxt-link to="/all_products">
            Discover our Online Store and Find More Products
            <img
              src="~static/images/long-arrow-pointing-up-yellow.png"
              style="width: 20px; margin-left: 10px;"
            />
          </nuxt-link>
        </span>
      </div>
      <div class="row d-flex" style="margin-top: 5rem; margin-bottom: 5rem">
        <div class="flex1">
          <span>HERE IS WHAT WE DO</span>
          <br />
          <span>
            PROVIDE
            <p style="display: inline; color: #f1be03">BEST SERVICE</p>
            FOR YOU
          </span>
        </div>

        <div class="flex3">
          <span>ON ORDERS OVER ₹500</span>
          <br />
          <span>
            <p style="display: inline; color: #f1be03">FREE</p>
            SHIPPING
          </span>
        </div>

        <div class="flex2">
          <span>AWARD WINNER</span>
          <br />
          <span>
            OUR PRODUCTS ARE
            <p style="display: inline; color: #f1be03">BEST QUALITY</p>
          </span>
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
        allProducts: [],
        imageURLs: []
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
        set: function(newName) {
          // this.$store.dispatch('addName',newName);
        }
      }
    },

    mounted() {
      this.getAllProducts()
    },

    methods: {
      getAllProducts: function() {
        this.$store.dispatch('getAllProducts').then(res => {
          this.allProducts = res.data.reverse().slice(0, 4)
          res.data.map(item => {
            this.imageURLs.push(item.images.split(',')[0])
          })
        })
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
    url('~static/images/logo.png');
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

.block1 span:nth-child(5) {
  margin-top: 1.5rem;
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

.block4 span:nth-child(2) {
  font-size: 1.9rem;
  font-weight: 600;
  letter-spacing: 0.2rem;
}

.block4 span:nth-child(3) {
  margin-top: 2rem;
}

.divheight {
  height: 320px;
}

@media (max-width: 37.5em) {
  .divheight {
    height: 330px;
  }
}

@media (min-width: 37.5em) and (max-width: 75em) {
  .divheight {
    height: 320px;
  }
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

.product2 {
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

.product-name {
  background-color: #353535;
  height: 120px;
}

.font {
  color: #ffffff;
}

.buybtn {
  margin-top: -29px !important;
}

.btn {
  background-color: #f1be03;
  color: white;
  border-radius: 3px;
  font-size: 1rem;
}

.col_1 {
  background: url('~static/images/blogbg.png');
}

.col_1 {
  display: grid;
  height: 380px;
}

.col_1 span:first-child {
  color: #f1be03;
  padding-top: 6rem;
  padding-left: 4rem;
  font-size: 1.1rem;
}

.col_1 span:nth-child(2) {
  color: white;
  font-size: 3rem;
  padding-left: 4rem;
  padding-bottom: 2rem;
}

.col_1 span:nth-child(3) {
  padding-left: 4rem;
  padding-bottom: 5rem;
}

@media (max-width: 75em) {
  .col_1 span:nth-child(2) {
    font-size: 2rem;
    padding-left: 2rem;
  }

  .col_1 span:first-child {
    padding-left: 2rem;
  }

  .col_1 span:nth-child(3) {
    padding-left: 2rem;
  }
}

@media (max-width: 37.5em) {
  .col_1 {
    height: auto;
  }
}

.nutImg {
  width: 100%;
  height: 380px;
}

@media (min-width: 37.5em) and (max-width: 75em) {
  .col_1 {
    height: 280px;
  }

  .nutImg {
    height: 280px;
  }
}

@media (max-width: 37.5em) {
  .nutImg {
    height: auto;
  }
}

.flex1 {
  flex: 1;
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.751),
      rgba(128, 128, 128, 0.751)
    ),
    url(~static/images/crossfit.jpg);
  background-size: cover;
  background-position: center;
  padding: 20px 10px;
  margin: 15px;
}

.flex1 span {
  color: white;
  display: block;
  text-align: center;
}

.flex2 {
  flex: 1;
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.751),
      rgba(128, 128, 128, 0.751)
    ),
    url(~static/images/about-us.jpg);
  background-size: cover;
  background-position: center;
  padding: 20px 10px;
  margin: 15px;
}

.flex2 span {
  color: white;
  display: block;
  text-align: center;
}

.flex3 {
  flex: 1;
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.751),
      rgba(128, 128, 128, 0.751)
    ),
    url(~static/images/body3.jpg);
  background-size: cover;
  background-position: center;
  padding: 20px 10px;
  margin: 15px;
}

.flex3 span {
  color: white;
  display: block;
  text-align: center;
}

@media (max-width: 75em) {
  .flex1 {
    margin: 5px;
  }
  .flex1 span {
    height: 45%;
  }
  .flex2 span {
    height: 45%;
  }
  .flex3 span {
    height: 45%;
  }
  .flex2 {
    margin: 5px;
  }
  .flex3 {
    margin: 5px;
  }
}

@media (max-width: 75em) {
  .showLG {
    display: none;
  }
}
@media (min-width: 75em) {
  .showXS {
    display: none;
  }
}
</style>
