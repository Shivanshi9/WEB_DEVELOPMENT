document.querySelector("form").addEventListener("submit",(event)=>{
    event.preventDefault();

    const fn = document.getElementById("fullName").value;
    const em = document.getElementById("email").value;
    const pw = document.getElementById("password").value;
    
    const dataPacket = {
        "FullName" : fn,
        "Email" : em,
        "Password" : pw
    };

    console.log(dataPacket);

     document.getElementById("fullName").value ="";
     document.getElementById("email").value ="";
     document.getElementById("password").value ="";
    
})

// document.querySelector("form").addEventListener("reset",(event)=>{
//     confirm("are you sure") && window.location.reload()  
// })


//kwyboard event 

document.addEventListener("keydown",(event)=>{
    let keypress = event.key;
    // console.log(keypress);
    keypress === "Escape" && window.location.reload();
    
})