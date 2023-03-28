<template>
  <div class="search">
    <v-text-field
        label="Search"
        single-line
        hide-details
        v-model="search"
    />
    <v-btn
        class="mx-2"
        fab
        dark
        small
        color="primary"
    >
      <v-icon @click="get">
        mdi-magnify
      </v-icon>
    </v-btn>
  </div>
</template>
<script>

export default {
  data: () => ({
    search: '',
  }),
  methods: {
    get(){
      this.$store.commit('packages/setLoading', true);
      this.$store.dispatch('packages/fetch', this.search)
          .finally(() =>  this.$store.commit('packages/setLoading', false));
    },
  }
}
</script>

<style lang="scss" scoped>
@import "style.scss";
</style>
