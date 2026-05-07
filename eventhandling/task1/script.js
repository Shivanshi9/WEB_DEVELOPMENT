document.getElementById("hcolor").addEventListener('change', Hcolor);

function Hcolor() {
    const color = document.getElementById("hcolor").value;
    document.getElementById("heading").style.color = color;
}

document.getElementById("bgcolor").addEventListener('change', Bgcolor);

function Bgcolor() {
    const color = document.getElementById("bgcolor").value;
    document.getElementById("box1").style.backgroundColor = color;
}

document.getElementById("paracolor").addEventListener('change', Paracolor);

function Paracolor() {
    const color = document.getElementById("paracolor").value;
    document.getElementById("para").style.color = color;
}

function Reset() {
    window.location.reload()
}