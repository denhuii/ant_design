<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <SiderMenu></SiderMenu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <Header :collapsed="collapsed" @childFn="parentFn"></Header>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer>
        <Footer></Footer>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import SiderMenu from "./SiderMenu";
export default {
  components: {
    Header,
    Footer,
    SiderMenu,
  },
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    parentFn(collapsed) {
      this.collapsed = collapsed;
    },
  },
};
</script>
<style lang="less" scoped>
// /deep/ .ant-layout {
//   position: fixed;
//   top: 0;
//   width: 100%;
//   bottom: 0;
// }
</style>
