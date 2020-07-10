<template>
  <div>
    <dl class="m-categroy">
      <dt>按拼音首字母</dt>
      <dd v-for="item in list" :key="item">
        <a :href="'#city'+item">{{item}}</a>
      </dd>
    </dl>
    <dl></dl>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    };
  }
};
</script>

<style>
</style>