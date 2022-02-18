document.getElementById('skrivUt').addEventListener('click', function () {
    var tallet1 = document.getElementById("tall1").value;
    var tallet2 = document.getElementById("tall2").value;
    var randomnumber = Math.round(Math.random()*10);

    if (tallet1 == tallet2) {
        return document.getElementById("result").innerHTML = tallet1 + " er lik " + tallet2;
    }

    if (tallet1 < tallet2) {
        return document.getElementById("result").innerHTML = tallet1 + " er mindre en " + tallet2;
    }

    if (tallet1 > tallet2) {
        return document.getElementById("result").innerHTML = tallet1 + " er større en " + tallet2;
    }

});

