import React from 'react'
import { Layout, Dropdown, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
} from '@ant-design/icons';
import './navbar.scss';

const { Header } = Layout;

const Navbar = ({ isCollapsed = false, onCollapse }) => (
    <Header className="header-content">
        {React.createElement(isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: onCollapse,
        })}
        <Dropdown
            trigger={['click']}
            overlay={(
                <Menu>
                    <Menu.Item key="1">Editar</Menu.Item>
                </Menu>
            )}
        >
            {/* TODO: Pegar nome do usuário do contexto */}
            <button type="button" className="setting-button" onClick={e => e.preventDefault()}>
                Abraão Duarte <UserOutlined />
            </button>
        </Dropdown>
    </Header>
)

export default Navbar