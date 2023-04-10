import {
  Button,
  Form,
  Input,
 
} from 'antd';

import { ISignin } from '../interface/auth';


import { useNavigate } from 'react-router-dom';

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
interface IProps {
    onSignin: (user: ISignin) => void
}



const Signin = (props: IProps) => {
  const [form] = Form.useForm();
const navigate = useNavigate()
    const onFinish = (values: any) => {
      props.onSignin(values);
      // console.log(values);
      navigate('/')
    
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
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          signin
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Signin