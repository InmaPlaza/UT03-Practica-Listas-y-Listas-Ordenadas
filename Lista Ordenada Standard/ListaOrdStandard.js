"use strict";

/* Funciones dependientes de la pagina */
var NUMBERS_LIST = create(); function cleanData(){
 	document.getElementById ("num").value = "" ;  
}

//Funcion que añade un numero a una lista
function addNumber(num){
	var error = document.getElementById ("error");
	var list = document.getElementById ("lista");
	error.innerHTML = "";  
 	try {
	 	add(NUMBERS_LIST,num);
	 	list.innerHTML = toString(NUMBERS_LIST);
 	} catch (err) {
 		error.innerHTML = err;
 	}	
}

//Funcion que borra un numero de la lista
function pollNumber (){
	var error = document.getElementById ("error");
	var list = document.getElementById ("lista");
	error.innerHTML = "";  
 	try {
	 	poll(NUMBERS_LIST);
	 	list.innerHTML = toString(NUMBERS_LIST);
 	} catch (err) {
 		error.innerHTML = err;
 	}		
}

/* Funciones independientes de la pagina */
var MAX_ELEM_LIST = 5; //Constante para almacenar el numero maximo de elementos

//Funcion que permite crear una lista
function create(){
    var list = [];
    return list;
} 

//Funcion que devuelve true o false en funcion de si la lista esta vacia
function isEmpty(list){
    return (list.length === 0);
} 

//Funcion que devuelve true o false en función de si la lista está llena
function isFull(list){
    return (list.length === MAX_ELEM_LIST);
} 

//Funcion que devuelve el número de elementos de la lista
function size(list){
    return list.length;
} 

//Funcion que añade un nuevo elemento al final de la lista y devuelve el tamaño de la lista una vez añadido
function add(list,elem){
    
}

//Funcion que devuelve el elemento de la lista de la posición indicada
function get(list,index){
    if(index > size(list) || index <= -1){
        throw "El indice esta fuera de los limites de la lista.";
    }
    else {
        return list[index];
    }
}

//Funcion que devuelve la lista en formato cadena. El delimitador de elementos será “-“
function toString(list){
    var str = "";
    if (!isEmpty(list)){
        var length = size(list);	
        for (var i = 0; i < length-1; i++){
            str = str + list[i] + " - ";
        } 		 		
        str = str + list[i]; 		
    } 	
    return str;
} 

//Funcion que devuelve la posición del elemento indicado,si el elemento no está en la lista devuelve -1
function indexOf(list,elem){
    var position = -1;
 	elem = parseInt(elem);
 	if (!isNaN(elem)) {
	 	if (!isEmpty(list)){
	 		position = list.indexOf(elem);  		 		
	 	} 	
 	} else{
 		throw "El elemento no es un numero.";
 	}
 	return position;
}

//Funcion que devuelve el máximo número de elementos que podemos tener en la lista
function capacity(list){
    return MAX_ELEM_LIST;
} 

//Funcion que devuelve vacía la lista
function clear(list){
    var elem = Number.NaN;
    if (!isEmpty(list)){
        list.splice(0, list.length);	 		 		
    } 	
} 

//Funcion que devuelve el primer elemento de la lista
function firstElement(list){
    var first;
    if (!isEmpty(list)){
        first = list[0]; 		
    } else {
        throw "La lista está vacia.";
    }
    return first;
} 

//Funcion que devuelve el ultimo elemento de la lista
function lastElement(list){
    var last;
    if (!isEmpty(list)){
        last = list[list.length-1]; 			
    } else {
        throw "La lista está vacia.";
    }
    return last;
} 

//Funcion que elimina el elemento de la posición indicada. Devuelve el elemento borrado
function remove(list,index){
    var num;
    if(index > size(list) || index <= -1){
        throw "El indice esta fuera de los limites de la lista.";
    } else {
        num = list.splice(index,1);
    }
    return num;
}

//Funcion que elimina el elemento indicado de la lista.
//Devuelve true si se ha podido borrar el elemento, false en caso contrario.
function removeElement(list,elem){
    elem = parseInt(elem);
    var comprobar = false;

    if (!isNaN(elem)) {
        var posicion = indexOf(list,elem);

        if(posicion != -1){
            list.splice(posicion,1);
            comprobar = true;
        }
    } else {
        throw "El elemento no es un numero.";
    }
    return comprobar;
}

function testlist(){

    var list = []; 	
    console.log ("Capacidad: " + capacity(list));
    console.log("Es vacía: " + isEmpty(list));
    console.log("Longitud: " + size(list));

    try {
        for (var i = 0; i < 4; i++){
            console.log("Nº de elementos: " + add(list,i*10));
        }
        addAt(list,40,3);
        console.log("Añado el elemento 40 en la posicion 3");
        add(list,i); //Esto genera una excepcion
    } catch (err) {
        console.log(err);
    }

    console.log ("La lista completa: " + toString(list));
    console.log("Recogo el elemento de la posicion 2: " + get(list,2));
    console.log("¿Esta el elemento 20 en la lista?: " + indexOf(list,20));
    console.log("¿Esta el elemento -20 en la lista?: " + lastIndexOf(list,-20));

    console.log ("El primer elemento de la lista: " + firstElement(list));
    console.log ("El ultimo elemento de la lista: " + lastElement(list));
	 	
    //clear(list);

    console.log("Busco el elemento 15: " + removeElement(list,15));
    console.log("Reemplazo el elemento " + set(list,60,2) + " por el 60. ");
    console.log("Lista completa: " + toString(list));

    try {
        var i = size(list) -1;
        while (true){
            console.log("Elemento borrado: "+ remove(list,i));
            console.log ("La lista: " + toString(list));
            i--;	 	 		 	
        }
    } catch (err) {
        console.log(err); //Cuando la lista esta vacia, la excepcion debe ser capturada
    }	 	
} 
window.onload = testlist;