
let btn = document.querySelector("#btn")

btn.addEventListener("click",()=>{

    document.querySelectorAll(".error").forEach((elem)=>{
        elem.innerText = "";
    })

    let name = document.querySelector("#fullName").value
    if(!/^[A-Za-z\s]+$/.test(name))
    {
        document.getElementById("nameerror").innerText = "Invalid full name"
    }
  
    let pn = document.querySelector("#phone").value
      if(!/^[6-9]\d{9}$/.test(pn))
    {
        document.getElementById("numerror").innerText = "Invalid number"
    }

    let mail = document.querySelector("#mail").value
    if(!/^[A-Za-z\.\_\d]+@gmail.com$/.test(mail))
    {
        document.getElementById("mailerror").innerText = "Invalid mail"
    }

    let pw = document.querySelector("#password").value

   const datapacket = {
        Name : name,
        Phone: pn,
        Mail: mail,
        Password: pw
    };

    console.log(datapacket);

})