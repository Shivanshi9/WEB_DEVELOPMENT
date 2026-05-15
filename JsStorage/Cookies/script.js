let key = "$=4;"
let value = "$=;"
document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`
console.log(document.cookie);
