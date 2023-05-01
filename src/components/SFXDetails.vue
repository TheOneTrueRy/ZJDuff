<template>
  <div v-if="sfx" class="container-fluid sfx-modal">
    <div class="row h-100">
      <div class="col-12 col-md-6 g-0 d-flex flex-column justify-content-center align-items-center"
        :style="{ backgroundImage: `url(${sfx.imgUrl})` }">
        <div class="w-100 h-100 d-flex justify-content-center blur">
          <img :src="sfx.imgUrl" alt="" class="fill">
        </div>
        <div class="d-flex d-md-none justify-content-end w-100">
          <button class="btn btn-dark w-100 stop-rounding" type="button" data-bs-dismiss="modal"
            data-bs-target="#sfxDetails">
            <span>Close Details</span>
          </button>
        </div>
      </div>
      <div class="col-12 col-md-6 d-flex flex-column align-items-center bg-light">
        <span class="mt-5 mb-4 fs-1 fw-bold">
          {{ sfx.title }}
        </span>
        <span class="pb-2 fs-5">
          Artist: {{ sfx.artist }}
        </span>
        <span v-if="sfx.client != ''" class="pb-2 fs-5">
          Client: {{ sfx.client }}
        </span>
        <span v-if="sfx.model != ''" class="pb-2 fs-5">
          Model: {{ sfx.model }}
        </span>
        <span v-if="sfx.photoCredit != ''" class="pb-2 fs-5">
          Photo Credit: {{ sfx.photoCredit }}
        </span>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from "vue";
import { AppState } from "../AppState.js";

export default {
  setup(){
    return {
      sfx: computed(() => AppState.activeSFX)
    }
  }
}
</script>


<style lang="scss" scoped>
  .blur {
    backdrop-filter: blur(10px);
  }

  .stop-rounding {
    border-radius: 0% !important;
  }

  .fill {
  min-height: 90%;
  max-height: 70vh;
  max-width: 100%;
}

@media screen and (min-width: 768px) {
  .sfx-modal {
    height: 70vh;
    width: 100%;
  }


  .fill {
    object-fit: contain;
  }
}
</style>