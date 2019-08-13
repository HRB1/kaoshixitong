<template>
    <div class="container">
        <div class="main">
            <div class="form_box">
                <el-form :rules="rules" ref="userinfo" :model="userinfo">
                <el-form-item label="用户名" prop="user_name">
                        <el-input v-model="userinfo.user_name"  
                        autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="user_pwd">
                        <el-input v-model="userinfo.user_pwd" type="password" 
                        autocomplete="off"></el-input>
                    </el-form-item>
                    <el-Button class="button" type="button" @click="loginuser()">登录</el-Button>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
import {login,userInfo,userView} from "@/api/user.js";
export default {
    props:{

    },
    components:{

    },
    data(){
        //验证用户名
        const checkname = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('填写信息'));
            }
            callback();
        }
        return {
            userinfo:{
                user_pwd:"",
                user_name:""
            },
             rules: {
                user_pwd:{ validator: checkname, trigger: ['change','blur'] },
                user_name:{ validator: checkname, trigger: ['change','blur'] }
            }
        }
    },
    methods:{
        //登录
        loginuser(){
              this.$refs["userinfo"].validate(async (data) => {
                  if(data){
                    let res=await login({
                        ...this.userinfo
                    })
                    if(res.code){
                      this.$message({
                        dangerouslyUseHTMLString: true,
                        message: res.msg,
                        type: "success"
                      });
                      //设置token到本地存储
                      window.sessionStorage.setItem("authorization", res.token);
                        //获取用户数据
                      let userinfo=await userInfo();
                        //根据用户id获取权限
                        let data = await userView({
                            user_id: userinfo.data.user_id
                        });
                        userinfo.userViews=data.data;//用户权限列表
                         window.sessionStorage.setItem("userInfo", JSON.stringify(userinfo));
                      //跳转到首页
                      this.$router.push({path:"/main"})
                    }
                  }
              })
        }
    }
}
</script>
<style scoped lang="scss">
.container{
    width: 100%;
    height: 100%;
     background: rgba(21, 21, 241, 0.904);
     background:url("../../static/images/login_wraper.8ab0d297.jpg") no-repeat;
     background-position: center;
     background-size: cover;
    .main{
          width: 100%;
          height: 100%;
        
         .form_box{
             width: 400px;
             padding: 20px 40px;
             box-sizing: border-box;
             background: #fff;
             border-radius: 10px;
             position: absolute;
             right: 40px;
             top: 30%;
             .button{
                 width: 100%;
                 background: blue;
                 color: #fff;
             }
         }
    }
    
}
</style>