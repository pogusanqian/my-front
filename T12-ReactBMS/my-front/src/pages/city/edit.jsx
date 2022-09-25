import React from 'react';
import axios from 'axios';
import { Button, Form, Input, Modal } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import config from '../../config';

const App = () => {
  const state = useLocation().state;
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { confirm } = Modal;
  if (state) {
    form.setFieldsValue(state);
  }

  const rulesObj = {
    f_name: [
      {
        required: true,
        message: '名称必填',
      },
      {
        whitespace: true,
        message: '不能输入空格',
      }
    ],
    f_code: [
      {
        required: true,
        pattern: /^[0-9]+$/,
        message: '编码必填, 而且只能是数字',
      },
    ],
    f_operator: [
      {
        required: true,
        message: '操作人必填',
      }
    ]
  };

  const save = async () => {
    await form.validateFields();
    if (state) { // 更新
      await axios.post(`${config.url}/mykoa/updateCityMap`, { ...form.getFieldValue() });
    } else { // 添加
      await axios.post(`${config.url}/mykoa/addCityMap`, { ...form.getFieldValue() });
    }
    confirm({
      title: '保存成功, 是否跳转到列表页?',
      onOk() {
        navigate('../city');
      },
    });
  };

  return (
    <Form
      name="basic"
      form={form}
      style={{ margin: '30px 0' }}
      labelCol={{ span: 2 }}
      wrapperCol={{ span: 6 }}
    >
      <Form.Item label="名称" name="f_name" rules={rulesObj.f_name}>
        <Input />
      </Form.Item>

      <Form.Item label="编码" name="f_code"  rules={rulesObj.f_code}>
        <Input maxLength="8" showCount/>
      </Form.Item>

      <Form.Item label="拼音" name="f_pin_yin">
        <Input />
      </Form.Item>

      <Form.Item label="操作人" name="f_operator" rules={rulesObj.f_operator}>
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 4 }}>
        <Button type="primary" htmlType="submit" onClick={() => save(form)}>提交</Button>
      </Form.Item>

    </Form>
  );
};

export default App;