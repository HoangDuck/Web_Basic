var a = 1
var b = 2

function sum(a, b) {
    let result
    console.log('result', typeof(a))
    console.log('result', typeof(b))
    if (typeof(a) == "number") {
        if (typeof(b) == "number")
            result = a + b
    }
    console.log(typeof(result))
    return result
}
result = sum(a, b)
console.log(result)