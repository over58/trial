var eventObj = {}
var events = (function () {
  return {
    on: function (type, handler) {
      if (!handler) return
      if (!eventObj[type]) {
        eventObj[type] = []
      }
      eventObj[type].push(handler)
    },
    /**
     * 没有参数， 移除所有event
     * 一个参数，移除对应的event的所有listeners，
     * 两个参数，移除对应的单个listener
     */
    off: function (type, handler) {
      if (arguments.length === 0) {
        eventObj = {}
      } else if (arguments.length === 1) {
        if (!(type in eventObj)) return
        eventObj[type] = []
      } else {
        if (!eventObj[type]) return
        for (let i = eventObj[type].length - 1; i >= 0; i--) {
          if (eventObj[type][i] === handler) {
            eventObj[type].splice(i, 1)
            if (eventObj[type].length === 0) {
              delete eventObj[type]
            }
          }
        }
      }
    },
    emit: function (type) {
      var args = Array.prototype.slice(arguments, 1)
      if (!eventObj[type]) return
      for (let i = 0; i < eventObj[type].length; i++) {
        eventObj[type][i].apply(null, args)
      }
    }
  }
})()

function fn (params) {
  console.log('添加了订阅fn')
}
function fn1 (params) {
  console.log('添加了订阅fn1')
}

events.on('click', fn)
events.on('click', fn1)

/***
 * 针对于vue的源码来说
 * watcher ---> data ---> vdom ---> 视图更新
 * 所有的watcher都存在一个全局的wather容器中
 *
 * 读取数据的时候，都触发depend方法，将对应的watcher存在全局的watcher中
 * 那么什么时候会读取数据呢？
 * 模板渲染的时候，虚拟dom 生成的时候
 *
 * 设置data的时候会调用notify方法，将全局所有的wather一一触发
 * 其实在页面初始化的时候，我们会多次触发全局wather，但是如果只是更改了
 * 局部数据，那么只会更新对应的watcher
 *
 * 概念的理解：
 * 1.读取，将watcher  存入到全局容器的时候，被称之为"依赖收集"
 * 2.修改时，将全局容器中的watcher 取出执行， 被称为 “派发更新”
 *
 */
