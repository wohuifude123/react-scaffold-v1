import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.less'

/**
 * 作者：Abbott.liu
 * 时间：2018年2月21日
 * 描述：车联网 - 设备
 */

import { Tabs, Button } from 'antd';

const TabPane = Tabs.TabPane;

class TableMarker extends React.Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      { title: '基本信息', content: 'Content of Tab Pane 1', key: '1' },
      { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2' },
    ];
    this.state = {
      activeKey: panes[0].key,
      panes,
    };
  }

  onChange = (activeKey) => {
    this.setState({ activeKey });
  }

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  }

  add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey });
    this.setState({ panes, activeKey });
  }

  remove = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({ panes, activeKey });
  }

  _init = () => {
    const _self = this;
    console.log( '_self.props == ', _self.props);
    _self.setState({ 
      panes: _self.props.componentNames.panes,
      activeKey: _self.props.componentNames.activeKey
    });
  }

  render() {
    const _self = this;
    console.log( '_self.props == ', _self.props);
    return (
      <div>
        <Tabs
          hideAdd
          onChange={this.onChange}
          activeKey={this.state.activeKey}
          type="editable-card"
          onEdit={this.onEdit}
        >
          {_self.props.componentNames.panes.map(pane => <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane>)}
        </Tabs>
      </div>
    );
  }

  componentWillReceiveProps( newProps ) {
    console.log('Component WILL RECEIVE PROPS!');
    const _self = this;
    console.log( '接收新的参数 newProps == ', _self.newProps);
  }

  shouldComponentUpdate (nextProps,nextState) {
    return true;
  }

  componentWillUpdate (nextProps,nextState) {
    console.log('Component WILL UPDATE!');
    const _self = this;
    console.log( '接收新的参数 nextProps == ', _self.nextProps);
    console.log( '接收新的参数 nextState == ', _self.nextState);
  }

  componentDidUpdate (prevProps,prevState) {
    const _self = this;
    //_self._init();
  }
}

export default TableMarker;