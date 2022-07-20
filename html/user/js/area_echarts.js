
$(function () {
    map();
    function map() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('map_1'));

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
/*var data = [
     {name: '思明区', value: 177},
     {name: '海沧区', value: 193},
     {name: '湖里区', value: 194},
     {name: '集美区', value: 229},
     {name: '翔安区', value: 273},
     {name: '同安区', value: 279}
];*/
var geoCoordMap = {
    '思明区':[118.08846074, 24.46122052],
    '海沧区':[118.03593711, 24.49178316],
    '湖里区':[118.10941257,24.51293767],
    '集美区':[118.10116675,24.57271574],
    '翔安区':[118.24114242,24.6367849],
    '同安区':[118.15058119,24.72940547]
};
var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

option = {
   // backgroundColor: '#404a59',
  /***  title: {
        text: '实时行驶车辆',
        subtext: 'data from PM25.in',
        sublink: 'http://www.pm25.in',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },**/
    tooltip : {
        trigger: 'item',
		formatter: function (params) {
              if(typeof(params.value)[2] == "undefined"){
              	return params.name + ' : ' + params.value;
              }else{
              	return params.name + ' : ' + params.value[2];
              }
            }
    },

    geo: {
        map: '厦门市',
        mapType:'厦门市',
        label: {
            emphasis: {
                show: true
            }
        },
        roam: false,//禁止其放大缩小
        itemStyle: {
            normal: {
                areaColor: '#4c60ff',
                borderColor: '#002097'
            },
            emphasis: {
                areaColor: '#293fff'
            }
        }
    },
    series : [
        {
            name: '消费金额',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function (val) {
                return val[2] *10;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#ffeb7b'
                }
            }
        }

    ]
};

        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

})

