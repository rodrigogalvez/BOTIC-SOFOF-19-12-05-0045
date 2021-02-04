<template>
  <div class="catalogview">
    <div v-if="$route.params.id">Catálogo {{ $route.params.id }}</div>
    <div v-else>Catálogo general</div>
  </div>
</template>


<script>
import Catalog from "@/components/Catalog.vue";

export default {
  name: "CatalogView",
  components: {
    Catalog,
  },
  watch: {
    $route(to, from) {
      console.log(to,from);
    }
  }
};
</script>
