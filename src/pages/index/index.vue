<!-- @format -->

<template>
  <view class="content">
    <!-- <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view> -->
    <uv-checkbox-group v-model="checkboxValue">
      <uv-checkbox
        :customStyle="{ marginBottom: '8px' }"
        v-for="(item, index) in checkboxList"
        :key="index"
        :label="item.name"
        :name="item.name"></uv-checkbox>
    </uv-checkbox-group>
  </view>
</template>

<script lang="jsx" setup>
import { ref } from 'vue';
import { onReady, onShow } from '@dcloudio/uni-app';

const checkboxValue = ref(['苹果']);

const checkboxList = ref([
  {
    name: '苹果',
    disabled: false,
  },
  {
    name: '香蕉',
    disabled: false,
  },
  {
    name: '橙子',
    disabled: false,
  },
]);
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
