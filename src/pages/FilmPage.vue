<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 mt-3 mb-4 text-center">
        <span class="fs-1 jost spacing text-purple">
          HEAD OF ART DEPARTMENT
        </span>
      </div>
      <div class="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center pb-3" >
        <span class="fs-2 jost pb-1">
          <i>
            The Tupperware Murder (2021)
          </i>
        </span>
        <div class="w-100 rounded border border-dark elevation-2 fix-background" :style="{ backgroundImage: `url(/Tupperware-Murder.jpg)` }">
          <div class="w-100 film-height blur d-flex justify-content-center">
            <img src="/Tupperware-Murder.jpg" alt="" class="max">
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center pb-3" >
        <span class="fs-2 jost pb-1">
          <i>
            The Andersons (2021)
          </i>
        </span>
        <div class="w-100 rounded border border-dark elevation-2 fix-background" :style="{ backgroundImage: `url(/The-Andersons.jpg)` }">
          <div class="w-100 film-height blur d-flex justify-content-center">
            <img src="/The-Andersons.jpg" alt="" class="max">
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 mt-5 mb-4 text-center">
        <span class="fs-1 jost spacing text-purple">
          FIRST ASSISTANT DIRECTOR
        </span>
      </div>
      <div class="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center pb-4" >
        <span class="fs-2 jost pb-1">
          <i>
            Power Rangers Unworthy (2018)
          </i>
        </span>
        <div class="w-100 rounded border border-dark elevation-2 fix-background" :style="{ backgroundImage: `url(/power-rangers-unworthy.jpg)` }">
          <div class="w-100 film-height blur d-flex justify-content-center">
            <img src="/power-rangers-unworthy.jpg" alt="" class="max">
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center pb-3" >
        <span class="fs-2 jost pb-1">
          <i>
            TRIUMPH (2022)
          </i>
        </span>
        <div class="w-100 rounded border border-dark elevation-2 fix-background" :style="{ backgroundImage: `url(/Triumph.png)` }">
          <div class="w-100 film-height blur d-flex justify-content-center">
            <img src="/Triumph.png" alt="" class="max">
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 mt-5 mb-4 text-center">
        <span class="fs-1 jost spacing text-purple">
          SPECIAL EFFECTS MAKEUP
        </span>
      </div>
      <div class="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center pb-3" >
        <span class="fs-2 jost pb-1">
          <i>
            Tony Martone (2022)
          </i>
        </span>
        <div class="w-100 rounded border border-dark elevation-2 fix-background" :style="{ backgroundImage: `url(/tony-martone.jpg)` }">
          <div class="w-100 film-height blur d-flex justify-content-center">
            <img src="/tony-martone.jpg" alt="" class="max">
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center pb-3" >
        <span class="fs-2 jost pb-1">
          <i>
            Patriarch(2021)
          </i>
        </span>
        <div class="w-100 rounded border border-dark elevation-2 fix-background" :style="{ backgroundImage: `url(/patriarch.jpg)` }">
          <div class="w-100 film-height blur d-flex justify-content-center">
            <img src="/patriarch.jpg" alt="" class="max">
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center pb-4" >
        <span class="fs-2 jost pb-1">
          <i>
            Power Rangers Unworthy (2018)
          </i>
        </span>
        <div class="w-100 rounded border border-dark elevation-2 fix-background" :style="{ backgroundImage: `url(/power-rangers-unworthy.jpg)` }">
          <div class="w-100 film-height blur d-flex justify-content-center">
            <img src="/power-rangers-unworthy.jpg" alt="" class="max">
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center pb-4" >
        <span class="fs-2 jost pb-1">
          <i>
            Justice for Chau (2022)
          </i>
        </span>
        <div class="w-100 rounded border border-dark elevation-2 fix-background" :style="{ backgroundImage: `url(/Justice-For-Chau.jpg)` }">
          <div class="w-100 film-height blur d-flex justify-content-center">
            <img src="/Justice-For-Chau.jpg" alt="" class="max">
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center pb-4" >
        <span class="fs-2 jost pb-1">
          <i>
            Weapon of Choice (2021)
          </i>
        </span>
        <div class="w-100 rounded border border-dark elevation-2 fix-background" :style="{ backgroundImage: `url(/Weapon-Of-Choice.jpg)` }">
          <div class="w-100 film-height blur d-flex justify-content-center">
            <img src="/Weapon-Of-Choice.jpg" alt="" class="max">
          </div>
        </div>
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

  .max{
    max-width: 100%;
    max-height: 100%;
  }

  .film-height{
    height: 50vh;
  }

  .blur{
    backdrop-filter: blur(10px);
  }

  .fix-background{
    background-position: center;
    background-size: cover;
  }
</style>