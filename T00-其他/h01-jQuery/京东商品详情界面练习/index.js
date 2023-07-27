/*
 1. 鼠标移入显示,移出隐藏
 2. 鼠标移动切换二级导航菜单的切换显示和隐藏
 3. 输入搜索关键字, 列表显示匹配的结果
 4. 点击显示或者隐藏更多的分享图标
 5. 鼠标移入移出切换地址的显示隐藏
 6. 点击切换地址tab

 7. 鼠标移入移出切换显示迷你购物车
 8. 点击切换产品选项 (商品详情等显示出来)

 9. 点击向右/左, 移动当前展示商品的小图片
 10. 当鼠标悬停在某个小图上,在上方显示对应的中图
 11. 当鼠标在中图上移动时, 显示对应大图的附近部分区域
 */
$(function () {
  showhide();
  hoverSubMenu();
  search();
  share();
  address();
  clickTabs();
  hoverMiniCart();
  clickProductTabs();
  moveMiniImg();
  hoverMiniImg();
  bigImg();
});

// 1. 鼠标移入显示,移出隐藏;目标: 手机京东, 客户服务, 网站导航, 我的京东, 去购物车结算, 全部商品
function showhide() {
  $('[name=show_hide]').hover(
    function () {
      $(`#${this.id}_items`).show();
    },
    function () {
      $(`#${this.id}_items`).hide();
    }
  );
}

// 2. 鼠标移动切换二级导航菜单的切换显示和隐藏
function hoverSubMenu() {
  $('#category_items>div').hover(
    function () {
      $(this).children(':last').show();
    },
    function () {
      $(this).children(':last').hide();
    }
  );
}

// 3. 输入搜索关键字, 列表显示匹配的结果
function search() {
  $('#txtSearch')
    .on('keyup focus', function () {
      if (this.value.trim()) $('#search_helper').show();
      else $('#search_helper').hide();
    })
    .blur(function () {
      $('#search_helper').hide();
    });
}

// 4. 点击显示或者隐藏更多的分享图标
function share() {
  let isOpen = false; //标识当前的状态(初始为关闭)
  const $shareMore = $('#shareMore');
  const $parent = $shareMore.parent();
  const $as = $shareMore.prevAll('a:lt(2)');
  const $b = $shareMore.children();

  $shareMore.click(function () {
    if (isOpen) {
      // 去关闭
      isOpen = false;
      $parent.css('width', 155);
      $as.hide();
      $b.removeClass('backword'); // 通过这个类来控制时>还是<
    } else {
      // 去打开
      isOpen = true;
      $parent.css('width', 200);
      $as.show();
      $b.addClass('backword');
    }
  });
}

// 5. 鼠标移入移出切换地址的显示隐藏
function address() {
  const $select = $('#store_select');
  $select
    .hover(
      function () {
        $(this).children(':gt(0)').show();
      },
      function () {
        $(this).children(':gt(0)').hide();
      }
    )
    .children(':last') // 点击x取消
    .click(function () {
      $select.children(':gt(0)').hide();
    });
}

// 6. 点击切换地址tab
function clickTabs() {
  $('#store_tabs>li').click(function () {
    $('#store_tabs>li').removeClass('hover');
    this.className = 'hover';
  });
}

// 7. 鼠标移入移出切换显示迷你购物车
function hoverMiniCart() {
  $('#minicart').hover(
    function () {
      this.className = 'minicart';
      $(this).children(':last').show();
    },
    function () {
      this.className = '';
      $(this).children(':last').hide();
    }
  );
}

// 8. 点击切换产品选项 (商品详情等显示出来)
function clickProductTabs() {
  const $lis = $('#product_detail>ul>li');
  const $contents = $('#product_detail>div:gt(0)');
  $lis.click(function () {
    $lis.removeClass('current');
    this.className = 'current';
    //隐藏所有$contents
    $contents.hide();
    //显示当前对应的content(lis的下标和content的下标是对应的关系)
    $contents.eq($(this).index()).show();
  });
}

