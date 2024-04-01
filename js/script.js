// For Original Statement
let cities = [
  "Faisalabad",
  "Lahore",
  "Karachi",
  "Islamabad",
  "Burewala",
  "Shiekupura",
  " Kashmir",
];
// for(i=0; i < cities.length; i++){
//   let num = i+1;
//   document.getElementById("originalStat").innerHTML += num + ')' + cities[i] + '&'
// }

// Simple Alert
function simple() {
  let simpleAlert = "My Name Is Muhammad Abubakar";
  alert(simpleAlert);
  document.getElementById("output").innerHTML = simpleAlert;
}

// Print My Name
function printMyName() {
  let myName = document.getElementById("inputType").value;
  if (myName === "") {
    alert("Please Enter Your Name!");
    return;
  }
  document.getElementById("output").innerHTML =
    "Your Name Is" + " " + "=" + " " + myName;
}

// Print All Cities
function printAllCities() {
  document.getElementById("output").innerHTML = "";
  for (let i = 0; i < cities.length; i++) {
    let num = i + 1;
    document.getElementById("output").innerHTML +=
      num + ")" + cities[i] + "<br/>";
    document.getElementById("output").style.textAlign = "left";
  }
}

// Add Your City In List
function addYourCity() {
  let addCity = document.getElementById("inputType").value;
  if (addCity === "") {
    alert("Please Enter City Name");
    return;
  }
  cities.push(addCity);
  document.getElementById("output").innerHTML =
    addCity + " " + "is successfully add in list";
}

// Generate Table
function tableGenerate(){
  // documetn.getElementById("output").innerHTML = ""
let tableValue = document.getElementById("inputType").value
if(!tableValue){
  alert("Please Enter The Number Of Table")
}else{
  let tableLength = +prompt("Enter The Length Of Table")
  for(let i=1; i <= tableLength; i++){
    document.getElementById("output").innerHTML += ''+ tableValue +' * '+ i +' * '+tableValue * i+' <br/>'
  }
}
document.getElementById("inputType").value= ""
}

// Clear Output
function clearOutput() {
  document.getElementById("output").innerHTML = "";
}
// Input Output
function clearInput() {
  document.getElementById("inputType").value = "";
}
