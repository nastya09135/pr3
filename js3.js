'use strict';
//Домашнее задание
//3 практическая 
//1 задание 
function buttonClick1(){
    let elem = document.getElementById('elem');
    elem.innerHTML='<b>'+'Ку-ку! А я жирный!'+'</b>';
}

// Задача 2
function buttonClick2(){
    let elem2 = document.getElementById('elem2');
    elem2.innerHTML= '<h3>Абзац превратился в h3!</h3>'
}
//3 задание 
function buttonClick3(){
    let elem3 = document.getElementById('elem3')
    elem3.outerHTML = '<h3>' + elem3.innerHTML + '</h3>';
}

//4 задание 
function sum(){
    var num1 = +document.getElementById('num1').value;
    var num2 = +document.getElementById('num2').value;
    var result = document.getElementById('result');
    result.innerHTML = num1 + num2;
}


//5 задание 
function buttonClick5(){
    var elements = document.getElementsByClassName('a');
    for (var i = 0; i < elements.length; i++){
        elements[i].innerHTML = i;
    }
}

