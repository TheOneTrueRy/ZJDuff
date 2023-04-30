<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-5">

      </div>
      <div class="col-12 col-md-7">

      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6">
        <span class="fs-2 text-purple">

        </span>
      </div>
      <div class="col-12 col-md-6">
        <span class="fs-2 text-purple">

        </span>
      </div>
      <div class="col-12 d-md-none">
        <span class="fs-2 text-purple">&</span>
      </div>
      <div class="col-12">
        <span class="fs-2 text-purple">

        </span>
      </div>
    </div>
    <div class="row">

    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { AppState } from "../AppState.js";

export default {
  setup() {
    onMounted(() => {
      AppState.displaying = 'Home'
    })
    return {}
  }
}
</script>

<style scoped lang="scss">

</style>
