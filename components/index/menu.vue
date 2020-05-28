<template>
  <div class="m-menu">
    <dl class="nav">
      <dt></dt>
      <dd v-for="(item,idx) in menu" :key="idx">
        <i :class="item.type"></i>
        {{item.name}}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div class="detail">
      <template v-for="(item,idx) in curdetail">
        <h4 :key="idx">{{item.title}}</h4>
        <span :key="v" v-for="v in item.child">{{v}}</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kind: "",
      menu: [
        {
          type: "food",
          name: "美食",
          child: [
            { tilte: "美食", child: ["代金券", "甜品音频", "火锅", "小吃快餐"] }
          ]
        },
        {
          type: "takeout",
          name: "外卖",
          child: [{ tilte: "外卖", child: ["美团外卖"] }]
        },
        {
          type: "hotel",
          name: "酒店",
          child: [
            {
              tilte: "酒店星级",
              child: ["经济型", "舒适/三星", "高档/四星", "豪华五星"]
            }
          ]
        }
      ],
      computed: {
        curdetail: function() {
          return this.menu.filter(item => item.type === this.kind)[0];
        }
      }
    };
  }
};
</script>

<style>
</style>