"use strict";

/* Funciones dependientes de la pagina */
var NUMBERS_LIST = create(); function cleanData(){
 	document.getElementById ("num").value = "" ;  
}

//Metodo que añade un numero a una lista
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

//Metodo que borra un numero de la lista
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

//Metodo que permite crear una lista
function create(){
    var list = [];
    return list;
} 

//Metodo que devuelve true o false en funcion de si la lista esta vacia
function isEmpty(list){
    return (list.length === 0);
} 

//Metodo que devuelve true o false en función de si la lista está llena
function isFull(list){
    return (list.length === MAX_ELEM_LIST);
} 

//Metodo que devuelve el número de elementos de la lista
function size(list){
    return list.length;
} 

//Metodo que añade un nuevo elemento al final de la lista y devuelve el tamaño de la lista una vez añadido
function add(list,elem){
    elem = parseInt(elem); //Convertimos el elemento a numero

    //Si el elemento no es un numero, devolvemos una excepcion
    if (isNaN(elem)) {
        throw "El elemento no es un numero";
    }

    //Si la lista no esta llena, añade el elemento
    if (!isFull(list)){
        list.push(elem);
    } else { //Sino lanza una excepcion diciendo que esta llena
        throw "La lista está llena. No puedes poner el elemento sobre ella";
    }
    return size(list); //Devolvemos el tamaño de la lista
} 

//Metodo que añade un nuevo elemento en la posición especificada en la lista,
//y devuelve el tamaño de la lista una vez añadido
function addAt(list,elem,index){
    elem = parseInt(elem);
    if (isNaN(elem)) {
        throw "El elemento no es un numero";
    }
    if (!isFull(list)){
        list.splice(index,0,elem);
    } else {
        throw "La lista está llena. No puedes poner el elemento sobre ella";
    }
    return size(list);
}

//Metodo que devuelve el elemento de la lista de la posición indicada
function get(list,index){

}

//Metodo que devuelve la lista en formato cadena. El delimitador de elementos será “-“
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

//Metodo que devuelve la posición del elemento indicado,si el elemento no está en la lista devuelve -1
function indexOf(list,elem){

}

//Metodo que devuelve la posición del elemento indicado comenzando por el final. 
//Si el elemento no está en la lista devuelve -1
function lastIndexOf(list,elem){

}

//Metodo que devuelve el máximo número de elementos que podemos tener en la lista
function capacity(list){
    return MAX_ELEM_LIST;
} 

//Metodo que devuelve vacía la lista
function clear(list){
    var elem = Number.NaN;
    if (!isEmpty(list)){
        list.splice(0, list.length);	 		 		
    } 	
} 

//Metodo que devuelve el primer elemento de la lista
function firstElement(list){
    var first;
    if (!isEmpty(list)){
        first = list[0]; 		
    } else {
        throw "La lista está vacia.";
    }
    return first;
} 

//Metodo que devuelve el ultimo elemento de la lista
function lastElement(list){
    var last;
    if (!isEmpty(list)){
        last = list[list.length-1]; 			
    } else {
        throw "La lista está vacia.";
    }
    return last;
} 

//Metodo que elimina el elemento de la posición indicada. Devuelve el elemento borrado
function remove(list,index){
    list.splice(index,1);
    return size(list);
}

//Metodo que elimina el elemento indicado de la lista.
//Devuelve true si se ha podido borrar el elemento, false en caso contrario.
function removeElement(list,elem){

}

//Metodo que reemplaza el elemento de la lista indicado por el índice.
//Devuelve el elemento que estaba anteriormente en la lista.
function set(list,elem,index){

}

function testlist(){
    //var queue = create (); 	
    var list=[]; 	
    console.log ("Capacidad: " + capacity(list));
    console.log("Es vacía: " + isEmpty(list));
    console.log("Longitud: " + size(list));

    try {
        for (var i = 0; i < MAX_ELEM_LIST; i++){
            console.log("Nº de elementos: " + add(list,i*10));
        }
        add(list,i); //It will generate an exception.
    } catch (err) {
        console.log(err);
    }

    console.log ("La lista completa: " + toString(list));	 	
    console.log ("El primer elemento de la lista: " + firstElement(list));
    console.log ("El ultimo elemento de la lista: " + lastElement(list));	 	
    //clear(queue);

    try {
        while (true){
            console.log ("La lista: " + toString(list));	 	 		 	
        }
    } catch (err) {
        console.log(err); //When the queue is empty, an exception will be catched.
    }

    console.log ("La lista: " + toString(list));	 	
} 
window.onload = testlist;