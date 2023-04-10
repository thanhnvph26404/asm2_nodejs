import {
  Button,
  Form,
  Input,
  InputNumber,
  Select, Space
} from 'antd';
import { useState, useEffect } from 'react';
import { Iproduct } from '../../interface/product';
import { ICategory } from '../../interface/category';
import { useNavigate,useParams } from 'react-router-dom';
interface IProps {
  onUpdate: (product: Iproduct) => void
  categories: ICategory[];
  products: Iproduct[]; 
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

const UpdateProduct = (props: IProps) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState<Iproduct>()
  useEffect(() => {
    const currentProduct = props.products.find((product: Iproduct) => product._id == id)
    setProduct(currentProduct)
  }, [props])
  useEffect(() => {
    setFields()
   },[product])
  const [form] = Form.useForm();
  const setFields = () => {
    form.setFieldsValue({
      _id: product?._id,
      name: product?.name,
      price: product?.price,
      categoryId: product?.categoryId
    })
  }
    const categories = props.categories.map(category => {
        return {
            value: category._id,
            label: category.name
        }
    })
    const onFinish = (values: any) => {
     
     props.onUpdate(values)
      navigate('/admin/products')
    
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
        label="id"
        style={{display: 'none'}}
      rules={[
    
        
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      name="name"
      label="Name"
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
      name="categoryId"
      label="Category"
      rules={[
    
        {
          required: true,
          message: 'Please choose your category',
        },
      ]}
    >
      <Select
    //   defaultValue="lucy"
      style={{ width: 120 }}
    //   onChange={handleChange}
      options={categories}
    />
    </Form.Item>

    <Form.Item
      name="price"
      label="Price"
      rules={[
        {
          required: true,
          message: 'Please input your price',
          },
          {
              type: 'number',
              message: 'Please enter a number'
          }
      ]}
      hasFeedback
    >
      <InputNumber/>
    </Form.Item>

    
    <Form.Item {...tailFormItemLayout}>
      <Button type="primary" htmlType="submit">
        Update
      </Button>
    </Form.Item>
  </Form>
  )
}

export default UpdateProduct