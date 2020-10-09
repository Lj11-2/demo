<template>
  <ul>
    <li v-for="(item, index) in list" :key="index" @click="go(item.path)">
      <img :src="item.img" alt="" />
      <span>{{ item.txt }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          txt: "首页",
          path: "/home",
          img: require("../../img/home.png"),
        },
        {
          txt: "分类",
          path: "/type",
          img: require("../../img/type.png"),
        },
        {
          txt: "购物车",
          path: "/shopcar",
          img: require("../../img/shopcar.png"),
        },
        {
          txt: "我的",
          path: "/mine",
          img: require("../../img/mine.png"),
        },
      ],
    };
  },
  methods: {
    go(e) {
      if (this.$route.path != e) {
        this.$router.push(e);
      }
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
}
li {
  width: 25%;
  /* height: 83px;
       line-height: 83px; */
  text-align: center;
  justify-content: space-evenly;
}
span {
  display: block;
}
</style>>
