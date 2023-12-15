/*
 * @Descripttion: 
 * @Author: niezihao
 * @Date: 2023-12-13 12:05:30
 * @LastEditors: niezihao
 * @LastEditTime: 2023-12-15 09:08:26
 */
import "./main.css";

import { createApp, type DirectiveBinding } from "vue";

import App from "./App.vue";

const app = createApp(App);

app.directive("demo", {
  updated(el: HTMLInputElement, binding: DirectiveBinding) {
    if (!binding.value) {
      el.style.visibility = "hidden";
      // el.parentNode && el.parentNode.removeChild && el.parentNode.removeChild(el)
    }
  },
});
app.mount("#app");