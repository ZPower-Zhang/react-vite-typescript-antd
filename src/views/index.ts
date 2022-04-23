// function getProperty<T, K extends typeof T>(obj: T, key: K):T[K] {
//   return obj[key]
// }
// let x = { a: '1', b: '2', c: '3', d: '4', e: ''}

// function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
//   return o[name]; // o[name] is of type T[K]
// }

// getProperty(x, 'a')
// export {
//   getProperty
// }