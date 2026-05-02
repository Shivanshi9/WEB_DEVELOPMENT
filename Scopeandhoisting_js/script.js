let test = "I am a global variable"

function classA() {
    console.log("classA", test);
}
classA()

function classB() {
    console.log("classA", test);
    let test1 = "Local variable"
    console.log("classB",test1);
    
} 
classB()

function classC() {
    console.log("classA", test);
} 

function classD() {
    console.log("classA", test);
} 

function classE() {
    console.log("classA", test);
}