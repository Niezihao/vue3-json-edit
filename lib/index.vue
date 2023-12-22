<!--
 * @Descripttion: 
 * @Author: niezihao
 * @Date: 2023-12-15 09:36:47
 * @LastEditors: niezihao
 * @LastEditTime: 2023-12-22 16:15:07
-->
<template>
  <json-edit v-bind="$attrs" :data="model" @change="change"></json-edit>
</template>

<script lang="ts" setup name="jsonEdit">
import { ref, computed, watch, onMounted } from "vue";
import jsonEdit from "./JsonEdit.vue";
const emit = defineEmits(["update:data"]);
const props = defineProps({
  data: {
    // 传入的json数据
    type: [Object, Array],
    required: true,
  },
});
let model = computed({
  get() {
    console.log("props.data", props.data);
    return props.data;
  },
  set(value) {
    console.log('set',value);
    emit("update:data", value);
  },
});
function change(value: any){
  console.log('change',value);
  emit("update:data", value);

}

</script>
