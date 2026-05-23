
//server function
function willdoSomething(p, q, add) {
    console.log("Doing Something");

    let m = p + 10
    let n = q + 10

    console.log(add(m, n));


}

//function in DB
function sum(a, b) {
    let x = a + 1
    let y = b - 1
    return x + y
}

willdoSomething(5, 6, sum)

// line 21 is called p=5 , q=6 , add = sum ka address ,
// m = 5+10=15 , n=6+10=16
//add(15,16) add koi function to hai nhi ek parameter h jisme sum ka address store hua h to sum ab call hoga
//sum(a=15,b=16)
// x =15+1=16 , y=16-1=15, return 16+15=31 ans

// NOTE:- KISI X FUNCTION KO AS A PARAMETER PASS KRNA Y FUNCTION ME AUR Z NAAM SE CALL KRNE SE X HI EXECUTE HOGA CALLED CALLBACK
//sum = X, willdoSomething = Y , add = Z