// 9. 点击向右/左, 移动当前展示商品的小图片
function moveMiniImg() {
  // 获取点击<>箭头标签
  const $as = $('#preview>h1>a');
  const $backward = $as.first();
  const $forward = $as.last();
  // 获取图片连接
  const $Ul = $('#icon_list');
  const SHOW_COUNT = 5;
  const imgCount = $Ul.children('li').length;
  let moveCount = 0; //移动的次数(向右为正, 向左为负)
  const liWidth = $Ul.children(':first').width();

  // 初始化更新, 设置箭头可以点击
  if (imgCount > SHOW_COUNT) {
    $forward.attr('class', 'forward');
  }

  // 给向右的按钮绑定点击监听
  $forward.click(function () {
    // 判断是否需要移动, 如果不需要直接结束
    if (moveCount === imgCount - SHOW_COUNT) {
      return;
    }
    moveCount++;
    // 更新向左的按钮(可以点击)
    $backward.attr('class', 'backward');
    // 更新向右的按钮
    if (moveCount === imgCount - SHOW_COUNT) {
      $forward.attr('class', 'forward_disabled');
    }
    // 移动ul(底片向左移动)
    $Ul.css({
      left: -moveCount * liWidth,
    });
  });

  // 给向左的按钮绑定点击监听
  $backward.click(function () {
    if (moveCount === 0) {
      return;
    }
    moveCount--;
    $forward.attr('class', 'forward');
    if (moveCount === 0) {
      $backward.attr('class', 'backward_disabled');
    }
    $Ul.css({
      left: -moveCount * liWidth,
    });
  });
}

// 10. 当鼠标悬停在某个小图上,在上方显示对应的中图
function hoverMiniImg() {
  $('#icon_list>li').hover(
    function () {
      const $img = $(this).children();
      $img.addClass('hoveredThumb'); // 小图标的外边框
      //显示对应的中图
      const src = $img.attr('src').replace('.jpg', '-m.jpg');
      $('#mediumImg').attr('src', src);
    },
    function () {
      $(this).children().removeClass('hoveredThumb');
    }
  );
}

// 11. 当鼠标在中图上移动时, 显示对应大图的附近部分区域
function bigImg() {
  const $mediumImg = $('#mediumImg');
  const $mask = $('#mask'); // 小黄框
  const $maskTop = $('#maskTop');
  const $largeImgContainer = $('#largeImgContainer');
  const $loading = $('#loading');
  const $largeImg = $('#largeImg');
  const maskWidth = $mask.width();
  const maskHeight = $mask.height();
  const maskTopWidth = $maskTop.width();
  const maskTopHeight = $maskTop.height();

  $maskTop.hover(
    function () {
      // 进入
      $mask.show();
      // 动态加载对应的大图
      const src = $mediumImg.attr('src').replace('-m.', '-l.');
      $largeImg.attr('src', src);
      $largeImgContainer.show();
      // 绑定加载完成的监听
      $largeImg.on('load', function () {
        // 大图加载完成
        // 得到大图的尺寸
        const largeWidth = $largeImg.width();
        const largeHeight = $largeImg.height();
        // 给$largeImgContainer设置尺寸
        $largeImgContainer.css({
          width: largeWidth / 2,
          height: largeHeight / 2,
        });
        // 显示大图
        $largeImg.show();
        // 隐藏加载进度条
        $loading.hide();

        //鼠标移动的监听
        $maskTop.mousemove(function (event) {
          /*1. 移动小黄块*/
          //计算left/top
          let left = 0;
          let top = 0;
          // 事件的坐标
          const eventLeft = event.offsetX;
          const eventTop = event.offsetY;
          left = eventLeft - maskWidth / 2;
          top = eventTop - maskHeight / 2;
          // left在[0, maskTopWidth-maskWidth]
          if (left < 0) {
            left = 0;
          } else if (left > maskTopWidth - maskWidth) {
            left = maskTopWidth - maskWidth;
          }
          // top在[0, maskTopHeight-maskHeight]
          if (top < 0) {
            top = 0;
          } else if (top > maskTopHeight - maskHeight) {
            top = maskTopHeight - maskHeight;
          }
          //给$mask重新定位
          $mask.css({
            left: left,
            top: top,
          });

          // 得到大图的的偏移量
          left = -left * (largeWidth / maskTopWidth);
          top = -top * (largeHeight / maskTopHeight);
          $largeImg.css({
            left: left,
            top: top,
          });
        });
      });
    },
    function () {
      $mask.hide();
      $largeImgContainer.hide();
      $largeImg.hide();
    }
  );
}
