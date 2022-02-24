
let firsth = document.getElementById("firsth")
let secondh = document.getElementById("secondh")
let thirdh = document.getElementById("thirdh")
let fourthh = document.getElementById("fourthh")
let numberh = document.getElementById("numberh")
let positionh = document.getElementById("positionh")
let first = document.getElementById("first")
let second = document.getElementById("second")
let third = document.getElementById("third")
let fourth = document.getElementById("fourth")
let ranNum = []
let correctPosition = 0
let correctNumber = 0
let triedAmount = 1
const asd = document.querySelector
document.addEventListener('DOMContentLoaded', () => {
    createSquares();
    startInteraction();
    generateRandomNumber();
})
function generateRandomNumber(){
    ranNum[0] = (Math.floor(Math.random() * 10)).toString()
    while(ranNum [0] === "0"){
    ranNum[0] = (Math.floor(Math.random() * 10)).toString()
    }
    ranNum[1] = (Math.floor(Math.random() * 10)).toString()
    while(ranNum[1] === ranNum[0]){
    ranNum[1] = (Math.floor(Math.random() * 10)).toString()
    }
    ranNum[2] = (Math.floor(Math.random() * 10)).toString()
    while(ranNum[2] === ranNum [0] || ranNum[2] === ranNum[1]){
    ranNum[2] = (Math.floor(Math.random() * 10)).toString()
    }
    ranNum[3] = (Math.floor(Math.random() * 10)).toString()
    while(ranNum[3] === ranNum[0]||ranNum[3] === ranNum[1]||ranNum[3] === ranNum[2]){
    ranNum[3] = (Math.floor(Math.random() * 10)).toString()
    }
    
}
function createSquares () {
    const gameBoard = document.getElementById('board')
     for (let i = 1; i <= 6; i++) {
        let square = document.createElement('div')
        square.classList.add("guessed")
        square.classList.add("history-square")
        square.classList.add("cat" + i.toString())
        for (let j = 5 ; j <= 6 + (triedAmount* 6); j = j+6) {
            if (j === i ){
                square.classList.add("estimate")
            }
        }
        if (i >=6 && i%6 === 0){
            square.classList.add("estimate")
        }
        gameBoard.appendChild(square)
    }
}
/* loads when the page first loads and then waits for input taken from "https://youtu.be/Wak7iN4JZzU" 
upuntil the handleKeypress function*/
function startInteraction() {
    document.addEventListener("click", handleMouseClick)
    document.addEventListener("keydown", handleKeyPress)
}
function stopInteraction() {
    document.removeEventListener("click", handleMouseClick)
    document.removeEventListener("keydown", handleKeyPress)
}
function handleMouseClick(e) {
    if (e.target.matches("[data-enter]")){
        submitGuess()
        return
    }
    if (e.target.matches("[data-delete]")){
        deleteKey()
        return
    }
    if (e.target.matches("[data-key]")){
        pressKey(e.target.dataset.key)
        return
    }  
    if (e.target.matches("[data-history]")){
        pressHistory()
        return
    }
}
function handleKeyPress(e) {
    if (e.key === "Enter") {
        submitGuess()
        return
    }

    if (e.key === "Backspace" || e.key === "Delete") {
        deleteKey()
        return
    }

    if (e.key.match(/^[0-9]/)){
        pressKey(e.key)
        return
    }

    if (e.key === "h" || e.key === "H"){
        pressHistory()
        return
    }
}

/*for input keys: lets user input data to the guessing squares and adds the class 
name active for said guessing square*/
function pressKey(key) {
    for (let i = 0; i < 6; i++) {
        if ( document.getElementsByClassName('guess')[i].classList[2] !== "active"){
            document.getElementsByClassName('guess')[i].innerHTML = key;
            document.getElementsByClassName('guess')[i].classList.add("active")
            break
                }  
            } 
}

/*for delete key: lets user delete data from the guessing squares and removes the 
class name active for said guessing square*/
function deleteKey(){
     for (i = 3; i >= 0; i--) {
        if (document.getElementsByClassName('guess')[i].classList[2] === "active"){
            document.getElementsByClassName('guess')[i].innerHTML = "";
            document.getElementsByClassName('guess')[i].classList.remove("active")
            break
        }
    }  
}

function pressHistory(){
    alert("the history is right there homie")
}
function submitGuess(){
    
        
        if (correctNumber === 4 && correctPosition === 4) {
            alert("you won and it took you " + triedAmount + " tries" )
        }
        else {
            if (first.innerHTML === "" || second.innerHTML === "" || third.innerHTML === "" || fourth.innerHTML === ""){
                alert("please input all fields homie")
            }
            else if (first.innerHTML === second.innerHTML || first.innerHTML === third.innerHTML || first.innerHTML === fourth.innerHTML ||
                second.innerHTML === third.innerHTML || second.innerHTML === fourth.innerHTML ||
                third.innerHTML === fourth.innerHTML) {
                    alert("you cant input the same digit twice")
                }
            else{    
                for (let j = 0; j <= 3; j++) {
                for (let i = 0; i <= 3; i++) {
                    if (document.getElementsByClassName('guess')[j].innerText === ranNum[i]){
                        correctNumber++
                        if(j === i){
                            correctPosition++
                           }
                       }
                   }
               }
                let n1 = first.innerHTML.toString()
                let n2 = second.innerHTML.toString()
                let n3 = third.innerHTML.toString()
                let n4 = fourth.innerHTML.toString()
                let nn = correctNumber.toString()
                let np = correctPosition.toString()
                firsth.innerText = first.innerHTML
                first.classList.remove("active")
                secondh.innerText =second.innerHTML
                second.classList.remove("active")
                thirdh.innerText = third.innerHTML
                third.classList.remove("active")
                fourthh.innerText = fourth.innerHTML
                fourth.classList.remove("active")
                numberh.innerHTML = correctNumber
                positionh.innerHTML = correctPosition
                for (let k = 0; k <= triedAmount-1; k++) {
                    let abv = document.getElementsByClassName("cat1")[k]
                    let bbv = document.getElementsByClassName("cat2")[k]
                    let cbv = document.getElementsByClassName("cat3")[k]
                    let dbv = document.getElementsByClassName("cat4")[k]
                    let ebv = document.getElementsByClassName("cat5")[k]
                    let fbv = document.getElementsByClassName("cat6")[k]
                    if (abv.innerHTML === ""){
                        abv.innerHTML = n1
                        bbv.innerHTML = n2
                        cbv.innerHTML = n3
                        dbv.innerHTML = n4
                        ebv.innerHTML = nn
                        fbv.innerHTML = np
                    }
                    else {
                        continue
                    }
                }
                first.innerHTML = ""
                second.innerHTML = ""
                third.innerHTML = ""
                fourth.innerHTML = ""
                correctPosition = 0
                correctNumber = 0
                createSquares()
            } 
            triedAmount++
        }
        console.log(correctNumber)
        
        
     }