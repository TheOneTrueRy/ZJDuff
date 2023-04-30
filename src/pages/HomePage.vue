<template>
  <div class="container-fluid">
    <div class="row my-5">
      <div class="col-12 col-md-4 text-center">
        <img src="https://placehold.co/1200" alt="Alice Duff" class="rounded-circle border border-dark alice-pic">
      </div>
      <div class="col-12 col-md-7 offset-md-1 d-flex flex-column mpx">
        <span class="playfair text-purple text-center">
          Alice Duff
        </span>
        <span class="karla fs-5 text-center pb-4 subtitle">
          <b>
            A special effects makeup artist and experienced Director's Assistant.
          </b>
        </span>
        <span class="karla fs-5 text-center px-5">
          Alice loves to work with Stunt Actors and Cinematographers along the east coast who want to bring some more intensity to their videos! 
          Currently residing in Philadelphia and willing to travel!
          Has worked in Boston, Connecticut, New York, New Jersey and Philadelphia.
        </span>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6 text-center">
        <span class="fs-1 text-purple jost">
          ASSISTANT DIRECTOR
        </span>
      </div>
      <div class="col-12 col-md-6 text-center">
        <span class="fs-1 text-purple jost">
          ART DIRECTOR
        </span>
      </div>
      <div class="col-12 d-md-none text-center">
        <span class="fs-1 text-purple jost">&</span>
      </div>
      <div class="col-12 text-center pt-5">
        <span class="fs-1 text-purple jost">
          SPECIAL EFFECTS MAKEUP ARTIST
        </span>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-3 g-0 sfx d-flex align-items-end justify-content-center beauty">
        <span class="fs-1 text-shadow text-light">
          Beauty
        </span>
      </div>
      <div class="col-12 col-md-3 g-0 sfx d-flex align-items-end justify-content-center gore">
        <span class="fs-1 text-shadow text-light">
          Gore
        </span>
      </div>
      <div class="col-12 col-md-3 g-0 sfx d-flex align-items-end justify-content-center realism">
        <span class="fs-1 text-shadow text-light">
          Realism
        </span>
      </div>
      <div class="col-12 col-md-3 g-0 sfx d-flex align-items-end justify-content-center prosthetics">
        <span class="fs-1 text-shadow text-light">
          Prosthetics
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { AppState } from "../AppState.js";
import { gsap } from "gsap";

export default {
  setup() {
    onMounted(() => {
      AppState.displaying = 'Home'
      gsap.from(".sfx", {
        duration: 2,
        stagger: 0.3,
        opacity: 0,
        scale: 0.2
      })
    })
    return {}
  }
}
</script>

<style scoped lang="scss">
  .text-shadow{
    text-shadow: 0 1px 3px black;
  }

  .sfx{
    height: 500px;
  }

  .alice-pic{
    height: 40vh;
    width: 40vh;
  }

  .subtitle{
    transform: translateY(-16px);
  }

  .mpx{
    padding-left: 0;
    padding-right: 0;
  }

  @media screen and (min-width: 756px) {
    .sfx{
      height: 620px;
    }

    .mpx{
      padding-left: 5em;
      padding-right: 5em;
    }
  }
</style>
