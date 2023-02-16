// 元数据
let person = {
  name: '张三',
  age: 18
};

// 代理数据对象
let p = {};
Object.defineProperty(p, 'name', {
  configurable: true,
  get() {
    return person.name;
  },
  set(value) {
    console.log('有人修改了name属性，我发现了，我要去更新界面！');
    person.name = value;
  }
});
Object.defineProperty(p, 'age', {
  get() {
    return person.age;
  },
  set(value) {
    console.log('有人修改了age属性，我发现了，我要去更新界面！');
    person.age = value;
  }
});

// 进行数据操作
console.log(p.name);
p.name = '李四';
console.log(p.name);
