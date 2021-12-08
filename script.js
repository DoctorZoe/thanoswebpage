//initially, the webpage will always be showing the profile.
function showProfile() {
  document.getElementById("profile").style = "display: inherit";
  document.getElementById("hobbies").style = "display: none";
  document.getElementById("javaScriptCS").style = "display: none";
}

function showHobbies() {
  document.getElementById("profile").style = "display: none";
  document.getElementById("hobbies").style = "display: inherit";
  document.getElementById("javaScriptCS").style = "display: none";
}

function showJava() {
  document.getElementById("profile").style = "display: none";
  document.getElementById("hobbies").style = "display: none";
  document.getElementById("javaScriptCS").style = "display: inherit";
}

//could have done one function for all rolls, but decided to go with separate ones.
function rollD4() {
  let input = document.getElementById("nD4").value;
  if (input <= 0) alert("Enter a number greater than zero.");
  else {
    let output = (Math.floor(Math.random() * (4)) + 1) * input;
    document.getElementById("rD4").value = output;
  }
}

function rollD6() {
  let input = document.getElementById("nD6").value;
  if (input <= 0) alert("Enter a number greater than zero.");
  else {
    let output = (Math.floor(Math.random() * (6)) + 1) * input;
    document.getElementById("rD6").value = output;
  }
}

function rollD8() {
  let input = document.getElementById("nD8").value;
  if (input <= 0) alert("Enter a number greater than zero.");
  else {
    let output = (Math.floor(Math.random() * (8)) + 1) * input;
    document.getElementById("rD8").value = output;
  }
}

function rollD10() {
  let input = document.getElementById("nD10").value;
  if (input <= 0) alert("Enter a number greater than zero.");
  else {
    let output = (Math.floor(Math.random() * (10)) + 1) * input;
    document.getElementById("rD10").value = output;
  }
}

function rollD12() {
  let input = document.getElementById("nD12").value;
  if (input <= 0) alert("Enter a number greater than zero.");
  else {
    let output = (Math.floor(Math.random() * (12)) + 1) * input;
    document.getElementById("rD12").value = output;
  }
}

function rollD20() {
  let input = document.getElementById("nD20").value;
  if (input <= 0) alert("Enter a number greater than zero.");
  else {
    let output = (Math.floor(Math.random() * (20)) + 1) * input;
    document.getElementById("rD20").value = output;
  }
}
