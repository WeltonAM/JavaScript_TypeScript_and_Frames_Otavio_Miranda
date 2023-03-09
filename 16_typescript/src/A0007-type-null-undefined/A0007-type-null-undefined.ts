export function createPerson(
  firstName: string,
  lastName?: undefined,
): {
  firstName: string;
  lastName: undefined;
} {
  return {
    firstName,
    lastName,
  };
}

export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwoNumber = squareOf(2);
// const squareOfTwoString = squareOf('2');

if (squareOfTwoNumber === null) {
  console.log('Conta inválida');
} else {
  console.log(squareOfTwoNumber * 100);
}
