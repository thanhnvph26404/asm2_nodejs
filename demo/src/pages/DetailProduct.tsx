import React from 'react'
import { useParams } from 'react-router-dom'
import { Iproduct } from '../interface/product'

type Props = {
    products: Iproduct[]
}

const DetailProduct = (props: Props) => {
    const { id } = useParams()
   const product = props.products.find
  return (
    <div>DetailProduct</div>
  )
}

export default DetailProduct