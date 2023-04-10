import React, { Fragment } from 'react'
import { ICategory } from '../../interface/category'
import { Space, Table, Button, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
const {  Link } = Typography;
type Props = {
    categories: ICategory[]
    onRemove: (id: string|number) => void
}
interface DataType {
  key: string | number;
  name: string;
  
}
const CategoriesManagerment = (props: Props) => {
  const removeCategory = (id: string | number) => {
    props.onRemove(id)
  }
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
          
    },
  
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => removeCategory(record.key)}>Remove</Button>
          <Button><Link href={`categories/update/${record.key}`}>Update</Link></Button>
        </Space>
      ),
    },
  ];
console.log(props.categories)
  const data: DataType[] = props.categories.map(category => {
    return {
      key: category._id,
      name: category.name,
      
    }
  })
  return (
    <Fragment>
      <Button><Link href='categories/add'>Add category</Link></Button>
        <Table columns={columns} dataSource={data} />
    </Fragment>
  )
}

export default CategoriesManagerment