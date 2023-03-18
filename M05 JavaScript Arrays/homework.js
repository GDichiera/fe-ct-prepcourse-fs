/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0]
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   // var cantidaddeelementos = array.length;
   // return array[cantidaddeelementos-1]
   return array[array.length-1]
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var aumento = array.map((num) => { return num+1 });
   return aumento
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var frase = palabras.join(' ')
   return frase;
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   if (array.includes(elemento)) {
      return true
   } else {
      return false
   }

}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   suma = 0              //creo por afuera una variable que guarde el valor
   for (var i = 0; i < arrayOfNums.length; i++) {
      suma = suma + arrayOfNums[i]      //y doy la instruccion de actualizar ese valor sumando el
   }                                   //valor correspondiente al elemento en el indice de cada vuelta del for
   return suma;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var suma = 0              //creo por afuera una variable que guarde el valor
   for (var i = 0; i < resultadosTest.length; i++) {
      suma = suma + resultadosTest[i]      
   }                                  
   return suma / resultadosTest.length;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
var NumeroMayor = arrayOfNums[0]    //defino que el numero mayor es el que esta en el indice 0
//                                    y ahi empiezo a comparar
arrayOfNums.forEach(num =>  {if (num>NumeroMayor) {   //para cada elemento, si es mayor a NumeroMayor
   NumeroMayor = num;                                 //reemplazo NumeroMayor por el valor del elemento
}
});
return NumeroMayor

   // return Math.max(arrayOfNums);       SE VE QUE NO APLICA PARA ARREGLOS
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if (arguments.length === 0) {
      return 0;
   } 
   if (arguments.length === 1) {
      return arguments[0];          //NO ENTIENDO POR QUE, OSEA ENTIENDO QUE ES UN ARRAY, PERO POR QUE 
   }                                //RETORNO EL QUE ESTA EN EL INDICE 0
   // YA LO ENTENDI!!! Es xq si se pasa un solo elemento directamente retorno ESE numero que va a ser el
   //primero y unico que paso.
   var multiplica = 1;
   // arguments.forEach( (num) => {
   //    multiplica = multiplica * num;             //NO ENTIENDO POR QUE FOR NO FUNCIONA
   // })
for (var i = 0; i < arguments.length; i++) {
   multiplica = multiplica * arguments[i];
}
   return multiplica;
}


function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var Cantidaddeelementos = 0
 array.forEach((num)=> {if (num > 18)
  Cantidaddeelementos = Cantidaddeelementos + 1
})
return Cantidaddeelementos
} 

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if ( numeroDeDia === 1 || numeroDeDia === 7)
   {return 'Es fin de semana';
} else return 'Es dia laboral';
}


function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var numStr = num.toString();
   return numStr[0] == 9;              //Va == porque estoy comparando tipos de datos diferentes
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
 parametro = array[0]
 contador = 0
 for (let i = 0; i < array.length; i++) {
   if (array[i] != parametro)
   contador = contador + 1;
}
if (contador === 0){
   return true
} else {
return false 
}
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   meses = []

   for (var i = 0; i < array.length; i++) {
     if (array[i] === 'Enero'){
     meses.push('Enero')
     }
     if (array[i] === 'Marzo') {
      meses.push('Marzo')
     }
     if (array[i] === 'Noviembre') {
      meses.push('Noviembre')
     }
   }
      if(meses.length>=3) {
         return meses
      }  else  {
         return "No se encontraron los meses pedidos"
      }
      
 }



function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   tabla = []
   for (let i = 0; i <+ 11; i++) {
     mul = i * 6;
      tabla.push(mul);
   
   }
   return tabla;

}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:

   mayores = []

   // for (let i = 0; i < array.length; i++) {
   //    if (array[i] > 100) {
   //       num = array[i]
   //       mayores.push(num)
   //    }

   //NO ENTIENDO POR QUE NO PASA ASI, EN EL VIDEO HICIERON UN FOR OF, EL FOR OF DICE QUE PARA CADA NUM (elemento)
   // DEL ARRAY SE HACE TAL COSA
   for ( let num of array) {    //aca no tengo array[i], tengo "num"
      if (num>100){
         mayores.push(num)
      }
   }
      return mayores
   // }
   


}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   // nuevovalor = []
   //      for (let i = 0; i < 11; i++) {
   //       suma = num[i] + 2
   //    if (suma === i) {
   //       hayquecortar = true
   //       break
   //    }
   //    nuevovalor.push(suma);  
   // }
   // if (hayquecortar = true) {
   //    return "Se interrumpió la ejecución"
   // } else {
   // return nuevovalor 
   // }
   nuevovalor = []
   i=1
 while (i<=10) {
   i++;
   num = num + 2
   if (num === i) {
     return "Se interrumpió la ejecución"
      //  break
 }
 nuevovalor.push(num);  
 }
 
return nuevovalor
}



function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
nuevoarray = []
i = 0
while (i < 10) {
   i++;
   if (i === 5)
   continue
   num = num + 2;
   nuevoarray.push(num);
}
return nuevoarray
}


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
