import { ShoppingCart } from './A001-shopping-cart';
import { OrderStatus } from './interfaces/order-status';
import { Message } from '../services/message';
import { Persistency } from '../services/persistency';
import { CustomerOrder } from './interfaces/customer-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Message,
    private readonly persistency: Persistency,
    private readonly customer: CustomerOrder,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio.');
    }

    this._orderStatus = 'closed';
    this.messaging.sendMessage(`Seu pedido com total: ${this.cart.totalWithDiscount()} foi recebido.`);
    this.persistency.saveOrder();
    this.cart.clear();
    console.log('O cliente é: ', this.customer.getName(), this.customer.getIdn());
  }
}
