<template>
  <div class="login">
    <el-form ref="loginRef" class="login-form" :rules="loginRules" :model="loginForm">
      <h3 class="title">后端管理系统</h3>
      <el-form-item prop="phonenumber">
        <el-input v-model="loginForm.phonenumber" size="large" placeholder="手机号">
          <template #prefix>
            <el-icon :size="15">
              <user/>
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" size="large" placeholder="密码" type="password">
          <template #prefix>
            <el-icon :size="15">
              <lock/>
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input v-model="loginForm.code" size="large" placeholder="验证码" style="width: 60%">
          <template #prefix>
            <el-icon :size="15">
              <warning/>
            </el-icon>
          </template>
        </el-input>
        <div class="login-code">
          <img :src="codeUrl" class="login-code-image" @click="getCode">
        </div>
      </el-form-item>
      <el-checkbox v-model="loginForm.rememberMe" style="margin: 0 0 20px 0">记住密码</el-checkbox>
      <el-form-item>
        <el-button style="width: 100% " type="primary" size="large" @click="loginHandle">登 录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script setup>
import {ref, getCurrentInstance} from 'vue'
import {getCodeImg} from "@/api/login.js";
import {ElMessage} from "element-plus";
import useUserStore from "@/store/modules/user.js";

const {proxy} = getCurrentInstance()
const codeUrl = ref('')
const useStore = useUserStore()

const loginForm = ref({
  phonenumber: '18751889883',
  password: '18751889883',
  rememberMe: false,
  code: '',
  uuid: ''
})

const loginRules = {
  phonenumber: [{required: true, triggr: 'blur', message: '请输入手机号'}],
  password: [{required: true, triggr: 'blur', message: '请输入密码'}],
  code: [{required: true, triggr: 'change', message: '请输入验证码'}]
}

function loginHandle() {
  console.log('loginHandle', loginForm.value)
  proxy.$refs.loginRef.validate(valid => {
    console.log('valid', valid)
    if (valid) {
      useStore.login(loginForm.value).then(res => {
        console.log(useStore.token)
        if (res.state !== "OK") {
          ElMessage.error(res.errorMessage)
        }
      }).catch(error => {
        console.error("Login request failed", error);
        ElMessage.error("登录请求失败，请稍后重试！");
      })
    }
  })
}

function getCode() {
  getCodeImg().then(res => {
    console.log(res)
    codeUrl.value = "data:image/gif;base64," + res.img;
    loginForm.value.uuid = res.uuid
  })
}

getCode()
</script>


<style scoped lang="scss">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-image: url("@/assets/images/login-background.jpg");
  background-size: cover;
}

.login-form {
  background-color: #fff;
  width: 400px;
  padding: 25px 25px 5px 25px;
  border-radius: 10px;

  .title {
    text-align: center;
    color: gray;
    margin: 0 auto 30px auto;
  }

  .login-code {
    width: 35%;
    margin: 0 0 0 15px;
    //background-color: yellowgreen;
    text-align: center;
    border-radius: 5px;
    height: 40px;

    .login-code-image {
      height: 40px;
      //padding-left: 5px;
      cursor: pointer;
    }
  }
}
</style>