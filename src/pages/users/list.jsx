import React from 'react';
import { Space, Button, Tag, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Helmet } from "react-helmet";
import { format, parseISO } from 'date-fns'
import { Link } from 'react-router-dom'
import TitlePage from '../../components/Title'
import Table from '../../components/Table'
import useFetch from '../../hooks/useFetch'

const columns = (onDelete) => [
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    align: 'center',
  },
  {
    title: 'Ativo',
    dataIndex: 'isActive',
    key: 'isActive',
    align: 'center',
    render: (text) => text ? ( <Tag color="green">Sim</Tag>) : (<Tag color="red">Não</Tag>)
  },
  {
    title: 'Admin',
    dataIndex: 'isAdmin',
    key: 'isAdmin',
    align: 'center',
    render: (text) => text ? ( <Tag color="green">Sim</Tag>) : (<Tag color="red">Não</Tag>)
  },
  {
    title: 'Data de criação',
    dataIndex: 'createdAt',
    key: 'createdAt',
    align: 'center',
    render: (date) => {
        const parsedDate = parseISO(date);
        return format(parsedDate, 'dd/m/yyyy')}
  },
  {
    title: 'Ações',
    key: 'action',
    align: 'center',
    width: 80,
    render: (user) => (
      <Space size="small">
          <Link to={`/users/${user.id}/update`}>
                <Button type="primary" size="small" icon={<EditOutlined />} />
          </Link>
          <Popconfirm
                title="Tem certeza que deseja deletar este usuário?"
                onConfirm={() => onDelete(user.id)}
                okText="Sim"
                cancelText="Não"
            >
                <Button type="danger" size="small" icon={<DeleteOutlined />} />
            </Popconfirm>
      </Space>
    ),
  },
];



const ListUser = () => {
    const { data, loading, paginate, destroy } = useFetch(
        '/users',
        'Erro ao buscar usuários'
    );

    const handlePagination = (page) => {
        paginate(page)
    }

    const handleDeletion = (id) => destroy(id)

    return (
        <>
            <Helmet>
                <title>Listagem de Usuários</title>
            </Helmet>
            <TitlePage text="Usuários" />
            <Table
                pagination={{
                    total: data?.total,
                    defaultCurrent: data?.currentPage,
                    onChange: handlePagination
                }}
                rowKey="id"
                bordered
                loading={loading}
                size="small"
                columns={columns(handleDeletion)}
                data={data.result || []}
            />
        </>
    )};

export default ListUser;