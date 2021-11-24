// var fullName = "HoangDuc"
// var age = 21
// alert(fullName)
// alert(age)
// setTimeout(function() {
//     alert('Hello')
// }, 5000)
function run(title) {
    var language = title.slice(4, 14)
    var rest = title.slice(16, title.length)
    alert(language)
    return `Language is ${language} and rest is ${rest}`;
}
alert("Hello")