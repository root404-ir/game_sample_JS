//find element
const dateInput = document.querySelector("input[name='endDate']")
const clock = document.querySelector(".clock")
let timeInterval
let timeStop = true
const saveValue = localStorage.getItem("countdown") || false
if (saveValue) {
    startClock(saveValue);
    let inputValue = new Date(saveValue);
    dateInput.valueAsDate = inputValue;
}
//change evnet of input date
dateInput.addEventListener("change", function (e) {
    //disable event use the prevntDefault method
    e.preventDefault()
    clearInterval(timeInterval)
    const temp = new Date(dateInput.value)
    localStorage.setItem("countdown", temp)
    startClock(temp)
    timeStop = true
})
let startClock = (d) => {
    let updateCounter = () => {
        let tl = (timeLeft(d))
        if (tl.total <= 0) {
            timeStop = false
        }
        for (let pro in tl) {
            let element = clock.querySelector("." + pro)
            if (element) {
                element.innerHTML = tl[pro]
            }
        }
    }
    updateCounter()
    if (timeStop) {
        timeInterval = setInterval(updateCounter, 1000)
    } else {
        clearInterval(timeInterval)
    }
}
let timeLeft = (d) => {
    const currentDate = new Date()
    //total
    let t = Date.parse(d) - Date.parse(currentDate)
    let seconds = Math.floor((t / 1000) % 60)
    let minutes = Math.floor(((t / 1000) / 60) % 60)
    let hours = Math.floor(t / (1000 * 60 * 60) % 24)
    let days = Math.floor(t / (1000 * 60 * 60 * 24))

    return {
        "total": t,
        "days": days,
        "hours": hours,
        "minutes": minutes,
        "seconds": seconds
    }
}