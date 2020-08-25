export const features = [
  {
    title: "FormatTime",
    hash: "formatTime",
    desc: "日期格式化",
    detailed: "格式化当前或自定义时间日期，自定义年月日分隔符和时分秒显示。如需更强大用法请使用：<a href='http://momentjs.cn/' target='_blank'>moment.js</a>",
    grammar: "JTools.formatTime(sep?: String, millisecond? Number/Date, hours?: Boolean)",
    param: [
      {
        name: "sep[可选]",
        desc: "年月日分隔符。默认：-。",
      },
      {
        name: "millisecond[可选]",
        desc: "自定义时间（毫秒），纯数字或Date()。默认当前时间。",
      },
      {
        name: "hours[可选]",
        desc: "是否显示时分秒。默认：false。",
      },
    ],
    example: {
      areaList: [],
      text: `JTools.formatTime('-', Date.now() + 20, true) ==> "2020-08-24 15:06:32"`
    },
  },
  {
    title: "PageAnchor",
    hash: "pageAnchor",
    desc: "页面锚点",
    detailed: "指定页面滑动到某个位置，自定义滑动速度，自定义滑动方向。须整个页面可滑动！",
    grammar: "JTools.pageAnchor(anchor: Number, speed: Number, direction: Boolean)",
    param: [
      {
        name: "anchor",
        desc: "滑动到的目标位置。",
      },
      {
        name: "speed",
        desc: "滑动速度。",
      },
      {
        name: "direction",
        desc: "滑动方向，向下（true）/向上（false）",
      },
    ],
    example: {
      areaList: [],
      text: `JTools.pageAnchor(100, 10, true)`
    },
  },
  {
    title: "BoxAnchor",
    hash: "boxAnchor",
    desc: "盒子锚点",
    detailed: "盒子锚点，在任意可滑动盒子中跳转；监听事件元素需指定 data-jt-id 值为目标元素唯一标识 id。",
    grammar: "JTools.boxAnchor(sourceSelector: String, targetSelector: String, speed?: Number, diff?: Number)",
    param: [
      {
        name: "sourceSelector",
        desc: "监听点击事件元素的父级唯一标识 id，监听点击事件元素需加 data-jt-id 属性。",
      },
      {
        name: "targetSelector",
        desc: "目标可滑动元素唯一标识 id。",
      },
      {
        name: "diff[可选]",
        desc: "滑动到与父元素的顶部距离差，默认值：4。",
      },
      {
        name: "speed[可选]",
        desc: "滑动速度，默认值：20。",
      },
    ],
    example: {
      areaList: [`<div id="source-box"><a data-jt-id="title">to title</a></div>`, `<div id="target-box"><h4 id="title">title h4</h4></div>`],
      text: `JTools.boxAnchor('#source-box', '#target-box', 4, 20)`
    },
  },
]