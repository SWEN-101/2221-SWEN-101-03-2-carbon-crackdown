

function zoomin() {
    let comp = getComputedStyle(document.querySelector("#index_bg_image")).backgroundSize
    if (comp == "100%") {
        var value = 0
        var op = "+"
    }
    else {
        var value = parseInt(comp.match(/(?<=[\+-] )\d+/)[0])
        var op = comp.match(/[\+-]/)[0]
    }
    console.log(op, comp, value)
    if (op == "-"){value = 0-value}
    else {value = 0+value}
    var new_val = value + 200
    if (new_val >= 1600) {return}
    document.getElementById("index_bg_image").style.backgroundSize = "calc(100% " + op + " " + Math.abs(new_val) + "px)"
}

function zoomout() {
    let comp = getComputedStyle(document.querySelector("#index_bg_image")).backgroundSize
    if (comp == "100%") {
        var value = 0
        var op = "-"
    }
    else {
        var value = parseInt(comp.match(/(?<=[\+-] )\d+/)[0])
        var op = comp.match(/[\+-]/)[0]
    }
    console.log(op, comp, value)
    if (op == "-"){value = 0-value}
    else {value = 0+value}
    var new_val = value - 200
    if (new_val <= -100) {return}
    document.getElementById("index_bg_image").style.backgroundSize = "calc(100% " + op + " " + Math.abs(new_val) + "px)"
}