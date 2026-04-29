let count  = 0

let counts = document.getElementById("counter")

let message = 0
let text = "Previous entries: "

function increment() {

    count += 1
    counts.textContent = count

}

let s = ""

function scale() {
    s = "Scale"

}

function arpeggio() {
    s += "Arpeggio"
}

function piece() {
    s += "Piece"
}
let pGraph = document.getElementById("entry")
function save() {

    let message = " " + s + " " + count + " min - "
    pGraph.textContent += message

    count = 0
    counts.textContent = 0
    s = ""

    //oR USE .textContent = pGraph.textContent

}

