let userscore = 0
let compscore = 0

let choices = document.querySelectorAll('.choice')
let userScore_span = document.querySelector('#user')
let computerScore_span = document.querySelector('#computer')
let message = document.querySelector('#message')


const compchoice = () =>{
    let choices = ['rock', 'paper', 'scissors']
    let random = Math.floor(Math.random() * 3)
    return choices[random]
}
const showwin = (userwin, userchoice, computerchoice) =>{
    if(userwin){
        userscore++
        userScore_span.innerText = userscore
        message.innerHTML = `You win! ${userchoice} beats ${computerchoice}`
        message.style.backgroundColor = 'green'
    }
    else{
        compscore++
        computerScore_span.innerText = compscore
        message.innerHTML = `You lose! ${computerchoice} beats ${userchoice}`
        message.style.backgroundColor = 'red'
    }
}

const playgame = (userchoice) =>{
    const computerchoice = compchoice()
    // console.log(userchoice, computerchoice)
    if(userchoice === computerchoice){
        message.innerText = "Match Draw! Try Again"
        message.style.backgroundColor = 'gray'
    }
    else{
        let userwin = true 
        if(userchoice === 'rock'){
            userwin = computerchoice === 'paper' ? false : true
        }
        else if(userchoice === 'paper'){
            userwin = computerchoice === 'scissors' ? false : true
        }
        else{
            userwin = computerchoice === 'rock' ? false : true
        }
        showwin(userwin, userchoice, computerchoice)
      
    }
}

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        let userchoice = choice.getAttribute('id')
        playgame(userchoice)
    });
});