import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css'

/**
 * 作者: Abbott.liu
 * 时间：2018年2月21日
 * 描述：新疆地区设备
 */

class Device extends React.Component {
    constructor() {
        super();
        this.state = {
            name: [],
            quantity: []
        }
    }
    _init() {
        // 参数设置
        let device = ReactDOM.findDOMNode(this.refs.device);

        //var optionECharts = this.props.defaultProps;

        return import(/* webpackChunkName: "echarts" */ 'echarts').then(echarts => {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(device);
            // 指定图表的配置项和数据

            // ECharts 默认配置数据
            var option = {
                legend: { // 图例
                    show: true,
                    icon:'rect',
                    itemWidth: 20,
                    itemHeight: 10,
                    x:'center',
                    y:'bottom',
                    data:['设备'],
                    textStyle:{
                        color: '#c1dbfd'
                    }
                },

                grid:{ // 组件周围边框

                },
                tooltip: {},

                xAxis: {
                    type: 'category',
                    //data: ['设备', '设备', "设备","设备","设备","设备","设备","设备","设备"],
                    data: [],

                    // 两边留白策略
                    boundaryGap: [0, 0],
                    min:0,
                    axisLine:{// 坐标线
                        lineStyle:{
                            opacity: 0
                        }
                    },
                    axisLabel:{//字体
                        //margin:20,
                        textStyle:{
                            // fontStyle:'oblique',
                            color: '#6684ae'
                        },
                        interval:0,
                        axisTick: {
                            length:30,
                            lineStyle:{
                                width: 20
                            }
                        },
                    }

                },
                yAxis: {
                    //type: 'category',
                    type: 'value',
                    name:'(台)',
                    nameGap: 3,	//坐标轴名字里坐标系的距离
                    nameTextStyle:{
                        color: '#6684ae'
                    },
                    //splitNumber: 9, // 分割线的数量
                    // Y 轴字体
                    axisLabel:{	//字体
                        //margin:20,
                        textStyle:{
                            // fontStyle:'oblique',
                            color: '#6684ae'
                        }
                    },
                    /*
                    data: [
                        '0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100'
                    ],
                    */
                    splitLine:{ // 分割线
                        show: true
                    },

                    axisLine:{// 坐标线
                        lineStyle:{
                            opacity: 0
                        }
                    },
                    boundaryGap : false
                },
                series: [{
                    name: '设备',
                    type: 'bar',
                    //data: [ 6, 3.5, 9, 4, 5, 6, 7, 8, 9],
                    data: [],
                    // 柱子的宽度
                    //barMaxWidth: 5,
                    // 柱子间距离
                    barWidth : 10,//柱图宽度
                    itemStyle: {
                        normal: {
                            color: '#4fb8fc'

                        }
                    },
                    barCategoryGap: 10
                    //barCategoryGap: 50
                }]
            };

            option.xAxis.data = this.state.name;
            option.series[0].data = this.state.quantity;
            // 使用刚指定的配置项和数据显示图表
            if (option && typeof option === "object") {
                myChart.setOption(option, true);
            }

        }).catch(error => 'An error occurred while loading the component');
    }

    render() {

        return (
            <div className={'device_divStyle'} ref='device'>

            </div>
        )
    }

    componentDidMount(){
        //

    }
    // 组件接收到新的props时调用,并将其作为参数nextProps使用
    componentWillReceiveProps(nextProps) {  // 接收新的参数
        //console.log('设备')
        //console.log(nextProps.data)
        let name = []
        let quantity = [];
        nextProps.data.map(function(item,index){
            name[index] = item['name'];
            quantity[index] = item['quantity'];
        })
        this.setState({
            name: name,
            quantity: quantity
        })
    }
    
    componentDidUpdate() {
        if( this.state.name && this.state.quantity &&
            this.state.name.length != 0 && this.state.quantity.length != 0){
            this._init()
        }

    }

}

export default Device;
