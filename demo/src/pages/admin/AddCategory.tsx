import {
  Button,
  Form,
  Input,
  InputNumber,
  Select, Space
} from 'antd';
import { useNavigate } from 'react-router-dom';
import { ICategory } from '../../interface/category'

type Props = {
  onAdd: (category: ICategory) => void
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


const AddCategory = (props: Props) => {
  const [form] = Form.useForm();
const navigate = useNavigate()
    
    const onFinish = (values: any) => {
     props.onAdd(values)
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
        Add
      </Button>
    </Form.Item>
  </Form>
  )
}

export default AddCategory