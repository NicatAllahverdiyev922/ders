const form = document.querySelector("form")
const list = document.querySelector(".list")
const inputClose = document.getElementById("forminputClose")
const sortBtn = document.querySelector(".sort img")


let arr = []
let currentId = 0
let sorted = true

form.onsubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    text = data.get("inputData")
    arr.push({
        id: ++currentId,
        inputText: text
    })
    listRead()
    inputText.value = ""
    listShow()
}

inputClose.onclick = () => {
    inputText.value = ""
}

sortBtn.onclick = () => {
    if (sorted) {
        arr.sort((a, b) => {
            return a.inputText.localeCompare(b.inputText)
        })
        listRead()
        sorted = false
    } else {
        arr.sort((a, b) => {
            return b.inputText.localeCompare(a.inputText)
        })
        listRead()
        sorted = true
    }

}

function deletItem(param) {
    arr = arr.filter(item => item.id !== param)
    listRead()
    listShow()
}

function listShow() {
    if (arr.length > 0) {
        list.style.display = "block"
    } else {
        list.style.display = "none"
    }
}

function listRead() {
    list.innerHTML = ""
    arr.forEach(item => {
        list.innerHTML += `<li>
        <span>${item.inputText}</span>
        <img src="./img/inputClose.svg" onclick="deletItem(${item.id})"/>
    </li>`
    })
}