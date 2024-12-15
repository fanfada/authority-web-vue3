<template>
  {{userStore.token}}
<!--  {{token}}-->
</template>


<script setup>

import useUserStore from "@/store/modules/user.js";
import {ref} from "vue";

const userStore = useUserStore()
// const token = ref('');
// function getToken(){
//   console.log("userStore", userStore.token)
//   token.value = userStore.token
//   console.log("token",token.value)
// }
// getToken()
</script>


<style scoped>

</style>