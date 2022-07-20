$(function () {
  /*echarts_1();*/
  echarts_2();
  echarts_4();
  echarts_31();
  echarts_32();
  echarts_33();
  echarts_5();
  echarts_6();
  box1();
  /*temperature();*/
  temperatureHumiture();

  function echarts_1() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart1'));

    option = {
      //  backgroundColor: '#00265f',
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '0%',
        top: '10px',
        right: '0%',
        bottom: '4%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        data: ['商超门店', '教育培训', '房地产', '生活服务', '汽车销售', '旅游酒店', '五金建材'],
        axisLine: {
          show: true,
          lineStyle: {
            color: "rgba(255,255,255,.1)",
            width: 1,
            type: "solid"
          },
        },

        axisTick: {
          show: false,
        },
        axisLabel: {
          interval: 0,
          // rotate:50,
          show: true,
          splitNumber: 15,
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: '12',
          },
        },
      }],
      yAxis: [{
        type: 'value',
        axisLabel: {
          //formatter: '{value} %'
          show: true,
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: '12',
          },
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "rgba(255,255,255,.1	)",
            width: 1,
            type: "solid"
          },
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
          }
        }
      }],
      series: [
        {
          type: 'bar',
          data: [200, 300, 300, 900, 1500, 1200, 600],
          barWidth: '35%', //柱子宽度
          // barGap: 1, //柱子之间间距
          itemStyle: {
            normal: {
              color: '#2f89cf',
              opacity: 1,
              barBorderRadius: 5,
            }
          }
        }

      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }

  function echarts_2() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart2'));
    var lightintensity = [];
    $.ajax({
      async: false,
      type: "GET",
      url: "http://122.9.33.180:8080//getLastThirtyLightValues",
      data: {},
      dataType: 'json',
      success: function myresult(t) {
        console.log(t);
        for (var i = 0; i < 30; i++) {
          lightintensity.push(t.data[i].lightIntensity);
        }
      }
      ,
      error: function myerror(msg) {
        /*      alert("错误内容" + msg);
              alert("error" + msg.responseText);*/
        console.log(msg);
      }
    });


    option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          lineStyle: {
            color: '#dddc6b'
          }
        }
      },
      legend: {
        top: '0%',
        data: ['勒克斯'],
        textStyle: {
          color: 'rgba(255,255,255,.5)',
          fontSize: '12',
        }
      },
      grid: {
        left: '10',
        top: '30',
        right: '10',
        bottom: '10',
        containLabel: true
      },

      xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12,
          },
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.2)'
          }

        },

        data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']

      }, {

        axisPointer: {show: false},
        axisLine: {show: false},
        position: 'bottom',
        offset: 20,


      }],

      yAxis: [{
        type: 'value',
        axisTick: {show: false},
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)'
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12,
          },
        },

        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)'
          }
        }
      }],
      series: [
        {
          name: '勒克斯',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {

            normal: {
              color: '#0184d5',
              width: 2
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(1, 132, 213, 0.4)'
              }, {
                offset: 0.8,
                color: 'rgba(1, 132, 213, 0.1)'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
          },
          itemStyle: {
            normal: {
              color: '#0184d5',
              borderColor: 'rgba(221, 220, 107, .1)',
              borderWidth: 12
            }
          },
          data: lightintensity

        },


      ]

    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }

  function echarts_5() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart5'));

    var data=[];
    $.ajax({
      async: false,
      type: "GET",
      url: "http://122.9.33.180:8080//getConflicts",
      data: {},
      dataType: 'json',
      success: function myresult(t) {
        console.log(t);
        data.push(t.data.思明区);
        data.push(t.data.海沧区);
        data.push(t.data.湖里区);
        data.push(t.data.集美区);
        data.push(t.data.翔安区);
        data.push(t.data.同安区);



      }
      ,
      error: function myerror(msg) {
        /*      alert("错误内容" + msg);
              alert("error" + msg.responseText);*/
        console.log(msg);
      }
    });

    option = {
      //  backgroundColor: '#00265f',
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },

      grid: {
        left: '0%',
        top: '10px',
        right: '0%',
        bottom: '2%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        data: ['思明区', '海沧区', '湖里区', '集美区', '翔安区', '同安区'],
        axisLine: {
          show: true,
          lineStyle: {
            color: "rgba(255,255,255,.1)",
            width: 1,
            type: "solid"
          },
        },

        axisTick: {
          show: false,
        },
        axisLabel: {
          interval: 0,
          // rotate:50,
          show: true,
          splitNumber: 15,
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: '12',
          },
        },
      }],
      yAxis: [{
        type: 'value',
        axisLabel: {
          //formatter: '{value} %'
          show: true,
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: '12',
          },
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "rgba(255,255,255,.1	)",
            width: 1,
            type: "solid"
          },
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
          }
        }
      }],
      series: [{
        type: 'bar',
        data: data,
        barWidth: '35%', //柱子宽度
        // barGap: 1, //柱子之间间距
        itemStyle: {
          normal: {
            color: '#2f89cf',
            opacity: 1,
            barBorderRadius: 5,
          }
        }
      }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }

  function echarts_4() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart4'));
    var temperature = [];
    var humiture = [];
    /*option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
    option.series[1].data[0].value = (Math.random() * 7).toFixed(2) - 0;
    option.series[2].data[0].value = (Math.random() * 2).toFixed(2) - 0;
    option.series[3].data[0].value = (Math.random() * 2).toFixed(2) - 0;
    myChart.setOption(option, true);*/
    $.ajax({
      async: false,
      type: "GET",
      url: "http://122.9.33.180:8080///getLastThirtyData",
      data: {},
      dataType: 'json',
      success: function myresult(t) {
        console.log(t);
        for (var i = 0; i < 30; i++) {
          temperature.push(t.data[i].currentDegree);
          humiture.push(t.data[i].currentHumidity);
        }
      }
      ,
      error: function myerror(msg) {
        /*      alert("错误内容" + msg);
              alert("error" + msg.responseText);*/
        console.log(msg);
      }
    });

    option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          lineStyle: {
            color: '#dddc6b'
          }
        }
      },
      legend: {
        top: '0%',
        data: ['温度', '湿度'],
        textStyle: {
          color: 'rgba(255,255,255,.5)',
          fontSize: '12',
        }
      },
      grid: {
        left: '10',
        top: '30',
        right: '10',
        bottom: '10',
        containLabel: true
      },

      xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12,
          },
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.2)'
          }

        },

        data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']

      }, {

        axisPointer: {show: false},
        axisLine: {show: false},
        position: 'bottom',
        offset: 20,


      }],

      yAxis: [{
        type: 'value',
        axisTick: {show: false},
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)'
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12,
          },
        },

        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)'
          }
        }
      }],
      series: [
        {
          name: '温度',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {

            normal: {
              color: '#0184d5',
              width: 2
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(1, 132, 213, 0.4)'
              }, {
                offset: 0.8,
                color: 'rgba(1, 132, 213, 0.1)'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
          },
          itemStyle: {
            normal: {
              color: '#0184d5',
              borderColor: 'rgba(221, 220, 107, .1)',
              borderWidth: 12
            }
          },
          data: temperature

        },
        {
          name: '湿度',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {

            normal: {
              color: '#00d887',
              width: 2
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(0, 216, 135, 0.4)'
              }, {
                offset: 0.8,
                color: 'rgba(0, 216, 135, 0.1)'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
          },
          itemStyle: {
            normal: {
              color: '#00d887',
              borderColor: 'rgba(221, 220, 107, .1)',
              borderWidth: 12
            }
          },
          data: humiture

        },

      ]

    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }

  function echarts_6() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart6'));


    var data=[];
    $.ajax({
      async: false,
      type: "GET",
      url: "http://122.9.33.180:8080//getEpidemicData",
      data: {},
      dataType: 'json',
      success: function myresult(t) {
        console.log(t);
        data.push(t.data.同安区.newConfirmed);
        data.push(t.data.同安区.recovered);
        data.push(t.data.同安区.newDeaths);


      }
      ,
      error: function myerror(msg) {
        /*      alert("错误内容" + msg);
              alert("error" + msg.responseText);*/
        console.log(msg);
      }
    });

    option = {
      //  backgroundColor: '#00265f',
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },

      grid: {
        left: '0%',
        top: '10px',
        right: '0%',
        bottom: '2%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        data: ['新增确诊', '新增治愈', '新增死亡'],
        axisLine: {
          show: true,
          lineStyle: {
            color: "rgba(255,255,255,.1)",
            width: 1,
            type: "solid"
          },
        },

        axisTick: {
          show: false,
        },
        axisLabel: {
          interval: 0,
          // rotate:50,
          show: true,
          splitNumber: 15,
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: '12',
          },
        },
      }],
      yAxis: [{
        type: 'value',
        axisLabel: {
          //formatter: '{value} %'
          show: true,
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: '12',
          },
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "rgba(255,255,255,.1	)",
            width: 1,
            type: "solid"
          },
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
          }
        }
      }],
      series: [{
        type: 'bar',
        data: data/*[12, 3, 0]*/,
        barWidth: '35%', //柱子宽度
        // barGap: 1, //柱子之间间距
        itemStyle: {
          normal: {
            color: '#2f89cf',
            opacity: 1,
            barBorderRadius: 5,
          }
        }
      }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }

  function echarts_31() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('fb1'));


    var lighton;
    var lightoff;
    $.ajax({
      async: false,
      type: "GET",
      url: "http://122.9.33.180:8080//getStatusCounts",
      data: {},
      dataType: 'json',
      success: function myresult(t) {
        console.log(t);
        lighton=t.LightON;
        lightoff=t.LightOFF;

      }
      ,
      error: function myerror(msg) {
        /*      alert("错误内容" + msg);
              alert("error" + msg.responseText);*/
        console.log(msg);
      }
    });


    option = {

      title: [{
        text: '灯',
        left: 'center',
        textStyle: {
          color: '#fff',
          fontSize: '16'
        }

      }],
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
        position: function (p) {   //其中p为当前鼠标的位置
          return [p[0] + 10, p[1] - 10];
        }
      },
      legend: {

        top: '70%',
        itemWidth: 10,
        itemHeight: 10,
        data: ['开灯', '关灯'],
        textStyle: {
          color: 'rgba(255,255,255,.5)',
          fontSize: '12',
        }
      },
      series: [
        {
          name: '灯',
          type: 'pie',
          center: ['50%', '42%'],
          radius: ['40%', '60%'],
          color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab', '#06b4ab', '#06c8ab', '#06dcab', '#06f0ab'],
          label: {show: false},
          labelLine: {show: false},
          data: [
            {value: lighton, name: '开灯'},
            {value: lightoff, name: '关灯'}
          ]
        }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }

  function echarts_32() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('fb2'));

    var on;
    var off;
    $.ajax({
      async: false,
      type: "GET",
      url: "http://122.9.33.180:8080//getSafeBandAmount",
      data: {},
      dataType: 'json',
      success: function myresult(t) {
        console.log(t);
        on=t.data.ON;
        off=t.data.OFF;

      }
      ,
      error: function myerror(msg) {
        /*      alert("错误内容" + msg);
              alert("error" + msg.responseText);*/
        console.log(msg);
      }
    });

    option = {

      title: [{
        text: '安全带统计',
        left: 'center',
        textStyle: {
          color: '#fff',
          fontSize: '16'
        }

      }],
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
        position: function (p) {   //其中p为当前鼠标的位置
          return [p[0] + 10, p[1] - 10];
        }
      },
      legend: {

        top: '70%',
        itemWidth: 10,
        itemHeight: 10,
        data: ['系安全带', '未系安全带'],
        textStyle: {
          color: 'rgba(255,255,255,.5)',
          fontSize: '12',
        }
      },
      series: [
        {
          name: '安全带',
          type: 'pie',
          center: ['50%', '42%'],
          radius: ['40%', '60%'],
          color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab', '#06b4ab', '#06c8ab', '#06dcab', '#06f0ab'],
          label: {show: false},
          labelLine: {show: false},
          data: [
            {value: on, name: '系安全带'},
            {value: off, name: '未系安全带'}
          ]
        }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }

  function echarts_33() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('fb3'));

    var data;
    $.ajax({
      async: false,
      type: "GET",
      url: "http://122.9.33.180:8080//countCars",
      data: {},
      dataType: 'json',
      success: function myresult(t) {
        console.log(t);
        data = [
          {name: '思明区', value: t.思明区},
          {name: '海沧区', value: t.海沧区},
          {name: '湖里区', value: t.湖里区},
          {name: '集美区', value: t.集美区},
          {name: '翔安区', value: t.翔安区},
          {name: '同安区', value: t.同安区}
        ];
      }
      ,
      error: function myerror(msg) {
        /*      alert("错误内容" + msg);
              alert("error" + msg.responseText);*/
        console.log(msg);
      }
    });
    option = {
      title: [{
        text: '地区分布',
        left: 'center',
        textStyle: {
          color: '#fff',
          fontSize: '16'
        }

      }],
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
        position: function (p) {   //其中p为当前鼠标的位置
          return [p[0] + 10, p[1] - 10];
        }
      },
      legend: {
        top: '70%',
        itemWidth: 10,
        itemHeight: 10,
        data: ['思明区', '海沧区', '湖里区', '集美区', '翔安区', '同安区'],
        textStyle: {
          color: 'rgba(255,255,255,.5)',
          fontSize: '12',
        }
      },
      series: [
        {
          name: '地区分布',
          type: 'pie',
          center: ['50%', '42%'],
          radius: ['40%', '60%'],
          color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab', '#06b4ab', '#06c8ab', '#06dcab', '#06f0ab'],
          label: {show: false},
          labelLine: {show: false},
          data: data
          /*[
            {value: 2, name: '思明区'},
            {value: 3, name: '海沧区'},
            {value: 1, name: '湖里区'},
            {value: 4, name: '集美区'},
            {value: 8, name: '翔安区'},
            {value: 1, name: '同安区'},
          ]*/
        }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }

  function temperature() {

    var dom = document.getElementById('echart1');
    var myChart = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var params = {
      value: 52,//数值
      /*title: "温度计"*/
    }

    var app = {};
    var TP_value = params.value;
    var kd = [];
    var Gradient = [];
    var leftColor = '';
    var showValue = '';
    var boxPosition = [65, 0];
    var TP_txt = ''
    // 刻度使用柱状图模拟，短设置1，长的设置3；构造一个数据
    for (var i = 0, len = 135; i <= len; i++) {
      if (i < 10 || i > 130) {
        kd.push('')
      } else {
        if ((i - 10) % 20 === 0) {
          kd.push('-3');
        } else if ((i - 10) % 4 === 0) {
          kd.push('-1');
        } else {
          kd.push('');
        }
      }

    }
    //中间线的渐变色和文本内容
    if (TP_value > 50) {
      TP_txt = '';
      Gradient.push({
        offset: 0,
        color: '#93FE94'
      }, {
        offset: 0.5,
        color: '#E4D225'
      }, {
        offset: 1,
        color: '#E01F28'
      })
    } else if (TP_value >= 35) {
      TP_txt = '';
      Gradient.push({
        offset: 0,
        color: '#93FE94'
      }, {
        offset: 1,
        color: '#E4D225'
      })
    } else {
      TP_txt = '';
      Gradient.push({
        offset: 1,
        color: '#93FE94'
      })
    }

    leftColor = Gradient[Gradient.length - 1].color;
    // 因为柱状初始化为0，温度存在负值，所以加上负值60和空出距离10
    var option = {
      tooltip: {show: false},
      // backgroundColor: '#098',
      // backgroundColor: 'white',
      title: {
        text: params.title,
        textStyle: {
          color: "#010081",
          align: "center",
        },
        left: "45%",
      },
      grid: { // 控制图的大小，调整下面这些值就可以，
        left: "30%",
        top: "-10%",
        bottom: "20%",
      },
      yAxis: [{
        show: false,
        data: [],
        min: 0,
        max: 135,
        axisLine: {
          show: false
        }
      }, {
        show: false,
        min: 0,
        max: 50,
      }, {
        type: 'category',
        data: ['', '', '', '', '', '', '', '', '', ''],
        position: 'left',
        offset: -80,
        axisLabel: { // 单位
          fontSize: 10,
          color: 'black'
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
      }],

      xAxis: [{
        show: false,
        min: -10,
        max: 80,
        data: []
      }, {
        show: false,
        min: -10,
        max: 80,
        data: []
      }, {
        show: false,
        min: -10,
        max: 80,
        data: []
      }, {
        show: false,
        min: -5,
        max: 80,

      }],
      series: [{
        name: '条',
        type: 'bar',
        // 对应上面XAxis的第一个对)象配置
        xAxisIndex: 0,
        data: [{
          value: (TP_value + 30),//这个改那个颜色刻度的
          label: {
            normal: {
              show: true,
              position: boxPosition,
              width: 20,
              height: 100,
              formatter: '{back| ' + TP_value + ' }{unit|°C}\n{downTxt|' + TP_txt + '}',
              rich: {
                back: {
                  align: 'center',
                  lineHeight: 50,
                  fontSize: 30,
                  fontFamily: 'digifacewide',
                  color: leftColor
                },
                unit: {
                  fontFamily: '微软雅黑',
                  fontSize: 15,
                  lineHeight: 50,
                  color: leftColor
                },
                downTxt: {
                  lineHeight: 50,
                  fontSize: 25,
                  align: 'center',
                  color: leftColor
                }
              }
            }
          },
        }],

        barWidth: 18,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, Gradient)
          }
        },
        z: 2
      }, {
        name: '白框',
        type: 'bar',
        xAxisIndex: 1,
        barGap: '-100%',
        data: [134],
        barWidth: 18,
        itemStyle: {
          normal: {
            color: '#0C2E6D',
            barBorderRadius: 50,
          }
        },
        z: 1
      }, {
        name: '外框',
        type: 'bar',
        xAxisIndex: 2,
        barGap: '-100%',
        data: [135],
        barWidth: 28,
        itemStyle: {
          normal: {
            color: '#4577BA',
            barBorderRadius: 50,
          }
        },
        z: 0
      }, {
        name: '圆',
        type: 'scatter',
        hoverAnimation: false,
        data: [0],
        xAxisIndex: 0,
        symbolSize: 38,
        itemStyle: {
          normal: {
            color: '#93FE94',
            opacity: 1,
          }
        },
        z: 2
      }, {
        name: '白圆',
        type: 'scatter',
        hoverAnimation: false,
        data: [0],
        xAxisIndex: 1,
        symbolSize: 50,
        itemStyle: {
          normal: {
            color: '#0C2E6D',
            opacity: 1,
          }
        },
        z: 1
      }, {
        name: '外圆',
        type: 'scatter',
        hoverAnimation: false,
        data: [0],
        xAxisIndex: 2,
        symbolSize: 60,
        itemStyle: {
          normal: {
            color: '#4577BA',
            opacity: 1,
          }
        },
        z: 0
      }, /*{
        name: '刻度',
        type: 'bar',
        yAxisIndex: 0,
        xAxisIndex: 3,
        label: {
        normal: {
        show: true,
        position: 'left',
        distance: 15, // 刻度数据位置
        color: '#000000',// 刻度数字颜色
        fontSize: 14,
        formatter: function (params) {
        if (params.dataIndex > 130 || params.dataIndex < 10) {
        return '';
    } else {
        if ((params.dataIndex - 10) % 20 === 0) {
        return params.dataIndex - 30;//这个改刻度的，当减70的时候刻度是从-60开始不是从零开始
    } else {
        return '';
    }
    }
    }
    }
    },
        barGap: '-100%',
        data: kd,
        barWidth: 1,
        itemStyle: {
        normal: {
        color: '#000000', // 刻度线颜色
        barBorderRadius: 120,
    }
    },
        z: 0
    }*/]
    };

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }


    // 定时生成随机数，实时刷新数据
    setInterval(function () {
      //debugger
      var rdm = Math.floor(Math.random() * 100);

      var params = {
        value: rdm,//数值
        /*title: "温度计"*/
      }

      var Gradient = [];
      //中间线的渐变色和文本内容
      var warnTxt = "";
      if (params.value > 50) {
        Gradient.push(
          {
            offset: 0,
            color: "#93FE94",
          },
          {
            offset: 0.5,
            color: "#E4D225",
          },
          {
            offset: 1,
            color: "#E01F28",
          }
        );
        warnTxt = "温度过高";
      } else if (params.value >= 35) {
        Gradient.push(
          {
            offset: 0,
            color: "#93FE94",
          },
          {
            offset: 1,
            color: "#E4D225",
          }
        );
        warnTxt = "温度正常";
      } else {
        Gradient.push({
          offset: 1,
          color: "#93FE94",
        });
        warnTxt = "温度过低";
      }

      let leftColor = Gradient[Gradient.length - 1].color;
      var boxPosition = [65, 0];

      myChart.setOption({
        series: [
          {
            data: [
              {
                value: params.value + 30,
                label: {
                  normal: {
                    show: true,
                    position: boxPosition,
                    width: 20,
                    height: 100,
                    formatter:
                      "{back| " +
                      params.value +
                      " }{unit|°C}\n{downTxt|" +
                      " " +
                      "}",
                    //formatter:  item.senValue ,
                    rich: {
                      back: {
                        align: "center",
                        lineHeight: 50,
                        fontSize: 30,
                        fontFamily: "digifacewide",
                        color: leftColor,
                      },
                      unit: {
                        fontFamily: "微软雅黑",
                        fontSize: 15,
                        lineHeight: 50,
                        color: leftColor,
                      },
                      downTxt: {
                        lineHeight: 50,
                        fontSize: 25,
                        align: "center",
                        color: leftColor,
                      },
                    },
                  },
                },
                name: params.title,
              },
            ],
          },
        ],
      });
    }, 1000);


  }

  function temperatureHumiture() {
    var Gauge = {};
    Gauge.ChartList = {};
    /**
     * 生成温湿计图表
     *
     *@param{string}elementId   显示温湿计表的HTML元素id
     *@param{number}temperature 温度
     *@param{number}humidity    湿度
     *@return
     */
    Gauge.Hygrothermograph = function (elementId, temperature, humidity) {
      var ele = document.getElementById(elementId);
      var myChart = this.ChartList[elementId];
      if (!myChart) {
        myChart = echarts.init(ele);
        this.ChartList[elementId] = myChart;
      } else {
        var option = myChart.getOption();
        option.series[0].data[0].value = humidity;
        option.series[1].data[0].value = temperature;
        myChart.setOption(option, true);
        return;
      }

      var option = {
        tooltip: {
          formatter: function (params, ticket, callback) {
            // console.log(params.data.name);
            var unit = " 度";
            if (params.data.name == "湿度") unit = " %";
            return params.data.name + " : " + params.data.value + unit;
          }
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        series: [
          {
            name: '湿度',
            center: ['50%', '85%'],
            type: 'gauge',
            radius: '55%',
            startAngle: 200,
            endAngle: -20,
            min: 20,
            max: 100,
            splitNumber: 1,
            axisLine: {            // 坐标轴线
              lineStyle: {       // 属性lineStyle控制线条样式
                width: 6,
                color: [[0.25, '#6386ce'], [0.62, '#91d7ae'], [1, '#ff9931']]
              }
            },
            axisTick: {            // 坐标轴小标记
              length: 8,        // 属性length控制线长
              lineStyle: {       // 属性lineStyle控制线条样式
                color: 'auto'
              }
            },
            splitLine: {           // 分隔线
              length: 10,         // 属性length控制线长
              lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                color: 'auto'
              }
            },
            title: {
              fontSize: 12,
              color: 'red'
            },
            detail: {formatter: '{value}%', fontSize: 12},
            axisLabel: {
              fontSize: 10
            },
            data: [{value: humidity, name: '湿度'}]
          }, {
            name: '温度',
            type: 'gauge',
            startAngle: 210,
            endAngle: -30,
            radius: '100%',
            z: 3,
            min: -30,
            max: 50,
            splitNumber: 1,
            axisLine: {            // 坐标轴线
              lineStyle: {       // 属性lineStyle控制线条样式
                width: 8,
                color: [[0.6, '#6386ce'], [0.73, '#91d7ae'], [1, '#ff9931']]
              }
            },
            axisTick: {            // 坐标轴小标记
              length: 12,        // 属性length控制线长
              lineStyle: {       // 属性lineStyle控制线条样式
                color: 'auto'
              }
            },
            splitLine: {           // 分隔线
              length: 14,         // 属性length控制线长
              lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                color: 'auto'
              }
            },
            axisLabel: {
              backgroundColor: 'auto',
              borderRadius: 2,
              color: '#eee',
              padding: 3,
              textShadowBlur: 2,
              textShadowOffsetX: 1,
              textShadowOffsetY: 1,
              textShadowColor: '#222'
            },
            title: {
              // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              fontWeight: 'bolder',
              fontSize: 14,
              fontStyle: 'italic',
              color: 'red'
            },
            detail: {
              // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              formatter: function (value) {
                value = (value + '').split('.');
                value.length < 2 && (value.push('00'));
                return ('00' + value[0]).slice(-2)
                  + '.' + (value[1] + '00').slice(0, 2);
              },
              offsetCenter: [0, '-20%'],
              fontSize: 14,
              borderRadius: 3,
              borderColor: '#aaa',
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              borderWidth: 1,
              textBorderColor: '#000',
              fontFamily: 'Arial',
              width: 40,
              color: '#9b9',
              rich: {}
            },
            data: [{value: temperature, name: '温度'}]
          },
        ]
      };

      myChart.setOption(option);
    }
    Gauge.Hygrothermograph("echart1", 0, 0);
    setInterval(function () {
      var temperature;
      var humiture;
      /*option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
      option.series[1].data[0].value = (Math.random() * 7).toFixed(2) - 0;
      option.series[2].data[0].value = (Math.random() * 2).toFixed(2) - 0;
      option.series[3].data[0].value = (Math.random() * 2).toFixed(2) - 0;
      myChart.setOption(option, true);*/
      $.ajax({
        async: true,
        type: "GET",
        url: "http://122.9.33.180:8080//getLastSecondTHI",
        data: {},
        dataType: 'json',
        success: function myresult(t) {
          console.log(t);
          temperature = t.data.currentDegree;
          humiture = t.data.currentHumidity;
          Gauge.Hygrothermograph("echart1", temperature, humiture);
        }
        ,
        error: function myerror(msg) {
          /*      alert("错误内容" + msg);
                alert("error" + msg.responseText);*/
          console.log(msg);
        }
      });

    }, 2000);  //每间2秒重新渲染一次，以实现动态效果
  }






  function box1(){
    var dom = document.getElementById('num1');
    var data;
    $.ajax({
      async: false,
      type: "GET",
      url: "http://122.9.33.180:8080//countCars",
      data: {},
      dataType: 'json',
      success: function myresult(t) {
        console.log(t);
        data=t.海沧区+t.湖里区+t.集美区+t.翔安区+t.同安区+t.思明区;
      }
      ,
      error: function myerror(msg) {
        /*      alert("错误内容" + msg);
              alert("error" + msg.responseText);*/
        console.log(msg);
      }
    });
    dom.textContent=data;
  }
})


















