const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumebrInput() {
    return parseInt(usrInput.value);
    
}

function createAndWriteOutput(operator,resultBeforeCalc,calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult,calcDescription);
}


function add(){
    const enteredNumber = getUserNumebrInput();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput('+', initialResult,enteredNumber)
}

function subtract(){
    const enteredNumber = getUserNumebrInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput('+', initialResult,enteredNumber)
}

function multiply() {
    const enteredNumber = getUserNumebrInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput('*', initialResult,enteredNumber)
}

function divide() {
    const enteredNumber = getUserNumebrInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput('/', initialResult,enteredNumber)
}




addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
