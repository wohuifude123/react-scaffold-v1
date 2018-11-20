import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

class IndexLayout extends React.Component {
    render() {
        return (
            <div className="header">
                <div>
                    <span><IndexLink to="/">Home</IndexLink></span>
                    <span><Link to="/add" className='link'>新增页</Link></span>
                    <span><Link to="/list" className='link'>列表页</Link></span>
                    <span><Link to="/detail" className='link'>详情页</Link></span>
                </div>
                {this.props.children}//这里决定了每次切换，渲染不同的子组件，而父组件不变
            </div>
        )
    }
}

export default IndexLayout;