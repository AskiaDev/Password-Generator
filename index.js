const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1 = document.getElementById("pass1")
let pass2 = document.getElementById("pass2")
let passwordLength = 8



function generate(){
    let generatedPasswordOne = randomPassword()
    let generatedPasswordTwo = randomPassword()
    pass1.textContent = generatedPasswordOne
    pass2.textContent = generatedPasswordTwo
}

function generatePass(){
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function randomPassword() {
    let randomPass = ""
    for (let i = 0; i < passwordLength; i++){
        randomPass += generatePass()
    }
    return randomPass
}

function generatePass(){
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function randomPassword() {
    let randomPass = ""
    for (let i = 0; i < passwordLength; i++){
        randomPass += generatePass()
    }
    return randomPass
}
