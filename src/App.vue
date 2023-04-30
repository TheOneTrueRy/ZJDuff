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
        <img src="/instagram-icon.png" alt="Instagram Icon" height="64" width="64" class="rounded-circle" title="Visit Alice's Instagram">
        <img src="/facebook-icon.png" alt="Facebook Icon" height="64" width="64" class="rounded-circle" title="Visit Alice's Facebook">
        <img src="/email-icon.png" alt="Email Icon" height="64" width="64" class="rounded-circle" title="Send Alice an E-Mail">
      </div>
      <div class="row justify-content-center align-items-center">
        <span><i class="mdi mdi-copyright"></i> 2023 Alice Duff</span>
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
  height: 100px;
}
</style>
