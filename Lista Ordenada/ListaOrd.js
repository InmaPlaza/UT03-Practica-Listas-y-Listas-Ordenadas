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

 	for (var i = 0; i < MAX_ELEM_LIST; i++){
 		list[i] = Number.NaN;
 	}
 	return list;
} 

//Funcion que devuelve true o false depediendo si la lista esta vacia
function isEmpty(list){
    var isEmpty = false;
    
    //Si el valor que contiene list[0] no es un numero...
 	if (isNaN(list[0])){
 		isEmpty = true; //Devolvemos true
 	}
 	return isEmpty; //Devolvemos el valor de isEmpty
} 

//Funcion que devuelve true o false en función de si la lista está llena
function isFull(list){
    var isFull = false;
     
    //Si el ultimo elemento de la lista es un numero...
 	if (!isNaN(list[MAX_ELEM_LIST-1])){
 		isFull = true; //Devolvemos true
 	}
 	return isFull; ////Devolvemos el valor de isFull
} 

//Funcion que devuelve el número de elementos de la lista
function size(list){
    var length = 0;
    
    //Mientras la longitud sea menor que el numero de elementos de la lista 
    //y el elemento de la lista sea un numero
 	while (length < MAX_ELEM_LIST && !isNaN(list[length])){
 		length++; //Incrementamos la variable en uno
 	}
 	return length; //Devolvemos la longitud de la lista
} 

//Funcion que añade un nuevo elemento al final de la lista y devuelve el tamaño de la lista una vez añadido
function add(list,elem){
    elem = parseInt(elem);

    //Si el elemento no es un numero...
    if(isNaN(elem)){
        throw "El elemento no es un numero."; //Lanzamos la excepcion
    }

    //Si la lista no esta llena...
    if(!isFull(elem)){
        //Si la lista esta vacia...
        if(isEmpty(list)){
            list[0] = elem; //Añadimos el elemento en la posicion 0
        //Si el elemento ultimo de la lista es menor que el elemento que queremos añadir...
        } else if((list[size(list)-1]) < elem){
            list[size(list)] = elem; //Añadimos el elemento en la ultima posicion
        } else{
            var aux;
            var long = size(list);
            var boolean = false;
            for(var i = 0; i<= long; i++){
                aux = list[i]; //Recogemos el valor de cada elemento de la lista
                //Si el elemento de la lista es mayor que el nuevo elemento...
                if(aux > elem){
                    boolean = true; //Cambiamos el valor de boolean a true
                }
                //Si el valor de boolean es true...movemos cada elemento a la derecha
                if(boolean){
                    list[i] = elem;
                    elem = aux;
                }
            }
        }
    } else{
        throw "La lista está llena. No puedes poner el elemento sobre ella";
    }
    return size(list); //Devolvemos la longitud de la lista
} 

//Funcion que devuelve el elemento de la lista de la posición indicada
function get(list,index){
	//Si el indice es mayor que el tamaño de la lista o es menor o igual que -1...
    if(index > size(list) || index <= -1){
        throw "El indice esta fuera de los limites de la lista."; //Lanzamos una excepcion
    }
    else {
        return list[index]; //Devolvemos el elemento de la posicion indicada
    }
}

