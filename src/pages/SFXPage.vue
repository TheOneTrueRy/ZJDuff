<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 text-center mt-2 g-0">
        <span class="jost text-purple sfx-header">
          SFX PORTFOLIO
        </span>
      </div>
      <div class="col-12 col-md-8 offset-md-2 g-0 my-4">
        <div class="bricks px-1">
          <div v-for="item in sfx" @click="setActiveSFX(item.id)" data-bs-toggle="modal" data-bs-target="#sfxDetails">
            <img :src="item.imgUrl" :alt="item.title" class="rounded border border-dark elevation-1 hover-scale mw-100 selectable">
          </div>
        </div>
      </div>
    </div>
  </div>

  <Modal id="sfxDetails">
    <SFXDetails/>
  </Modal>
</template>


<script>
import { computed, onMounted } from "vue";
import { AppState } from "../AppState.js";
import Modal from "../components/Modal.vue";
import SFXDetails from "../components/SFXDetails.vue";
import Pop from "../utils/Pop.js";
import {sfxService} from "../services/SFXService.js"

export default {
    setup() {
        onMounted(() => {
            AppState.displaying = "SFX";
        });
        return {
            sfx: computed(() => AppState.SFX),
            setActiveSFX(sfxId){
              try {
                sfxService.setActiveSFX(sfxId)
              } catch (error) {
                Pop.error(error.message, 'Setting Active SFX') 
              }
            }
        };
    },
    components: { Modal, SFXDetails }
}
</script>


<style lang="scss" scoped>
  .hover-scale{
    transition: 0.4s;
  }

  .hover-scale:hover{
    transform: scale(1.02);
  }

  .bricks{
    columns: 2;

    &>div{
      margin-bottom: 0.5em;
    }
  }

  .mw-100{
    min-width: 100%;
  }

  .sfx-header{
    font-size: 2em;
    letter-spacing: 10px;
  }

  @media screen and (min-width: 756px) {
    .bricks{
      columns: 3;

      &>div{
        margin-bottom: 1em;
      }
    }

    .sfx-header{
      font-size: 3.5em;
      letter-spacing: 20px;
    }
  }
</style>