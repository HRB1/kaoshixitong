<template>
   <div class="btns">
      <el-button type="button" class="addbtn" @click="okfns()">确定</el-button>
      <el-button type="react" class="reactbtn" @click="valnulls()">重置</el-button>
    </div>
</template>
<script>
export default {
    props:{
    },
    components:{

    },
    data(){
        return {
          
        }
    },
    computed:{

    },
    methods:{
        okfns(){
          this.$emit("ok")
        },
        valnulls(){
          this.$emit("react")
        }
    },
    created(){
       
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
.addbtn {
  padding: 10px 44px;
 background: linear-gradient(-90deg,#4e75ff,#0139fd)!important;
  color: #fff;
}
.addbtn:hover {
  background: linear-gradient(-90deg,#4e75ff,#0139fd)!important;
  color: #fff;
}
.btns {
  margin: 10px 0px;
}
.reactbtn{
 padding: 10px 20px;
}
</style>