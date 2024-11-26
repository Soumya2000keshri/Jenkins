//Gram to Kilogram

var submitgr = document.querySelector('.convertgram');

function transgram() {
    var gram = document.getElementById("gr").value;
    var newkilo = document.getElementById("newkg");
    var getkilo = (gram/1000).toFixed(3);
    newkilo.value = getkilo;
};
submitgr.addEventListener('click', transgram)

// Kilogram to Gram

var submitkilo = document.querySelector('.convertkg');

function transkilo() {
    var kilo = document.getElementById("kg").value;
    var newgram = document.getElementById("newgr");
    var getgram = (kilo * 1000).toFixed(3);
    newgram.value = getgram;
};
submitkilo.addEventListener('click', transkilo)

//Millilitre to Liter

var submitml = document.querySelector('.convertml');

function transml() {
    var ml = document.getElementById("ml").value;
    var newlitr = document.getElementById("newlitr");
    var getlitr = (ml/1000).toFixed(3);
    newlitr.value = getlitr;
};
submitml.addEventListener('click', transml);

//Liter to Milliliter

var submitliter = document.querySelector('.convertlitr');

function transliter() {
    var liter = document.getElementById("litr").value;
    var newml = document.getElementById("newml");
    var getml = (liter * 1000).toFixed(3);
    newml.value = getml;
};
submitliter.addEventListener('click', transliter);

//Mile to Kilometer

var submitMile = document.querySelector('.convertmi');

function transMile() {
    var mile = document.getElementById("mile").value;
    var newKm = document.getElementById("newkm");
    var getKm = (mile * 1.609344).toFixed(3);
    newKm.value = getKm;
};
submitMile.addEventListener('click', transMile);

//Kilometer to Mile

var submitKm = document.querySelector('.convertkm');

function transKm() {
    var km = document.getElementById("km").value;
    var newMile = document.getElementById("newmile");
    var getMile = (km * 0.62137119).toFixed(3);
    newMile.value = getMile;
};
submitKm.addEventListener('click', transKm);

//Kilometer to Meter

var submitkm = document.querySelector('.convertkilo');

function transkm() {
    var km = document.getElementById("kilo").value;
    var newmeter = document.getElementById("newmeter");
    var getmeter = (km * 1000).toFixed(3);
    newmeter.value = getmeter;
};
submitkm.addEventListener('click', transkm);

//Meter to Kilometer 

var submitmeter = document.querySelector('.convertm');

function transmeter() {
    var m = document.getElementById("meter").value;
    var newkm = document.getElementById("newkilo");
    var getkm = (m/1000).toFixed(3);
    newkm.value = getkm;
};
submitmeter.addEventListener('click', transmeter);


//Fahrenheit to Celsius

var submitFahr = document.querySelector('.convertfahr');

function transFahr() {
    var fahr = document.getElementById("fahr").value;
    var newCelsius = document.getElementById("newcels");
    var getCelsius = ((fahr - 32) * 5/9).toFixed(3);
    newCelsius.value = getCelsius;
};
submitFahr.addEventListener('click', transFahr);

//Celsius to Fahrenheit

var submitCels = document.querySelector('.convertcels');

function transCels() {
    var cels = document.getElementById("cels").value;
    var newFahr = document.getElementById("newfahr");
    var getFahr = (9 * (cels / 5) + 32).toFixed(3);
    newFahr.value = getFahr;
};
submitCels.addEventListener('click', transCels);




