<template>
  <div class="container">
    <h2 class="header_title">添加用户</h2>
    <div class="main_user">
      <div class="main_user_con">
        <!-- 添加用户 -->
        <adduser :alluser="alluser" :allIdentity="allIdentity"/>
        <!-- 添加身份 -->
        <addiders/>
          <!-- 添加api接口权限 -->
        <addapi/>
        <!-- 添加视图接口权限 -->
        <addViews/>
        <!-- 给身份设置api权限 -->
        <setIderApi/>
        <!-- 给身份设置视图权限 -->
        <setIderView/>
      </div>
    </div>
  </div>
</template>
<script>
import adduser from "./components/adduserVal"; //添加用户框
import addapi from "./components/addapi"; //添加api接口权限
import addiders from "./components/addiders"; //添加身份
import addViews from "./components/addViews";//添加视图权限
import setIderApi from "./components/setIderApi";//给身份设置api权限
import setIderView from "./components/setIderView";//给身份设置视图权限
import { mapState } from "vuex";
export default {
  props: {},
  components: {
    adduser,
    addapi,
    addiders,
    addViews,
    setIderApi,
    setIderView
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("comstates", ["alluser", "allIdentity"])
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style  lang="scss">
@import "@/static/styles/adduser.scss";
</style>