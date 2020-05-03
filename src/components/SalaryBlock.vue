<template>
  <div class="border bg-lilac p-4 m-4 text-center row justify-content-center">
    <div class="col-12 col-lg-2">
      <Icon name="moneybag" />
    </div>

    <div class="col">
      <span class>{{title}}s Make:</span>
      <div>
        <h2 style="display: inline;">
          <Money :amount="amount" />
        </h2>
        <span class>/yr</span>
      </div>
      <div class="small text-muted">
        United States Average from
        <a :href="url" target="_blank">Glassdoor.com</a>.
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
import Money from "@/components/Money";

export default {
  props: {
    title: String,
    amount: Number,
    url: String
  },
  components: { Icon, Money }
};
</script>

<style>
</style>