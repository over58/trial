<template>
  <div class="modal-wrapper"
    v-show="!hidden"
    @click="closeMask($event)"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    hidden: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    closeMask (e) {
      this.$emit('update:hidden', true)
    }
  }
}
</script>

<style lang="less" scoped>
.modal-wrapper{
    position: fixed;
    top: 0;
    left:0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.7);
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
