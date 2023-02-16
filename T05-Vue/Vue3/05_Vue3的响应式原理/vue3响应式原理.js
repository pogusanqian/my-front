// 数据源
let person = {
  name: '张三',
  age: 18
};

// 元数据
const p = new Proxy(person, {
  get(target, propName) {
    return Reflect.get(target, propName);
  },
  set(target, propName, value) {
    console.log(`有人修改了p身上的${propName}属性，我要去更新界面了！`);
    Reflect.set(target, propName, value);
  },
  deleteProperty(target, propName) {
    console.log(`有人删除了p身上的${propName}属性，我要去更新界面了！`);
    return Reflect.deleteProperty(target, propName);
  }
});

// 进行数据操作
console.log(p.name);
p.name = '李四';
console.log(p.name);