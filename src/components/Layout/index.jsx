import React, { useState } from 'react'
import { Layout, Breadcrumb } from 'antd';
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import Footer from '../Footer'

import './layout.scss'

const { Content } = Layout;

const LayoutTemplate = ({ children }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
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
                    {/* TODO: Pegar informações dinamicamente da URL */}
                    <Breadcrumb className="breadcrumb">
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
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