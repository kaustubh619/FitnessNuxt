<template>
  <div>
    <div class="container">
      <div class="row" style="margin-top: 15vh;">
        <p class="fontp col-xs-12">
          Basal
          <span style="color: rgba(30, 173, 203, 0.7)">Metabolic</span> Rate
          Calculator
        </p>
      </div>
      <div class="row" style="margin: 0px; margin-bottom: 20px">
        <div class="col-xs-12 col-lg-6 bmr-card" style="padding: 0px">
          <!-- <form> -->
          <div class="form-inline">
            <div class="element">
              <img src="~static/images/scale@3x.png" class="scale" />
            </div>
            <span class="attr">Height</span>
            <input type="number" id="cm" class="attr-input" v-model="cm" />
            <label for="cm">CM</label>
          </div>
          <div class="form-inline">
            <div class="element">
              <img src="~static/images/weight-balance@3x.png" class="scale" />
            </div>
            <span class="attr">Weight</span>
            <input type="number" id="kg" class="attr-input" v-model="kg" />
            <label for="feet">KG</label>
          </div>
          <div class="form-inline">
            <div class="element">
              <img src="~static/images/age.png" class="scale" />
            </div>
            <span class="attr">Age</span>
            <input type="number" id="age" class="attr-input" v-model="age" />
            <label for="age">Years</label>
          </div>

          <div class="form-inline">
            <div class="element">
              <img src="~static/images/gender.png" class="scale" />
            </div>
            <span class="attr">Gender</span>
            <input
              type="radio"
              style="margin-left: 30px; margin-top: 17px;"
              name="gender"
              value="M"
            />
            <span style="color:white;">Male</span>
            <input
              type="radio"
              style="margin-left: 20px; margin-top: 17px;"
              name="gender"
              value="F"
            />
            <span style="color:white;">Female</span>
          </div>

          <!-- </form> -->
          <div
            v-if="bool2"
            style="display: flex; flex-flow: row wrap; justify-content: center; 
          margin-top: 20px; color: white; border: 1px solid #39b6ff; margin-left: 10%; 
          width: 80%; padding: 6px; border-radius: 5px;"
          >
            <i
              class="fa fa-heartbeat"
              style="font-size: 28px; padding-top: 4px; margin-right: 10px"
            ></i>
            <span style="font-size: 15px;"
              >RESULT
              <span
                style="font-size: 25px; margin-left: 6px; margin-right: 6px"
                >{{ BMR }}</span
              >
              CALORIES</span
            >
          </div>
          <button class="calc-button" @click="calculateBMR">
            Calculate Your BMR
          </button>
        </div>
        <div class="col-xs-12 col-lg-6  bmr-card2" style="padding: 0px">
          <div v-if="bool" style="padding: 40px">
            <p style="color: #D8D8D8">
              Your <span style="color: #98F5FF">body</span> will burn
              <span style="color: #98F5FF">{{ BMR }}</span> calories each day if
              you engage in no activity for that day.
            </p>

            <p style="color: #D8D8D8">
              The <span style="color: #98F5FF">estimate</span> for maintaining
              your current <span style="color: #98F5FF">weight</span> (based
              upon your activity level) is:
            </p>
            <table>
              <tr>
                <th>Activity Level</th>
                <th>Calories</th>
              </tr>
              <tr>
                <td>
                  <span style="color: #98F5FF">Sedentary</span> (little or no
                  exercise)
                </td>
                <td>{{ sedentary }}</td>
              </tr>
              <!-- <tr>
              <td>
                Lightly active (light exercise or sports 1-3 days per week)
              </td>
              <td>Francisco Chang</td>
            </tr> -->
              <tr>
                <td>
                  <span style="color: #98F5FF">Moderately active</span>
                  (moderate exercise or sports 3-5 days per week)
                </td>
                <td>{{ moderate }}</td>
              </tr>
              <!-- <tr>
              <td>Highly active (hard exercise or sports 6-7 days per week)</td>
              <td>Helen Bennett</td>
            </tr> -->
              <tr>
                <td>
                  <span style="color: #98F5FF">Super athletic</span> (very hard
                  exercise or sports and a physical job)
                </td>
                <td>{{ high }}</td>
              </tr>
            </table>

            <p style="color: #D8D8D8">
              This
              <span style="color: #98F5FF"
                ><i class="fa fa-calculator"></i>&nbsp;calculation</span
              >
              used the
              <span style="color: #98F5FF">Harris-Benedict</span> equation.
            </p>
          </div>
          <div v-else class="back-img"></div>
          <!-- <form> -->
          <button class="calc-button2" @click="resetForm">
            <img src="~static/images/refresh.png" style="width: 20px" /> Reset
          </button>
          <!-- </form> -->
        </div>
      </div>
    </div>
    <div class="mt-5 container" v-if="bool3">
      <div style="margin-bottom: 40px;">
        <p class="fontp left-margin-lg" style="text-align: center;">
          Suggested
          <span class="yellow-text">Subscription</span> Plans
        </p>
      </div>
      <div class="row w-100" style="margin: 0px;">
        <div
          class="col-12 offset-lg-2 col-lg-8"
          style="margin-bottom: 20px; padding: 0px"
          v-for="(x, y) in suggested_plans"
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
                Subscribe Today
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div style="margin-bottom: 40px;">
        <p class="fontp left-margin-lg" style="text-align: center;">
          Other
          <span class="yellow-text">Subscription</span> Plans
        </p>
      </div>
      <div class="row w-100" style="margin: 0px;">
        <div
          class="col-12 offset-lg-2 col-lg-8"
          style="margin-bottom: 20px; padding: 0px"
          v-for="(i, j) in otherPlans"
          :key="j"
        >
          <div class="pad black text-center">
            <div>
              <p class="font" style="font-size:32px">{{ i.title }}</p>
              <p class="font" style="font-size:32px">₹ {{ i.cost }} / MONTH</p>
            </div>
            <div style="text-center">
              <div v-for="(item, i) in JSON.parse(i.plan_features)" :key="i">
                <post-list v-if="item.type === 'list'" :data="item" />
              </div>
            </div>
            <div class="w-100 padrl">
              <button
                type="button"
                class="btn btn-lg w-100"
                style="margin-top:20px "
              >
                Subscribe Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-5 container" v-else>
      <div style="margin-bottom: 40px;">
        <p class="fontp left-margin-lg" style="text-align: center;">
          <span class="yellow-text">Subscription</span> Plans
        </p>
        <p class="fontp left-margin-lg" style="text-align: center;">
          Please calculate your <span class="yellow-text">BMR</span> to get
          suggested <span class="yellow-text">Plans</span>
        </p>
      </div>
      <div class="row w-100" style="margin: 0px;">
        <div
          class="col-12 offset-lg-2 col-lg-8"
          style="margin-bottom: 20px; padding: 0px"
          v-for="(x, y) in allPlans"
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
                Subscribe Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <h4 style="text-align: center; color: white; margin-top: 30px">
      Your last 6 calculated <span class="yellow-text">BMR</span> values
    </h4>
    <div
      class="line-chart"
      style="display: block; margin-left: auto; margin-right:auto"
    >
      <div class="aspect-ratio">
        <canvas id="chart"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
  import PostList from '~/components/List.vue'

  export default {
    middleware: 'auth',
    data() {
      return {
        cm: '',
        kg: '',
        age: '',
        BMR: '',
        bool: false,
        sedentary: '',
        moderate: '',
        high: '',
        bool2: false,
        suggested_plans: [],
        otherPlans: [],
        allPlans: [],
        bool3: false,
        x_axis: [],
        y_axis: []
      }
    },

    components: {
      PostList
    },

    mounted() {
      this.suggested_plans = []
      this.otherPlans = []
      this.allPlans = []
      this.getUserDetails()
      this.chart()
    },

    updated() {
      if ($('#cm').val() > 999) {
        $('#cm').val('')
      }
      if ($('#kg').val() > 999) {
        $('#kg').val('')
      }
      if ($('#age').val() > 999) {
        $('#age').val('')
      }
    },

    methods: {
      calculateBMR: function() {
        this.suggested_plans = []
        this.otherPlans = []
        this.allPlans = []
        this.$store.dispatch('getPlans').then(response => {
          this.allPlans = response.data
        })
        if ($("input[type='radio']:checked").val() === 'M') {
          this.BMR = 66.5 + 13.75 * this.kg + 5.003 * this.cm - 6.755 * this.age
          this.BMR = Math.round(this.BMR)
        } else {
          this.BMR = 655.1 + 9.563 * this.kg + 1.85 * this.cm - 4.676 * this.age
          this.BMR = Math.round(this.BMR)
        }
        var payload = new FormData()
        payload.append('id', localStorage.getItem('user_id'))
        const gender_value = $("input[name='gender']:checked").val()
        payload.append('gender', gender_value)
        payload.append('height', Math.round(this.cm))
        payload.append('weight', Math.round(this.kg))
        payload.append('age', Math.round(this.age))
        payload.append('bmr_value', this.BMR)
        if (this.cm === '' || this.kg === '' || this.age === '') {
          this.bool = false
          this.bool2 = false
          this.bool3 = false
        } else {
          this.$store.dispatch('calculateBMR', payload).then(res => {
            this.getUserDetails()
          })
          var payload_new = new FormData()
          payload_new.append('user', localStorage.getItem('user_id'))
          const date_added = new Date()
          const day = date_added.getDate()
          const month = date_added.getMonth() + 1
          const year = date_added.getFullYear()
          const added_dated = year + '-' + month + '-' + day
          payload_new.append('date_time', added_dated)
          payload_new.append('bmr_value', this.BMR)
          this.$store.dispatch('PostBMR', payload_new).then(res => {
            this.chart()
          })
        }
      },

      resetForm: function() {
        this.bool = false
        this.bool2 = false
        this.bool3 = false
        this.suggested_plans = []
        this.otherPlans = []
        this.cm = ''
        this.age = ''
        this.kg = ''
        setTimeout(function() {
          $('#cm').val('')
          $('#kg').val('')
          $('#age').val('')
          $("input[name='gender']").val([''])
        }, 100)
        this.$store.dispatch('getPlans').then(response => {
          this.allPlans = response.data
        })
      },

      getUserDetails: function() {
        this.suggested_plans = []
        this.otherPlans = []
        this.allPlans = []
        var payload = new FormData()
        payload.append('id', localStorage.getItem('user_id'))

        this.$store.dispatch('getUserDetails', payload).then(res => {
          if (res.data.bmr_value != 0 && res.data.gender === 'M') {
            this.$store.dispatch('getPlans').then(response => {
              var planArray = response.data

              this.suggested_plans = planArray.filter(function(el) {
                return (
                  el.min_BMR_male < res.data.bmr_value &&
                  res.data.bmr_value < el.max_BMR_male
                )
              })
              this.otherPlans = planArray.filter(function(el) {
                return (
                  el.min_BMR_male > res.data.bmr_value ||
                  res.data.bmr_value > el.max_BMR_male
                )
              })

              this.bool3 = true
            })
          } else if (res.data.bmr_value != 0 && res.data.gender === 'F') {
            this.$store.dispatch('getPlans').then(response => {
              var planArray = response.data
              this.suggested_plans = planArray.filter(function(el) {
                return (
                  el.min_BMR_female < res.data.bmr_value &&
                  res.data.bmr_value < el.max_BMR_female
                )
              })
              this.otherPlans = planArray.filter(function(el) {
                return (
                  el.min_BMR_female > res.data.bmr_value ||
                  res.data.bmr_value > el.max_BMR_female
                )
              })

              this.bool3 = true
            })
          } else {
            this.$store.dispatch('getPlans').then(response => {
              this.allPlans = response.data
            })
          }

          if (res.data.height !== null) {
            this.cm = res.data.height
          }
          if (res.data.weight !== null) {
            this.kg = res.data.weight
          }
          if (res.data.age !== null) {
            this.age = res.data.age
          }
          if (res.data.gender !== null) {
            $("input[name='gender']").val([res.data.gender])
          }

          this.BMR = res.data.bmr_value

          if (res.data.bmr_value != 0) {
            this.sedentary = Math.round(res.data.bmr_value * 1.2)
            this.moderate = Math.round(res.data.bmr_value * 1.55)
            this.high = Math.round(res.data.bmr_value * 1.899)
            this.bool2 = true
            this.bool = true
          }
        })
      },

      chart: function() {
        var payload = new FormData()
        payload.append('id', localStorage.getItem('user_id'))
        this.$store.dispatch('bmrValues', payload).then(res => {
          this.x_axis = []
          this.y_axis = []
          res.data
            .reverse()
            .splice(0, 6)
            .map(item => {
              this.y_axis.push(item.bmr_value)
              this.x_axis.push(item.date_time)

              var chart = document.getElementById('chart').getContext('2d'),
                gradient = chart.createLinearGradient(0, 0, 0, 450)
              gradient.addColorStop(0, 'rgba(57, 182, 255, 0.5)')
              gradient.addColorStop(0.5, 'rgba(57, 182, 255, 0.25)')
              gradient.addColorStop(1, 'rgba(57, 182, 255, 0)')

              var data = {
                labels: this.x_axis,
                datasets: [
                  {
                    label: 'BMR',
                    backgroundColor: gradient,
                    pointBackgroundColor: 'white',
                    borderWidth: 1,
                    borderColor: '#911215',
                    data: this.y_axis
                  }
                ]
              }

              var options = {
                responsive: true,
                maintainAspectRatio: true,
                animation: {
                  easing: 'easeInOutQuad',
                  duration: 520
                },
                scales: {
                  xAxes: [
                    {
                      gridLines: {
                        color: 'rgba(30, 173, 203, 0.05)',
                        lineWidth: 1
                      }
                    }
                  ],
                  yAxes: [
                    {
                      gridLines: {
                        color: 'rgba(30, 173, 203, 0.05)',
                        lineWidth: 1
                      }
                    }
                  ]
                },
                elements: {
                  line: {
                    tension: 0.4
                  }
                },
                legend: {
                  display: false
                },
                point: {
                  backgroundColor: 'white'
                },
                tooltips: {
                  titleFontFamily: 'Open Sans',
                  backgroundColor: 'rgba(30, 173, 203, 0.3)',
                  titleFontColor: 'red',
                  caretSize: 5,
                  cornerRadius: 2,
                  xPadding: 10,
                  yPadding: 10
                }
              }

              var chartInstance = new Chart(chart, {
                type: 'line',
                data: data,
                options: options
              })
            })
        })
      }
    }
  }
