<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-purple bg-gradient px-3 elevation-2">
    <router-link :to="{ name: 'Home' }" class="">
      <div>
        <img alt="logo" src="/Alice-Logo.png" height="90"  class="logo"/>
      </div>
    </router-link>
    <router-link class="text-uppercase page-btn d-none d-md-flex" :to="{name: 'Home'}">
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
      <div class="bricks">
        <router-link class="btn text-uppercase page-btn d-md-none" :to="{name: 'Home'}">
          <span class="">
            HOME
          </span>
        </router-link>
        <router-link :to="{ name: 'About' }" class="btn text-uppercase page-btn">
          <span class="">
            About
          </span>
        </router-link>
        <router-link :to="{ name: 'About' }" class="btn text-uppercase page-btn">
          <span class="">
            About
          </span>
        </router-link>
        <router-link :to="{ name: 'About' }" class="btn text-uppercase page-btn">
          <span class="">
            About
          </span>
        </router-link>
      <router-link :to="{ name: 'About' }" class="btn text-uppercase page-btn">
        <span class="">
          About
        </span>
      </router-link>
      <router-link :to="{ name: 'About' }" class="btn text-uppercase page-btn">
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
export default {
  setup() {
    return {}
  },
}
</script>

<style scoped>

.logo{
  width: 280px;
  height: auto;
}

.page-btn{
  color: white;
  transition: 0.4s;
  padding-bottom: 0;
}

.page-btn:hover{
  transform: scale(1.1);
  color: white;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
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
