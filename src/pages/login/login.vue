<template>
  <view class="page">
    <van-form >
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="tenantcode"
        type="text"
        name="编码"
        label="编码"
        placeholder="编码"
        :rules="[{ required: true, message: '请填写编码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit" @click="onSubmit">
          登录
        </van-button>
      </div>
    </van-form>
  </view>
</template>

<script>

import { login } from '@/api/login'

export default {
  data() {
    return {
      username: "",
      password: "",
      tenantcode: "",
    };
  },
  methods: {
    onSubmit() {
        login(this.username, this.password, this.tenantcode).then(response =>{

        })
      console.log("submit", values);
    }
  },
};
</script>