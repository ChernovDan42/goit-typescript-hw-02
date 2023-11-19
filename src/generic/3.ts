/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

// function merge<T,U>(objA:T, objB:U) {
//   return Object.assign(objA, objB);
// }

// const objectA = { name: 'John', age: 25 };
// const objectB = { city: 'New York', country: 'USA' };

// const mergedObject = merge(objectA, objectB);
function merge<T extends object, U extends object>(objA: T, objB: U):T & U {
  return Object.assign(objA, objB);
}


export {}