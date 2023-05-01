<template>
  <div class="container-fluid">
    <div class="row mt-5">
      <div class="col-12 col-md-4 d-flex justify-content-center">
        <img src="https://placehold.co/1200" alt="Alice Duff" class="rounded-circle border border-dark alice-pic">
      </div>
      <div class="col-12 offset-md-2 col-md-6 d-flex flex-column px-md-5">
        <span class="fs-4 fw-bold montserrat pb-3 pt-4">
          Personal Biography
        </span>
        <span class="fs-5 karla pb-3 pe-md-5">
          I am a multi-disciplined and self-motivated person who tries to do what I love.
          Growing up I always had an artist eye and took up new media relatively easily. I found realism particularly interesting, as it is recreating a point in time, demonstrating a version of truth. My favorite genres are also adventure mystery, sci-fi media, but only later finding a way to combine these interests through Special Effects Makeup.
        </span>
        <span class="fs-5 karla pe-md-5 pb-3">
          I dabbled in several possible career paths, like becoming a Veterinarian and a Forensic scientist. I was lucky enough to have opportunities to shadow at veterinarian clinics where I observed and assisted them in surgeries, house calls and routine check-ups. These experiences, along with the love of animals, made it possible for me to gain the confidence to manage my own pet sitting business where I learned that I loved management, and utilizing skills, like working with others, time management, problem solving, and detailed oriented work. These skill sets are what empowers me to be a reliable and trusted Assistant Director
        </span>
        <button class="btn purple-btn mt-2 mb-3 py-2">
          Download Resume <i class="mdi mdi-download"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { AppState } from "../AppState.js";

export default {
  setup() {
    onMounted(() => {
      AppState.displaying = 'About'
    })
    return {

    }
  }
}
</script>

<style scoped lang="scss">
    .alice-pic{
    height: 40vh;
    width: 40vh;
  }

  .purple-btn{
    background-color: #C593D7;
    color: white;
  }

  .purple-btn:hover{
    background-color: #af7bc2;
    color: white;
  }
</style>