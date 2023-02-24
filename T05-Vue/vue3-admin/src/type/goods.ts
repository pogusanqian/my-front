export interface Goods {
  id: number; // 主键
  title: string; // 标题
  introduce: string; // 详情
  operator: string; // 修改者
  createTime: string; // 创建时间
  updateTime: string; // 修改时间
}

export interface QueryGoods {
  title: string;
  introduce: string;
  page: number; // 页数
  pageSize: number; // 默认一页显示的条数
  count: number; // 总数量
}

export class GoodsData {
  queryGoods: QueryGoods = {
    title: '',
    introduce: '',
    page: 0,
    pageSize: 0,
    count: 0
  };
  goodsList: Goods[] = [];
}
