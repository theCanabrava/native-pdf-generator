const fs = require('fs');
const dist = fs.readFileSync('./dist/android-index.json', 'utf8');
console.log(dist);