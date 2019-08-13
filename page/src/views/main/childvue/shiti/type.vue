<template>
  <div class="container">
    <h2 class="header_title">试题分类</h2>
    <div class="mains">
      <el-button class="addbtn" @click="addStemType()">
        <i class="el-icon-plus"></i>添加
      </el-button>
      <el-table
        :data="comstates.allquestionss"
        style="width: 100%;text-align:center;margin-bottom:20px;"
      >
        <el-table-column class="theader" prop="questions_type_id" label="类ID" width="200"></el-table-column>
        <el-table-column class="theader" prop="questions_type_text" label="类名" width="200"></el-table-column>
        <el-table-column class="theader" prop="del" label="操作"></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import { mapState,mapActions } from "vuex";
import { addStemType } from "@/api/tests.js";
export default {
  props: {},
  components: {},
  data() {
    return {
    };
  },
  computed: {
    ...mapState(["comstates"])
  },
  methods: {
    ...mapActions('comstates',["getAllquestionss"]),
    //添加类型
    addStemType() {
      this.$prompt( "创建新类型", {
        cancelButtonText: "取消",
        confirmButtonText: "确定",
        inputPlaceholder:"请输入类型名称",
        center:true
      })
       .then(({ value }) => {
      
            if(value.trim()!==""){
                 addStemType({stemText:value,sort:this.comstates.allquestionss.length+1}).then(res=>{
                     if(res.code==1){
                        this.getAllquestionss();
                        this.$message({
                            type: 'success',
                            message: res.msg
                        });
                     }else{
                         this.$message({
                            type: 'error',
                            message: res.msg
                        });
                     }
                 })   
            }
        })
        .catch(() => {
         
        });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style  lang="scss">
.container {
  width: 100%;
  height: 100%;
}
.header_title {
  font-size: 22px;
  margin: 2.5%;
}
.mains {
  width: 95%;
  margin: 2.5%;
  padding-bottom: 10px;
  border-radius: 20px;
  background: #fff;
  padding-left: 24px;
  padding-right: 24px;
  .addbtn {
    padding: 13px 56px;
    border-radius: 4px;
    border: 0;
    font-size: 14px;
    color: #fff;
    margin-top: 20px;
    background: linear-gradient(-90deg, #4e75ff, #0139fd);
    margin-bottom: 30px;
  }
  .el-table th,
  .el-table thead tr {
    background: #f4f7f9;
    color: #000;
    height: 54px;
  }
  .el-table tbody tr {
    height: 54px;
  }
}
</style>