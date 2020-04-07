<template>
  <div class="tech-logo" :title="alt">
    <a :href="href" target="_blank">
      <Icon :name="name" v-if="noun" />
      <img :src="imgPath" :alt="alt" class="lilac" v-if="!noun" />
      <p class="tech-name text-center" v-if="includeName">{{name}}</p>
    </a>
  </div>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  commponents: { Icon },
  props: {
    href: String,
    logo: String,
    info: String,
    name: String,
    noun: { type: Boolean, default: false },
    includeName: Boolean
  },
  computed: {
    imgPath() {
      return `img/tech-logos/${this.logo}`;
    },
    alt() {
      if (this.info) {
        return `${this.name} - ${this.info}`;
      }
      return this.name;
    }
  }
};
</script>

<style lang="scss">
.tech-logo a {
  text-decoration: none;
  color: #999;
  p {
    margin-top: 10px;
  }
}
</style>
