<template>
  <div class="wrapper" :class="{ dark }">
    <div class="tips" v-if="isTips">未成功加载 JTools 工具！</div>
    <div id="side">
      <div class="slip" v-if="screen"></div>
      <div class="desc-link">
        <a href="//www.fiume.cn" target="_blank" @click="hideSide">
          <i class="ri-home-smile-fill"></i>
        </a>
        <a href="javascript:;" data-jt-id="install" @click="hideSide">
          <i class="ri-install-fill"></i>
        </a>
        <a href="javascript:;" @click="toggleDark">
          <i :class="dark ? 'ri-contrast-2-line' : 'ri-contrast-2-fill'"></i>
        </a>
        <a
          href="https://github.com/zhchjiang95/JTools"
          target="_blank"
          @click="hideSide"
        >
          <i class="ri-github-fill"></i>
        </a>
      </div>
      <div class="navigation-area">
        <h3 class="classify">Features</h3>
        <ul>
          <li v-for="(item, i) in dataList" :key="i">
            <a
              :class="{ active: item.checked }"
              href="javascript:;"
              :data-jt-id="item.hash"
              @click="hideSide"
            >
              {{ item.title }}
              <label>{{ item.desc }}</label>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div id="main" @click="hideSide">
      <div class="use" id="install">
        <img class="logo" :src="jtools.logo" alt="jtools logo" />
        <div class="down">
          <div class="code">
            <textarea
              readonly
              onclick="javascript:window.open('https://fiume.cn/jtools/source/JTools.js');"
            >

<script src="https://fiume.cn/jtools/source/JTools.js"></script></textarea
            >
          </div>
          <div class="code">
            {{ jtools.import[0] }}
            <br />
            {{ jtools.import[1] }}
          </div>
          <div class="desc" v-html="jtools.desc"></div>
        </div>
      </div>
      <Explanation v-for="(item, i) in dataList" :key="i" :means="item" />

      <footer>
        <div class="jtools">
          <img class="logo" :src="jtools.logo" alt="jtools logo" />
          <span><strong>JTools</strong> - 纯 js 的便利工具集</span>
        </div>
        <div class="links">
          <a href="https://www.fiume.cn/" target="_blank">Fiume - 集</a>
          <a href="https://fiume.cn/c/" target="_blank">Calculate - 计算尺寸</a>
          <a href="https://fiume.cn/tools/nodes/" target="_blank"
            >Nodes - 一些节点</a
          >
          <a href="https://github.com/zhchjiang95/JTools" target="_blank"
            >Github - JTools</a
          >
        </div>
      </footer>
    </div>
    <div class="menu" v-show="screen" @click="showSide">
      <i class="ri-menu-line"></i>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onBeforeMount, onMounted } from "vue";
import { features } from "./utils/data.js";
import Explanation from "./components/Explanation.vue";

export default {
  components: {
    Explanation,
  },
  setup() {
    const jtools = reactive({
      logo: "https://www.fiume.cn/jtools/assets/logo.svg",
      source: "https://www.fiume.cn/jtools/source/JTools.js",
      import: [
        "import JTools from '../utils/JTools'",
        "import { boxAnchor } from '../utils/JTools'",
      ],
      desc:
        `通过 import 引入或 script 标签引入会自动挂载到全局，直接使用 JTools 即可<strong style="font-style: italic; color: #999999;">——当前版本：${JTools.version || '未知'}</strong>`,
    });
    const dataList = reactive(features);
    // 是否显示菜单按钮
    const screen = ref(window.innerWidth > 768 ? false : true);
    window.onresize = function () {
      screen.value = window.innerWidth > 768 ? false : true;
    };

    const dark = ref(localStorage.getItem("dark") === "true" ? true : false);

    const show = ref(window.innerWidth > 768 ? false : true);
    const left = ref("50%");
    const transX = ref(screen.value ? -100 : 0);
    const isTips = ref(false);

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
      localStorage.setItem("dark", dark.value);
    };

    onBeforeMount(() => {
      if (!window.JTools) {
        isTips.value = true;
      }
    });

    onMounted(() => {
      document.querySelectorAll("textarea").forEach((v) => {
        v.style.height = v.scrollHeight + "px";
      });
      JTools.boxAnchor(
        {
          source: "div.navigation-area",
          target: "#main",
          speed: 40,
        },
        (res) => {
          dataList.forEach((v) => {
            if (v.hash === res.jtId) {
              // location.hash = res.jtId
              v.checked = true;
            } else {
              v.checked = false;
            }
          });
        }
      );
      JTools.boxAnchor({
        source: "div.desc-link",
        target: "#main",
        speed: 40,
      });
      JTools.slideDirection(
        "body",
        (dir, real) => {
          if (dir.endX - dir.startX > 80) {
            showSide();
          } else if (dir.endX - dir.startX < -80) {
            hideSide();
          }
        },
        true,
        true
      );
    });

    return {
      isTips,
      jtools,
      dataList,
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

<style scoped vars="{left, transX}">
.tips {
  position: fixed;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999999;
  padding: 6px 14px;
  border-radius: 10px;
  font-size: 13px;
  border: 1px solid #faecd8;
  background: #fdf6ec;
  color: #e8a23c;
}

.classify {
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 10px;
  margin-bottom: 10px;
}

#side {
  flex-shrink: 0;
  width: 22%;
  min-width: 264px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  user-select: none;
  transform: translateX(calc(var(--transX) * 1%));
  transition: 0.5s;
  background: linear-gradient(-90deg, #e8e8e8, #fffffff5);
}

#side .slip {
  position: absolute;
  top: 50%;
  right: 2px;
  transform: translateY(-50%);
  width: 5px;
  height: 10%;
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
  /* border: 1px solid #cc6f004d; */
  background: linear-gradient(0deg, #e8e8e842, #fafafa00);
}

.menu:active {
  background: #000;
}

.menu i {
  font-size: 7.4vw;
  color: #0000005e;
}

.desc-link {
  height: 56px;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  background-image: linear-gradient(90deg, #e8e8e8, #fafafa);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
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

.navigation-area {
  padding: 0 6%;
}

.navigation-area li {
  position: relative;
  line-height: 40px;
  font-size: 13px;
  padding-left: 10px;
  color: #6c696a;
}
.navigation-area li a{
  display: block;
}

.navigation-area a::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  height: 80%;
  z-index: -1;
  display: none;
  border-radius: 5px;
  transition: .3s;
  background: #cecccd;
}
.navigation-area a.active::after {
  display: block;
}
.navigation-area a:hover::after {
  display: block;
  background: #eceaeb;
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

footer {
  margin: 26px 0;
}
footer div {
  display: flex;
  justify-content: center;
  align-items: center;
}
footer div img {
  pointer-events: none;
  width: 50px;
}
footer div.jtools {
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #e8e8e8;
}
#main div.links {
  flex-wrap: wrap;
}
#main div.links a {
  flex-shrink: 0;
  margin-bottom: 4px;
  transition: 0.3s;
  color: #93958f;
}
#main div.links a:not(:last-child) {
  margin-right: 14px;
}
#main div.links a:hover {
  color: #595959;
}
</style>
