<template>
  <div class="navbar">
    <div class="navbar-inner">
      <ul class="nav nav-pills nav-wizard">
        <li
          v-for="step in steps"
          :class="{active: step.number === active, disabled: step.number ==! active}"
          :key="step.number"
        >
          <div class="step">{{`${step.number}. ${step.name}`}}</div>
          <div class="step-arrow"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    steps: Array,
    active: Number
  }
};
</script>

<style lang="scss" scoped>
@import "@/variables.scss";

.step {
  background-color: #eee;
  padding: 8px;
}
li.active > .step {
  display: block !important;
  background: $primary;
}
.nav-pills.nav-wizard > li {
  position: relative;
  overflow: visible;
  border-right: 10px solid #fff;
  border-left: 10px solid #fff;
}
.nav-pills.nav-wizard > li:first-child {
  border-left: 0;
}
.nav-pills.nav-wizard > li:first-child a {
  border-radius: 5px 0 0 5px;
}
.nav-pills.nav-wizard > li:last-child {
  border-right: 0;
}
.nav-pills.nav-wizard > li:last-child a {
  border-radius: 0 5px 5px 0;
}
.nav-pills.nav-wizard > li a {
  border-radius: 0;
  background-color: #eee;
  padding: 10px;
}
.nav-pills.nav-wizard > li .step-arrow {
  position: absolute;
  top: 0px;
  right: -20px;
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 20px 0 20px 20px;
  border-color: transparent transparent transparent #eee;
  z-index: 150;
}
.nav-pills.nav-wizard > li .nav-wedge {
  position: absolute;
  top: 0px;
  left: -20px;
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 20px 0 20px 20px;
  border-color: #eee #eee #eee transparent;
  z-index: 150;
}
.nav-pills.nav-wizard > li:hover .step-arrow {
  border-color: transparent transparent transparent #aaa;
}
.nav-pills.nav-wizard > li:hover .nav-wedge {
  border-color: #aaa #aaa #aaa transparent;
}
.nav-pills.nav-wizard > li:hover div.step {
  background-color: #aaa;
  color: #fff;
}
.nav-pills.nav-wizard > li.active .step-arrow {
  border-color: transparent transparent transparent #428bca;
}
.nav-pills.nav-wizard > li.active .nav-wedge {
  border-color: #428bca #428bca #428bca transparent;
}
.nav-pills.nav-wizard > li.active a {
  background-color: #428bca;
}
</style>