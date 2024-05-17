const questionArray = [" good time", "how are you", "what's that?", "i have a book", "have a nice day", "how can i help you?","whats your name?","i dont know","i dont undrestand"]
const meassage = document.querySelector(".message")
const buttonAsk = document.querySelector("button")
const inputQuestion = document.querySelector("input")

buttonAsk.addEventListener('click', function () {
    let result = Math.floor(Math.random() * questionArray.length)
    meassage.innerText = inputQuestion.value + " " + questionArray[result]
    inputQuestion = ""
})
