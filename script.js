const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let textEl = document.getElementById("text-el")
let textE = document.getElementById("text")
let textInput =  document.getElementById('textInput')
let length = characters.length;
let passText = document.querySelector(".genbtn")

function updateTextInput(val) {
    textInput.value=val;
}

passText.addEventListener("click" , function(){
    textEl.value = ""
    textE.value = ""
    ilength = textInput.value;
    textE.value = generator()
    textEl.value = generator()
})


function generator(){
    let newPass = ""
    for(i = 0 ; i < ilength ; i++){
      let randomPass = Math.floor(Math.random() * characters.length)
    newPass +=  characters[randomPass]
    }
    return newPass
}

function copy(){
    var copyText = document.getElementById("text-el");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
}

function kopya(){
    var copyText = document.getElementById("text");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
}
