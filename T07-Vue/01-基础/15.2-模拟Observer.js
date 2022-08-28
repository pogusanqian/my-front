function error() {
  const data = {
    name: '张三',
    age: 23
  };

  Object.defineProperty(data, 'name', {
    get() {
      // 这里会循环递归调用, 导致报错
      return data.name;
    },
    set(val) {
      data.name = val;
    }
  });

  console.log(data.name);
}

function success() {
  // 创建Observer构造函数(这里之模拟一层属性对象)
  function Observer(obj) {
    // 正是因为vue2只是给初始化的key做了getter和setter, 所以才会后来添加的属性无法做到动态渲染
    Object.keys(obj).forEach((k) => {
      // 这里的this表示的是Observer的实例对象
      Object.defineProperty(this, k, {
        get() {
          return obj[k];
        },
        set(val) {
          console.log(`${k}被改了进行了更改, 需要重新渲染Dom`);
          obj[k] = val;
        }
      });
    });
  }

  let data = {
    name: '张三',
    age: 23
  };
  // 创建一个监视的实例对象，用于监视data中属性的变化
  const obs = new Observer(data);
  // 准备一个vm实例对象
  let vm = {};
  vm._data = data;
  data = obs;

  console.log(vm._data);
}

success();
