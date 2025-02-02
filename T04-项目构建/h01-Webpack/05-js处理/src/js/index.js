import 'core-js/modules/es.object.to-string.js'
import 'core-js/modules/es.promise.js'
import 'core-js/modules/web.timers.js'
import 'core-js/modules/es.object.to-string.js'
import 'core-js/modules/es.promise.js'
import 'core-js/modules/web.timers.js'
import 'core-js/modules/es.object.to-string.js'
import 'core-js/modules/es.promise.js'
import 'core-js/modules/web.timers.js'
import 'core-js/modules/es.object.to-string.js'
import 'core-js/modules/es.promise.js'
import 'core-js/modules/web.timers.js'
import 'core-js/modules/es.object.to-string.js'
import 'core-js/modules/es.promise.js'
import 'core-js/modules/web.timers.js'
import 'core-js/modules/es.object.to-string.js'
import 'core-js/modules/es.promise.js'
import 'core-js/modules/web.timers.js'
import 'core-js/modules/es.object.to-string.js'
import 'core-js/modules/es.promise.js'
import 'core-js/modules/web.timers.js'
import 'core-js/modules/es.object.to-string.js'
import 'core-js/modules/es.promise.js'
import 'core-js/modules/web.timers.js'
import 'core-js/modules/web.timers.js' // import '@babel/polyfill';

const add = function add(a, b) {
  return a + b
}

console.log(add(12, 23))
const promise = new Promise((resolve) => {
  setTimeout(() => {
    console.log('定时器执行完了~')
    resolve()
  }, 1000)
})
console.log(promise)
