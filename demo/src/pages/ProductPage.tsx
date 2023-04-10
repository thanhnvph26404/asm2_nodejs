import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Iproduct } from '../interface/product'
interface IProps {
    products: Iproduct[]
}
const ProductPage = (props: IProps) => {
    const [data, setData] = useState<Iproduct[]>([])
    useEffect(() => {
        setData(props.products)
        console.log(data)
    },[props])
  return (
      <div>
          <h1>Product Page</h1>
          {data.map((product: Iproduct) => (
              <Link to={`${product._id}`} key={product._id} style={{border: '1px solid #ccc', display: 'block'}}>
                  <h2>{product.name}</h2>
                  <p>{ product.price}</p>
              </Link>
              
          ))}

          
    </div>
  )
}

export default ProductPage