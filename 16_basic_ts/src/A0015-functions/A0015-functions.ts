type MapStringCallback = (item: string) => string;

function mapString(
  array: string[],
  callbackfn: MapStringCallback,
): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i]));
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];
const acbcMapped = mapString(abc, (item) =>
  item.toUpperCase(),
);

console.log(acbcMapped);
