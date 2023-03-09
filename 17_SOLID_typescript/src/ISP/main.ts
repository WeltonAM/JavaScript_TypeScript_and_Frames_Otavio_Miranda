/* Se meu programa espera um Animal, algo do tipo Cachorro que herda de Anila deve servir como qualquer outro Animal */
import { NoDiscount } from './classes/discount';
import { ShoppingCart } from './classes/A001-shopping-cart';
import { Message } from './services/message';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { EnterpriseCustomer, IndividualCustomer } from './classes/customer';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Message();
const persistency = new Persistency();
const individualCustomer = new IndividualCustomer('Luiz', 'Miranda', '000.000.000-00');
const enterpriseCustomer = new EnterpriseCustomer('Empresa', '000.000.000-00');
const order = new Order(shoppingCart, messaging, persistency, enterpriseCustomer);

shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Caderno', 9.9));
shoppingCart.addItem(new Product('Lápis', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
order.checkout();
console.log(order.orderStatus);
