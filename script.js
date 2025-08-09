let cities = ['Faisalabad', 'Lahore', 'Karachi', 'IslamaBad', 'Toba Tek Singh', 'Gojra', 'Multan'];
// for(let i=0; i<cities.length; i++){
//     let num = i+1;
//     document.getElementById("originalText").innerHTML += num + ')' + cities[i];

// };
function clearInput() {
    document.getElementById("inputField").value = '';

};

function clearOutput() {
    document.getElementById("displayOutput").innerHTML = '';

};


function Simplealert() {
    let alertmessage = 'I Am A Simple Alert By Sahil';
    alert(alertmessage);
    document.getElementById("displayOutput").innerText = alertmessage;
};

function PrintMyName() {

    let name = document.getElementById("inputField").value;
    if (!name) {
        alert('Please Enter your Name');
        return;
    }
    else {
        document.getElementById("displayOutput").innerHTML = '<span style="color: green; font-size: 60px;"> ' + name + ' </span>';

    }
};

function PrintallCities() {

    document.getElementById("displayOutput").innerHTML = '';
    for (let i = 0; i < cities.length; i++) {
        let num = i + 1;
        document.getElementById("displayOutput").innerHTML += num + ')' + cities[i] + '<br>';
    }


};

function AddCity() {
    let city = document.getElementById("inputField").value;
    if (!city) {
        alert('please enter you city name.')
        return;
    }
    cities.push(city);
    document.getElementById("displayOutput").innerHTML = '<span style="color: green; font-size: 30px;"> ' + city + ' </span>' + "has been added in city";

};

function GenerateTheTable() {
    let number = document.getElementById("inputField").value;
    if (!number) {
        alert('please enter Number.')
        return;
    }
    let length = +prompt("Enter The Length Of Table");
    clearOutput();
    for (let index = 1; index <= length; index++) {
        document.getElementById("displayOutput").innerHTML += number + "*" + index + "=" + number * index + "<br>";

    }

};