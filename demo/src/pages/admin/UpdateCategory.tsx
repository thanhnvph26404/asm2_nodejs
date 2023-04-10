import React from 'react'
import { ICategory } from '../../interface/category'
import {
  Button,
  Form,
  Input,
 
} from 'antd';
import { useState, useEffect } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
type Props = {
  categories: ICategory[],
  onUpdate: (category: ICategory) => void
}
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const UpdateCategory = (props: Props) => {

  const { id } = useParams()
  const navigate = useNavigate()
  const [category, setCategory] = useState<ICategory>()
  useEffect(() => {
    const currentCategory = props.categories.find((category: ICategory) => category._id == id)
    setCategory(currentCategory)
  }, [props])
  useEffect(() => {
    setFields()
   },[category])
  const [form] = Form.useForm();
  const setFields = () => {
    form.setFieldsValue({
      _id: category?._id,
      name: category?.name,
      
    })
  }
    
    const onFinish = (values: any) => {
     
     props.onUpdate(values)
      navigate('/admin/categories')
    
  };
  return (
    <Form
    {...formItemLayout}
    form={form}
    name="register"
    onFinish={onFinish}
    initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '86' }}
    style={{ maxWidth: 600 }}
    scrollToFirstError
    >
      <Form.Item
      name="_id"
        label="Category name"
        style={{display: 'none'}}
      rules={[
    
        {
          required: true,
          message: 'Please input your name',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      name="name"
      label="Category name"
      rules={[
    
        {
          required: true,
          message: 'Please input your name',
        },
      ]}
    >
      <Input />
    </Form.Item>

    

    
    <Form.Item {...tailFormItemLayout}>
      <Button type="primary" htmlType="submit">
        Update
      </Button>
    </Form.Item>
  </Form>
  )
}

export default UpdateCategory