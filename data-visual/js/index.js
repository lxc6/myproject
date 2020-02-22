// ----------------------------------------left column middle切换
(function () {
    // -------------------------------------切换  事件委托
    $('.monitor').on('click', '.tabs a', function () {
        // 点击时自身添加类名  兄弟移除类名 链式
        $(this).addClass('active').siblings().removeClass('active');
        // 对应下标下的内容显示 兄弟隐藏
        var index = $(this).index();
        $('.monitor .content').eq(index).show().siblings('.content').hide();
    });
    // --------------------------------------复制 row
    // 有两个marquee 遍历复制其每一个子
    $('.marquee').each(function () {
        // 复制克隆 子节点
        var rows = $(this).children().clone();
        $(this).append(rows);
    });

})();

// --------------------------------------饼状图
(function () {
    chart();
    // --------------------------------------饼状图
    function chart() {
        // 获取返回dom
        var myCharts = echarts.init(document.querySelector('.pie'));
        // 配置参数
        var option = {
            // 控制提示
            tooltip: {
                // 非轴图形，使用item的意思是放到数据对应图形上触发提示
                trigger: 'item',
                // 格式化提示内容：
                // a 代表图表名称 b 代表数据名称 c 代表数据  d代表  当前数据/总数据的比例
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            // 文字调整
            label: {
                fontSize: 10
            },
            color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
            // 控制图表
            series: [{
                // 图表名称
                name: '点位统计',
                // 图表类型
                type: 'pie',
                // 南丁格尔玫瑰图 有两个圆  内圆半径10%  外圆半径70%
                // 百分比基于  图表DOM容器的半径
                radius: ['15%', '75%'],
                // 图表中心位置 left 50%  top 50% 距离图表DOM容器
                center: ['50%', '50%'],
                // 半径模式，另外一种是 area 面积模式
                roseType: 'radius',
                // 数据集 value 数据的值 name 数据的名称
                data: [{
                        value: 20,
                        name: '云南'
                    },
                    {
                        value: 26,
                        name: '北京'
                    },
                    {
                        value: 24,
                        name: '山东'
                    },
                    {
                        value: 25,
                        name: '河北'
                    },
                    {
                        value: 20,
                        name: '江苏'
                    },
                    {
                        value: 25,
                        name: '浙江'
                    },
                    {
                        value: 30,
                        name: '四川'
                    },
                    {
                        value: 42,
                        name: '湖北'
                    },


                ],
                // 引导线调整
                labelLine: {
                    // 连接扇形图线长
                    length: 8,
                    // 连接文字线长
                    length2: 10
                }
            }]


        };

        // 调用传参
        myCharts.setOption(option);

    }
})();

// ----------------------------------柱状图
(function () {
    var item = {
        name: '',
        value: 1200,
        // 柱子颜色
        itemStyle: {
            color: '#254065'
        },
        // 鼠标经过柱子颜色
        emphasis: {
            itemStyle: {
                color: '#254065'
            }
        },
        // 工具提示隐藏
        tooltip: {
            extraCssText: 'opacity:0'
        }
    }
    // ----------------------------------柱状图
    var option = {

        // 工具提示
        tooltip: {
            // 触发类型  经过轴触发axis  经过轴触发item
            trigger: 'axis',
            // 经过图形才显示工具提示
            trigger: 'item',
            // 轴触发提示才有效
            axisPointer: {
                // 默认为直线，可选为：'line' 线效果 | 'shadow' 阴影效果       
                type: 'shadow'
            }

        },
        // 图表边界控制
        grid: {
            // 距离 上右下左 的距离
            top: '5%',
            right: '3%',
            bottom: '3%',
            left: '0%',
            //是否包含文本
            containLabel: true,
            // 显示边框
            show: true,
            // 边框颜色
            borderColor: 'rgba(0, 240, 255, 0.3)'
        },
        // 控制x轴
        xAxis: [{
            // 使用类目，必须有data属性
            type: 'category',
            // 使用 data 中的数据设为刻度文字
            data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
            // 刻度设置
            axisTick: {
                // true意思：图形在刻度中间
                // false意思：图形在刻度之间
                alignWithLabel: true,
                alignWithLabel: false,
                show: false
            },
            // 文字
            axisLabel: {
                color: '#4c9bfd'
            }

        }],
        // 控制y轴
        yAxis: [{
            // 使用数据的值设为刻度文字
            type: 'value',
            // 刻度设置
            axisTick: {
                show: false
            },
            // 文字
            axisLabel: {
                color: '#4c9bfd'
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)'
                }
            }

        }],
        // 控制x轴
        series: [{
            // 图表数据名称
            name: '用户统计',
            // 图表类型
            type: 'bar',
            // 柱子宽度
            barWidth: '60%',
            // 数据
            data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240],
            itemStyle: {
                // 提供的工具函数生成渐变颜色
                color: new echarts.graphic.LinearGradient(
                    // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                    0, 0, 0, 1,
                    [{
                            offset: 0,
                            color: 'pink'
                        }, // 0 起始颜色
                        {
                            offset: 1,
                            color: 'skyblue'
                        } // 1 结束颜色
                    ]
                )
            }
        }]
    };
    // $(.bar)   jq对象==>转换为dom对象  $(.bar)[0];

    var myCharts = echarts.init($('.bar')[0]);

    myCharts.setOption(option);

})();

