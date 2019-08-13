<template>
  <el-container class="container">
    <el-header class="headers">
      <h2 class="log">
        <img src="@/static/images/timg.jpg">
      </h2>
      <div class="log_photo" @click="change()">
        <img src="@/static/images/2.jpg">
        <span>{{user_data.user_name}}</span>
        <ul v-show="flag">
          <li @click="tuichu()">退出登录</li>
        </ul>
      </div>
    </el-header>
    <el-container class="mainbox">
      <el-aside width="200px" class="aside">
        <el-menu class="navbox">
          <el-submenu class="nav_items" v-for="(item,ind) in navlist" :key="ind" :index="ind+''">
            <template slot="title">
              <i :class="item.icon"></i>
              {{item.title}}
            </template>
            <el-menu-item-group class="items_item">
              <el-menu-item
                :index="ind+'-'+inds"
                v-for="(items,inds) in navlist[ind].children"
                :key="inds"
                @click="goView(items.path)"
              >{{items.meta.title}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import { mapActions } from "vuex";
import setLeftnav from "@/router/main.js";
export default {
  props: {},
  components: {},
  data() {
    return {
      user_data: JSON.parse(sessionStorage.getItem("userInfo")).data, //用户数据,
      navlist: setLeftnav.setnav(), //导航数据
      flag: false
    };
  },
  computed: {},
  methods: {
    ...mapActions("comstates", [
      "getAllexams",
      "getAllcurriculums",
      "getAllquestionss",
      "getAllApi",
      "getAllIdentity",
      "getAlluser",
      "getAllview"
    ]),
    goView(url) {
      this.$router.push({ path: url });
    },
    //点击退出
    change() {
      this.flag = !this.flag;
    },
    //退出登录
    tuichu() {
      sessionStorage.removeItem("userInfo");
      sessionStorage.removeItem("authorization");
      this.$router.push({ path: "/login" });
      this.$message({
        type: "info",
        message: "请重新登录"
      });
    }
  },
  created() {
    let usinfo=JSON.parse(sessionStorage.getItem("userInfo")).data.identity_text;
      //请求数据
      this.getAllexams();
      this.getAllcurriculums();
      this.getAllquestionss();
      if(usinfo=="管理员"){
        this.getAllApi();
        this.getAllIdentity();
        this.getAlluser();
        this.getAllview();
      }
  },
  mounted() {}
};
</script>
<style lang="scss">
@import "@/static/styles/home.scss";
.log_photo {
  position: relative;
  ul {
    position: absolute;
    bottom: -20px;
    left: 0;
    width: 100%;
    background: #fff;
    border: 1px solid #ccc;
    text-align: center;
    z-index: 99;
  }
}
.log_photo:hover {
  background: #eee;
}
</style>