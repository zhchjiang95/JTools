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

    this.formatQueryParam = function(key) {
      const param = {}
      location.href.split('?')[1]&&location.href.split('?')[1].split('#/')[0].split('&').forEach(v => { param[v.split('=')[0]] = v.split('=').slice(1).join('=') })
      return key ? param[key] ? { [key]: param[key] } : {} : param
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
    
    this.pageAnchor = function(anchor = 0, speed = 0, direction = false) {
      (function foo() {
        if (direction) {
          if (scrollY < anchor) {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
                clientHeight = document.documentElement.clientHeight || document.body.clientHeight,
                scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
            if(scrollHeight > clientHeight && scrollTop + clientHeight < scrollHeight) {
              scrollTo(0, scrollY + speed)
              requestAnimationFrame(foo)
            }
          }
        } else {
          if (scrollY > anchor) {
            scrollTo(0, scrollY - speed)
            requestAnimationFrame(foo)
          }
        }
      }())
    }

    this.boxAnchor = function(options, callback) {
      var source = document.querySelector(options.source),
          box = document.querySelector(options.target),
          boxChildren = Array.from(box.children).filter(v => v.dataset.jtType === 'jt'),
          V, arr = null;
      source.onclick = function(e){
        var id = '#' + (/^[.|#]/.test(options.source) ? this.dataset.jtId : e.target.dataset.jtId)
        var target = document.querySelector(id)
        if(!target) return
        var flag = box.scrollTop > target.offsetTop;
        (function jMove(){
          if(flag){
            if(box.scrollTop > target.offsetTop - (options.diff || 4)){
              box.scrollTo(0, box.scrollTop - (options.speed || 20))
              requestAnimationFrame(jMove)
            }
          } else {
            if(box.scrollTop < target.offsetTop - 10 - (options.diff || 4) && box.scrollTop + box.offsetHeight < box.scrollHeight){
              box.scrollTo(0, box.scrollTop + (options.speed || 20))
              requestAnimationFrame(jMove)
            }
          }
        }());
        return false
      }
      typeof callback === 'function'&&(
        box.addEventListener('scroll', function(){
          boxChildren.map(v => {
            if(v !== V){
              V = v
              v.distance = Math.abs(v.offsetTop - box.scrollTop)
            }
          })
          const tmp = boxChildren.sort((v, i) => v.distance - i.distance)
          if(!arr || arr[0].id !== tmp[0].id){
            arr = tmp.slice()
            callback({ el: tmp[0], jtId: tmp[0].id })
          }
        })
      )
    }

    this.infiniteScroll = function(options, callback){
      var box = document.querySelector(options.el);
      var delay = options.delay || 100, distance = options.distance || 10, timer, flag = true
      box.onscroll = function(){
        if(flag){
          var boxHeight = parseFloat(getComputedStyle(box).height),
              boxScrollHeight = box.scrollHeight,
              boxScrollTop = box.scrollTop;
          flag = false
          timer = setTimeout(function(){
            flag = true
          }, delay)
          if(boxScrollHeight - boxScrollTop - boxHeight < distance){
            callback()
          }
        }
      }
    }
  }
  return new JTools;
}))