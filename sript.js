var week = document.getElementById("week")
var week40 = document.getElementById("week40")
var week41 = document.getElementById("week41")
var week42 = document.getElementById("week42")
var week43 = document.getElementById("week43")
var week44 = document.getElementById("week44")
var week45 = document.getElementById("week45")

var week40sty = document.querySelector(".sema1")
var week41sty = document.querySelector(".sema2")
var week42sty = document.querySelector(".sema3")
var week43sty = document.querySelector(".sema4")
var week44sty = document.querySelector(".sema5")


function weekchosen() {
    if (week.value == "2022-W40") {
        week40.style.display = "block"
        week41.style.display = "none"
        week42.style.display = "none"
        week43.style.display = "none"
        week44.style.display = "none"
        week45.style.display = "none"
        week40sty.style.backgroundColor = "#929f92"
        week41sty.style.backgroundColor = "transparent"
        week42sty.style.backgroundColor = "transparent"
        week43sty.style.backgroundColor = "transparent"
        week44sty.style.backgroundColor = "transparent"

    } else if (week.value == "2022-W41") {
        week40.style.display = "none"
        week41.style.display = "block"
        week42.style.display = "none"
        week43.style.display = "none"
        week44.style.display = "none"
        week45.style.display = "none"
        week40sty.style.backgroundColor = "transparent"
        week41sty.style.backgroundColor = "#929f92"
        week42sty.style.backgroundColor = "transparent"
        week43sty.style.backgroundColor = "transparent"
        week44sty.style.backgroundColor = "transparent"

    } else if (week.value == "2022-W42") {
        week40.style.display = "none"
        week41.style.display = "none"
        week42.style.display = "block"
        week43.style.display = "none"
        week44.style.display = "none"
        week45.style.display = "none"
        week40sty.style.backgroundColor = "transparent"
        week41sty.style.backgroundColor = "transparent"
        week42sty.style.backgroundColor = "#929f92"
        week43sty.style.backgroundColor = "transparent"
        week44sty.style.backgroundColor = "transparent"

    } else if (week.value == "2022-W43") {
        week40.style.display = "none"
        week41.style.display = "none"
        week42.style.display = "none"
        week43.style.display = "block"
        week44.style.display = "none"
        week45.style.display = "none"
        week40sty.style.backgroundColor = "transparent"
        week41sty.style.backgroundColor = "transparent"
        week42sty.style.backgroundColor = "transparent"
        week43sty.style.backgroundColor = "#929f92"
        week44sty.style.backgroundColor = "transparent"

    } else if (week.value == "2022-W44") {
        week40.style.display = "none"
        week41.style.display = "none"
        week42.style.display = "none"
        week43.style.display = "none"
        week44.style.display = "block"
        week45.style.display = "none"
        week40sty.style.backgroundColor = "transparent"
        week41sty.style.backgroundColor = "transparent"
        week42sty.style.backgroundColor = "transparent"
        week43sty.style.backgroundColor = "transparent"
        week44sty.style.backgroundColor = "#929f92"

    } else if (week.value == "2022-W45") {
        week40.style.display = "none"
        week41.style.display = "none"
        week42.style.display = "none"
        week43.style.display = "none"
        week44.style.display = "none"
        week45.style.display = "block"
    } else {
        alert("ERROR")
    }
}