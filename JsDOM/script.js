function Submit(){
    // console.log("Submit button clicked");

    const fn = document.getElementById("fullName").value;
    console.log(fn);
    
    document.getElementById("myData").innerHTML=fn;
    document.getElementById("fullName").value="";

}