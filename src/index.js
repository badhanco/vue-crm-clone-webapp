import App from './App.vue';
import About from './components/About.vue';
import Customer from './components/Customer.vue';
import DashBoard from './components/DashBoard.vue';
import Order from './components/Order.vue';
import Product from './components/Product.vue';
import NewProduct from './components/NewProduct.vue';



const routes = [
    {path : '/about' , component : About},
    {path : '/customer' , component : Customer},
    {path : '/dashboard' , component : DashBoard},
    {path : '/order' , component : Order},
    {path : '/product' , component : Product},
    {path : '/newproduct' , component : NewProduct},
    {path : '/' , component : App},
]

export default routes;



