let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

function save() {
    let countSTR = count + " - " 
    saveEl.textContent += countSTR
    countEl.textContent = 0
    count = 0
}