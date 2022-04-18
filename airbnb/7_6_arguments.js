// bad
function concatenateAll() {
  const args = Array.prototype.slice.call(arguments);
  return args.join('');
}

const result = concatenateAll('hello', 'world', 'hello', 'tomorrow');
console.log(result);
