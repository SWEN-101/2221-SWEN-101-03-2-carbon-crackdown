

function zoomin() {
    let comp = getComputedStyle(document.querySelector("#index_bg_image")).backgroundSize
    if (comp == "100%") {
        var value = 0
    }
    else {
        var value = parseInt(comp.match(/(?<=\+ )-?\d+/)[0])
    }
    if (value >= 1000) {return}
    var new_val = value + 100
    console.log(100, value, 100 + value, comp)
    document.getElementById("index_bg_image").style.backgroundSize = "calc(100% + " + new_val + "px)"
}

function zoomout() {
    let comp = getComputedStyle(document.querySelector("#index_bg_image")).backgroundSize
    if (comp == "100%") {
        var value = 0
    }
    else {
        var value = parseInt(comp.match(/(?<=\+ )-?\d+/)[0])
    }
    if (value <= -1000) {return}
    var new_val = value - 100
    console.log(100, value, 100 - value, comp)
    document.getElementById("index_bg_image").style.backgroundSize = "calc(100% + " + new_val + "px)"
}