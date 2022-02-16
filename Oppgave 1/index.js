var celciusInput = document.getElementById("celcius");
var fahrenheitInput = document.getElementById("fahrenheit");
var kelvinInput = document.getElementById("kelvin");

var inputs = document.getElementsByClassName("input");

for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];

    input.addEventListener("input", function (e) {
        var value = parseFloat(e.target.value);
        
        switch (e.target.name) {
            case "celcius":
                fahrenheitInput.value = (value * 1.8) + 32;
                kelvinInput.value = value + 273.15;
                break;
            case "fahrenheit":
                celciusInput.value = (value - 32) / 1.8;
                kelvinInput.value = ((value - 32) / 1.8) + 273.15;
                break;
            case "kelvin":
                celciusInput.value = value - 273.15;
                fahrenheitInput.value = ((value - 273.15) * 1.8) + 32;
                break;
        }
    });
};