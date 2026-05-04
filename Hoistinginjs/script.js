//rule of hoisting is to declare all the variables at the top of code
let a;
let b ;
let c ;

a = 10;
console.log(a); // 10
console.log(b); // undefined 
console.log(c); // undefined

 b = 20;

console.log(a); // 10
console.log(b); // 20 
console.log(c);  // undefind 

 c = 20;

console.log(a);
console.log(b);
console.log(c);   

    