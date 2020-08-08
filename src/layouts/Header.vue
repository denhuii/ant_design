<template>
  <div class="container">
    <!-- <a-icon class="trigger" type="menu-fold" :type="collapsed ? 'menu-unfold' : 'menu-fold'" /> -->
    <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="_collapsed" />
    <div>头部</div>
  </div>
</template>
<script>
export default {
  props: {
    collapsed: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    _collapsed() {
      this.$emit("childFn", !this.collapsed);
    },
  },
};
</script>
<style lang="less" scoped>
.container {
  display: flex;
  justify-content: space-between;
  .trigger {
    padding: 0 20px;
    line-height: 64px;
    font-size: 20px;
  }
}
</style>
