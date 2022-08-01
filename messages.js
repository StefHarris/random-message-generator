console.log(`hello, ask for your fortune... at your own peril.`)

function returnFortune(string){
    if (string === `Tell me my fortune`){
        return `Your fortune is: ${randomFirstWord()} ${randomSecondWord()} ${randomThirdWord()}.`
    }else{
        return `Please ask for your fortune correctly.`
    }
}

function randomFirstWord(){
    let firstWord = [`You`, `Your friends`,`Your pets`, `Your plants`]
    let randomNumber = Math.floor(Math.random()*firstWord.length)
    return firstWord[randomNumber]
    }
function randomSecondWord(){
    let secondWord = [`are`, `will be`, `might be`]
    let randomNumber = Math.floor(Math.random()*secondWord.length)
    return secondWord[randomNumber]
}
function randomThirdWord(){
    let thirdWord = [`conspiring against you`, `rich`, `destitute`, `happy just as you are`]
    let randomNumber = Math.floor(Math.random()*thirdWord.length)
    return thirdWord[randomNumber]
}

console.log(returnFortune(`Tell me my fortune`))

//word two: are, will be, might be
//word three: conspiring against you, rich, destitute, happy just as you are
//assign a number to a word then do the math floor random thing, then another function if the number = that then it returns the word
//random word 1, random word 2, random word 3, each one uses the math random floor and generates a number between 1-3, one of the 
//parameters = the number, then if the number = 1, return whatever
//in the returnFunction put all the random word functions together 

//maybe come back to add html and css to make it look like an actual website where you put the request in the box...