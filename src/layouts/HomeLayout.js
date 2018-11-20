import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import style from '../styles/home-layout.less';
import Device from '../components/device';
import CarBar from '../components/CarBar';

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

class HomeLayout extends React.Component {
  render () {
    const _self = this;
		const {children} = this.props;
		console.log( 'children === ', children);
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
            			车型管理
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
                  图书列表
                </MenuItem>
                <MenuItem key="book-add">
                  添加图书
                </MenuItem>
              </SubMenu>
            </Menu>
          </div>
          <div className='content'>
            {_self.props.children}
          </div>
        </main>
      </div>
    );
  }
}

export default HomeLayout;