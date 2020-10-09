<template>
<div>

<router-view/>
<v-footer></v-footer>

</div>
  
</template>

<script>
import vFooter from '../../components/footer/footer'
export default {
   data(){
     return{
     
     }
   },
  components:{
     vFooter
 }
}
</script>

<style>

</style>