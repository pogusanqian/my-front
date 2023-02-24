import { Random, mock } from 'mockjs';

mock('/goods', 'get', {
  code: 0,
  message: '成功',
  data: {
    count: 100,
    'rows|10': [{
      id: Random.increment(),
      title: Random.cword(3, 6),
      introduce: Random.cparagraph(1),
      operator: Random.cname(),
      createTime: Random.datetime(),
      updateTime: Random.datetime()
    }]
  }
});
