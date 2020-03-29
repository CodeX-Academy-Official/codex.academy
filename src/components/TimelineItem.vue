<template>
  <!-- timeline item 1 -->
  <div class="row no-gutters">
    <div class="d-none d-md-block col-sm my-auto" v-if="side==='right'">
      <p class="text-muted small text-right">{{extra}}</p>
    </div>
    <!-- timeline item 1 center dot -->
    <div class="col-md-1 text-center flex-column d-none d-sm-flex" v-if="side==='right'">
      <div class="row h-50">
        <div class="col" :class="{'border-right': position !== 'first'}">&nbsp;</div>
        <div class="col">&nbsp;</div>
      </div>
      <h5 class="d-none d-md-block m-2">
        <span class="badge badge-pill bg-light border">+</span>
      </h5>
      <div class="row h-50">
        <div class="col" :class="{'border-right': position !== 'last'}">&nbsp;</div>
        <div class="col">&nbsp;</div>
      </div>
    </div>
    <div class="col-md py-2">
      <div class="card border-primary shadow">
        <div class="card-body">
          <div class="float-right text-muted small">{{ subtitle }}</div>
          <h4 class="card-title text-primary">{{ title }}</h4>
          <p class="card-text">
            <slot />
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-1 text-center flex-column d-none d-sm-flex" v-if="side==='left'">
      <div class="row h-50">
        <div class="col" :class="{'border-right': position !== 'first'}">&nbsp;</div>
        <div class="col"></div>
      </div>
      <h5 class="d-none d-md-block m-2">
        <span class="badge badge-pill bg-light border">+</span>
      </h5>
      <div class="row h-50">
        <div class="col" :class="{'border-right': position !== 'last'}">&nbsp;</div>
        <div class="col"></div>
      </div>
    </div>
    <div class="d-none d-md-block col-sm my-auto" v-if="side==='left'">
      <p class="text-muted small text-left">{{extra}}</p>
    </div>
  </div>

  <!--/row-->
</template>

<script>
export default {
  props: {
    side: String,
    title: String,
    subtitle: String,
    position: { type: String, required: false },
    extra: { type: String, required: false }
  }
};
</script>