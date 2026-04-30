// console.log("hello world");
// // js is a dynamic type language 

// var x = 10;
// var x = 12;
// // let is used mostly
// console.log(x);

// for(var i=1; i<=10; i++)
// {
//     console.log(i*2);

// }

// let a=[24,58,33,86,34,65,86,12,90,40]

// for(let j=0; j<a.length ;j++)
// {
//     console.log(a[j]);   
// }

// let i=1;
// while(i<=10) 
// {
//     console.log(i*2);
//     i++;
// }

// let i = 1;
// do {
//     console.log(i * 2); 
//     i++;
// }
// while (i <= 10);

let age = 20;
if (age >= 18) {
    console.log("You can vote");
}
else {
    console.log("You can't vote");
}


let num = 20;
if (num%2 == 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}

let markk = 5;

if (markk > 100 || markk < 0) console.log("invalid marks");
else if (markk >= 90) console.log("A");
else if (markk >= 75) console.log("B");
else if (markk >= 50) console.log("C");
else console.log("fail");




//
let data;
let name = "Sv";

data = name || "N/A"
console.log(data);


//tjis sentence is similar to this loop
// if(name){
//     data = name
// }else{
//     data = "N/A"
// }

let choice;
switch(choice ){
    case 1: {
        console.log("Tea");
        break;
    }
    case 2: {
        console.log("Coffee");
        break;
    }
    case 3: {
        console.log("Lassi");
        break;
    }
    default: {
        console.log("Lassi");
    }
}






