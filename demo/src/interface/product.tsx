export interface Iproduct {
    _id: number | string,
    name: string, 
    price: number,
    categoryId: string | number
}

export interface Props {
    products: Iproduct[]
}