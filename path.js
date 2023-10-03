const path = require('path')

console.log(path.sep);

const filepath = path.join('/public', 'dist', '/styles', 'main.css');

console.log(path.basename(filepath));
console.log(path.dirname(filepath));
console.log(path.parse(filepath));
console.log(path.resolve('dist'));