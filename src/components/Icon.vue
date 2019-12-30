<template>
  <span :class="[`icon iconfont icon-${type}`]" @click="handleClick"></span>
</template>

<script>
export default {
  props: ['type', 'onClick'],
  methods: {
    handleClick() {
      this.$emit('onClick')
    }
  }
}
</script>

<style>

</style>