<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 pb-md-5 mt-2 text-center pb-2">
        <span class="fs-1 text-purple headland-one">
          REACH OUT
        </span>
      </div>
      <div class="col-12 col-md-6 text-center">
        <div class="row">
          <div class="col-12">
            <span class="fs-3 headland-one border-bottom border-dark">
              EMAILS
            </span>
          </div>
          <div class="col-12 d-flex flex-column flex-md-row pt-3 justify-content-center">
            <span class="fw-bold jost fs-5 pe-1 my-border-end">
              SFX
            </span>
            <span class="jost fs-5 ps-md-1 hover-scale">
              <a href="mailto:DuffMakeupNJ@gmail.com" class="text-dark">
                <i>
                  DuffMakeupNJ@gmail.com
                </i>
              </a>
            </span>
          </div>
          <div class="col-12 d-flex flex-column flex-md-row pt-3 pb-4 justify-content-center">
            <span class="fw-bold jost fs-5 pe-1 my-border-end">
              Assistant Director
            </span>
            <span class="jost fs-5 ps-md-1 hover-scale">
              <a href="mailto:AliceZJDuff@gmail.com" class="text-dark">
                <i>
                  AliceZJDuff@gmail.com
                </i>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 text-center">
        <div class="row">
          <div class="col-12">
            <span class="fs-3 headland-one border-bottom border-dark">
              SOCIALS
            </span>
          </div>
          <div class="col-12 d-flex flex-column">
            <span class="fs-3 fw-bold jost hover-scale pt-2">
              <a href="https://www.instagram.com/AliceZJDuff/" class="text-dark d-none d-md-inline" target="_blank">
                INSTAGRAM
              </a>
              <a href="instagram://user?username=AliceZJDuff" class="text-dark d-md-none" target="_blank">
                INSTAGRAM
              </a>
            </span>
            <span class="jost">
              (@AliceZJDuff)
            </span>
          </div>
          <div class="col-12 d-flex flex-column pb-4">
            <span class="fs-3 fw-bold jost hover-scale pt-2">
              <a href="https://www.facebook.com/DuffMakeupNJ/" class="text-dark" target="_blank">
                FACEBOOK
              </a>
            </span>
            <span class="jost">
              (DuffMakeupNJ)
            </span>
          </div>
        </div>
      </div>
      <div class="col-12 text-center pt-md-4">
        <div class="row">
          <div class="col-12">
            <span class="border-bottom border-dark headland-one fs-3">
              COMMERCE
            </span>
          </div>
          <div class="col-12 col-md-6 d-flex flex-column pt-2">
            <span class="fw-bold fs-3 hover-scale">
              <a href="" class="text-dark" target="_blank">
                Redbubble
              </a>
            </span>
            <span class="jost pt-1">
              <i>
                Redbubble Profile Name
              </i>
            </span>
          </div>
          <div class="col-12 col-md-6 d-flex flex-column pt-2">
            <span class="fw-bold fs-3 hover-scale">
              <a href="" class="text-dark" target="_blank">
                Etsy
              </a>
            </span>
            <span class="jost pt-1">
              <i>
                Etsy Profile Name
              </i>
            </span>
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
      AppState.displaying = 'Contact'
    })
    return {}
  }
}
</script>


<style lang="scss" scoped>
    .hover-scale{
    transition: 0.4s;
  }

  .hover-scale:hover{
    transform: scale(1.03);
  }

  .my-border-end{
    border-right: 0px;
  }

  @media screen and (min-width: 756px) {
    .my-border-end{
      border-right: 1px solid black;
    }
  }
</style>