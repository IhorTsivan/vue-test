<template>
  <div class="skeleton">
    <v-skeleton-loader
        v-bind="attrs"
        type="card-heading, sentences, button"
    ></v-skeleton-loader>
    <v-skeleton-loader
        v-bind="attrs"
        type="card-heading, sentences, button"
    ></v-skeleton-loader>
    <v-skeleton-loader
        v-bind="attrs"
        type="card-heading, sentences, button"
    ></v-skeleton-loader>
  </div>
</template>

<script>
export default {
  data:()=>({
    attrs: {
      elevation: 1,
      minHeight: 186,
      width: 300,
    },
  })
}
</script>

<style lang="scss" scoped>
@import "style.scss";
</style>
