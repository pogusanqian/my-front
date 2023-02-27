import { RouteRecordNormalized, RouteRecordRaw } from "vue-router";

/**
 * 根据路由表数据信息, 获取菜单栏列表信息
 * @param originMenu 
 * @returns 
 */
export function getMenuList(originMenu: RouteRecordNormalized[]) {
  function getMenu(children: RouteRecordNormalized[] | RouteRecordRaw[], prex = '') {
    for (let index = 0; index < children.length; index++) {
      const item = children[index];
      item.path = prex.concat('/', item.path.replace('/', ''));
      if (item.children && item.children.length) {
        getMenu(item.children, item.path);
      }
    }
  }
  const menuList = originMenu.filter(item => item.path.lastIndexOf('/') === 0 && !['/', '/login'].includes(item.path))
  getMenu(menuList);
  return menuList;
}