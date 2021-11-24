var a = 1
var b = 2

function sum(a, b) {
    let result

    if (typeof(a) == Number && typeof(b) == Number) {
        result = a + b
    }
    return result
}
result = sum(a, b)