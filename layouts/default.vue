<template>
  <div>
    <Header/>
    <nuxt />
    <Footer/>
  </div>
</template>
<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
export default {
  components:{
    Header,Footer
  }
}
</script>
<style>



hr {
  height: 1px;
  border: none;
  color: #000;
  background-color: #000;
}


/* #__layout{
  overflow: hidden;
} */

.navbar-padding {
  padding-top: 60px;
}

.no-padd {
  padding: 0 !important;
}

@font-face {
  font-family: "Light";
  src: url("~static/Bender/Jovanny Lemonad - Bender.otf");

  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Bold";
  src: url("~static/Bender/Jovanny Lemonad - Bender-Bold.otf");

  font-weight: bold;
  font-style: normal;
}
@font-face {
  font-family: "Italics";
  src: url("~static/Bender/Jovanny Lemonad - Bender-Italic.otf");

  font-weight: normal;
  font-style: normal;
}

* {
  margin: 0;
  padding: 0;
}

html,
body,
button,
input,
select,
textarea {
  font-family: "Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif !important;
}
html {
  font-family: "Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

html,
body {
  overflow-x: hidden;
  min-width: 360px;
  background-color:#242424;
}

.h-100 {
  height: 100%;
}

p{
  margin-bottom: initial
}

.w-100 {
  width: 100%;
}

.underline span {
  position: relative;
  width: 100%;
}

.underline {
  padding: 14px 0;
}

.underline span::after {
  /* border-bottom: 3px solid #4a4a4a;
  height: 54px;
  width: 10%;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  content: ""; */

  height: 4px;
  width: 78px;
  position: absolute;
  left: 0;
  bottom: -15px;
  margin: auto;
  content: "";
  background: #11998e; /* fallback for old browsers */
  background: linear-gradient(to right, #008494, #11998e);
}

.underline.right span::after {
  height: 4px;
  width: 78px;
  position: absolute;
  right: 0 !important;
  left: initial;
  bottom: -15px;
  margin: auto;
  z-index: -1;
  content: "";
  background: #11998e;
  background: linear-gradient(to right, #008494, #11998e);
}

.underline span.white::after {
  border-bottom: 3px solid white;
}

.hide {
  display: none;
}

.opacity-hide {
  opacity: 0;
  visibility: hidden;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.flex {
  display: flex;
}

.justify-space-between {
  justify-content: space-between;
}


.align-items-center {
  align-items: center;
}

.btn{
  border-radius: 0
}

ul {
  list-style: none;
  padding-inline-start: 0;
}

/* [type="radio"]:checked,
[type="radio"]:not(:checked) {
  position: absolute;
  left: -9999px;
}
[type="radio"]:checked + label {
  position: relative;
  padding: 0px 28px;
  /*padding: 3px 7px 3px 22px;
  cursor: pointer;
  font-size: 12px;
  line-height: 23px;
  display: inline-block;
  color: #000;
  font-weight: bold;
  letter-spacing: 0.2px;
}

[type="radio"]:not(:checked) + label {
  position: relative;
  padding: 0px 28px;
  cursor: pointer;
  font-size: 12px;
  line-height: 23px;
  display: inline-block;
  color: #000;
  font-weight: bold;
  letter-spacing: 0.2px;
}
[type="radio"]:checked + label:before,
[type="radio"]:not(:checked) + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 18px;
  height: 18px;
  border: 1px solid #ddd;
  border-radius: 100%;
  background: #fff;
}
[type="radio"]:checked + label:after,
[type="radio"]:not(:checked) + label:after {
  content: "";
  width: 12px;
  height: 12px;
  background: #1f1f1f;
  position: absolute;
  top: 3px;
  left: 3px;
  border-radius: 100%;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
[type="radio"]:not(:checked) + label:after {
  opacity: 0;
  -webkit-transform: scale(0);
  transform: scale(0);
}
[type="radio"]:checked + label:after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
} */

label {
  font-size: 12px;
  font-weight: bold;
  color: white 
}

input[type="text"],
input[type="email"] {
  outline: 0;
  border: 0;
  padding: 10px;
  border-radius: 2px;
}

/* appearance for checked radiobutton */
input[type="radio"]:checked {
      background: #FFC107;
    /* color: red; */
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: inline-block;
    background-clip: content-box;
    border: 2px solid #FFEB3B;
    /* background-color: #e7e6e7; */
    border-radius: 50%;
        margin-right: 5px;
}
/* appearance for checked radiobutton */
input[type="radio"] {
      background: #1e1e1e;
    /* color: red; */
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: inline-block;
    width: 12px;
    height: 12px;
    padding: 1px;
    background-clip: content-box;
    border: 2px solid #FFEB3B;
    /* background-color: #e7e6e7; */
    border-radius: 50%;
        margin-right: 5px;
}
</style>