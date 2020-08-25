<template>
<div id="side">
  <div class="desc-link">
    <a href="javascript:;" data-jt-id="install">
      <i class="ri-home-smile-fill"></i>
    </a>
    <a href="https://github.com/zhchjiang95/JTools" target="_blank">
      <i class="ri-github-fill"></i>
    </a>
  </div>
  <div class="navigation-area">
    <h3 class="classify">Features</h3>
    <ul>
      <li v-for="(item, i) in features" :key="i">
        <a :href="'#' + item.hash" :data-jt-id="item.hash">
          {{ item.title }}
          <label>{{ item.desc }}</label>
        </a>
      </li>
    </ul>
  </div>
</div>
<div id="main">
  <div class="use" id="install">
    <img class="logo" src="https://fiume.cn/jtools/assets/logo.svg" alt="jtools logo" />
    <div class="down">
      <div class="code">
        <textarea readonly>&lt;script src="https://fiume.cn/jtools/source/JTools.js">&lt;/script></textarea>
      </div>
      <div class="code">import "./utils/JTools.js"</div>
      <div class="desc">通过 script 标签或入口文件中 import 引入后会自动安装到全局，直接使用 JTools 即可。</div>
    </div>
  </div>
  <Explanation v-for="(item, i) in features" :key="i" :means="item" />
</div>
</template>

<script>
import {
  reactive,
  onMounted
} from "vue";
import {
  features
} from "./utils/data.js";
import Explanation from "./components/Explanation.vue";

export default {
  components: {
    Explanation,
  },
  setup() {
    onMounted(() => {
      JTools.boxAnchor(".navigation-area", "#main", 10);
      JTools.boxAnchor(".desc-link", "#main", 10, 40);
    });

    return {
      features
    };
  },
};
</script>

<style scoped>
.classify {
  border-bottom: 1px solid #e8e8e8;
  padding-bottom: 10px;
  margin-bottom: 10px;
}

#side {
  flex-shrink: 0;
  width: 20%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 1.4%;
  border-right: 1px solid #e8e8e8;
  user-select: none;
}

.desc-link {
  height: 56px;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
}

.desc-link a {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 180%;
  transition: .3s;
  color: #343434;
}

.desc-link a i {
  pointer-events: none;
}

.desc-link a:not(:last-child) {
  border-right: 1px solid #e8e8e8;
}

.desc-link a:hover {
  background: #fff;
}

.navigation-area li {
  line-height: 40px;
  font-size: 13px;
}

.navigation-area a:hover {
  color: #1890ff;
}

.navigation-area a label {
  margin-left: 4px;
  pointer-events: none;
}

#main {
  flex-grow: 1;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 3% 10%;
}

#main::-webkit-scrollbar {
  display: none;
}

.use {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12%;
}

.use .logo {
  height: 200px;
  margin-right: 16px;
}

.use .down {
  width: 48%;
}

.use .code {
  padding: 14px 24px;
}

.use .code textarea {
  height: 22px;
}

.use .desc {
  padding: 0 4px;
}
</style>
