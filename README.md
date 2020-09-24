**JTools - 纯 js 的便利工具集**

Introduction: [fiume.cn/jtools/][1]

  [1]: http://www.fiume.cn/jtools/

|  功能   | 描述  |
|  ----  | ----  |
| <div style="width: 25%">滑动方向</div>  | <div style="width: 75%">判断在屏幕上滑动的方向，允许在任意盒子中滑动，移动过程中实时返回当前X/Y坐标，接收回调函数，返回起始位置和结束位置的X/Y坐标值对象，支持 PC 和移动端。</div> |
| <div style="width: 25%">格式化查询参数</div>  | <div style="width: 75%">格式化地址栏查询参数，返回所有参数的键值对形式对象的数组，可传入参数指定获取某个值，返回对象。</div> |
| <div style="width: 25%">日期格式化</div>  | <div style="width: 75%">格式化当前或自定义时间日期，自定义年月日分隔符和时分秒显示。</div> |
| <div style="width: 25%">页面锚点</div>  | <div style="width: 75%">指定页面滑动到某个位置，自定义滑动速度，自定义滑动方向。须整个页面可滑动！</div> |
| <div style="width: 25%">盒子锚点</div>  | <div style="width: 75%">盒子锚点，在任意可滑动盒子中跳转；监听事件元素需指定 data-jt-id 值为目标元素唯一标识 id。</div> |
| <div style="width: 25%">无限滚动</div>  | <div style="width: 75%">滚动至底部时，加载更多数据，或执行一些自定义的事件。</div> |

```bash
$ yarn
$ yarn dev
$ yarn build
```

**OR**

```bash
$ npm install
$ npm run dev
$ npm run build
```
