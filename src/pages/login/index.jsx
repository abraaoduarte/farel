import React, { useContext } from 'react';
import { Form, Input, Button, Checkbox, Row, Col, Spin, message } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";

import { Context } from '../../Context/AuthContext';
import Logo from './logo.svg'
import './login.scss'

const Login = () => {
    const { loading, handleLogin } = useContext(Context);
    const  history = useHistory();

    const onLogin = async (values) => {
        try {
            await handleLogin(values)
            history.push('dashboard')
        } catch (error) {
            message.error('Ocorreu um erro ao logar, tente mais tarde.');
            console.log('Error:', error);
        }
    };

    return (
        <>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="login-container">
                <div className="wrapper">
                    <Spin tip="Logando..." spinning={loading}>
                        <Row justify="center" align="middle">
                            <Col span={12} xs={24} sm={12}>
                                <img src={Logo} alt="Logo da oitava igreja presbiteriana de Franca" />
                            </Col>
                            <Col span={12} xs={24} sm={12} className="form-content">
                                <h1>Login</h1>
                                <Form
                                    name="basic"
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onFinish={onLogin}
                                    // autoComplete="off"
                                    className="form"
                                >
                                    <Form.Item
                                        name="email"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Por favor, insira seu email!',
                                        },
                                        ]}
                                    >
                                        <Input
                                            prefix={<MailOutlined className="site-form-item-icon" />}
                                            placeholder="Email"
                                            type="email"
                                            className="input"
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        name="password"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Por favor, insira sua senha!',
                                        },
                                        ]}
                                    >
                                        <Input.Password
                                            placeholder="Senha"
                                            type="email"
                                            className="input"
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        className="remember"
                                        name="remember"
                                        valuePropName="checked"
                                    >
                                        <Checkbox>lembrar-me</Checkbox>
                                    </Form.Item>
                                    <Button disabled={loading} type="primary" htmlType="submit" className="submit-btn">
                                        Logar
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Spin>
                </div>
            </div>
        </>
    );
};

export default Login;