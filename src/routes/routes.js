import Dashboard from '../components/admin/Dashboard';
import Profile from '../components/admin/Profile';

import AddCategory from '../components/admin/category/AddCategory';
import EditCategory from '../components/admin/category/EditCategory';
import Category from '../components/admin/category/Category';

import AddBrand from '../components/admin/brands/AddBrand';
import EditBrand from '../components/admin/brands/EditBrand';
import Brand from '../components/admin/brands/Brand';


import AddProduct from '../components/admin/products/AddProduct';
import EditProduct from '../components/admin/products/EditProduct';
import Product from '../components/admin/products/Product';

import Order from '../components/admin/orders/Order';


const routes = [
    { path: '/admin', exact: true,  name: 'Admin' },
    { path: '/admin/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
    { path: '/admin/profile', exact: true, name: 'Profile', component: Profile },

    
    { path: '/admin/add-category', exact: true, name: 'AddCategory', component: AddCategory },
    { path: '/admin/edit-category/:id', exact: true, name: 'EditCategory', component: EditCategory },
    { path: '/admin/categories', exact: true, name: 'Category', component: Category },

    { path: '/admin/add-brand', exact: true, name: 'AddBrand', component: AddBrand },
    { path: '/admin/edit-brand/:id', exact: true, name: 'EditBrand', component: EditBrand },
    { path: '/admin/brands', exact: true, name: 'Brand', component: Brand },
    
    { path: '/admin/add-product', exact: true, name: 'AddProduct', component: AddProduct },
    { path: '/admin/edit-product/:id', exact: true, name: 'EditProduct', component: EditProduct },
    { path: '/admin/products', exact:true, name: 'Product', component: Product },

    { path: '/admin/orders', exact:true, name: 'Order', component: Order },
    
];

export default routes;