// ----------------------------------------right column top切换
(function () {
    // 1. 准备数据
    var data = {
        day365: {
            orders: '20,301,987',
            amount: '99834'
        },
        day90: {
            orders: '301,987',
            amount: '9834'
        },
        day30: {
            orders: '1,987',
            amount: '3834'
        },
        day1: {
            orders: '987',
            amount: '834'
        }
    }
    // 注册点击事件  
    $('.order').on('click', '.filter a', function () {

        $(this).addClass('active').siblings().removeClass('active');

        var key = $(this).attr('data-key');
        // 获取val
        var h4order = $('.order h4').eq(0); //第一个数值
        var h4amount = $('.order h4').eq(1); //第二个数值
        // 传入
        h4order.html(data[key].orders);
        h4amount.html(data[key].amount);
    })
    // 定时轮播
    index = 0;
    window.setInterval(function () {
        index++;
        if (index > 3) {
            index = 0;
        }
        // 选取当前节点 调用点击事件
        $('.order .filter a').eq(index).click();
    }, 2000)
})();

// ------------------------------------------统计
(function () {
    var data = {
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ],
        quarter: [
            [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        ],
        month: [
            [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
            [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        ],
        week: [
            [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
            [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        ]
    }

    var option = {
        grid: {
            show: true, // 显示边框
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            borderColor: '#012f4a', // 边框颜色
            containLabel: true // 包含刻度文字在内
        },
        xAxis: {
            // 类目类型                                  
            type: 'category',
            // x轴刻度文字                                  
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: {
                show: false // 去除刻度线
            },
            axisLabel: {
                color: '#4c9bfd' // 文本颜色
            },
            axisLine: {
                show: false // 去除轴线
            },
            boundaryGap: false // 去除轴内间距
        },
        yAxis: {
            // 数据作为刻度文字                                  
            type: 'value',
            axisTick: {
                show: false // 去除刻度
            },
            axisLabel: {
                color: '#4c9bfd' // 文字颜色
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a' // 分割线颜色
                }
            }
        },
        legend: {
            textStyle: {
                color: '#4c9bfd' // 图例文字颜色
                //  fontSize
            },
            right: '10%' // 距离右边10%
        },
        series: [{
            name: '预期销售额',
            data: data.year[0],
            // data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            type: 'line',
            smooth: true,
            itemStyle: {
                color: '#40E0D0' // 线颜色
            }
        }, {
            name: '实际销售额',
            data: data.year[1],
            // data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
            type: 'line',
            smooth: true,
            itemStyle: {
                color: '#FFD700' // 线颜色
            }
        }],
        // 工具提示
        tooltip: {
            trigger: 'axis'
        },
    };
    var myChart = echarts.init($('.line')[0]);
    myChart.setOption(option);

    // 点击切换
    $('.sales').on('click', '.caption a', function () {
        $(this).addClass('active').siblings().removeClass('active');
        // ----对应图表的data数据变化
        var key = $(this).attr('data-type'); //获取为属性名 对应data数组的key
        // 获取当前数组
        // console.log(data[key]);
        // ------------------------------------数据上的操作
        option.series[0].data = data[key][0];
        option.series[1].data = data[key][1];
        // ----------------------设置 dom上的操作
        myChart.setOption(option);
        // console.log(key);

    });

    // 为了获取定时器变量名应设置在封装函数的外边
    var dsq_1;
    var index = 0;
    // 移出事件同样执行下边的函数 重复 需封装函数
    function dsq() {
        dsq_1 = setInterval(function () {
            if (index < 4) {
                index++
            } else {
                index = 0
            }
            $('.sales .caption a').eq(index).click();
        }, 1000);
    }
    // 自动切换
    dsq();
    // 鼠标移入停止
    $('.sales').mouseenter(function () {
        clearInterval(dsq_1);
    });
    // 鼠标移出执行
    $('.sales').mouseleave(function () {
        dsq();
    });

})();

// -------------------------------------------渠道  进度
(function () {
    //----------------------------销售进度-饼状图
    var option = {
        series: [{
            startAngle: 180, //逆时针旋转
            // name: '访问来源',
            type: 'pie',
            radius: ['130%', '150%'],
            center: ['48%', '80%'],
            label: {
                show: false,
            },
            hoverOffset: 0, // 鼠标经过不变大
            data: [{
                    value: 100,
                    itemStyle: { // 颜色渐变#00c9e0->#005fc1
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                    offset: 0,
                                    color: 'pink'
                                },
                                {
                                    offset: 1,
                                    color: 'skyblue'
                                }
                            ]
                        }
                    }
                },
                {
                    value: 100,
                    itemStyle: {
                        color: '#12274d'
                    }
                }, // 颜色#12274d
                {
                    value: 200,
                    // name: '联盟广告',
                    itemStyle: {
                        color: 'transparent'
                    }
                }
            ]
        }]
    };
    var myChart = echarts.init($('.gauge')[0]);
    myChart.setOption(option);
})();

