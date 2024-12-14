<template>
  <div class="login">
    <el-form class="login-form">
      <h3 class="title">若依后端管理系统</h3>
      <i class="el-icon-upload"></i>
      <el-form-item>
        <el-input size="large" placeholder="账号">
          <template #prefix>
            <el-icon :size="15">
              <User/>
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input size="large" placeholder="密码">
          <template #prefix>
            <el-icon :size="15">
              <Lock/>
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input size="large" placeholder="验证码" style="width: 60%">
          <template #prefix>
            <el-icon :size="15">
              <Check/>
            </el-icon>
          </template>
        </el-input>
        <div class="login-code">图片</div>
      </el-form-item>
      <el-checkbox style="margin: 0 0 20px 0">记住密码</el-checkbox>
      <el-form-item>
        <el-button style="width: 100% " type="primary" size="large">登 录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
export default {
  name: "login"
}
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
    background-color: yellowgreen;
    text-align: center;
    border-radius: 5px;
  }
}
</style>