import instance from "./instance";
import { ICategory } from "../interface/category";
export const getAllCategory = () => {
    return instance.get('/categories')
}

export const getOneCategory = (id: number | string) => {
    return instance.get('/categories/'+id)
}

export const addCategory = (category: ICategory) => {
    const token = JSON.parse(localStorage.getItem('user') as string).accessToken
    return instance.post('/categories', category, {
        headers: {
           Authorization: 'Bearer ' + token
        }
    })
}

export const updateCategory = (category: ICategory) => {
    const token = JSON.parse(localStorage.getItem('user') as string).accessToken
    return instance.patch('/categories/' + category._id, category, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}

export const deleteCategory = (id: number | string) => {
    const token = JSON.parse(localStorage.getItem('user') as string).accessToken
    return instance.delete('/categories/' + id, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}