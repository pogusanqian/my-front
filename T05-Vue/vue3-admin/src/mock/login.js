import { Random, mock } from 'mockjs';

mock('/login', 'post', {
  code: 0,
  message: '登录成功',
  data: {
    token: Random.guid()
  }
});
