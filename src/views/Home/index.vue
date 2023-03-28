<template>
  <div class="home">
    <List/>
  </div>
</template>

<script>
import List from "@/components/List";
export default {
  name: 'Home',
  components: {
    List,
  },
}
</script>

<style lang="scss" scoped>
@import "style.scss";
</style>
