import Mock from 'mockjs'

Mock.mock('/login', 'post', {
  code: 0,
  message: '登录成功',
  data: {
    token: Mock.Random.guid()
  }
});
