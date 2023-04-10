import React from 'react'
import { Iproduct } from '../../interface/product'
import { Space, Table, Button, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
const {  Link } = Typography;
type Props = {
  products: Iproduct[],
  onRemove: (id: number | string) => void
}

interface DataType {
  key: string | number;
  name: string;
  price: number;
  categoryId: string | number;
}



const ProductManagerment = (props: Props) => {
  const removeProduct = (id: string | number) => {
    props.onRemove(id)
  }
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
          
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Category',
      dataIndex: 'categoryId',
      key: 'categoryId',
    },
   
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => removeProduct(record.key)}>Remove</Button>
          <Button><Link href={`products/update/${record.key}`}>Update</Link></Button>
        </Space>
      ),
    },
  ];
      


  const data: DataType[] = props.products.map(product => {
    return {
      key: product._id,
      name: product.name,
      price: product.price,
      categoryId: product.categoryId
    }
  })

  return (
    <>
      <Button><Link href='products/add'>Add product</Link></Button>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 2, showQuickJumper: true }}/>
    </>
  )
}

export default ProductManagerment