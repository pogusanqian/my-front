<template>
  <div id="app">
    <h2>APP</h2>
    <ul>
      <li v-for="item in childData">{{ item }}</li>
    </ul>
    <Student @sendValueToFather="getChildData" @click.native="show" />
    <School ref="school" />
  </div>
</template>
<!-- 
  子组件给父组件传递数据:
    prop属性: 需要将父组件的回调函数传递给子组件, 子组件调用此函数然后将参数传递过来
    自定义事件: 父组件直接给子组件绑定一个自定义事件, 子组件触发此事件(子组件不需要再使用prop进行接收), 即可将参数传递过来
               $emit(): 子组件通过此方法触发自定义事件
               $off(): 子组件通过此方法接触绑定的自定义事件(注意如果不传递参数的话, 会将子组件中所有的自定义事件都删除)
                       解除一个事件直接传递字符串即可, 多个事件可以传递一个字符串数组
               当一个组件的销毁时, 2.6之前的版本只会删除自定义事件, 2,7及之后则将所有的事件都删除了
    给子组件绑定原生事件, 需要使用native修饰符, 如@click.native
 -->
<script>
import Student from './components/Student.vue';
import School from './components/School.vue';

export default {
  name: "App",
  components: { Student, School },
  data() {
    return {
      childData: []
    };
  },
  methods: {
    getChildData(value) {
      console.log(this);
      this.childData.push(value);
    },
    show() {
      console.log('=============触发原生click事件=============');
    }
  },
  mounted() {
    // 第二种绑定事件写法, this.getChildData是在methods中声明的, vue对这里的this做了处理, 一直表示的就是当前组件实例
    this.$refs.school.$on('sendValueToFather', this.getChildData);
    // this.$refs.school.$once('sendValueToFather', this.getChildData); // 绑定一个一次性事件


    // 不要这样写, 因为此时this值表示的是School子组件的vc实例, 因为是子组件触发此事件, 那么此事件的回调this就是子组件;
    // 如果协程箭头函数的话, this表示的就是App组件的vc实例
    // this.$refs.school.$on('sendValueToFather', function () {
    //   console.log(this);
    // });
  }
};
</script>

<style>
</style>
