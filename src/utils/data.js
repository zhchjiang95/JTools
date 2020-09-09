export const features = [
  {
    title: "SlideDirection",
    hash: "slideDirection",
    desc: "滑动方向",
    detailed: "判断在屏幕上滑动的方向，允许在任意盒子中滑动，移动过程中实时返回当前X/Y坐标，接收回调函数，返回起始位置和结束位置的X/Y坐标值对象，支持 PC 和移动端。",
    grammar: "JTools.slideDirection(selector: String, callback: Function, real?: Boolean, realStartEnd?: Boolean)",
    param: [
      {
        name: "selector",
        desc: "指定在某个元素上滑动，传入其标签名或 class 或 id，请确保使用唯一标识。",
      },
      {
        name: "callback",
        desc: "回调函数，第一个参数为滑动结束时包含起始位置和结束位置的X/Y坐标值对象。",
      },
      {
        name: "real[可选]",
        desc: "滑动/移动过程是否实时返回当前X/Y坐标，开启后回调函数中支持第二个参数接收实时坐标对象，默认：false",
      },
      {
        name: "realStartEnd[可选]",
        desc: "实时返回当前X/Y坐标后，同时是否实时返回起始位置和结束位置的X/Y坐标值对象，默认：false，返回空对象。",
      },
    ],
    example: {
      areaList: [],
      text: `JTools.slideDirection('#box', (dir, real) => console.log(dir), true, false) ==> {startX: 54, startY: 82, endX: 54, endY: 82} / {realX: 23, realY: 45}`
    },
  },
  {
    title: "FormatQueryParam",
    hash: "formatQueryParam",
    desc: "格式化查询参数",
    detailed: "格式化地址栏查询参数，返回所有参数的键值对形式对象的数组，可传入参数指定获取某个值，返回对象。",
    grammar: "JTools.formatQueryParam(key?: String)",
    param: [
      {
        name: "key[可选]",
        desc: "获取某个参数的值，返回对象。不传则返回所有参数对象。",
      },
    ],
    example: {
      areaList: ['http://fiume.cn/jtools?id=2&age=18'],
      text: `JTools.formatQueryParam('id') ==> {id: 2}`
    },
  },
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
        desc: "监听点击事件元素（或其父级）唯一标识 id，监听点击事件元素需加 data-jt-id 属性；①选择器带元素名（如：button#search）则监听其内部最深沉的元素（理论情况，既实际点击到的元素），该元素须添加 data-jt-id 属性，②选择器不带元素名（如：#search）则只监听此元素点击事件，data-jt-id 属性须绑定在此元素上。",
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