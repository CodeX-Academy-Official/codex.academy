<template>
  <!-- Navigation -->
  <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light fixed-top">
    <!-- <div class="container"> -->
    <router-link class="navbar-brand" to="/">
      <img class="logo" src="img/logo/horizontal_logo.png" alt="CodeX Academy Logo" />
    </router-link>
    <button
      class="navbar-toggler navbar-toggler-right"
      type="button"
      data-toggle="collapse"
      data-target="#navbarResponsive"
      aria-controls="navbarResponsive"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/plans" class="nav-link">Plans</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/faq" class="nav-link">FAQ</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/method" class="nav-link">Method</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/testimonials" class="nav-link">Testimonials</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/blog">Blog</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contact">Contact</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <!-- <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownPortfolio"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Portfolio</a>
            <div
              class="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdownPortfolio"
            >
              <a class="dropdown-item" href="portfolio-1-col">1 Column Portfolio</a>
              <a class="dropdown-item" href="portfolio-2-col">2 Column Portfolio</a>
              <a class="dropdown-item" href="portfolio-3-col">3 Column Portfolio</a>
              <a class="dropdown-item" href="portfolio-4-col">4 Column Portfolio</a>
              <a class="dropdown-item" href="portfolio-item">Single Portfolio Item</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <router-link
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownBlog"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Blog</router-link>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
              <a class="dropdown-item" href="blog-home-1.html">Blog Home 1</a>
              <a class="dropdown-item" href="blog-home-2.html">Blog Home 2</a>
              <a class="dropdown-item" href="blog-post.html">Blog Post</a>
            </div>
          </li>
          <li class="nav-item active dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownBlog"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Other Pages</a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
              <a class="dropdown-item" href="full-width">Full Width Page</a>
              <a class="dropdown-item" href="sidebar">Sidebar Page</a>
              <a class="dropdown-item" href="faq">FAQ</a>
              <a class="dropdown-item" href="404">404</a>
              <a class="dropdown-item active" href="pricing">Pricing Table</a>
            </div>
        </li>-->
      </ul>
    </div>
    <!-- </div> -->
  </nav>
</template>

<style lang="sass" scoped>
.navbar { height: 3.5rem; }
.navbar img.logo { height: 2.1rem; }
</style>