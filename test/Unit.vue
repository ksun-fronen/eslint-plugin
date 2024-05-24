<template>
  <div ref="DataBoundedRef"
       v-bind="{}"
       contenteditable="true"
       style="display:none;width: 100px">
    <span>123</span>
  </div>
</template>

<script>
import aa   from "./UnitJs";
import bbbb from "./Test2";

if (aa === 555) {
  console.log("error");
}

console.log("a", aa, bbbb);
switch (aa) {
  case 1:
  case 2:
  case 3:
  default:
}

export default {
  name: "Unit",
};
</script>

<style></style>
