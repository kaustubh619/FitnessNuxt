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
          <li class="bullet">
            <nuxt-link to="/shop" class="link">Shop</nuxt-link>
          </li>
        </ul>
        <i class="fa fa-circle" aria-hidden="true"></i>
        <ul>
          <li class="bullet">Store</li>
        </ul>
      </div>
      <div class="row">
        <div class="col-12 col-sm-8">
          <div class="row mb-3">
            <img
              src="~static/images/menu.png"
              style="width: 20px; height: 20px; margin-right: 10px;"
            />
            <span class="text-white">Total {{ count }} results</span>
          </div>
          <div class="row">
            <div
              v-for="(x, y) in productList"
              :key="y"
              class="col-12 col-sm-6 col-lg-4 divheight"
            >
              <div>
                <div class="product2">
                  <img class="product" :src="imageURLs[y]" />
                  <div class="text-center product-name">
                    <p class="font showLG">
                      <span v-for="(i, j) in 40" :key="j">{{
                        x.product_name[j]
                      }}</span>
                      <span style="font-size: 1.6rem; line-height: 0rem;"
                        >...</span
                      >
                    </p>
                    <p class="font showXS">
                      <span v-for="(i, j) in 25" :key="j">{{
                        x.product_name[j]
                      }}</span>
                      <span style="font-size: 1.6rem; line-height: 0rem;"
                        >...</span
                      >
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
                    >
                      View Product
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row d-flex justify-content-center">
            <button @click="getPrevList" class="post_btn" id="btn-prev">
              <i class="fabtn fa fa-angle-double-left" aria-hidden="true"></i>
            </button>
            <button
              class="post_btn btn_mid"
              v-for="i in page_num"
              :key="i"
              @click="getProductList(i)"
            >
              {{ i }}
            </button>
            <button @click="getNextList" class="post_btn" id="btn-next">
              <i class="fabtn fa fa-angle-double-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <div class="col-12 col-sm-4 block-custom">
          <h6 class="text-white border_bottom">Categories</h6>
          <hr class="hrstyle1" />
          <div class="mt-4">
            <span
              style="font-size: 1rem; display: block; cursor: pointer"
              class="text-white"
              @click="getAllProducts"
            >
              All Products
              <img
                src="~static/images/long-arrow-pointing-up.png"
                style="float: right; width: 15px; padding-top: 10px;"
              />
              <hr class="hrstyle" />
            </span>
            <span
              style="font-size: 1rem; display: block; cursor: pointer"
              class="text-white"
              v-for="(item, i) in catList"
              :key="i"
              v-bind:id="item.id"
              @click="getProductsByCategory(item.id)"
            >
              {{ item.name }}
              <img
                src="~static/images/long-arrow-pointing-up.png"
                style="float: right; width: 15px; padding-top: 10px;"
              />
              <hr class="hrstyle" />
            </span>
          </div>
          <h6 class="text-white mt-5 border_bottom">Filter By Price</h6>
          <hr class="hrstyle1" />
          <div class="mt-4 row" style="margin: 0px">
            <div class="small-12 medium-2 columns">
              <span class="text-white">Min Price</span>
              <input type="number" id="sliderOutput1" />
            </div>
            <div class="small-12 medium-8 columns">
              <div
                class="slider"
                data-slider
                :data-initial-start="price_min"
                :data-start="price_start"
                :data-initial-end="price_max"
                :data-end="price_end"
                data-step="100"
              >
                <span
                  class="slider-handle"
                  data-slider-handle
                  role="slider"
                  tabindex="1"
                  aria-controls="sliderOutput1"
                ></span>
                <span class="slider-fill" data-slider-fill></span>
                <span
                  class="slider-handle"
                  data-slider-handle
                  role="slider"
                  tabindex="1"
                  aria-controls="sliderOutput2"
                ></span>
              </div>
            </div>
            <div class="small-12 medium-2 columns">
              <span class="text-white">Max Price</span>
              <input type="number" id="sliderOutput2" />
            </div>
          </div>
          <div class="row" style="margin: 0px">
            <button
              style="margin-left: auto; margin-right: auto;"
              class="btn btn-lg"
              @click="filterbyprice"
            >
              Filter Products
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        productList: [],
        count: '',
        imageURLs: [],
        nextLink: '',
        prevLink: '',
        catList: [],
        price: [],
        price_max: 0,
        price_min: 0,
        price_start: 0,
        price_end: 0,
        p1: 0,
        p2: 0,
        num1: 1,
        num2: 6,
        page_num: 0
      }
    },
    updated() {
      $('#sliderOutput1').val()
    },
    mounted() {
      this.getProductsWithPagination()
      this.getProductCategories()
    },
    methods: {
      getProductsWithPagination: function() {
        this.imageURLs = []
        this.$store.dispatch('getProductsWithPagination').then(res => {
          this.page_num = Math.ceil(res.data.count / 6)

          res.data.results.map(item => {
            this.price.push(parseInt(item.price))
          })
          this.price_min = Math.min(...this.price)
          this.price_max = Math.max(...this.price)
          this.price_end = Math.max(...this.price) + 1000

          setTimeout(function() {
            $(document).foundation()
          }, 100)
          this.productList = res.data.results.reverse()
          this.count = res.data.count
          res.data.results.map(item => {
            this.imageURLs.push(item.images.split(',')[0])
          })
          this.nextLink = res.data.next
          $('#btn-next').removeClass('hide-btn')
          $('#btn-prev').removeClass('hide-btn')
          $('.btn_mid').removeClass('hide-btn')
          $('#btn-prev').attr('disabled', true)
        })
      },

      getAllProducts: function() {
        this.getProductsWithPagination()
        $('#btn-next').attr('disabled', false)
      },

      getProductList: function(i) {
        this.imageURLs = []
        if (i == 1) {
          axios({
            method: 'GET',
            url: 'http://mytruestrength.com/backend/product_pagination'
          }).then(res => {
            this.prevLink = res.data.previous
            this.nextLink = res.data.next
            this.productList = res.data.results
            res.data.results.map(item => {
              this.imageURLs.push(item.images.split(',')[0])
            })
            if (i === 1) {
              $('#btn-next').attr('disabled', false)
              $('#btn-prev').attr('disabled', true)
            } else {
              $('#btn-next').attr('disabled', false)
              $('#btn-prev').attr('disabled', false)
            }
          })
        } else {
          axios({
            method: 'GET',
            url:
              'http://mytruestrength.com/backend/product_pagination?offset=' +
              (i - 1) * 6
          }).then(res => {
            this.prevLink = res.data.previous
            this.nextLink = res.data.next
            this.productList = res.data.results
            res.data.results.map(item => {
              this.imageURLs.push(item.images.split(',')[0])
            })
            if (i === this.page_num) {
              $('#btn-next').attr('disabled', true)
              $('#btn-prev').attr('disabled', false)
            } else {
              $('#btn-next').attr('disabled', false)
              $('#btn-prev').attr('disabled', false)
            }
          })
        }
      },

      getNextList: function() {
        this.imageURLs = []
        $('#btn-prev').attr('disabled', false)

        axios({
          method: 'GET',
          url: this.nextLink
        }).then(res => {
          this.prevLink = res.data.previous
          this.nextLink = res.data.next
          this.productList = res.data.results
          this.count = res.data.results.length
          res.data.results.map(item => {
            this.imageURLs.push(item.images.split(',')[0])
          })
          if (res.data.next === null) {
            $('#btn-next').attr('disabled', true)
          }
        })
      },

      getPrevList: function() {
        this.imageURLs = []
        $('#btn-next').attr('disabled', false)
        axios({
          method: 'GET',
          url: this.prevLink
        }).then(res => {
          this.prevLink = res.data.previous
          this.nextLink = res.data.next
          this.productList = res.data.results
          this.count = res.data.results.length
          res.data.results.map(item => {
            this.imageURLs.push(item.images.split(',')[0])
          })
          if (res.data.previous === null) {
            $('#btn-prev').attr('disabled', true)
          }
        })
      },

      getProductCategories: function() {
        this.$store.dispatch('getProductCategories').then(res => {
          this.catList = res.data
        })
      },

      getProductsByCategory: function(id) {
        this.imageURLs = []
        this.$store.dispatch('getProductsByCategory', id).then(res => {
          this.productList = res.data
          this.count = res.data.length
          res.data.map(item => {
            this.imageURLs.push(item.images.split(',')[0])
          })
        })
        $('#btn-next').addClass('hide-btn')
        $('#btn-prev').addClass('hide-btn')
        $('.btn_mid').addClass('hide-btn')
        $('#btn-next').attr('disabled', false)
      },

      filterbyprice: function() {
        this.p1 = $('#sliderOutput1').val() - 1
        this.p2 = $('#sliderOutput2').val() + 1
        this.$store.dispatch('getProductsAll').then(res => {
          const productObj = []
          this.productList = []
          this.imageURLs = []
          res.data.map(item => {
            if (item['price'] >= this.p1 && item['price'] <= this.p2) {
              this.productObj = item
              this.productList.push(this.productObj)
              this.count = this.productList.length
              this.imageURLs.push(item.images.split(',')[0])
            }
          })
        })
        $('#btn-next').addClass('hide-btn')
        $('#btn-prev').addClass('hide-btn')
        $('.btn_mid').addClass('hide-btn')
        $('#btn-next').attr('disabled', false)
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

.buybtn {
  margin-top: -25px !important;
}

.btn {
  background-color: #f1be03;
  color: white;
  border-radius: 3px;
  font-size: 1rem;
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

.block-custom {
  background-color: #353535;
  padding: 20px 40px;
  height: auto;
  margin-top: 38px;
}

@media (max-width: 75em) {
  .block-custom {
    margin-top: 18px;
    padding: 10px;
  }
}

.hrstyle1 {
  border: 0;
  height: 1px;
  background: grey;
  margin-top: -9px;
}

.hrstyle {
  border: 0;
  height: 1px;
  background: grey;
}

.border_bottom:after {
  content: ''; /* This is necessary for the pseudo element to work. */
  display: block; /* This will put the pseudo element on its own line. */
  width: 20%; /* Change this to whatever width you want. */
  padding-top: 10px; /* This creates some space between the element and the border. */
  border-bottom: 3px solid #f1be03; /* This creates the border. Replace black with whatever color you want. */
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

@media screen and (min-width: 40em) {
  .medium-2 {
    width: 80px;
  }
}

@media screen and (max-width: 40em) {
  .medium-2 {
    width: 100px;
  }
}

.column:last-child:not(:first-child),
.columns:last-child:not(:first-child) {
  position: absolute;
  right: 11%;
}

@media (max-width: 75em) {
  .column:last-child:not(:first-child),
  .columns:last-child:not(:first-child) {
    position: absolute;
    right: 10px;
  }
}

@media screen and (min-width: 40em) {
  .medium-8 {
    width: 100%;
  }
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
  margin: 0px;
  background-color: transparent;
  color: white;
  border-radius: 5px;
  border: 1px solid #f1be03;
}

@media screen and (min-width: 40em) {
  .medium-8[data-v-d9f81b8a] {
    margin-bottom: -15px;
  }
}

@media screen and (max-width: 40em) {
  .medium-8[data-v-d9f81b8a] {
    margin-bottom: -15px;
  }
}

@media screen and (min-width: 40em) {
  .column,
  .columns {
    padding: 0px;
  }
}

.hide-btn {
  display: none;
}

.slider-handle {
  background-color: #f1be03;
  border-radius: 50%;
  width: 13px;
  height: 13px;
}

.slider-handle:focus {
  outline: none;
}

.slider {
  height: 3px;
  background-color: grey;
}

.slider-fill {
  height: 3px;
  background-color: #f1be03;
}

ol,
ul {
  margin-left: 0px;
}
</style>
