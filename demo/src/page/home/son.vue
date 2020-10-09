<template>
  <div>son组件</div>
</template>

<script>
export default {
  data(){
      return{
         list:"我是son"
      }
  },
  methods:{
      get(){
          console.log(this.list)
      }
  }
}
</script>

<style>

</style>