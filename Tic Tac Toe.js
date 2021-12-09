
alert("you can pick bettwen X and O but plesa only pick one. if you pick X you will go first")

document.getElementById("1").value
console.log("x"==document.getElementById("1").value)

document.getElementById("2").value
console.log("x"==document.getElementById("2").value)

document.getElementById("3").value
console.log("x"==document.getElementById("3").value)

document.getElementById("4").value
console.log("x"==document.getElementById("4").value)

document.getElementById("5").value
console.log("x"==document.getElementById("5").value)

document.getElementById("6").value
console.log("x"==document.getElementById("6").value)

document.getElementById("7").value
console.log("x"==document.getElementById("7").value)

document.getElementById("8").value
console.log("x"==document.getElementById("8").value)

document.getElementById("9").value
console.log("x"==document.getElementById("9").value)

function turn(){
    if ((document.getElementById("1").value == document.getElementById("2").value) && (document.getElementById("2").value == document.getElementById("3").value) &&document.getElementById("2").value != "" ){alert(document.getElementById("1").value + "wins 1")
     return document.getElementById("2").value} 

     else if ((document.getElementById("4").value == document.getElementById("5").value) && (document.getElementById("5").value == document.getElementById("6").value) &&document.getElementById("6").value != ""){alert(document.getElementById("4").value + "wins 2")
    return document.getElementById("5").value}

    else if ((document.getElementById("7").value == document.getElementById("8").value) && (document.getElementById("8").value == document.getElementById("9").value) &&document.getElementById("9").value != "") {alert(document.getElementById("8").value + "wins 3")
return document.getElementById("7").value}
    





    if ((document.getElementById("1").value == document.getElementById("4").value) && (document.getElementById("4").value == document.  getElementById("7").value) &&document.getElementById("7").value != ""){alert(document.getElementById("7").value + "wins 4")
return document.getElementById("1").value}
     

    else if ((document.getElementById("2").value == document.getElementById("5").value) && (document.getElementById("5").value == document.getElementById("8").value) &&document.getElementById("2").value != ""){alert(document.getElementById("2").value + "wins 5")
return document.getElementById("8").value}
   

    else if ((document.getElementById("3").value == document.getElementById("6").value) && (document.getElementById("6").value == document.getElementById("9").value) &&document.getElementById("9").value != ""){alert(document.getElementById("6").value + "wins 6")
return document.getElementById("6").value} 



if ((document.getElementById("1").value == document.getElementById("5").value) && (document.getElementById("5").value == document.  getElementById("9").value) && document.getElementById("5").value != ""){alert(document.getElementById("5").value + "wins 7")
return document.getElementById("9").value}

else if ((document.getElementById("3").value == document.getElementById("5").value) && (document.getElementById("5").value == document.  getElementById("7").value) &&document.getElementById("7").value != ""){alert(document.getElementById("3").value + "wins 8")
return document.getElementById("3").value}
}