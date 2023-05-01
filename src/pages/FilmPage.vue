<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 mt-3 mb-4 text-center">
        <span class="fs-1 jost spacing text-purple">
          HEAD OF ART DEPARTMENT
        </span>
      </div>
      <div class="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center pb-3">
        <span class="fs-2 jost pb-1">
          <i>
            Movie Title
          </i>
        </span>
        <img src="https://placehold.co/900x400" alt="" class="w-100 rounded border border-dark elevation-2">
      </div>
      <div class="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center pb-3">
        <span class="fs-2 jost pb-1">
          <i>
            Movie Title
          </i>
        </span>
        <img src="https://placehold.co/900x400" alt="" class="w-100 rounded border border-dark elevation-2">
      </div>
    </div>
    <div class="row">
      <div class="col-12 mt-5 mb-4 text-center">
        <span class="fs-1 jost spacing text-purple">
          FIRST ASSISTANT DIRECTOR
        </span>
      </div>
      <div class="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center pb-3">
        <span class="fs-2 jost pb-1">
          <i>
            Movie Title
          </i>
        </span>
        <img src="https://placehold.co/900x400" alt="" class="w-100 rounded border border-dark elevation-2">
      </div>
      <div class="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center pb-3">
        <span class="fs-2 jost pb-1">
          <i>
            Movie Title
          </i>
        </span>
        <img src="https://placehold.co/900x400" alt="" class="w-100 rounded border border-dark elevation-2">
      </div>
    </div>
    <div class="row">
      <div class="col-12 mt-5 mb-4 text-center">
        <span class="fs-1 jost spacing text-purple">
          SPECIAL EFFECTS MAKEUP
        </span>
      </div>
      <div class="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center pb-3">
        <span class="fs-2 jost pb-1">
          <i>
            Movie Title
          </i>
        </span>
        <img src="https://placehold.co/900x400" alt="" class="w-100 rounded border border-dark elevation-2">
      </div>
      <div class="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center pb-3">
        <span class="fs-2 jost pb-1">
          <i>
            Movie Title
          </i>
        </span>
        <img src="https://placehold.co/900x400" alt="" class="w-100 rounded border border-dark elevation-2">
      </div>
      <div class="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center pb-3">
        <span class="fs-2 jost pb-1">
          <i>
            Movie Title
          </i>
        </span>
        <img src="https://placehold.co/900x400" alt="" class="w-100 rounded border border-dark elevation-2">
      </div>
      <div class="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center pb-3">
        <span class="fs-2 jost pb-1">
          <i>
            Movie Title
          </i>
        </span>
        <img src="https://placehold.co/900x400" alt="" class="w-100 rounded border border-dark elevation-2">
      </div>
    </div>
  </div>
</template>


<script>
import { onMounted } from "vue";
import { AppState } from "../AppState.js";

export default {
  setup(){
    onMounted(() => {
      AppState.displaying = 'Film'
    })
    return {}
  }
}
</script>


<style lang="scss" scoped>
  .spacing{
    letter-spacing: 10px;
  }
</style>