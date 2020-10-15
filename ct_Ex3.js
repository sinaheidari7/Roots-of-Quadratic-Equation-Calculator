
function equation() {
 

  var a = parseInt(document.getElementById("number1").value);
  var b = parseInt(document.getElementById("number2").value);
  var c = parseInt(document.getElementById("number3").value);

  var d = b * b - 4 * a * c;

 
  if (d > 0) {
    rootOne = (-1 * b + Math.sqrt(d)) / (2 * a);
    r1 = rootOne.toFixed(2);

    rootTwo = (-1 * b - Math.sqrt(d)) / (2 * a);
    r2 = rootTwo.toFixed(2)
    document.getElementById("output").innerHTML = "one root: " + r1  + "<br>" + "another solution: " + r2;
  }
  
  else if (d == 0) {
    var root = (-1 * b) / (2 * a);
    r = root.toFixed(2)
    document.getElementById("output").innerHTML = "root: " + r;
  }

 
}
