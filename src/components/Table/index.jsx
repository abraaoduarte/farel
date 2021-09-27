import React from 'react';
import { Table, Divider, Row, Col  } from 'antd';

const ListTable = (props) => {
    const { text = 'Listagem', columns = [], data = []} = props;
    return (
    <>
        <Divider orientation="left">{text}</Divider>
        <Row>
            <Col span={24}>
                <Table {...props} columns={columns} dataSource={data} />
            </Col>
        </Row>
    </>
)}

export default ListTable;