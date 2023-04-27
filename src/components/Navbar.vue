<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-purple bg-gradient px-3 elevation-2">
    <router-link :to="{ name: 'Home' }" class="">
      <div>
        <img alt="logo" src="/Alice-Logo.png" height="90"  class="logo"/>
      </div>
    </router-link>
    <router-link class="text-uppercase page-btn d-none d-md-flex" :to="{name: 'Home'}" :class="[displaying == 'Home' ? 'displaying' : 'text-light']">
      <span class="fs-2">
        HOME
      </span>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse text-light justify-content-end" id="navbarText">
      <div class="bricks text-center">
        <router-link class="btn text-uppercase page-btn d-md-none" :to="{name: 'Home'}" :class="[displaying == 'Home' ? 'displaying' : 'text-light']">
          <span class="">
            HOME
          </span>
        </router-link>
        <router-link :to="{ name: 'About' }" class="btn text-uppercase page-btn" :class="[displaying == 'About' ? 'displaying' : 'text-light']">
          <span class="">
            About
          </span>
        </router-link>
        <router-link :to="{ name: 'About' }" class="btn text-uppercase page-btn" :class="[displaying == 'About' ? 'displaying' : 'text-light']">
          <span class="">
            About
          </span>
        </router-link>
        <router-link :to="{ name: 'About' }" class="btn text-uppercase page-btn" :class="[displaying == 'About' ? 'displaying' : 'text-light']">
          <span class="">
            About
          </span>
        </router-link>
      <router-link :to="{ name: 'About' }" class="btn text-uppercase page-btn" :class="[displaying == 'About' ? 'displaying' : 'text-light']">
        <span class="">
          About
        </span>
      </router-link>
      <router-link :to="{ name: 'About' }" class="btn text-uppercase page-btn" :class="[displaying == 'About' ? 'displaying' : 'text-light']">
        <span class="">
          About
        </span>
      </router-link>
    </div>
      <!-- <ul class="navbar-nav me-auto">
        <li>
          <router-link :to="{ name: 'About' }" class="btn text-uppercase page-btn">
            About
          </router-link>
        </li>
      </ul> -->
    </div>
  </nav>
</template>

<script>
import { computed } from "vue";
import { AppState } from "../AppState.js";

export default {
  setup() {
    return {
      displaying: computed(() => AppState.displaying)
    }
  },
}
</script>

<style scoped>

.displaying{
  color: #F2D56D;
}

.logo{
  width: 280px;
  height: auto;
}

.page-btn{
  transition: 0.4s;
  padding-bottom: 0;
}

.page-btn:hover{
  transform: scale(1.1);
  color: white;
}

.bricks{
  columns: 3;
}

@media screen and (min-width: 756px) {
  .bricks{
    columns: 1;
  }
}
</style>
