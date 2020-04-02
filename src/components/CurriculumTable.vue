<template>
  <div class="curriculum-table">
    <div class="major-step">Orientation</div>

    <div class="row h-100 period" v-for="p in periods" :key="p.months">
      <Period :months="p.months" :levels="p.levels" />
      <Box v-for="t in p.tech" :key="t.name" :name="t.name" :icon="t.icon" />
    </div>

    <div class="major-step">Internship</div>
  </div>
</template>

<script>
import Vue from "vue";
import Icon from "@/components/Icon";

const Box = {
  props: {
    name: String,
    icon: String
  },
  components: { Icon },
  render() {
    return (
      <div class="col-6 col-md-4 col-lg-2 period-item text-center mb-3">
        <div class="box shadow-sm rounded">
          <div class="floating-box">
            <div class="icon">
              <Icon name={this.icon} />
            </div>
            <div class="name">{this.name}</div>
          </div>
        </div>
      </div>
    );
  }
};

const Period = {
  props: {
    months: String,
    levels: String
  },
  components: { Icon },
  render() {
    return (
      <div class="col-12 col-md-4 col-lg-2 period-head text-center mb-3">
        <div class="box shadow-sm rounded">
          <div class="text-center">
            <div class="topper">{this.months}</div>
            <div class="level">
              <div class="floating-box">{this.levels}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const periods = [
  {
    months: "Month 1",
    levels: "Lv. 1",
    tech: [
      { name: "HTML", icon: "html5" },
      { name: "CSS", icon: "css3" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Dev Tools", icon: "tools" },
      { name: "Git", icon: "branch" }
    ]
  },
  {
    months: "Month 2-4",
    levels: "Lv. 2-4",
    tech: [
      { name: "ReactJs", icon: "react" },
      { name: "NodeJs", icon: "server" },
      { name: "Database", icon: "database" },
      { name: "Agile", icon: "agile" },
      { name: "TDD", icon: "tdd" }
    ]
  },
  {
    months: "Month 4-6",
    levels: "Lv. 4-6",
    tech: [
      { name: "Design Patterns", icon: "blueprints" },
      { name: "Architecture", icon: "architecture" },
      { name: "Flux", icon: "flux" },
      { name: "Security", icon: "security" },
      { name: "ORM", icon: "mapping" }
    ]
  }
];

export default {
  props: {},
  data: () => ({ periods }),
  components: { Box, Period },
  methods: {}
};
</script>

<style lang="scss">
@import "@/variables";

.curriculum-table {
  // background-color: $muted;

  .major-step {
    background-color: $periwinkle;
    text-align: center;
    font-size: 1.7em;
    font-weight: bolder;
    padding: 10px;
    margin-top: 1em;
    margin-bottom: 1em;
    color: white;
    text-transform: uppercase;
  }
  .row {
    margin-bottom: 1em;
    //height: 10em;
  }

  .period {
    margin: 2em auto;

    .period-head {
      .topper {
        background-color: $periwinkle;
        padding: 10px;
        color: white;
        text-transform: uppercase;
        font-weight: bolder;
      }

      .level {
        font-size: 2em;
        font-weight: bolder;
      }
    }
    .box {
      border: 1px solid #ccc;
      height: 150px;
      background-color: white;
    }
    .floating-box {
      padding-top: 30px;
    }
    .period-item {
      text-align: center;

      .icon {
        width: 50px;
        margin: 0px auto;
      }
      .name {
        margin-top: 10px;
        font-size: 1.3em;
      }
    }
  }
}
</style>
