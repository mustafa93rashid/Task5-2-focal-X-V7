const firstNumber = document.querySelector(".first-number");
const from = document.querySelector(".from");
const to = document.querySelector(".to");
const calculateBtn = document.querySelector(".calculate");
const resultSpan = document.querySelector(".result");

function calculate() {
  let result = 0;
  
  if ((from.value == "kilometer") && (to.value == "Meter")) {
    result = Number(firstNumber.value) * 1000;
  } 
  else if ((from.value == "kilometer") && (to.value == "Centemeter")) {
    result = Number(firstNumber.value) * 100000;
  }
  else if ((from.value == "kilometer") && (to.value == "Milimeter")) {
    result = Number(firstNumber.value) * 1000000;
  }
  else if ((from.value == "kilometer") && (to.value == "kilometer")) {
    result = Number(firstNumber.value) * 1;
  }



  else if ((from.value == "Meter") && (to.value == "kilometer")) {
    result = Number(firstNumber.value) / 1000;
  }
  else if ((from.value == "Meter") && (to.value == "Meter")) {
    result = Number(firstNumber.value) * 1;
  }
  if ((from.value == "Meter") && (to.value == "Centemeter")) {
    result = Number(firstNumber.value) * 100;
  }
  if ((from.value == "Meter") && (to.value == "Milimeter")) {
    result = Number(firstNumber.value) * 1000;
  }

  
  else if ((from.value == "Centemeter") && (to.value == "kilometer")) {
    result = Number(firstNumber.value) / 100000;
  }
  else if ((from.value == "Centemeter") && (to.value == "Meter")) {
    result = Number(firstNumber.value) / 100;
  }
  if ((from.value == "Centemeter") && (to.value == "Centemeter")) {
    result = Number(firstNumber.value) * 1;
  }
  if ((from.value == "Centemeter") && (to.value == "Milimeter")) {
    result = Number(firstNumber.value) * 10;
  }


  else if ((from.value == "Milimeter") && (to.value == "kilometer")) {
    result = Number(firstNumber.value) / 1000000;
  }
  else if ((from.value == "Milimeter") && (to.value == "Meter")) {
    result = Number(firstNumber.value) / 1000;
  }
  if ((from.value == "Milimeter") && (to.value == "Centemeter")) {
    result = Number(firstNumber.value) / 10;
  }
  if ((from.value == "Milimeter") && (to.value == "Milimeter")) {
    result = Number(firstNumber.value) * 1;
  }

  resultSpan.innerHTML = result;

}

calculateBtn.addEventListener("click", calculate);
