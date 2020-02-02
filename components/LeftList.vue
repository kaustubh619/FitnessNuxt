<template>
  <div>
    <ul v-if="ordered" style="margin-top: 20px; margin-bottom: 20px">
      <li
        v-for="(item, i) in items"
        :key="i"
        style="color: white; text-align: left"
      >
        {{ item }}
      </li>
    </ul>
    <ul v-if="!ordered" style="margin-top: 20px; margin-bottom: 20px">
      <li
        v-for="(item, i) in items"
        :key="i"
        style="color: white; text-align: left"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        ordered: this.data.data.style === 'ordered',
        items: this.data.data.items
      }
    }
  }
</script>

<style>
ul {
  list-style-type: disc;
}
</style>
