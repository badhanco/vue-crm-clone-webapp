import App from './App.vue';
import About from './components/About.vue';
import Customer from './components/Customer.vue';
import DashBoard from './components/DashBoard.vue';
import Order from './components/Order.vue';
import Product from './components/Product.vue';
import NewProduct from './components/NewProduct.vue';
import NewCustomer from './components/NewCustomer.vue';
import NewOrder from './components/NewOrder.vue';
import Login from './components/Login.vue';


const routes = [

    { path: '/about', component: About },
    { path: '/customer', component: Customer },
    { path: '/dashboard', component: DashBoard },
    { path: '/order', component: Order },
    { path: '/product', component: Product },
    { path: '/newproduct', component: NewProduct },
    { path: '/login', component: Login },
    {path: '/', component: Login},
    { path: '/newcustomer', component: NewCustomer },
    { path: '/neworder', component: NewOrder },


]

export default routes;



