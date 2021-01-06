export const features = [
  {
    title: "SlideDirection",
    hash: "slideDirection",
    checked: false,
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
      iframe: `<iframe height="265" style="width: 100%;" scrolling="no" title="SlideDirection 滑动方向" src="https://codepen.io/zhchjiang95/embed/QWEjzzW?height=265&theme-id=light&default-tab=js,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href='https://codepen.io/zhchjiang95/pen/QWEjzzW'>SlideDirection 滑动方向</a> by zhchjiang95
        (<a href='https://codepen.io/zhchjiang95'>@zhchjiang95</a>) on <a href='https://codepen.io'>CodePen</a>.
      </iframe>`,
      areaList: [],
      text: `JTools.slideDirection('#box', (dir, real) => console.log(dir), true, false) ==> {startX: 54, startY: 82, endX: 54, endY: 82} / {realX: 23, realY: 45}`
    },
  },
  {
    title: "FormatQueryParam",
    hash: "formatQueryParam",
    checked: false,
    desc: "格式化查询参数",
    detailed: "格式化地址栏查询参数，返回所有参数的对象形式，可传入参数指定获取某个值，返回对象。",
    grammar: "JTools.formatQueryParam(key?: String)",
    param: [
      {
        name: "key[可选]",
        desc: "获取某个参数的值，返回对象。不传则返回所有参数对象。",
      },
    ],
    example: {
      iframe: `<iframe height="265" style="width: 100%;" scrolling="no" title="FormatQueryParam 格式化查询参数" src="https://codepen.io/zhchjiang95/embed/RwRWOzq?height=265&theme-id=light&default-tab=js,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href='https://codepen.io/zhchjiang95/pen/RwRWOzq'>FormatQueryParam 格式化查询参数</a> by zhchjiang95
        (<a href='https://codepen.io/zhchjiang95'>@zhchjiang95</a>) on <a href='https://codepen.io'>CodePen</a>.
      </iframe>`,
      areaList: ['http://fiume.cn/jtools?id=2&age=18'],
      text: `JTools.formatQueryParam() ==> {id: 2, age: 18}`
    },
  },
  {
    title: "FormatTime",
    hash: "formatTime",
    checked: false,
    desc: "日期格式化",
    detailed: "格式化当前或自定义时间日期，自定义年月日分隔符和时分秒显示。如需更强大用法请使用：<a href='http://momentjs.cn/' target='_blank'>moment.js</a>",
    grammar: "JTools.formatTime(sep?: String, millisecond? Number/Date, hours?: Boolean)",
    param: [
      {
        name: "options",
        desc: "配置对象，可配置属性[3]：sep?、millisecond?、hours?。<br/>1)、sep[可选]：年月日分隔符。默认：-。<br/>2)、millisecond[可选]：自定义时间（毫秒），纯数字或Date()。默认当前时间。<br/>3)、hours[可选]：是否显示时分秒。默认：false。",
      }
    ],
    example: {
      iframe: `<iframe height="265" style="width: 100%;" scrolling="no" title="FormatTime 日期格式化" src="https://codepen.io/zhchjiang95/embed/RwRWmrv?height=265&theme-id=light&default-tab=js,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
      See the Pen <a href='https://codepen.io/zhchjiang95/pen/RwRWmrv'>FormatTime 日期格式化</a> by zhchjiang95
      (<a href='https://codepen.io/zhchjiang95'>@zhchjiang95</a>) on <a href='https://codepen.io'>CodePen</a>.
      </iframe>`,
      areaList: [],
      text: `JTools.formatTime('-', Date.now() + 20, true) ==> "2020-08-24 15:06:32"`
    },
  },
  {
    title: "PageAnchor",
    hash: "pageAnchor",
    checked: false,
    desc: "页面锚点",
    detailed: "指定页面滑动到某个位置，自定义滑动速度，自定义滑动方向。须整个页面可滑动！",
    grammar: "JTools.pageAnchor(anchor: Number, speed: Number, direction: Boolean)",
    param: [
      {
        name: "options",
        desc: "配置对象，可配置属性[3]：anchor、speed?、down?。<br/>1)、anchor：滑动到的目标位置。<br/>2)、speed：滑动速度。<br/>3)、down：滑动方向，向下（true）/向上（false），默认：true。",
      },
    ],
    example: {
      iframe: `<iframe height="265" style="width: 100%;" scrolling="no" title="PageAnchor 页面锚点" src="https://codepen.io/zhchjiang95/embed/QWEygxm?height=265&theme-id=light&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
      See the Pen <a href='https://codepen.io/zhchjiang95/pen/QWEygxm'>PageAnchor 页面锚点</a> by zhchjiang95
      (<a href='https://codepen.io/zhchjiang95'>@zhchjiang95</a>) on <a href='https://codepen.io'>CodePen</a>.
      </iframe>`,
      areaList: [],
      text: `JTools.pageAnchor(100, 10, true)`
    },
  },
  {
    title: "BoxAnchor",
    hash: "boxAnchor",
    checked: false,
    desc: "盒子锚点",
    detailed: "盒子锚点，在任意可滑动盒子中跳转；监听事件元素需指定 data-jt-id 值为目标元素唯一标识 id。",
    grammar: "JTools.boxAnchor(options: Object, callback?: Function)",
    param: [
      {
        name: "options",
        desc: "配置对象，可配置属性[4]：source、target、diff?、speed?。<br/>1)、source：监听点击事件元素（或其父级）选择器，请确保唯一。<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;①选择器带元素名（如：button#search）则监听其内部最深层的元素（理论情况，既实际点击到的元素），该元素须添加 data-jt-id 属性，属性值为目标容器内目标对象的 id（该目标对象须指定 data-jt-type 的值为 'jt'，以配合 callback 工作）。<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;②选择器不带元素名（如：#search）则只监听此元素点击事件，data-jt-id 属性须绑定在此元素上。<br/>2)、target：目标可滚动容器的选择器，请确保唯一，容器内的目标对象 id 值为对应的 data-jt-id 值（该目标对象须指定 data-jt-type 的值为 'jt'，以配合 callback 工作）。<br/>3)、diff[可选]：滑动到与父元素的顶部距离差，默认值：4。<br/>4)、speed[可选]：滑动速度，默认值：20。",
      },
      {
        name: "callback[可选]",
        desc: "指定回调函数后，函数将在滚动过程定点执行，函数参数默认返回一个对象，包含此时在可视屏幕内指定 data-jt-id 属性的元素和该元素的 data-jt-id 属性值（须目标容器中目标对象指定 data-jt-type 的值为 'jt'）。",
      },
    ],
    example: {
      iframe: `<iframe height="265" style="width: 100%;" scrolling="no" title="BoxAnchor 盒子锚点" src="https://codepen.io/zhchjiang95/embed/vYKLJQj?height=265&theme-id=light&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
      See the Pen <a href='https://codepen.io/zhchjiang95/pen/vYKLJQj'>BoxAnchor 盒子锚点</a> by zhchjiang95
      (<a href='https://codepen.io/zhchjiang95'>@zhchjiang95</a>) on <a href='https://codepen.io'>CodePen</a>.
      </iframe>`,
      areaList: [`<div id="source-box"><a data-jt-id="h1">锚点到h1</a></div>`, `<div id="target-box"><h4 id="h1" data-jt-type="jt">我的id是h1</h4></div>`],
      text: `JTools.boxAnchor({source: 'div#source-box', target: '#target-box'}, (re) => {console.log(re)}) ==> {el: <a data-jt-id="h1">锚点到h1</a>, jtId: 'h1'}`
    },
  },
  {
    title: "InfiniteScroll",
    hash: "infiniteScroll",
    checked: false,
    desc: "无限滚动",
    detailed: "滚动至底部时，加载更多数据，或执行一些自定义的事件。支持调用返回值清除绑定事件。",
    grammar: "const unbind = JTools.infiniteScroll(options: Object, callback: Function)",
    param: [
      {
        name: "options",
        desc: "配置对象，可配置属性：<br/>①el：需要无限滚动元素的选择器，请确保唯一；<br/>②delay：节流时延，单位为ms，默认值100；<br/>③distance：触发加载的距离阈值，单位为px，默认值10。",
      },
      {
        name: "callback",
        desc: "到达距离阈值时触发的事件。",
      },
      {
        name: "unbind",
        desc: "infiniteScroll 函数调用后，返回一个可清除该绑定事件的函数。",
      },
    ],
    example: {
      iframe: `<iframe height="265" style="width: 100%;" scrolling="no" title="InfiniteScroll 无限滚动" src="https://codepen.io/zhchjiang95/embed/NWrNWZy?height=265&theme-id=light&default-tab=js,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
      See the Pen <a href='https://codepen.io/zhchjiang95/pen/NWrNWZy'>InfiniteScroll 无限滚动</a> by zhchjiang95
      (<a href='https://codepen.io/zhchjiang95'>@zhchjiang95</a>) on <a href='https://codepen.io'>CodePen</a>.
      </iframe>`,
      areaList: [`<div class="big-box"><div>我很高，高到父级有滚动条！</div></div>`],
      text: `JTools.infiniteScroll({el: '.big-box', delay: 100, distance: 10 }, () => { console.log('hello, JTools!') }))`
    },
  },
]