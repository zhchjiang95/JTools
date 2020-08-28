<template>
  <div class="wrapper" :class="{ dark }">
    <div id="side">
      <div class="slip" v-if="screen"></div>
      <div class="desc-link">
        <a href="javascript:;" data-jt-id="install" @click="hideSide">
          <i class="ri-home-smile-fill"></i>
        </a>
        <a href="javascript:;" @click="toggleDark">
          <i :class="dark ? 'ri-contrast-2-line' : 'ri-contrast-2-fill'"></i>
        </a>
        <a href="https://github.com/zhchjiang95/JTools" target="_blank" @click="hideSide">
          <i class="ri-github-fill"></i>
        </a>
      </div>
      <div class="navigation-area">
        <h3 class="classify">Features</h3>
        <ul>
          <li v-for="(item, i) in features" :key="i">
            <a :href="'#' + item.hash" :data-jt-id="item.hash" @click="hideSide">
              {{ item.title }}
              <label>{{ item.desc }}</label>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div id="main" @click="hideSide">
      <div class="use" id="install">
        <img class="logo" src="https://fiume.cn/jtools/assets/logo.svg" alt="jtools logo" />
        <div class="down">
          <div class="code">
            <textarea readonly><script src="https://fiume.cn/jtools/source/JTools.js"></script></textarea>
          </div>
          <div class="code">
            import JTools from '../utils/JTools'
            <br />
            import { boxAnchor } from '../utils/JTools'
          </div>
          <div class="desc">通过 import 引入或 script 标签引入会自动挂载到全局，直接使用 JTools 即可。</div>
        </div>
      </div>
      <Explanation v-for="(item, i) in features" :key="i" :means="item" />
    </div>
    <div class="menu" v-show="screen" @click="showSide">
      <i class="ri-menu-line"></i>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import { features } from "./utils/data.js";
import Explanation from "./components/Explanation.vue";

export default {
  components: {
    Explanation,
  },
  setup() {
    // 是否显示菜单按钮
    const screen = ref(window.innerWidth > 768 ? false : true);
    window.onresize = function () {
      screen.value = window.innerWidth > 768 ? false : true;
    };

    const dark = ref(localStorage.getItem('dark') === 'true' ? true : false);

    const show = ref(window.innerWidth > 768 ? false : true);
    const left = ref("50%");
    const transX = ref(screen.value ? -100 : 0);

    const hideSide = () => {
      if (screen.value) {
        transX.value = -100;
        left.value = "50%";
      }
    };
    const showSide = () => {
      if (screen.value) {
        transX.value = 0;
        left.value = "150%";
      }
    };

    const toggleDark = () => {
      dark.value = !dark.value;
      localStorage.setItem('dark', dark.value)
    };

    onMounted(() => {
      JTools.boxAnchor(".navigation-area", "#main", 10);
      JTools.boxAnchor(".desc-link", "#main", 10, 40);
      JTools.slideDirection('body', (dir, real) => {
        if(dir.endX - dir.startX > 40){
          showSide()
        } else if(dir.endX - dir.startX < -40){
          hideSide()
        }
      }, true, true)
    });

    return {
      features,
      screen,
      transX,
      left,
      hideSide,
      showSide,
      dark,
      toggleDark,
    };
  },
};
</script>

<style vars="{left, transX}" scoped>
.classify {
  border-bottom: 1px solid #e8e8e8;
  padding-bottom: 10px;
  margin-bottom: 10px;
}

#side {
  flex-shrink: 0;
  width: 22%;
  min-width: 264px;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 1.4%;
  border-right: 1px solid #e8e8e8;
  user-select: none;
  transform: translateX(calc(var(--transX) * 1%));
  transition: 0.5s;
}

#side .slip{
  position: absolute;
  top: 50%;
  right: 2px;
  transform: translateY(-50%);
  width: 6px;
  height: 60px;
  border-radius: 8px;
  background: #dddddd;
}

.menu {
  position: fixed;
  left: var(--left);
  bottom: 8%;
  transform: translateX(-50%);
  width: 16vw;
  height: 16vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: 0.8s;
  border: 1px solid #cc6f004d;
  background: #edb36d8f;
}
.menu:active {
  background: #edb36d;
}

.menu i {
  font-size: 7.4vw;
  color: #cc6f00b3;
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
  transition: 0.3s;
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
}

.use .down {
  flex-grow: 1;
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