</script>

<style>
.fontp {
  font-size: 25px;
  font-style: italic;
  font-weight: 900;
  background-color: #242424;
  color: white;
  margin-left: auto;
  margin-right: auto;
}

.element {
  width: 70px;
  height: 70px;
  box-shadow: 0 3px 6px 0 rgba(30, 173, 203, 0.7);
  background-color: #292d39;
  border-radius: 50%;
  display: inline-block;
}

.scale {
  margin: 20px;
  margin-top: 18px;
  width: 30px;
}

@media (max-width: 37.5em) {
  .element {
    width: 50px;
    height: 50px;
  }
  .scale {
    width: 20px;
    margin: 15px;
  }
}

.attr {
  color: white;
  margin-left: 20px;
}

.custom-input {
  background: transparent;
}

.form-inline {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 20px;
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
  display: inline-block;
  width: 90px;
}

.attr-input {
  background: transparent;
  border: none;
  border-bottom: 1px solid grey;
  margin-left: 30px;
  margin-right: 15px;
  padding: 10px 20px;
  padding-right: 0px;
  padding-bottom: 1px;
  color: white;
  font-weight: 300;
  font-size: 30px;
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

label {
  font-size: 20px;
  font-weight: 300;
}

.attr-input:focus {
  background: transparent;
  border: none;
  border-bottom: 1px solid grey;
  box-shadow: none;
  color: white;
  font-size: 30px;
}

input[type='radio'] {
  border: 2px solid rgba(30, 173, 203, 0.7);
}

input[type='radio']:checked {
  background: rgba(30, 173, 203, 0.7);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: inline-block;
  background-clip: content-box;
  border: 2px solid rgba(30, 173, 203, 0.7);
  border-radius: 50%;
  margin-right: 5px;
  outline: none;
}

.bmr-card {
  width: 100%;
  min-height: 520px;
  border-radius: 5px;
  box-shadow: 0 3px 8px 0 rgba(62, 100, 146, 0.16);
  background-color: #292d39;
}

.bmr-card2 {
  width: 100%;
  min-height: 500px;
  border-radius: 5px;
  box-shadow: 0 3px 8px 0 rgba(62, 100, 146, 0.16);
  background-color: #292d39;
}

@media (max-width: 37.5em) {
  .bmr-card2 {
    min-height: 750px;
  }
}

.calc-button {
  background-image: linear-gradient(
    to top,
    rgba(76, 132, 255, 0.68),
    #39b6ff 6%
  );
  padding: 15px 30px;
  color: white;
  font-size: 18px;
  width: 100%;
  height: 60px;

  border-right: 1px solid white;
  position: absolute;
  bottom: 0;
}

@media (max-width: 75em) {
  .calc-button {
    border-right: 0px solid black;
  }
}

.calc-button:hover {
  background-image: linear-gradient(
    to top,
    rgba(76, 132, 255, 0.68),
    #39b692 6%
  );
}

.calc-button2 {
  background-image: linear-gradient(
    to top,
    rgba(76, 132, 255, 0.68),
    #39b6ff 6%
  );
  padding: 15px 30px;
  color: white;
  font-size: 18px;
  width: 100%;
  height: 60px;
  position: absolute;
  bottom: 0;
}

.calc-button2:hover {
  background-image: linear-gradient(
    to top,
    rgba(76, 132, 255, 0.68),
    #39b692 6%
  );
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  color: #d8d8d8;
  margin-top: 20px;
}

td,
th {
  border: 1px solid #39b6ff;
  text-align: left;
  padding: 8px;
}
@media (max-width: 37.5em) {
  .fontp {
    font-size: 22px;
  }
}

.back-img {
  height: 100%;
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.301),
      rgba(106, 171, 233, 0.201)
    ),
    url('~static/images/bmr-back.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  animation: back_animate 2s ease-in;
  animation-fill-mode: forwards;
}

@media (min-width: 1666px) {
  .left-margin-lg {
    margin-left: -25px;
  }
}

.yellow-text {
  color: #39b6ff;
}

@media (max-width: 75em) {
  .h_col {
    height: 360px;
  }
}

.pad {
  padding: 13px 0;
}

@media (max-width: 37.5em) {
  .pad {
    padding: 6px 0;
  }
}

.black {
  background-color: black;
  padding: 30px 40px;
}

.font {
  color: #ffffff;
}

.btn {
  background-color: #39b6ff;
  color: black;
  font-size: 20px;
}

.btn:hover {
  background-color: white;
}

.line-chart {
  -webkit-animation: fadeIn 600ms cubic-bezier(0.57, 0.25, 0.65, 1) 1 forwards;
  animation: fadeIn 600ms cubic-bezier(0.57, 0.25, 0.65, 1) 1 forwards;
  opacity: 0;
  max-width: 640px;
  width: 100%;
}

.aspect-ratio {
  height: 0;
  padding-bottom: 50%;
}

@-webkit-keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
</style>