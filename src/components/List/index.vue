<template>
  <div class="list">
    <SkeletonLoader v-if="loading"/>
    <template v-else-if="visibleItems.length">
      <Item
          v-for="({type, name, version, links}, index) in visibleItems"
          :key="index"
          :name="name"
          :type="type"
          :version="version"
          @showDetail="showDetail(links, version)"
      />
      <v-pagination
          v-if="totalItems"
          v-model="page"
          :length="pageCount"
      ></v-pagination>
    </template>
    <Stub v-else />

    <DetailModal @close="showModal = false" :version="version" :show="showModal" :message="detailInfo"/>
  </div>
</template>

<script>
import Item from "@/components/List/Item";
import SkeletonLoader from "@/components/SkeletonLoader";
import Stub from "@/components/Stub";
import DetailModal from "@/components/List/DetailModal";
export default {
  components: {
    Item,
    SkeletonLoader,
    Stub,
    DetailModal
  },
  data: () => ({
    page: 1,
    itemsPerPage: 9,
    showModal: false,
    detailInfo: ''
  }),
  methods:{
    showDetail({stats}, version){
      this.showModal = true;
      this.detailInfo = stats;
      this.version = version;
    }
  },
  computed: {
    fetchedData() {
      return this.$store.getters["packages/getData"];
    },
    loading() {
      return this.$store.getters["packages/isLoading"];
    },
    totalItems() {
      return this.fetchedData.length;
    },
    pageCount() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
    visibleItems () {
      return this.fetchedData.slice((this.page - 1) * this.itemsPerPage, this.page * this.itemsPerPage)
    }
  },
}
</script>

<style lang="scss" scoped>
@import "style.scss";
</style>
