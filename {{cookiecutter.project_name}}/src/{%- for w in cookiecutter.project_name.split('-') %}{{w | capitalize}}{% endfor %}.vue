{% raw -%}
<template>
  <div>Hello, {{text}}!</div>
</template>

<script>
export default {
  data () {
    return {
      text: "Vue.js"
    }
  }
}
</script>

<style scoped>
  div { text-weight: bold; }
</style>
{%- endraw %}