// -------------------------------------------排行
(function () {
    // 数据
    var data = [{
            name: '可爱多',
            num: '9,086'
        },
        {
            name: '娃哈哈',
            num: '8,341'
        },
        {
            name: '喜之郎',
            num: '7,407'
        },
        {
            name: '八喜',
            num: '6,080'
        },
        {
            name: '小洋人',
            num: '6,724'
        },
        {
            name: '好多鱼',
            num: '2,170'
        },
    ];
    // 鼠标进入li的时候，我们把数据随机排序，把这个新数组放到页面上
    $('.province').on('mouseenter', '.sup li', function () {
        // 添加类名
        $(this).addClass('active').siblings().removeClass('active');
        // 数组从新排列
        var randomDate = data.sort(function () {
            return 0.5 - Math.random();
        });
        // <li><span>数据</span><span> 数据<s class="icon-up"></s></span></li>
        // 遍历数组，遍历出来一个，就创建一个li
        var html = '';
        randomDate.forEach(function (val) {
            // 当前项
            // val = { name: '可爱多', num: '9,086' }
            html += `<li><span>${val.name}</span><span>${val.num}<s class="icon-up"></s></span></li>`;
        });
        // console.log(html);
        // 放到sub里面
        $('.province .sub').html(html);
    });

    // 默认让第一个li触发一次事件
    $('.province .sup li').eq(0).mouseenter();

    var index = 0;
    // 开启定时器
    window.setInterval(function () {
        index++;
        if (index > 4) {
            index = 0;
        }
        $('.province .sup li').eq(index).mouseenter();
    }, 1500);
})();