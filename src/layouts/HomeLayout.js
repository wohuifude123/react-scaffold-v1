import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import style from '../styles/home-layout.less';
import Device from '../components/device';
import CarBar from '../components/CarBar';
import TableMarker from '../components/TableMarker';

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

class HomeLayout extends React.Component {
  constructor(props) {
    super(props);
    const _self = this;
    _self.newTabIndex = 0;
    const panes = [
      { title: '基本信息', content: 'Content of Tab Pane 1', key: '1' },
      { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2' },
    ];
    const componentNames = [
      { title: '组件第一个', content: 'Content of Tab Pane 1', key: '1' },
      { title: '组件2', content: 'Content of Tab Pane 2', key: '2' },
    ]
    _self.state = {
      activeKey: panes[0].key,
      panes,
    };
  }

  add = () => {
    console.log('增加新的属性');
    const _self = this;
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey });
    _self.setState({ panes, activeKey });
  }

  render () {
    const _self = this;
		const {children} = this.props;

    console.log( '_self.state == ', _self.state )
    _self.state 
		return (
      <div>
				<header className='header'>
          ReactManager
				</header>
				<main className='main'>
					<div className='menu'>
						<div className='user-information'>
							admin
						</div>
						<Menu 
							mode="inline" 
							theme="dark" 
							style={{width: '240px'}}
						>
							<MenuItem key={"/app"}>
								<Link to={"/app"}><Icon type="home" /><span>首页</span></Link>
							</MenuItem>
							<SubMenu key="user" title={<span><Icon type="user"/><span>OTA管理</span></span>}>
                <MenuItem key="platform-manage">
                  <Link to={"/users/add"}>平台管理</Link>
								</MenuItem>
            		<MenuItem key="car-manage">
            			<div onClick={this.add}>车型管理</div>
            		</MenuItem>
                <MenuItem key="device-manage">
                  设备管理
                </MenuItem>
                <SubMenu key="introduce-manage" title="发布管理">
                  <Menu.Item key="10">发布任务</Menu.Item>
                  <Menu.Item key="11">版本管理</Menu.Item>
                  <Menu.Item key="12">测试设备管理</Menu.Item>
                </SubMenu>
                <SubMenu key="count-manage" title="统计管理">
                  <Menu.Item key="15">进度任务</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu key="book" title={<span><Icon type="book"/><span>图书管理</span></span>}>
                <MenuItem key="book-list">
                  <div onClick={_self.add}>图书列表</div>
                </MenuItem>
                <MenuItem key="book-add">
                  添加图书
                </MenuItem>
              </SubMenu>
            </Menu>
          </div>
          <div className='content'>
            <TableMarker componentNames={_self.state}/>
          </div>
        </main>
      </div>
    );
  }
}

export default HomeLayout;