function addition(num1, num2) {
    return num1 + num2;
}
function subtraction(num1, num2) {
    return num1 - num2;
}
function multiplication(num1, num2) {
    return num1 * num2;
}
function division(num1, num2) {
    try {
        return num1 / num2;
    } catch (e) {
        console.log("DevisionByZero");
    }
}

function getResult(num1, num2, operation){
    return operation(num1, num2);
}
function showResult(result){
    var resultFiled = document.getElementById("operationResult");
    resultFiled.innerText = result;
}

var operationElement = document.getElementById("operations");
operationElement.onchange = function(){
    alert(this.value);
};