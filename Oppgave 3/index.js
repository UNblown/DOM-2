document.getElementById('btnn').addEventListener('click', function() {
  var myinput = document.getElementById("høy").value;
  
  var text = myinput.split("").reverse().join("");
  if (myinput == "") {
    return document.getElementById("result").innerHTML = "Skriv noe i Boksen";
  }

  if (myinput == text) {
    return document.getElementById("result").innerHTML = "Teksten er Palindrome: "  + text;
  }

  else {
    return document.getElementById("result").innerHTML = "Teksten er IKKE Palindrome: " + myinput;
  }
});


