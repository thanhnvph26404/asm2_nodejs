import instance from "./instance";
import { Iproduct } from "../interface/product";
export const getAllProduct = () => {
    return instance.get('/products')
}

export const getOneProduct = (id: number | string) => {
    return instance.get('/products/'+id)
}

export const addProduct = (product: Iproduct) => {
    const token = JSON.parse(localStorage.getItem('user') as string).accessToken
    return instance.post('/products', product, {
        headers: {
           Authorization: 'Bearer ' + token
        }
    })
}

export const updateProduct = (product: Iproduct) => {
    const token = JSON.parse(localStorage.getItem('user') as string).accessToken
    return instance.patch('/products/' + product._id, product, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}

export const deleteProduct = (id: number | string) => {
    const token = JSON.parse(localStorage.getItem('user') as string).accessToken
    return instance.delete('/products/' + id, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}