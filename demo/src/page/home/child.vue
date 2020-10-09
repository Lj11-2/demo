<template>
  <div>
    <span>{{ msg }}</span>
    <span>{{ num }}</span>
    <span>{{count}}</span>
    <button @click="btn()">点击</button>
  </div>
</template>

<script>
import { mapState,mapGetters } from "vuex";
export default {
  props: ["msg", "num"],
  data() {
    return {};
  },
 computed:{
    count(){
        return this.$store.state.count
    }
  },
  methods: {
    btn() {
      this.$emit("add");
      this.$store.dispatch('add')
    },
  },
  
};
</script>

<style>
</style>