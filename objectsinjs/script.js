let fData = [
    {
        "name": "Aarav Sharma",
        "date": "1999-04-12",
        "phone": "9876543210",
        "city": "Bhopal",
        "profession": "Software Engineer"
    },
    {
        "name": "Neha Verma",
        "date": "2000-08-25",
        "phone": "9123456780",
        "city": "Indore",
        "profession": "Graphic Designer"
    },
    {
        "name": "Rohit Patel",
        "date": "1998-11-05",
        "phone": "9988776655",
        "city": "Ahmedabad",
        "profession": "Business Analyst"
    },
    {
        "name": "Priya Singh",
        "date": "2001-02-18",
        "phone": "9012345678",
        "city": "Delhi",
        "profession": "Doctor"
    },
    {
        "name": "Karan Mehta",
        "date": "1997-07-30",
        "phone": "9090909090",
        "city": "Mumbai",
        "profession": "Marketing Manager"
    }
]

fData.forEach((elem) => {
    console.log(elem["date"]); //BRACKET NOTATION 
    console.log(elem.date); //DOT NOTATION elem.date
})

console.log("map function");


fData.map((elem, idx) => {
    console.log(idx);
    console.log(elem.phone);
})

console.log(fData[1]["name"]);
console.log(fData[1].name); // SCRIPT OBJECTJAVA  NOTATION

console.log(Object.keys(fData));
console.log(Object.values(fData));

let arr = [11, 3, 6, 2, 6, 144, 177]
arr.sort((a, b) => a - b) //compare function
console.log(arr);

console.log(arr.find((val) => val > 20)); //finds 1st value which is > 20
console.log(arr.findIndex((val) => val === 6));
console.log(arr.findLastIndex((val) => val === 6));

let ar = [11, 3, 6, 2, 6, 144, 177]
console.log(ar.filter((val) => val > 20)); //finds all values which is > 20
console.log(ar.slice(0,3));

let ab = "This is web-dev class"
console.log(ab.split(" "));
console.log(ab.split("-"));



