// Date and time function

function startTime() {
  let today = new Date();
  let weekDay = today.getDay();
  let monthDay = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("fechayhora").innerHTML = monthDay + "-" + month + "-" + year + "  --  " + h + ":" + m + ":" + s;
  let t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}


// Celsius-Farenheit-Kelvin converter

function convert(degree) {
  let x;
  if (degree == "C") {
    x = document.getElementById("c").value * (9 / 5) + 32;
    document.getElementById("f").value = x.toFixed(1);
    x = document.getElementById("c").value * 1 + 273.15; 
    document.getElementById("k").value = x.toFixed(1); 
  } else if (degree == "F") {
    x = (document.getElementById("f").value - 32) * 5 / 9;
    document.getElementById("c").value = x.toFixed(1);
    x = ((document.getElementById("f").value * 1) + 459.67) * 5 / 9;
    document.getElementById("k").value = x.toFixed(1);
  } else {
    x = document.getElementById("k").value * 1 - 273.15;
    document.getElementById("c").value = x.toFixed(1);
    x = document.getElementById("k").value * (9 / 5) - 459.67;
    document.getElementById("f").value = x.toFixed(1);
  }
}

// 

function calculateSinCon() {
  let valor, sin, cos;
  valor = document.getElementById("angulo").value;
  sin = Math.sin(valor * Math.PI / 180);
  cos = Math.cos(valor * Math.PI / 180);
  document.getElementById("seno").value = sin.toFixed(5);
  document.getElementById("coseno").value = cos.toFixed(5);

}

// Button miscellaneus functions

function showMyFunction() {
  let a = 10;
  let b = 20;
  let fecha = new Date();
  document.getElementById("date").innerHTML = fecha;
  document.getElementById("multiplication").innerHTML = a + " x " + b + " es igual a " + (a * b);
  document.getElementById("sin").innerHTML = 
"The sine value of " + b + " degrees is " + Math.sin(b * Math.PI / 180);
  }



  
