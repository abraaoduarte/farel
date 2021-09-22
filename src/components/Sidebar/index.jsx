import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import './sidebar.scss'
import {
    UserOutlined,
  } from '@ant-design/icons';

const { Sider } = Layout;

const Sidebar = ({ isCollapsed = false }) => (
    <Sider trigger={null} collapsible collapsed={isCollapsed} className="sidebar-content">
        {/* TODO: Colocar logo verdadeiro */}
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
                <Link to="/users">Usuários</Link>
            </Menu.Item>
        </Menu>
    </Sider>
)

export default Sidebar