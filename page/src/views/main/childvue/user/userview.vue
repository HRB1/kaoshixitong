<template>
  <div class="container">
    <h2 class="header_title">展示用户</h2>
    <div class="mainU">
      <ul class="view_header">
        <li
          :class="ind==key?'active':''"
          @click="changeType(key)"
          v-for="(item,key) in navlist"
          :key="key"
        >{{item.title}}</li>
      </ul>
      <div style="clear:both"></div>
        <h2 style="font-size:14px;margin:5px 0;">{{text}}</h2>
      <el-table :lazy="true"  
        v-if="alldatas.length" 
        :data="alldatas[ind].data.slice((this.page-1)*limi,this.page*limi)">
        <!-- 表头 -->
          <el-table-column 
              class="theaders" 
              v-for="(item,ind) in tablehead[ind].data" 
              :key="ind"  
              :prop="item.id"  
              :label="item.title" 
              width="200" ></el-table-column>
      </el-table>
      <h2 v-else >正在加载.....</h2>
      <!-- 分页 -->
      <el-pagination class="pages" 
        background 
        @current-change="changepage()"  
        ref="paginations" 
        layout="prev, pager, next"  
        :total="pagesALL">dasdasd</el-pagination>
    </div>
  </div>
</template>
<script>
import {
  getuser,
  getuserSf,
  allApi,
  getViews,
  getSfApis,
  getSfViews
} from "@/api/getAlldata.js";
export default {
  props: {},
  components: {},
  data() {
    return {
      ind: 0,//下标
      text:"",//当前文字title
      alldatas: [],//所有数据
      page:1,//页数
      limi:10,//条数
      pagesALL:10, //总条数
      //用户列表 
      navlist: [
        {
          title: "用户数据",
          type: 0
        },
        {
          title: "身份数据",
          type: 1
        },
        {
          title: "api接口权限",
          type: 2
        },
        {
          title: "身份和api接口关系",
          type: 3
        },
        {
          title: "视图接口权限",
          type: 4
        },
        {
          title: "身份和视图权限关系",
          type: 5
        }
      ],
      //表格头部数据
      tablehead:[
          {
             data:[
                 {
                    title:"用户名",
                    id:"user_name"
                 },{
                     title:"密码",
                     id:"user_pwd"
                 }
             ]
          },
          {
            data:[
                {
                  title:"身份数据",
                  id:"identity_text"
                }
            ]
          },
          {
             data:[
                 {
                    title:"api权限名称",
                    id:"api_authority_text"
                 },{
                      title:"api权限url",
                      id:"api_authority_url"
                 },{
                      title:"api权限方法",
                      id:"api_authority_method"
                 }
             ]
          },{
              data:[
                  {
                      title:"身份名称 ",
                      id:"identity_text"
                  },
                  {
                      title:"api权限名称 ",
                      id:"api_authority_text"
                  },
                  {
                      title:"api权限url",
                      id:"api_authority_url"
                  },
                  {
                      title:"api权限方法",
                      id:"api_authority_method"
                  },

              ]
          },{
             data:[
                 {
                    title:"视图权限名称",
                    id:"view_authority_text"
                 },{
                      title:"视图id",
                      id:"view_id"
                 }
             ]
          },{
            data:[
                {
                    title:"身份",
                    id:"identity_text"
                },
                {
                    title:"视图名称",
                    id:"view_authority_text"
                },{
                    title:"视图id",
                    id:"view_id"
                }
            ]
          }
      ]
    };
  },
  computed: {},
  methods: {
    //改变下标
    changeType(key) {
      this.ind = key;
      this.page=1;//当前页数
      this.$refs.paginations.internalCurrentPage=1;//当前页数
      this.pagesALL=this.alldatas[this.ind].data.length;
      this.text=this.navlist[this.ind].title;
    },
    //获取所有数据
    async getalldata() {
      let data = await getuser();
      this.alldatas.push({
        type: 0,
        data: data.data
      });
      let data1 = await getuserSf();
      this.alldatas.push({
        type: 1,
        data: data1.data
      });
      let data2 = await allApi();
      this.alldatas.push({
        type: 2,
        data: data2.data
      });
      let data3 = await getSfApis();
      this.alldatas.push({
        type: 3,
        data: data3.data
      });
      let data4 = await getViews();
      this.alldatas.push({
        type: 4,
        data: data4.data
      });
      let data5 = await getSfViews();
      this.alldatas.push({
        type: 5,
        data: data5.data
      });
     
    },
    //点击页码
    changepage(){
      //设置当前页数
      this.page=this.$refs.paginations.internalCurrentPage;
    }
  },
  created() {
    //请求用户数据
    this.getalldata();
    this.text=this.navlist[this.ind].title;
  }

};
</script>
<style  lang="scss">
@import "@/static/styles/userview.scss";
</style>