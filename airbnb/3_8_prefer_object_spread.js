// very bad
const original = { a: 1, b: 2 };
const copy = Object.assign(original, { c: 3 }); // this mutates `original` ಠ_ಠ
delete copy.a; // so does this

// bad
const original2 = { a: 1, b: 2 };
const copy2 = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }
