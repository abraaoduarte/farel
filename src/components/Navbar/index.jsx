import React, { useContext } from 'react'
import { Layout, Dropdown, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
} from '@ant-design/icons';
import './navbar.scss';
import { Context } from '../../Context/AuthContext';

const { Header } = Layout;

const Navbar = ({ isCollapsed = false, onCollapse }) => {
    const { user } = useContext(Context);

    return (
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
            <button type="button" className="setting-button" onClick={e => e.preventDefault()}>
                {user.name} <UserOutlined />
            </button>
        </Dropdown>
    </Header>
)}

export default Navbar