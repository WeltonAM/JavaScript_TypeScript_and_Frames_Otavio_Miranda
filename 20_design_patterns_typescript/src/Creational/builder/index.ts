import { VeganDishBuilder } from './classes/vegano-dish-builder';
import { MainDishBuilder } from './classes/main-dish-builder';
// import { MealBox } from './classes/meal-box';
// import { Beans, Meat, Rice } from './classes/meal';

// const rice = new Rice('Arroz', 5);
// const beans = new Beans('Feijão', 10);
// const meat = new Meat('Carne', 20);
// const mealBox = new MealBox();
// mealBox.add(rice, beans, meat);
// console.log(mealBox);
// console.log(mealBox.getPrice());

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeDesert();
console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());

mainDishBuilder.reset();
console.log(mainDishBuilder.getMeal());

const veganDishBuilder = new VeganDishBuilder();
veganDishBuilder.makeMeal();
console.log(veganDishBuilder);
