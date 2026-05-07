function Bulbon() {
    document.getElementById("bulb1").style.backgroundColor = "yellow";
}

function BulbOff() {
    document.getElementById("bulb1").style.backgroundColor = "white";
}

function Bulbred() {
    document.getElementById("bulb1").style.backgroundColor = "red";
}

function Bulblue() {
    document.getElementById("bulb1").style.backgroundColor = "blue";
}

function Bulbgreen() {
    document.getElementById("bulb1").style.backgroundColor = "green";
}


document.getElementById("bulbred").addEventListener("click", Bulbred);

document.getElementById("bulbcolor").addEventListener("change", Changebulbcolor)

function Changebulbcolor() {
    const color = document.getElementById("bulbcolor").value;
    document.getElementById("bulb1").style.backgroundColor = color;
}