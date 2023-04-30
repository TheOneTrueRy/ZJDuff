<template>
  <div class="container-fluid">

  </div>
</template>


<script>
import { onMounted } from "vue";
import { AppState } from "../AppState.js";

export default {
  setup(){
    onMounted(() => {
      AppState.displaying = 'SFX'
    })
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>