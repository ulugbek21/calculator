var result = document.getElementById("result")

var operate = function (value) {
    result.value += value
    // result.value = result.value + value
}

var calculate = function (value) {
    result.value = eval(value)
}

var clear = function () {
    result.value = ""
}

document.addEventListener("keydown", function (value) {
    if (value.key == '1') {
        operate('1')
    } else if (value.key == '2') {
        operate('2')
    } else if (value.key == '+') {
        operate('+')
    } else if (value.key == '=') {
        calculate(result.value)
    }
})