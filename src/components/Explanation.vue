<template>
<h2 :id="means.hash" data-jt-type="jt">{{ means.title + ' ' + means.desc }}</h2>
<div>
  <p v-html="means.detailed"></p>
  <p>
    <strong>语法：</strong>
  </p>
  <div class="code">{{ means.grammar }}</div>

  <p>
    <strong>参数[{{ means.param.length }}]：</strong>
  </p>
  <p class="param" v-for="(item, i) in means.param" :key="item.name">
    <span>{{ i + 1 + '、' }}</span>
    <p>{{ item.name + '：' }}<span v-html="item.desc"></span></p>
  </p>

  <p>
    <strong>例子：</strong>
  </p>
  <div v-if="means.example.iframe" v-html="means.example.iframe" class="jt-example"></div>
  <div class="code" v-else>
    <textarea readonly v-for="(item, i) in means.example.areaList" :key="i">{{item}}</textarea>
    {{ means.example.text }}
  </div>
</div>
</template>

<script>
import {
  onMounted
} from "vue"
export default {
  props: {
    means: {
      type: Object,
      default: {},
    },
  },
  setup() {},
};
</script>

<style scoped>
h2 {
  border-bottom: 1px solid #e8e8e8;
  padding-bottom: 10px;
  margin-bottom: 10px;
}

#main>div {
  margin-bottom: 80px;
} 

.param{
  display: flex;
}
.param span{
  flex-shrink: 0;
}
.param p{
  flex-grow: 1;
  line-height: 28px;
  padding-top: 6px;
}
.jt-example{
  position: relative;
  font-size: 0;
}
.jt-example::after{
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  animation: rotate 1s infinite linear;
  background-image: url(../assets/loader-2-line.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px;
}
@keyframes rotate{
  from{
    transform: rotate(0);
  }
  to{
    transform: rotate(360deg);
  }
}
</style>
