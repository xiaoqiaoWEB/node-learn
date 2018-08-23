let a = Buffer.alloc(10,'a','utf-8');
console.log(a)

a.fill('d',2,4)

console.log(a)


console.log(a.length)

var c = '学习';
let b = new Buffer('学习');
console.log(c.length)
console.log(Buffer.byteLength(b))
