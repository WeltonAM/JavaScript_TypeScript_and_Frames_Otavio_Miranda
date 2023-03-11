import { MyDatabaseFunction } from '../db/my-database-function';

import { myDatabaseClassic as myDatabaseFromA } from './module_a';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Roberto', age: 30 });
myDatabaseClassic.add({ name: 'Luiza', age: 30 });
myDatabaseClassic.add({ name: 'Joana', age: 30 });
myDatabaseClassic.show();

console.log(myDatabaseFromA === myDatabaseClassic);
