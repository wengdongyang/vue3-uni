<template>
  <view class="safe-area-content"> <slot /> </view>
</template>

<script>
export default {
  name: 'SafeArea',
};
</script>

<style lang="scss" scoped>
.safe-area-content {
  width: 750rpx;
  height: 100vh;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
</style>
