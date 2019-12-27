<template>
  <div style="top: 25%;">
    <div class="container calc" style="padding: 20px 20px 40px;width: 300px">
      <form action>
        <p class="text">BMR Calculator</p>
        <p class="text2" style="padding: 15px 0">It will calculate your Basal Metabolic Rate (BMR)</p>
        <input type="text" class="form-control" v-model="age" placeholder="Your age" />

        <div class="form-group" style="margin-bottom: 0">
          <label class="parent-label" for="usr">
            Gender:
            <div style="display:flex">
              <label class="radio-inline">
                <input type="radio" name="gender" v-model="gender" value="1" />Male
              </label>
              <label class="radio-inline">
                <input type="radio" name="gender" v-model="gender" value="2" />Female
              </label>
            </div>
          </label>
        </div>

        <div class="form-group">
          <label class="parent-label" for="usr">
            Your height:
            <div style="display:flex">
              <label class="radio-inline">
                <input type="radio" name="height" v-model="height" value="1" />feet/inch
              </label>
              <label class="radio-inline">
                <input type="radio" name="height" v-model="height" value="2" />cm
              </label>
            </div>
          </label>

          <div class="d-flex">
            <input
              class="form-control"
              v-if="height == 1"
              type="text"
              placeholder="feet/inch"
              v-model="height_value"
            />
            <input
              class="form-control"
              v-if="height == 1"
              placeholder="inch"
              type="text"
              v-model="height_value_inch"
            />
            <input
              class="form-control"
              v-if="height == 2"
              type="text"
              placeholder="cm"
              v-model="height_value_inch"
            />
          </div>
        </div>

        <div class="form-group" style="margin-bottom: 30px">
          <label class="parent-label" for="usr">
            Your weight:
            <div style="display:flex">
              <label class="radio-inline">
                <input type="radio" name="weight" v-model="weight" value="1" />lbs
              </label>
              <label class="radio-inline">
                <input type="radio" name="weight" v-model="weight" value="2" />kg
              </label>
            </div>
          </label>
          <input type="text" class="form-control" v-model="weight_value" placeholder="lbs" />
        </div>

        <button
          class="btn btn-warning"
          type="button"
          style="width: 100%; text-transform: uppercase; font-weight: bold; font-family: Italics!important"
          id="button2"
          @click="closeMenuShowLogin"
        >What is your bmr?</button>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      age: 0,
      gender: 1,
      height: 1,
      weight: 1,
      bmr: 0,
      height_value: 0,
      weight_value: 0,
      height_value_inch: 0
    };
  },

  watch: {
    age: function(val) {
      console.log("ssssss");
      console.log(val);
      if (val == "") {
        val = 0;
      }
      this.age = parseInt(val);
      this.calculate();
    },
    gender: function(val) {
      this.gender = parseInt(val);
      this.calculate();
    },

    height: function(val) {
      this.height = parseInt(val);
      this.calculate();
    },

    weight: function(val) {
      this.weight = parseInt(val);

      this.calculate();
    },

    height_value: function(val) {
      if (val == "") {
        val = 0;
      }
      this.height_value = parseFloat(val);
      this.calculate();
    },

    height_value_inch: function(val) {
      if (val == "") {
        val = 0;
      }
      this.height_value_inch = parseFloat(val);
      this.calculate();
    },

    weight_value: function(val) {
      if (val == "") {
        val = 0;
      }
      this.weight_value = parseFloat(val);
      this.calculate();
    }
  },
  methods: {
    closeMenuShowLogin: function() {
      $(".mobile-nav").addClass("opacity-hide");
      $(".nav").removeClass("animation");
      this.$store.commit('showLogin', true)
    },

    calculate: function() {
      switch (this.gender) {
        case 1: //male
          console.log("changed");

          var weight = this.weight_value,
            height = this.height_value;

          if (this.height == 1) {
            height = this.height_value * 30.48;
            // console.log("this.height_value_inch * 2.54")
            // console.log(this.height_value_inch * 2.54)
            // console.log(this.height_value * 30.48)
            // console.log(this.height_value * 30.48 + this.height_value_inch * 2.54)
          }

          if (this.weight == 1) {
            weight = this.weight_value * 0.453592;
          }

          console.log(weight);
          console.log(height);

          this.bmr = 10 * weight + 6.25 * height - 5 * this.age + 5;
          localStorage.setItem('bmr_male', this.bmr)
          break;
        case 2:
          console.log("changed");

          var weight = this.weight_value,
            height = this.height_value;

          if (this.height == 1) {
            height = this.height_value * 30.48;
            // console.log("this.height_value_inch * 2.54")
            // console.log(this.height_value_inch * 2.54)
            // console.log(this.height_value * 30.48)
            // console.log(this.height_value * 30.48 + this.height_value_inch * 2.54)
          }

          if (this.weight == 1) {
            weight = this.weight_value * 0.453592;
          }

          console.log(weight);
          console.log(height);

          this.bmr = 10 * weight + 6.25 * height - 5 * this.age - 161;
          break;
          break;
      }

      console.log(this.bmr);
    }
  }
};
</script>

<style scoped>
.text {
  /* width: 324px;
  height: 36px;
  font-family: Bender; */
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.12;
  letter-spacing: 6.6px;
  text-align: left;
  /* color: #ffffff; */
}
.text2 {
  /* width: 334px;
  height: 65px;
  font-family: Bender; */
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: left;
  color: rgba(255, 255, 255, 0.8);
}
label {
  font-size: 10px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: 0.72px;
  text-align: left;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0;
}

.parent-label {
  padding: 10px 0;
  font-size: 13px;
}

.btn {
  border-radius: 0;
}

input[type="text"] {
  height: 30px;
  border-radius: 0;
  font-size: 13px;
}

p {
  color: white;
}

.calc {
  border-radius: 5px;
  background-color: #1e1e1e;
}

.radio-inline {
  display: flex;
  align-items: center;
  margin-left: 10px;
}
</style>