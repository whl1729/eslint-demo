const fs = require('fs')

const foo = new Promise(async (resolve, reject) => {
  fs.readFile('foo.txt', (err, result) => {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  });
})

const result = new Promise(async (resolve) => {
  resolve(await foo);
})
console.log(result)
