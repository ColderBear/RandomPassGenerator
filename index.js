const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const display = document.getElementById("display")
const display2 = document.getElementById("display2")
const digits = document.getElementById("digit-btn")
const input = document.getElementById("countDigits")
const darkLightModeBtnEl = document.getElementById('dark-light-mode-btn')
const generatePasswordsBtnEl = document.getElementById('generate-passwords-btn')
let count = 0

darkLightModeBtnEl.addEventListener('click', mode)
generatePasswordsBtnEl.addEventListener('click', generate)

digits.addEventListener("click", function(){
    let inputValue = parseInt(input.value); 

    if (isNaN(inputValue) || inputValue < 0) {
        // Display an error message if the input is not a number or is less than 0
        errorDisplay.textContent = "Please enter a valid number!"
    } else {
        // Clear any existing error message
        errorDisplay.textContent = "Generate Successful!"
        // Set the count to the valid input value
        count = inputValue
        //Clear the input field 
        input.value = ""
        }
        
})

function generate() {
    const passwords = []
    for (let x = 0; x < 2; x++) {
        passwords.push(getRandomCharacters())
    }
    display.textContent= passwords[0]
    display2.textContent = passwords[1]
}

function getRandomCharacters() {
    let password = ''
    for(let i = 1; i <= count; i++){//genrate the number of digites based on the user's input, which is the count in the case 
        const random = Math.floor(Math.random()*characters.length)
        //use the random varable to genrate random digits and then assigne it to the empty password string 
        password += characters[random]
    } 
    return password
}

function mode() {
    document.body.classList.toggle("dark-theme")
}

