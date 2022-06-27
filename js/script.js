var input=document.getElementById("input");
var result=document.getElementById("result")
var convType=document.getElementById("convType")
var convTypeValue;

input.addEventListener("keyup", myResult);
convType.addEventListener("change", myResult);

convTypeValue=convType.value;
console.log(convTypeValue);
function myResult(){
    convTypeValue=convType.value;
    if(convTypeValue==="kilo-pound"){

        result.value=Number(input.value)* 2.2046;
    }
    else {
        result.value=Number(input.value)* 0.4536;
    }
}








const inputNumbers = document.getElementById("number");
const maxOutput = document.querySelector(".max");
const minOutput = document.querySelector(".min");
const sumOutput = document.querySelector(".sum");
const avgOutput = document.querySelector(".avg");
const reverseOutput = document.querySelector(".reverse");

const inputChangeHandler = (event) => {
  event.preventDefault();

  const inputNumbersArray = event.target.value.split(",");

  const maxNum = inputNumbersArray.reduce((a, b) => {
    return Math.max(a, b);
  });

  const minNum = inputNumbersArray.reduce((a, b) => {
    return Math.min(a, b);
  });

  const sumNum = inputNumbersArray.reduce(
    (a, b) => parseInt(a) + parseInt(b),
    0
  );

  const avg =
    inputNumbersArray.reduce((a, b) => parseInt(a) + parseInt(b), 0) /
    inputNumbersArray.length;

  const reverseArray = inputNumbersArray.reverse();


  maxOutput.textContent = maxNum;
  minOutput.textContent = minNum;
  sumOutput.textContent = sumNum;
  avgOutput.textContent = avg;
  reverseOutput.textContent = reverseArray;
};



inputNumbers.addEventListener("change", inputChangeHandler);
inputNumbers.addEventListener("keyup", inputChangeHandler);






// magicbox


const textArea = document.getElementById("inputbox");
const clearBtn = document.querySelector(".clear");
const capitalizeBtn = document.querySelector(".capitalize");
const sortBtn = document.querySelector(".sort");
const reverseBtn = document.querySelector(".reve");
const stripBlankBtn = document.querySelector(".strip_blank");
const addNumbersBtn = document.querySelector(".add_numbers");
const shuffleBtn = document.querySelector(".shuffle");

const clearBtnHandler = () => {
  textArea.value = "";
};

const capitalizeBtnHandler = () => {
  if(textArea.value === textArea.value.toUpperCase()){
    textArea.value = textArea.value.toLowerCase();
  }
  else if(textArea.value === textArea.value.toLowerCase()){
    textArea.value = textArea.value.toUpperCase();
};
}
const sortBtnHandler = () => {
  const textAreaContent = textArea.value.trim();
  textArea.value = textAreaContent.split("\n").sort().join("\n");
};

const reverseBtnHandler = () => {
  const textLines = textArea.value.trim().split("\n");
  let reversedlines = "";
  textLines.forEach((textLine) => {
    reversedlines += textLine.split("").reverse().join("") + "\n";
  });
  textArea.value = reversedlines;
};

const stripBlankBtnHandler = () => {
  const textLines = textArea.value.split("\n");
  let strippedLines = "";
  console.log(textLines);
  textLines.forEach((textLine) => {
    if (textLine === "") {
      return;
    }

    strippedLines += textLine.trim() + "\n";
  });

  textArea.value = strippedLines;
};

const addNumbersBtnHandler = () => {
  const textLines = textArea.value.trim().split("\n");
  let numberAddedLines = "";

  textLines.forEach((textLine, index) => {
    numberAddedLines += `${index + 1})` + textLine + "\n";
  });

  textArea.value = numberAddedLines;
};

const shuffleBtnHandler = () => {
  const textLines = textArea.value.trim().split("\n");
  textArea.value = textLines.sort(() => Math.random() - 0.5).join("\n");
};

clearBtn.addEventListener("click", clearBtnHandler);
capitalizeBtn.addEventListener("click", capitalizeBtnHandler);
sortBtn.addEventListener("click", sortBtnHandler);
reverseBtn.addEventListener("click", reverseBtnHandler);
stripBlankBtn.addEventListener("click", stripBlankBtnHandler);
addNumbersBtn.addEventListener("click", addNumbersBtnHandler);
shuffleBtn.addEventListener("click", shuffleBtnHandler);
