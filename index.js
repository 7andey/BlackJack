let sum = 0
let hasBlackjack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEL = document.getElementById("card-el")
//or we can also get element using
//let sumEl = document.querySelector(".sum-el")
let cards = []

// let player = {
//     name: "Andey",
//     chips: 500
// } 
// let playerEl = document.getElementById("player-el")
// playerEl.textContent = player.name + "$" + player.chips

function getrandomCard() {
    let randomNumber = Math.floor(Math.random() * 10)
    randomNumber += 1
    return randomNumber
    
}

function startgame(){
   
        cards[0] = getrandomCard()
        cards[1] = getrandomCard()
        sum = cards[0] +cards[1]
        rendergame()
}


function newCard(){
    if(!hasBlackjack && isAlive){
        let card = getrandomCard()
        sum += card
        cards.push(card)
        rendergame()
    }
    else{
        messageEl.textContent = "YOU CANNOT DRAW A NEW CARD"
    }

}




function rendergame(){
    
    if (sum <=20){
        message = "do you want to draw a new card"
        isAlive = true
    }
    else if(sum === 21){
        message = "blackjack!!!"
        hasBlackjack = true
    }
    else{
        message = "you have lost in this round"
        isAlive = false
    }
    console.log(message)
    
    messageEl.textContent = message
    console.log(messageEl)
    //renderring all the cards
    cardsEL.textContent = "Cards: "
    
    for( i = 0; i < cards.length; i++){
        cardsEL.textContent += cards[i] + " "

    }

    //sum of all the cards
    sumEl.textContent = "Sum: " + sum
   
        
}




