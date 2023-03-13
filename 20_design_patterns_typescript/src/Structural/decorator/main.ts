import { ProductStampDecorator } from './product/product-stamp-decorator';
import { TShirt } from './product/t-shirt';

const tshirt = new TShirt();
const decoratedTshirt = new ProductStampDecorator(tshirt);
console.log(tshirt.getPrice());
console.log('---------------');
console.log(decoratedTshirt.getPrice());
