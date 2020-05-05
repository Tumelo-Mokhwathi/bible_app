<template>
  <div id="app">
    <header>
      <nav
        class="navbar navbar-expand-lg navbar-dark fixed-top"
        v-bind:class="{ navbarOpen: show }"
      >
        <router-link to="/" class="navbar-brand">
          <div>Bible</div>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          @click.stop="toggleNavbar()"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse"
          id="navbarSupportedContent"
          v-bind:class="{ show: show }"
        >
          <ul class="navbar-nav ml-auto">
            <router-link to="/Bible"
              ><a class="nav-item nav-link" href="#"
                ><i class="fas fa-bible fa-lg pr-3"></i></a
            ></router-link>
          </ul>
        </div>
      </nav>
    </header>
    <router-view class="router-content" />
    <footer class="fixed-bottom bg-dark border-top py-1">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6">
            <a href="#" class="text-light">{{ currentYear }} © </a>|
            <a href="#" class="text-light">Created By Tumelo Mokhwathi</a>
            |
            <a href="#" class="text-light">{{ version }}</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  },
  data() {
    return {
      show: false,
      version: process.env.VUE_APP_VERSION
    };
  },
  methods: {
    toggleNavbar() {
      this.show = !this.show;
    }
  },
  name: "app"
};
</script>
<style src="@fortawesome/fontawesome-free/css/all.min.css"></style>
<style>
header {
  height: 60px;
}

#app {
  width: 100%;
  height: 100%;
}

nav {
  background-color: #999900;
}
/* data table */
.custom-select {
  background: none;
  padding: 0;
}
.vfl-label-on-focus {
  color: var(--primary) !important;
}
.tooltip {
  z-index: 50 !important;
}
#navbarNavAltMarkup {
  float: right;
}
</style>
