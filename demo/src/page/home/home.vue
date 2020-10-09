<template>
  <div>
    <div>home</div>
    <div>{{ count }}</div>
    <div>{{ name }}</div>
    <v-child :msg="msg" :num="num" @add="add"></v-child>
    <v-son ref="son"></v-son>
    <button ref="btn" @click="ref()">home按钮</button>
    <hr />
    <div v-for="item in arr" :key="item.id">{{ item.catename }}</div>
    <hr />
    <div v-for="(item, index) in information" :key="'2' + index" @click="go(item.id)">
      {{ item.goodsname }}
    </div>
    <hr />
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import { requestCate,requestItem } from "../../utils/request";
import vChild from "./child";
import vSon from "./son";
export default {
  data() {
    return {
      msg: "我是子件",
      num: 1,
      shoplist: [],
    };
  },

  methods: {
    add() {
      this.num++;
    },
    ref() {
      console.log(this.$refs.btn);
      this.$refs.son.get();
    },
    go(e) {
         this.$router.push("type?id=" + e);
    },
    ...mapActions({
      request: "requsetList",
      info: "Item",
    }),
  },
  components: {
    vChild,
    vSon,
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    ...mapState({
      name: "name",
      arr: "list",
    }),
    ...mapGetters({
      information: "shop",
    }),
  },
  mounted() {
    this.request();
    this.info();
  },
};
</script>

<style>
</style>