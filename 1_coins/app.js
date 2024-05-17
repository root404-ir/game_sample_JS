const coinArray = ["Heads", "Tails"]
const message = document.querySelector(".message")
const buttons = document.querySelectorAll("button")
let score = [0, 0]
for (let i = 0; i < buttons.length; i++) {
    console.log(buttons[i]);
    buttons[i].addEventListener('click', tossCoin)
}
function tossCoin(e) {
    let playerGuess = e.target.innerText
    let computerToss = Math.floor(Math.random() * 2)
    let computerGuess = coinArray[computerToss]
    message.innerHTML = " computer selected :" + computerGuess + "<br\>"
    let output
    if (playerGuess === computerGuess) {
        output = "player Win. "
        score[0]++
    }
    else {
        output = "computer Win. "
        score[1]++
    }
    message.innerHTML = output + "<br\>" + "player : " + score[0] + "<br\>" + "computer : " + score[1]
    if (score[0] === 20 || score[1] === 20) {
        alert("Finish")
        if (score[0] > score[1]) {
            window.alert("players win")
        }
        else {
            window.alert("computer win")
        }
        if (score[0] > score[1] || score[0] < score[1]) {
            if (confirm("closed the window?")) {
                window.close()
            } else {
                alert("continue >> ok")
                score[0] = null
                score[1] = null
            }
        }
    }
}
