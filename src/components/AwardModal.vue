<template>
  <div>
    <img
      @click="show = true"
      src="https://www.ec.co/wp-content/uploads/2021/06/EC_Next_Logo_2021_Black-1-768x321.png"
      alt="this slowpoke moves"
      class="winnerImg awards"
    />

    <b-modal
      id="modal-1"
      centered
      title="Technology Emerging Winners"
      v-model="show"
      footerClass="p-2 border-top-0"
    >
      <b-embed
        type="iframe"
        aspect="16by9"
        src="https://www.youtube-nocookie.com/embed/pahYkDceBzc"
        allowfullscreen
      ></b-embed>
      <template #modal-footer="{ ok }">
        <b-link href="https://www.ec.co/next-awards" target="_blank"
          >Website</b-link
        >
        <b-button size="sm" variant="primary" @click="ok()">
          Cancel
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.awards {
  cursor: pointer;
  width: 40%;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0);
  border: none;
}

.awards:hover {
  border: solid 0px rgba(221, 221, 221, 0);
  margin: 0px;
  background-color: #ddd;
}
</style>
