var input;
var numberToUse =1;
var switchTheFunction =1;
var savedInput ={firstSave:"", secondSave:"", thirdSave:"", fourthSave:"", fithSave:""};
var form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    //console.log("Saving value", form.elements.value.value);
    input = form.elements.value.value;
    event.preventDefault();
    test();
});
function test() {
    console.log("The Input was, ", input);
    if(switchTheFunction == 2){
        multipleVarSeen();
    }
    else if(switchTheFunction == 1) {
        multipleVarsSeenSetup();
    }
}
//saves the last five data inputs
function multipleVarsSeenSetup(){
    if(numberToUse == 1){
        savedInput.firstSave = input;
    }
    else if(numberToUse == 2){
        savedInput.secondSave = input;
    }
    else if(numberToUse == 3){
        savedInput.thirdSave = input;
    }
    else if(numberToUse == 4){
        savedInput.fourthSave = input;
    }
    else if(numberToUse == 5){
        savedInput.fithSave = input;
        switchTheFunction += 1;
    }
        numberToUse +=1;
        update();
}

    function multipleVarSeen() {
        var switchVar;
        var switchVarTwo;
        switchVar = savedInput.firstSave;
        savedInput.firstSave = input;
        switchVarTwo = savedInput.secondSave;
        savedInput.secondSave = switchVar;
        switchVar = savedInput.thirdSave;
        savedInput.thirdSave = switchVarTwo;
        switchVarTwo = savedInput.fourthSave;
        savedInput.fourthSave = switchVar;
        savedInput.fithSave = switchVarTwo;
        update();
    }

    function update() {
        document.getElementById("inputData1").innerHTML = savedInput.firstSave;
        document.getElementById("inputData2").innerHTML = savedInput.secondSave;
        document.getElementById("inputData3").innerHTML = savedInput.thirdSave;
        document.getElementById("inputData4").innerHTML = savedInput.fourthSave;
        document.getElementById("inputData5").innerHTML = savedInput.fithSave;
    }
