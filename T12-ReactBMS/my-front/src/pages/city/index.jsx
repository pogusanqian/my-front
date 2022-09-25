import qs from 'qs';
import axios from 'axios';
import { Table, Button, Space, message, Modal } from 'antd';
import React, { useEffect, useState, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../../config';

const App = () => {
  const navigate = useNavigate();
  const { confirm } = Modal;
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  // 获取数据
  const getData = async function () {
    try {
      setLoading(true);
      const querys = { ...tableParams.pagination };
      const { data: { rows, count } } = await axios.get(`${config.url}/mykoa/getCityMapByPage?${qs.stringify(querys)}`);
      setData(rows);
      setTableParams({
        ...tableParams,
        pagination: {
          ...tableParams.pagination,
          total: count
        },
      });
    } catch (err) {
      console.error(err);
      message.error('查询失败');
    }
    setLoading(false);
  };

  // 删除数据
  const deleteData = function (row) {
    confirm({
      title: '是否确认删除数据',
      async onOk() {
        try {
          await axios.post(`${config.url}/mykoa/deleteCityMapById`, { f_id: row.f_id });
          if (data.length === 1) {
            tableParams.pagination.current = tableParams.pagination.current - 1;
          }
          await getData();
          message.success('删除成功');
        } catch (err) {
          message.error('删除失败');
        }
      },
    });
  };

  useEffect(() => { 
    getData(); 
  }, [JSON.stringify(tableParams)]);
  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });
  };

  const columns = [
    {
      title: '主键',
      dataIndex: 'f_id',
    },
    {
      title: '名称',
      dataIndex: 'f_name',
    },
    {
      title: '编码',
      dataIndex: 'f_code',
    },
    {
      title: '拼音',
      dataIndex: 'f_pin_yin',
    },
    {
      title: '操作人',
      dataIndex: 'f_operator',
    },
    {
      title: '操作时间',
      dataIndex: 'f_update_time',
    },
    {
      title: '操作',
      key: 'operaion',
      width: '10%',
      render: (row) => {
        return (
          <Space>
            <Button onClick={() => { navigate('../city-edit', { state: row }); }}>修改</Button>
            <Button onClick={() => deleteData(row)}>删除</Button>
          </Space>
        );
      }
    }
  ];

  return (
    <Fragment>
      <Space size='large' align='center' style={{ margin: '15px 30px' }}>
        <Button type="primary" onClick={() => { navigate('../city-edit'); }}>添加</Button>
        <Button type="primary" disabled>导入</Button>
        <Button type="primary" disabled>导出</Button>
        <Button type="primary" disabled>导入模板</Button>
      </Space>
      <Table
        bordered
        columns={columns}
        dataSource={data}
        rowKey={(row) => row.f_id}
        pagination={tableParams.pagination}
        loading={loading}
        // 每一次进行分页, 排序, 查找都会调用此方法
        onChange={handleTableChange}
      />
    </Fragment>
  );
};

export default App;