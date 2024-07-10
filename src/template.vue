<template>
  <view :class="$style['login-layout']"> </view>
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
const formState = ref({});

const agreement = ref([]);
const rules = computed(() => ({}));
onReady(() => {});
</script>

<style lang="scss" module></style>
