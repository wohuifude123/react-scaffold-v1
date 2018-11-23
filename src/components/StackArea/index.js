import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.less'

/**
 * 作者：Abbott.liu
 * 时间：2018年2月21日
 * 描述：车联网 - 设备
 */

class CarBar extends React.Component {
    constructor() {
        super();
        this.state = {
            name: [],
            quantity: []
        }
    }

    _init() {
        // 参数设置
        const _self = this;
        return import(/* webpackChunkName: "echarts" */ 'echarts').then(echarts => {
            let myChart = echarts.init(document.getElementById('main'));
            // 指定图表的配置项和数据
            let option = {
                title: {
                    text: '堆叠区域图'
                },
                tooltip : {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                legend: {
                    data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : ['周一','周二','周三','周四','周五','周六','周日']
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'邮件营销',
                        type:'line',
                        stack: '总量',
                        areaStyle: {},
                        data:[120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name:'联盟广告',
                        type:'line',
                        stack: '总量',
                        areaStyle: {},
                        data:[220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name:'视频广告',
                        type:'line',
                        stack: '总量',
                        areaStyle: {},
                        data:[150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name:'直接访问',
                        type:'line',
                        stack: '总量',
                        areaStyle: {normal: {}},
                        data:[320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name:'搜索引擎',
                        type:'line',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        areaStyle: {normal: {}},
                        data:[820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            };
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        })
    }
    
    render() {

        return (
            <div className={'bar_divStyle'} id={'main'} ref='device'>

            </div>
        )
    }

    componentDidMount(){
        const _self = this;
        _self._init();
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
            this.state.name.length != 0 && this.state.quantity.length != 0)
        {
            this._init()
        }
    }

}

export default CarBar;
