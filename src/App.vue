<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer class="bg-purple bg-gradient text-light">
    <div class="container-fluid">
      <div class="row justify-content-center align-items-center">
        <div class="col-4">
          <a href="https://www.instagram.com/AliceZJDuff/" class="d-none d-md-inline">
            <img src="/instagram-icon.png" alt="Instagram Icon" height="45" width="45" class="rounded-circle hover-scale mx-2" title="Visit Alice's Instagram">
          </a>
          <a href="instagram://user?username=AliceZJDuff" class="d-md-none">
            <img src="/instagram-icon.png" alt="Instagram Icon" height="45" width="45" class="rounded-circle hover-scale mx-2" title="Visit Alice's Instagram">
          </a>
        </div>
        <div class="col-4">
          <a href="https://www.facebook.com/DuffMakeupNJ/">
            <img src="/facebook-icon.png" alt="Facebook Icon" height="45" width="45" class="rounded-circle hover-scale mx-2" title="Visit Alice's Facebook">
          </a>
        </div>
        <div class="col-4">
          <a href="mailto:AliceZJDuff@gmail.com">
            <img src="/email-icon.png" alt="Email Icon" height="45" width="45" class="rounded-circle hover-scale mx-2" title="Send Alice an E-Mail">
          </a>
        </div>
      </div>
      <div class="row justify-content-center align-items-center">
        <span class="text-center"><i class="mdi mdi-copyright"></i> 2023 Alice Duff</span>
      </div>
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root{
  --main-height: calc(100vh - 32px - 64px);
}

footer {
  display: grid;
  place-content: center;
  height: 80px;
}

.hover-scale{
  transition: 0.4s;
}

.hover-scale:hover{
  transform: scale(1.1);
}

.hover-scale:active{
  transform: scale(0.9);
}

</style>
