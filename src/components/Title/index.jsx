import React from "react";
import { Typography } from 'antd'
import './title.scss';

const { Title } = Typography;

const TitlePage = (props) => {
    const { text } = props;
    return (
        <Title className="title" {...props}>{text}</Title>
    )
}

export default TitlePage;