//Funcion que devuelve la lista en formato cadena. El delimitador de elementos será “-“
function toString(list){
	var str = "";
	 
	//Si la lista no esta vacia...
 	if (!isEmpty(list)){
 		var length = size(list); //Recogemos su tamaño en una variable
 		for (var  i= 0; i < length-1; i++){ //Recorremos la lista y vamos recogiendo los valores con el "-"
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
	 
	 //Si el elemento es un numero...
 	if (!isNaN(elem)) {
		//Si la lista no esta vacia...
	 	if (!isEmpty(list)){ 
	 		var length = size(list);	
			var i = 0;
			
			//Mientras i sea menor que el tamaño de la lista y position = -1
	 		while ((i < length) && (position === -1)){
				//Si lista de i es igual al elemento... 
	 			if (list[i] === elem) {
	 				position = i; //Metemos en position el valor de i
	 			}
	 			i++; //Incrementamos el valor de i en uno
	 		} 		 		
	 	} 	
 	} else{
 		throw "El elemento no es un numero.";
 	}
 	return position; //Devolvemos la posicion
} 

//Funcion que devuelve el máximo número de elementos que podemos tener en la lista
function capacity(list){
 	return MAX_ELEM_LIST;
} 

//Funcion que devuelve vacía la lista
function clear(list){
	elem = Number.NaN;
	 
	//Si la lista no está vacia...
 	if (!isEmpty(list)){
 		var length = size(list);	
 		for (var i  =0; i < length; i++){
 			list[i] = Number.NaN; //Asignamos un valor que no sea un numero, es decir, eliminamos los elementos
 		} 		 		 		
 	} 	
} 

//Funcion que devuelve el primer elemento de la lista
function firstElement(list){
	var first;
	 
	//Si la lista no esta vacia...
 	if (!isEmpty(list)){
 		first = list[0]; //Asignamos a la variable first, el valor del primer elemento de la lista	
 	} else {
 		throw "La lista está vacia."; //Lanzamos una excepcion
 	}
 	return first;
} 

//Funcion que devuelve el ultimo elemento de la lista
function lastElement(list){
	var last;
	 
	//Si la lista no esta vacia...
 	if (!isEmpty(list)){
 		last = list[size(list)-1]; //Asignamos a la variable last, el valor del ultimo elemento de la lista	
 	} else {
 		throw "La lista está vacia."; //Lanzamos una excepcion
 	}
 	return last;
} 

//Funcion que elimina el elemento de la posición indicada. Devuelve el elemento borrado
function remove(list,index){
	var num;
	var aux;

	//Si el indice es mayor que el tamaño de la lista o es menor o igual que -1...
    if(index > size(list) || index <= -1){
        throw "El indice esta fuera de los limites de la lista."; //Lanzamos una excepcion
    }
    else {
		num = list[index];
		var long = size(list);
		for(var i = index; i <= long; i++){
			aux = list[i+1]; //Recogemos el valor del elemento siguiente
			list[i] = aux; //Añadimos ese nuevo valor, asi vamos eliminando elementos
		}
	}
	return num; //Devolvemos el elemento borrado
}

//Funcion que elimina el elemento indicado de la lista.
//Devuelve true si se ha podido borrar el elemento, false en caso contrario.
function removeElement(list,elem){
	elem = parseInt(elem);
    var borrado = false;

    //Si el elemento es un numero...
    if (!isNaN(elem)) {
		var posicion = indexOf(list,elem); //Recogemos la posicion del elemento
		
		//Si la posicion es distinta a -1
		if(posicion != -1){
			var aux;
			var long = size(list);
			for(var i = posicion; i <= long; i++){
				aux = list[i+1]; //Recogemos el valor del elemento siguiente
				list[i] = aux; //Añadimos ese nuevo valor, asi vamos eliminando elementos
			}
			borrado = true; //Cambiamos el valor a true

		}
    } else {
        throw "El elemento no es un numero."; //Lanzamos una excepcion
    }
    return borrado; //Devolvemos el valor de borrado
}

function testlist(){
	//var list = create ();
    var list = []; 	
    console.log ("Capacidad: " + capacity(list));
    console.log("¿Esta vacia la lista?: " + isEmpty(list));
    console.log("¿Esta llena la lista?: " + isFull(list));
    console.log("Longitud: " + size(list));

    try {
        for (var i = 0; i < 4; i++){
            console.log("Nº de elementos: " + add(list,i*10));
        }
        add(list,i); //Esto genera una excepcion
    } catch (err) {
        console.log(err);
    }

    console.log ("La lista completa: " + toString(list));

    console.log("Recogo el elemento de la posicion 2: " + get(list,2));
    console.log("¿Esta el elemento 20 en la lista?: " + indexOf(list,20));

    console.log ("El primer elemento de la lista: " + firstElement(list));
    console.log ("El ultimo elemento de la lista: " + lastElement(list));
	 	
    //clear(list);

    console.log("Busco el elemento 15: " + removeElement(list,15));
    console.log("Lista completa: " + toString(list));

    try {
        var i = size(list) -1;
        while (true){
            console.log("Elemento borrado: "+ remove(list,i));
            console.log ("La lista completa: " + toString(list));
            i--;	 	 		 	
        }
    } catch (err) {
        console.log(err); //Cuando la lista esta vacia, la excepcion debe ser capturada
    } 	
} 
window.onload = testlist;