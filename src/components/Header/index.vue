<template>
  <div>
    <v-app-bar
        color="secondary"

        dark
    >

      <v-toolbar-title>Test app on Vue.js</v-toolbar-title>

      <v-spacer></v-spacer>

      <Search/>

    </v-app-bar>
  </div>
</template>

<script>
import Search from "@/components/Search";
export default {
  name: 'Header',
  components: {
    Search
  }
}
</script>

<style lang="scss" scoped>
@import "style";
</style>
