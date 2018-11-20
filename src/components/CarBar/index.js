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
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                legend: {
                    data:['销量']
                },
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
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
