import React, { useState } from 'react'
import { Layout, Breadcrumb } from 'antd';
import { useLocation  } from 'react-router-dom'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import Footer from '../Footer'
import validateUUID from '../../helpers/validateUUID';

import './layout.scss'

const { Content } = Layout;

const breadcrumbs = {
    'users': ['Usuários'],
    'users/update': ['Usuários', 'Atualizar'],
}

const getBreadcrumb = (pathname) => {
    const parsePathname = pathname.split('/').filter(path => Boolean(path) && !validateUUID(path)).join('/');
    return breadcrumbs[parsePathname];
}

const LayoutTemplate = ({ children }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const { pathname } = useLocation();

    const handleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    }
    return (
        <Layout>
            <Sidebar isCollapsed={isCollapsed} />
            <Layout
                className={isCollapsed ? 'site-layout collapsed-close' : 'site-layout'}
            >
                <Navbar isCollapsed={isCollapsed} onCollapse={handleCollapse} />
                <Content className="container">
                    <Breadcrumb className="breadcrumb">
                        {getBreadcrumb(pathname).map((name) => (
                            <Breadcrumb.Item key={name}>{name}</Breadcrumb.Item>
                        ))}
                    </Breadcrumb>
                    <div className="content">
                        {children}
                    </div>
                </Content>
                <Footer />
            </Layout>
        </Layout>
    )}

export default LayoutTemplate;