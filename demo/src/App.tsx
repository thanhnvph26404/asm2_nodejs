import { useState, useEffect } from 'react'
import {Routes, Route} from 'react-router-dom'
import { getAllProduct, getOneProduct, addProduct, updateProduct,deleteProduct } from './api/product'
import { getAllCategory, getOneCategory, addCategory, updateCategory,deleteCategory } from './api/category'
import { Iproduct, Props } from './interface/product'
import AdminLayout from './layouts/AdminLayout'
import WebsiteLayout from './layouts/WebsiteLayout'
import AddProduct from './pages/admin/AddProduct'
import Dashboard from './pages/admin/Dashboard'
import ProductManagerment from './pages/admin/ProductManagerment'
import UpdateProduct from './pages/admin/UpdateProduct'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import { signin, signup } from './api/auth'
import { ISignup, ISignin } from './interface/auth'
import { ICategory } from './interface/category'
import CategoriesManagerment from './pages/admin/CategoriesManagerment'
import AddCategory from './pages/admin/AddCategory'
import UpdateCategory from './pages/admin/UpdateCategory'
import DetailProduct from './pages/DetailProduct'
function App() {
  const [products, setProducts] = useState<Iproduct[]>([])
  const [categories, setCategories] = useState<ICategory[]>([])
  useEffect(() => {
    getAllProduct()
    .then(({data}) => setProducts(data))
  }, [])
  useEffect(() => {
    getAllCategory().then(({ data }) => setCategories(data))
    
  }, [])
  
  //handle
  const onHandleAdd = (product:Iproduct) => {
    addProduct(product).then(() => setProducts([...products, product]))
  }
  const onHandleRemove = (id: string | number) => {
    deleteProduct(id).then(() => setProducts(products.filter(product => product._id != id)))
  }

  const onHandleUpdate = (product: Iproduct) => {
    updateProduct(product).then(() => setProducts(products.map(item => item._id == product._id ? product : item)))
  }
  const onHandleSignup = (user: ISignup) => {
    signup(user)
  }

  const onHandleSignin = (user: ISignin) => {
    signin(user).then(({data}) => {
      localStorage.setItem('user', JSON.stringify(data))
    })
  }
//category
  const onHandleRemoveCategory = (id: string | number) => {
  deleteCategory(id).then(() => setCategories(categories.filter(category => category._id != id)))
  }
  const onHandleAddCategory = (category: ICategory) => {
    addCategory(category).then(() => setCategories([...categories, category]))
  }
  const onHandleUpdateCategory = (category: ICategory) => {
    updateCategory(category).then(() => setCategories(categories.map(item => item._id == category._id ? category : item)))
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WebsiteLayout />}>
          <Route index element={<HomePage /> } />
          <Route path='products'>
            <Route index element={<ProductPage products={products} />} />
            <Route path=':id' element={<DetailProduct products={ products} />} />
          </Route>
          <Route path='/signin' element={<Signin onSignin={ onHandleSignin} />} />
          <Route path='/signup' element={<Signup onSignup={onHandleSignup } />} />
        </Route> 
        <Route path='/admin' element={<AdminLayout/>}>
          <Route index element={<Dashboard />} />
          <Route path='products'>
            <Route index element={<ProductManagerment products={products} onRemove={onHandleRemove} />} />
            <Route path='add' element={<AddProduct onAdd={onHandleAdd} categories={categories} />} />
            <Route path='update/:id' element={<UpdateProduct products={products } onUpdate={onHandleUpdate} categories={categories} />} />
          </Route>
          <Route path='categories'>
            <Route index element={<CategoriesManagerment categories={categories } onRemove={onHandleRemoveCategory} />} />
            <Route path='add' element={<AddCategory onAdd={onHandleAddCategory } />} />
            <Route path='update/:id' element={<UpdateCategory categories={categories } onUpdate={onHandleUpdateCategory} />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
