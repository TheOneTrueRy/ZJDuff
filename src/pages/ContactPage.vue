<template>
  <div class="component">


  </div>
</template>


<script>
import { onMounted } from "vue";
import { AppState } from "../AppState.js";

export default {
  setup(){
    onMounted(() => {
      AppState.displaying = 'Contact'
    })
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>