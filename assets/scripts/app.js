const defaultResult = 0;
let currentResult = defaultResult;

//Gets input from input field 
function getUserNumebrInput() {
    return parseInt(usrInput.value);
    
}

//Generates and writes calculation log
function createAndWriteOutput(operator,resultBeforeCalc,calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult,calcDescription); //from vendor file
}


function add(){
    const enteredNumber = getUserNumebrInput();
    const initialResult = currentResult;
    // currentResult += enteredNumber;
    alert(++currentResult);
    createAndWriteOutput('+', initialResult,enteredNumber)
}

function subtract(){
    const enteredNumber = getUserNumebrInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('+', initialResult,enteredNumber)
}

function multiply() {
    const enteredNumber = getUserNumebrInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult,enteredNumber)
}

function divide() {
    const enteredNumber = getUserNumebrInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult,enteredNumber)
}




addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
