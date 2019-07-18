<template>
    <el-container>
    <el-header>
      <h3 class="text-center mt15">登录</h3>
    </el-header>
    <el-main>
      <el-form :model="loginForm" :rules="loginRules" ref="loginForm">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" autocomplete="true"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item class>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
            </el-col>
            <el-col :span="12" class="text-right">
              <el-button @click="resetForm('loginForm')">重置</el-button>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
import { userLogin } from "@/api/user";
import {setSession} from '@/utils';

export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username:'pigpig',
        password:'123321',
      },
       loginRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 6, max: 15, message: "长度在 6 到 15 个字符", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "change" }]
      }
    }
  },
  methods: {
    loginHandler() {
      userLogin(this.loginForm)
      .then(res=>{
          if (res.data.code == 1) {
            this.$message({
              message: "恭喜你，这是一条成功消息",
              type: "success"
            });
           setSession("token", res.data.token);
            this.$store.commit("SAVE_TOKEN", { token: res.data.token });
            this.$router.history.push("/music/toplist");
          }
      })
      .catch(err=>{
        // const {msg}=err.response.data;
        this.$message.error('报错了！');
      })
    },
   submitForm(formName) {
      console.log(this.$refs[formName]);
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loginHandler();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>
<style>
</style>
