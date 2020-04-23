<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <a-button type="primary">按钮</a-button>
    </div>
    <router-view />
  </div>
</template>

<style lang="less"></style>
