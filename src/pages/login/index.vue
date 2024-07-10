<template>
  <view class="login-layout">
    <view class="login-content">
      <view class="login-form-layout">
        <view class="login-form-header"> 手机号快捷登录 </view>
        <view class="login-form-content">
          <uv-form
            labelPosition="left"
            :model="formState"
            :rules="rules"
            :labelWidth="80"
            :ref="(ref) => (formRef = ref)">
            <uv-form-item label="手机号码" prop="mobile" borderBottom>
              <uv-input v-model="formState.mobile" placeholder="手机号码" border="none" />
            </uv-form-item>
            <uv-form-item label="验证码" prop="code" borderBottom>
              <uv-input v-model="formState.code" placeholder="验证码" border="none" />
            </uv-form-item>
          </uv-form>
        </view>
        <view class="login-form-footer">
          <uv-button type="primary">提交</uv-button>
        </view>
        <view class="login-form-agreement">
          <uv-checkbox-group v-model="agreement">
            <uv-checkbox :name="'agreement'">已阅读并同意</uv-checkbox>
          </uv-checkbox-group>
          <text class="agreement-link">《用户服务协议》</text>
          <text class="agreement-link">和</text>
          <text class="agreement-link">《隐私协议》</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="jsx" name="Login" setup>
import { onReady } from '@dcloudio/uni-app';
import { computed, ref } from 'vue';
// apis
// hooks
// utils
// stores
// mixins
// configs
// components

const formRef = ref();
const formState = ref({
  mobile: null,
  code: null,
});

const agreement = ref([]);
const rules = computed(() => ({}));
onReady(() => {});
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
