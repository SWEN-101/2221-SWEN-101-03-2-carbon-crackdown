


function select(index) {
    let comp = getComputedStyle(document.querySelector("#option" + index)).background
    if (comp.match(/(?<= rgba\()\d+, \d+, \d+/) == "50, 90, 158") {
        document.getElementById("option" + index).style.background = "var(--gra_horz_lgt-whit-drk-blue_sel)"
        document.getElementById("cast_button").style.background = "var(--gra_radi_drk-blue-lgt-whit)"
        document.getElementById("cast_button").setAttribute("onclick", "javascript:cast()")
    }
    else {
        document.getElementById("option" + index).style.background = "var(--gra_horz_lgt-whit-drk-blue)"
        document.getElementById("cast_button").style.background = "var(--gra_radi_drk-grey-lgt-grey)"
        document.getElementById("cast_button").setAttribute("onclick", "javascript:option_not_selected()")
    }
    for (i=0;i<=3;i++){
        if (i != index) {
            document.getElementById("option" + i).style.background = "var(--gra_horz_lgt-whit-drk-blue)"
        }
    }
}

function cast() {
    alert("cast vote. yay")
}

function option_not_selected() {
    alert("no option selected")
}