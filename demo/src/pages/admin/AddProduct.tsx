import {
    Button,
    Form,
    Input,
    InputNumber,
    Select, Space
  } from 'antd';
import { Iproduct } from '../../interface/product';
import { ICategory } from '../../interface/category';
  import { useNavigate } from 'react-router-dom';
interface IProps {
    onAdd: (product: Iproduct) => void
    categories: ICategory[];
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
  
const AddProduct = (props: IProps) => {
    const [form] = Form.useForm();
const navigate = useNavigate()
    const categories = props.categories.map(category => {
        return {
            value: category._id,
            label: category.name
        }
    })
    const onFinish = (values: any) => {
     props.onAdd(values)
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
        Add
      </Button>
    </Form.Item>
  </Form>
  )
}

export default AddProduct