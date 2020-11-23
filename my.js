
function getResult(num1, num2, operation){
    return operation(num1, num2);
}
function showResult(result){
    var resultFiled = document.getElementById("operationResult");
    resultFiled.innerText = result;
}

var operationElement = document.getElementById("operations");
operationElement.onchange = function(){
    // alert(this.value);
    switch(this.value){
        case "addition":
            var operation = function(num1, num2) {
                num1 = parseInt(num1, 10);
                num2 = parseInt(num2, 10);
                return num1 + num2;
            }
            break;
        case "subtraction":
            var operation = function(num1, num2) {
                num1 = parseInt(num1, 10);
                num2 = parseInt(num2, 10);
                return num1 - num2;
            }
           break;
        case "multiplication":
            var operation = function(num1, num2) {
                num1 = parseInt(num1, 10);
                num2 = parseInt(num2, 10);
               return num1 * num2;
            }
            break;
        case "division":
            var operation = function(num1, num2) {
                num1 = parseInt(num1, 10);
                num2 = parseInt(num2, 10);
                if(num2 == 0) throw "DevisionByZero";
                return num1 / num2;
            }
            break;
        default:
            throw "Unkown operation";
    
    }
    let val01 = document.getElementById("value01").value;
    let val02 = document.getElementById("value02").value;
    try {
        let result = getResult(val01, val02, operation);
        showResult(result);
    } catch (e) {
        alert(`Can't devision by zero (${e})`);
    }

}