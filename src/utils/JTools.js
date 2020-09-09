/**
 * JTools.js v1.2.1:
 * 使用文档：http://fiume.cn/jtools/
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  // typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.JTools = factory());
}(this, function () { 'use strict';

  /*  */

  function JTools() {
    this.slideDirection = function(selector, callback, real = false, realStartEnd = false){
      let startX = 0, startY = 0, endX = 0, endY = 0, realX = 0, realY = 0, el = document.querySelector(`${selector}`)
      if(el.ontouchstart === null){
        el.ontouchstart = function(e){
          startX = e.changedTouches[0].clientX
          startY = e.changedTouches[0].clientY
        }
        real&&(el.ontouchmove = function(e){
          realX = e.changedTouches[0].clientX
          realY = e.changedTouches[0].clientY
          callback(realStartEnd ? {startX, startY, endX, endY} : {}, {realX, realY})
        })
        el.ontouchend = function(e){
          endX = e.changedTouches[0].clientX
          endY = e.changedTouches[0].clientY
          callback({startX, startY, endX, endY}, {realX, realY})
        }
      } else {
        el.onmousedown = function(e){
          startX = e.clientX
          startY = e.clientY
        }
        real&&(el.onmousemove = function(e){
          realX = e.clientX
          realY = e.clientY
          callback(realStartEnd ? {startX, startY, endX, endY} : {}, {realX, realY})
        })
        el.onmouseup = function(e){
          endX = e.clientX
          endY = e.clientY
          callback({startX, startY, endX, endY}, {realX, realY})
        }
      } 
    }

    this.formatQueryParam =  function(key) {
      const param = location.href.split('?')[1] ? location.href.split('?')[1].split('#/')[0].split('&').map(v => ({ [v.split('=')[0]]: v.split('=')[1] })) : []
      return key ? param.find(v => v[`${key}`] !== undefined) ? param.find(v => v[`${key}`] !== undefined) : {} : param
    }

    this.formatTime = function( sep = '-', millisecond = new Date(), hours = false) {
      var time = typeof millisecond === 'number' ? millisecond : Number(millisecond)
      var dateTimer = new Date(time),
        Y = dateTimer.getFullYear(),
        M = dateTimer.getMonth() + 1,
        D = dateTimer.getDate(),
        h = dateTimer.getHours(),
        m = dateTimer.getMinutes(),
        s = dateTimer.getSeconds()
      M = M >= 10 ? M : '0' + M
      D = D >= 10 ? D : '0' + D
      h = h >= 10 ? h : '0' + h
      m = m >= 10 ? m : '0' + m
      s = s >= 10 ? s : '0' + s
      return hours ? `${Y + sep + M + sep + D} ${h}:${m}:${s}` : `${Y + sep + M + sep + D}`
    }
    
    this.pageAnchor = function(anchor, speed, direction) {
      if(Number(anchor).toString() !== 'NaN'){
        var _anchor = anchor
      } else {
        throw Error('请输入目标位置，且该值应为数字')
      }
      if(Number(speed).toString() !== 'NaN'){
        var _speed = speed
      } else {
        throw Error('请输入滑动速度，且该值应为数字')
      }
      if(typeof direction === 'boolean'){
        var _direction = direction
      } else {
        throw Error('请输入滑动方向，且该值应为true/false')
      }
      (function foo() {
        if (_direction) {
          if (scrollY < _anchor) {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
                clientHeight = document.documentElement.clientHeight || document.body.clientHeight,
                scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
            if(scrollHeight > clientHeight && scrollTop + clientHeight < scrollHeight) {
              scrollTo(0, scrollY + _speed)
              requestAnimationFrame(foo)
            }
          }
        } else {
          if (scrollY > _anchor) {
            scrollTo(0, scrollY - _speed)
            requestAnimationFrame(foo)
          }
        }
      }())
    }

    this.boxAnchor = function(sourceSelector, targetSelector, diff = 4, speed = 20) {
      document.querySelector(sourceSelector).onclick = function(e){
        var id = '#' + (/^[.|#]/.test(sourceSelector) ? this.dataset.jtId : e.target.dataset.jtId)
        var target = document.querySelector(id)
        var box = document.querySelector(targetSelector)
        if(!target) return
        var flag = box.scrollTop > target.offsetTop;
        (function jMove(){
          if(flag){
            if(box.scrollTop > target.offsetTop - diff){
              box.scrollTo(0, box.scrollTop - speed)
              requestAnimationFrame(jMove)
            }
          } else {
            if(box.scrollTop < target.offsetTop - 10 - diff && box.scrollTop + box.offsetHeight < box.scrollHeight){
              box.scrollTo(0, box.scrollTop + speed)
              requestAnimationFrame(jMove)
            }
          }
        }());
        return false
      }
    }
  }
  return new JTools;
}))