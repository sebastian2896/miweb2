class proyecto{
    // ...

    regresarAlnivel1() {
        window.location.href = 'nivel1.html'; // Reemplaza con la ruta correcta
    }

    regresarAlnivel2() {
        window.location.href = 'nivel2.html';
    }

    regresarAlnivel3(){
        window.location.href ='nivel3.html'
    }
// Definimos el objeto 'ope' y la función 'verificarSecuencia'

    verificarSecuencia(num) {
        // La secuencia es 2, 4, 6, ..., por lo que el siguiente número debería ser 8
        let correcto = 8;

        // Comparamos el número seleccionado por el usuario con el número correcto
        if (num === correcto) {
            document.getElementById('resultadoSecuencia').innerHTML = "¡Correcto! 😊 sigue asi hijo";
        } else {
            document.getElementById('resultadoSecuencia').innerHTML = "😞 Intenta de nuevo no te desanimes!.";
        }
    }

    verificarPatron(num) {
        // El patrón en la secuencia es que cada número incrementa en 5
        let correcto = 5;
    
        // Comparamos el número seleccionado por el usuario con el patrón correcto
        if (num === correcto) {
            document.getElementById('resultadoSecuencia').innerHTML = "¡Correcto! 😊 El patrón es que cada número incrementa en 5.";
        } else {
            document.getElementById('resultadoSecuencia').innerHTML = "😞 Intenta de nuevo no te desanimes! El patrón no es que cada número incrementa en " + num + ".";
        }
    }
    
    verificarSecuencia2(num) {
        // La secuencia es 10,20,30 ..., por lo que el siguiente número debería ser 40
        let correcto = 40;

        // Comparamos el número seleccionado por el usuario con el número correcto
        if (num === correcto) {
            document.getElementById('resultadoSecuencia').innerHTML = "¡Correcto! 😊 sigue asi hijo";
        } else {
            document.getElementById('resultadoSecuencia').innerHTML = "😞 Intenta de nuevo no te desanimes!.";
        }
    }
    verificarPatron2(num) {
        // El patrón en la secuencia es que cada número incrementa en 5
        let correcto = 2;
    
        // Comparamos el número seleccionado por el usuario con el patrón correcto
        if (num === correcto) {
            document.getElementById('resultadoSecuencia').innerHTML = "¡Correcto! 😊 ,cada número se multiplica por 2 .";
        } else {
            document.getElementById('resultadoSecuencia').innerHTML = "😞 Intenta de nuevo no te desanimes! ";
        }
    }
    verificarMayor(num) {
        // El número mayor entre 8 y 5 es 8
        let mayor = 8;
    
        // Comparamos el número seleccionado por el usuario con el número mayor
        if (num === mayor) {
            document.getElementById('resultadoSecuencia').innerHTML = "¡Correcto! 😊 El número " + num + " es mayor que 5.";
        } else {
            document.getElementById('resultadoSecuencia').innerHTML = "😞 Intenta de nuevo no te desanimes! El número " + num + " no es mayor que 8.";
        }
    }
    verificarMayor2(nombre) {
        // María es mayor que Juan
        let mayor = 'María';
    
        // Comparamos el nombre seleccionado por el usuario con el nombre de la persona mayor
        if (nombre === mayor) {
            document.getElementById('resultadoSecuencia').innerHTML = "¡Correcto! 😊 " + mayor+ " es mayor ";
        } else {
            document.getElementById('resultadoSecuencia').innerHTML = "😞 Intenta de nuevo no te desanimes! " + mayor + " no es mayor";
        }
    }
    verificarMenor(nombre) {
        // Laura es más joven que Pedro
        let menor = 'Laura';
    
        // Comparamos el nombre seleccionado por el usuario con el nombre de la persona más joven
        if (nombre === menor) {
            document.getElementById('resultadoSecuencia').innerHTML = "¡Correcto! 😊 " + nombre + " es más joven que Pedro.";
        } else {
            document.getElementById('resultadoSecuencia').innerHTML = "😞 Intenta de nuevo no te desanimes! " + nombre + " no es más joven que Laura.";
        }
    }
    verificarObjeto(objeto) {
        // Si hace sol, debes llevar un sombrero
        let correcto = 'bloqueador solar';
    
        // Comparamos el objeto seleccionado por el usuario con el objeto correcto
        if (objeto === correcto) {
            document.getElementById('resultadoSecuencia').innerHTML = "¡Correcto! 😊 Si hace sol, debes llevar un " + objeto + ".";
        } else {
            document.getElementById('resultadoSecuencia').innerHTML = "😞 Intenta de nuevo no te desanimes! Si hace sol, no necesitas una " + objeto + ".";
        }
    }
    verificarSuperficie(objeto) {
        // La alfombra tiene más superficie que la mesa
        let mayorSuperficie = 'Alfombra';
    
        // Comparamos el objeto seleccionado por el usuario con el objeto de mayor superficie
        if (objeto === mayorSuperficie) {
            document.getElementById('resultadoSecuencia').innerHTML = "¡Correcto! 😊 la " + objeto + " tiene mas superficie en cambio la mesa tiene 1 metro por 1 metro  ";
        } else {
            document.getElementById('resultadoSecuencia').innerHTML = "😞 Intenta de nuevo no te desanimes! ";
        }
    }
    verificarMenor2(objeto) {
        // El balcón es menor que el jardín
        let menor = 'Balcón';
    
        // Comparamos el objeto seleccionado por el usuario con el objeto de menor superficie
        if (objeto === menor) {
            document.getElementById('resultadoSecuencia').innerHTML = "¡Correcto! 😊 Un " + objeto + " de 5 m² es menor que un jardín de 10 m².";
        } else {
            document.getElementById('resultadoSecuencia').innerHTML = "😞 Intenta de nuevo no te desanimes! Un " + objeto + " de 10 m² no es menor que un balcón de 5 m².";
        }
    }
    verificarCapacidad(objeto) {
        // La botella puede contener más líquido que el vaso
        let mayorCapacidad = 'Botella';
    
        // Comparamos el objeto seleccionado por el usuario con el objeto de mayor capacidad
        if (objeto === mayorCapacidad) {
            document.getElementById('resultadoSecuencia').innerHTML = "¡Correcto! 😊 Una " + objeto + " de 1 litro puede contener más líquido que un vaso de 250 ml.";
        } else {
            document.getElementById('resultadoSecuencia').innerHTML = "😞 Intenta de nuevo no te desanimes! Un " + objeto + " de 250 ml no puede contener más líquido que una botella de 1 litro.";
        }
    }



    //nivel2

    verificarPatronYRepeticiones(patron, repeticiones) {
        // El patrón en la secuencia es que cada número incrementa en 3
        let correctoPatron = 3;
        // El número 3 se repite 1 vez en la secuencia
        let correctoRepeticiones = 1;
    
        // Comparamos el patrón y las repeticiones seleccionadas por el usuario con las correctas
        if (patron === correctoPatron && repeticiones === correctoRepeticiones) {
            document.getElementById('resultadoSecuencia').innerHTML = "¡Correcto! 😊 El patrón en la secuencia es que cada número incrementa en " + patron + " y el número 3 se repite " + repeticiones + " vez en la secuencia.";
        } else {
            document.getElementById('resultadoSecuencia').innerHTML = "😞 Intenta de nuevo no te desanimes! El patrón en la secuencia no es que cada número incrementa en " + patron + " y el número 3 no se repite " + repeticiones + " veces en la secuencia.";
        }
    }
    calcularSuma() {
        // Obtenemos el número ingresado por el usuario
        let num = document.getElementById('numero').value;
    
        // Verificamos que el número sea un entero positivo
        if (num < 1 || !Number.isInteger(+num)) {
            document.getElementById('resultadoSuma').innerHTML = "😞 Intenta de nuevo no te desanimes! Por favor, ingresa un número entero positivo.";
            return;  // Salimos de la función
        }
    
        // Calculamos la suma de todos los números naturales hasta el número ingresado
        let suma = 0;
        let sumaTexto = "";
        for (let i = 1; i <= num; i++) {
            suma += i;
            sumaTexto += i < num ? i + " + " : i + " = ";
        }
    
        // Mostramos el resultado
        document.getElementById('resultadoSuma').innerHTML = "La suma de todos los números naturales hasta " + num + " es " + suma + "! Te explico el por qué: " + sumaTexto + suma + "😊";
    }
    
    calcularFactorial() {
        // Obtenemos el número ingresado por el usuario
        let num = document.getElementById('numero').value;
    
        // Verificamos que el número sea un entero positivo
        if (num < 1 || !Number.isInteger(+num)) {
            document.getElementById('resultadoFactorial').innerHTML = "😞 Intenta de nuevo no te desanimes! Por favor, ingresa un número entero positivo";
            return;
        }
    
        // Calculamos el factorial del número ingresado
        let factorial = 1;
        let factorialTexto = "";
        for (let i = 1; i <= num; i++) {
            factorial *= i;
            factorialTexto += i < num ? i + " * " : i + " = ";
        }
    
        // Mostramos el resultado
        document.getElementById('resultadoFactorial').innerHTML = "😊 El factorial de " + num + " es " + factorial + ". Te explico el por qué: " + factorialTexto + factorial + ".";
    }
    mostrarNumeros() {
        // Obtenemos los números ingresados por el usuario
        let num1 = document.getElementById('numero1').value;
        let num2 = document.getElementById('numero2').value;
    
        // Verificamos que los números sean enteros positivos
        if (num1 < 1 || !Number.isInteger(+num1) || num2 < 1 || !Number.isInteger(+num2)) {
            document.getElementById('resultadoNumeros').innerHTML = "😞 Intenta de nuevo no te desanimes! Por favor, ingresa un número entero positivo";
            return;
        }
    
        // Calculamos los números pares e impares en el rango
        let pares = "";
        let impares = "";
        for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
            if (i % 2 == 0) {
                pares += i + ", ";
            } else {
                impares += i + ", ";
            }
        }
    
        // Mostramos el resultado
        document.getElementById('resultadoNumeros').innerHTML = "Los números pares en el rango son: " + pares.slice(0, -2) + ".<br>Los números impares en el rango son: " + impares.slice(0, -2) + ".";
    }
    generarTabla() {
        // Obtenemos el número ingresado por el usuario y el tipo de tabla
        let num = document.getElementById('numero').value;
        let tipoTabla = document.getElementById('tipoTabla').value;
    
        // Verificamos que el número sea un entero positivo
        if (num < 1 || !Number.isInteger(+num)) {
            document.getElementById('resultadoTabla').innerHTML = "😞 Intenta de nuevo no te desanimes! Por favor, ingresa un número entero positivo";
            return;
        }
    
        // Generamos la tabla correspondiente
        let tabla = "";
        for (let i = 1; i <= 10; i++) {
            if (tipoTabla == "multiplicar") {
                tabla += num + " * " + i + " = " + (num * i) + "<br>";
            } else if (tipoTabla == "sumar") {
                tabla += num + " + " + i + " = " + (num + i) + "<br>";
            }
        }
    
        // Mostramos el resultado
        document.getElementById('resultadoTabla').innerHTML = tabla;
    }
    generarFibonacci() {
        // Obtenemos el número ingresado por el usuario
        let num = document.getElementById('numero').value;
    
        // Verificamos que el número sea un entero positivo
        if (num < 1 || !Number.isInteger(+num)) {
            document.getElementById('resultadoFibonacci').innerHTML = "😞 Intenta de nuevo no te desanimes! Por favor, ingresa un número entero positivo";
            return;
        }
    
        // Generamos la secuencia de Fibonacci
        let fibonacci = "";
        let a = 0;
        let b = 1;
        for (let i = 0; i < num; i++) {
            fibonacci += a + ", ";
            let temp = a;
            a = b;
            b = temp + b;
        }
    
        // Mostramos el resultado
        document.getElementById('resultadoFibonacci').innerHTML = "La secuencia de Fibonacci es: " + fibonacci.slice(0, -2) + ".";
    }
    verificarPrimo() {
        // Obtenemos el número ingresado por el usuario
        let num = document.getElementById('numero').value;
    
        // Verificamos que el número sea un entero positivo
        if (num < 1 || !Number.isInteger(+num)) {
            document.getElementById('resultadoPrimo').innerHTML = "😞 Intenta de nuevo no te desanimes! Por favor, ingresa un número entero positivo";
           
        }
    
        // Verificamos si el número es primo
        let esPrimo = true;
        for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
            // Si el número es divisible por cualquier número en el rango de 2 a la raíz cuadrada del número,
            // entonces no es un número primo
            if (num % i == 0) {
                esPrimo = false;
                break;
            }
        }
    
        // Mostramos el resultado
        if (esPrimo && num > 1) {
            document.getElementById('resultadoPrimo').innerHTML = "correcto! 😊 El número " + num + " es primo. Un número primo es un número natural mayor que 1 que tiene únicamente dos divisores positivos distintos: él mismo y 1.";
        } else {
            document.getElementById('resultadoPrimo').innerHTML = "incorrecto! 😞 El número " + num + " no es primo. Un número primo es un número natural mayor que 1 que tiene únicamente dos divisores positivos distintos: él mismo y 1. Si encontramos un número que puede dividir al número dado sin dejar residuo (es decir, el módulo es 0), entonces ese número no es primo.";
        }
    }
    verificarPerfecto() {
        // Obtenemos el número ingresado por el usuario
        let num = document.getElementById('numero').value;
    
        // Verificamos que el número sea un entero positivo
        if (num < 1 || !Number.isInteger(+num)) {
            document.getElementById('resultadoPerfecto').innerHTML = "Por favor, ingresa un número entero positivo.";
           
        }
    
        // Verificamos si el número es perfecto
        let suma = 0;
        for (let i = 1; i < num; i++) {
            if (num % i == 0) {
                suma += i;
            }
        }
    
        // Un número perfecto es un número natural que es igual a la suma de sus divisores propios positivos. 
        // Es decir, la suma de sus divisores positivos excluyendo el mismo número.
        // Mostramos el resultado
        if (suma == num) {
            document.getElementById('resultadoPerfecto').innerHTML = "correcto! 😊 El número " + num + " es perfecto. Un número perfecto es un número natural que es igual a la suma de sus divisores propios positivos. Es decir, la suma de sus divisores positivos excluyendo el mismo número.";
        } else {
            document.getElementById('resultadoPerfecto').innerHTML = "incorrecto! 😞 El número" + num + " no es perfecto. Un número perfecto es un número natural que es igual a la suma de sus divisores propios positivos. Es decir, la suma de sus divisores positivos excluyendo el mismo número.";
        }
    }
    
    //nivel 3
    realizarOperacion(operacion) {
        // Obtenemos los números ingresados por el usuario
        let num1 = document.getElementById('numero1').value;
        let num2 = document.getElementById('numero2').value;
    
        // Verificamos que los números sean válidos
        if (!num1 || !num2) {
            document.getElementById('resultadoCalculadora').innerHTML = "Por favor, ingresa dos números.";
            return;
        }
    
        // Realizamos la operación solicitada
        let resultado;
        switch (operacion) {
            case '+':
                resultado = parseFloat(num1) + parseFloat(num2);
                break;
            case '-':
                resultado = num1 - num2;
                break;
            case '*':
                resultado = num1 * num2;
                break;
            case '/':
                if (num2 == 0) {
                    document.getElementById('resultadoCalculadora').innerHTML = "No se puede dividir por cero.";
                    return;
                }
                resultado = num1 / num2;
                break;
        }
    
        // Mostramos el resultado
        document.getElementById('resultadoCalculadora').innerHTML = "El resultado de la operación es: " + resultado;
    }
    binarioAHexadecimal() {
        // Obtenemos el número ingresado por el usuario
        let num = document.getElementById('numero').value;
    
        // Verificamos que el número sea un binario válido
        if (!/^[01]+$/.test(num)) {
            document.getElementById('resultadoConversion').innerHTML = "Por favor, ingresa un número binario válido.";
            return;
        }
    
        // Convertimos el número binario a hexadecimal
        let hexadecimal = parseInt(num, 2).toString(16).toUpperCase();
    
        // Mostramos el resultado
        document.getElementById('resultadoConversion').innerHTML = "El número binario " + num + " en hexadecimal es: " + hexadecimal;
    }
    
    hexadecimalABinario() {
        // Obtenemos el número ingresado por el usuario
        let num = document.getElementById('numero').value;
    
        // Verificamos que el número sea un hexadecimal válido
        if (!/^[0-9A-Fa-f]+$/.test(num)) {
            document.getElementById('resultadoConversion').innerHTML = "Por favor, ingresa un número hexadecimal válido.";
           
        }
    
        // Convertimos el número hexadecimal a binario
        let binario = parseInt(num, 16).toString(2);
    
        // Mostramos el resultado
        document.getElementById('resultadoConversion').innerHTML = "El número hexadecimal " + num + " en binario es: " + binario;
    }
    binarioADecimal() {
        // Obtenemos el número ingresado por el usuario
        let num = document.getElementById('numero').value;
    
        // Verificamos que el número sea un binario válido
        if (!/^[01]+$/.test(num)) {
            document.getElementById('resultadoConversion').innerHTML = "Por favor, ingresa un número binario válido.";
            return;
        }
    
        // Convertimos el número binario a decimal
        let decimal = parseInt(num, 2);
    
        // Mostramos el resultado
        document.getElementById('resultadoConversion').innerHTML = "El número binario " + num + " en decimal es: " + decimal;
    }
    
    decimalABinario() {
        // Obtenemos el número ingresado por el usuario
        let num = document.getElementById('numero').value;
    
        // Verificamos que el número sea un decimal válido
        if (!Number.isInteger(+num) || num < 0) {
            document.getElementById('resultadoConversion').innerHTML = "Por favor, ingresa un número decimal válido.";
            return;
        }
    
        // Convertimos el número decimal a binario
        let binario = (+num).toString(2);
    
        // Mostramos el resultado
        document.getElementById('resultadoConversion').innerHTML = "El número decimal " + num + " en binario es: " + binario;
    }
    
    contarElementos() {
        // Obtenemos el texto ingresado por el usuario
        let texto = document.getElementById('texto').value;
    
        // Contamos los caracteres
        let caracteres = texto.length;
    
        // Contamos las vocales
        let vocales = 0;
        let vocalesList = 'aeiouáéíóúAEIOUÁÉÍÓÚ';
        for (let i = 0; i < texto.length; i++) {
            for (let j = 0; j < vocalesList.length; j++) {
                if (texto[i] === vocalesList[j]) {
                    vocales++;
                    break;
                }
            }
        }
    
        // Contamos los signos de puntuación
        let signos = 0;
        let signosList = '.,;:!?¿¡';
        for (let i = 0; i < texto.length; i++) {
            for (let j = 0; j < signosList.length; j++) {
                if (texto[i] === signosList[j]) {
                    signos++;
                    break;
                }
            }
        }
    
        // Contamos los espacios
        let espacios = 0;
        for (let i = 0; i < texto.length; i++) {
            if (texto[i] === ' ') {
                espacios++;
            }
        }
    
        // Contamos las palabras
        let palabras = 0;
        let enPalabra = false;
        for (let i = 0; i < texto.length; i++) {
            if (texto[i] === ' ' || texto[i] === '\n' || texto[i] === '\t') {
                enPalabra = false;
            } else if (!enPalabra) {
                enPalabra = true;
                palabras++;
            }
        }
    
        // Contamos los dígitos
        let digitos = 0;
        let digitosList = '0123456789';
        for (let i = 0; i < texto.length; i++) {
            for (let j = 0; j < digitosList.length; j++) {
                if (texto[i] === digitosList[j]) {
                    digitos++;
                    break;
                }
            }
        }
    
        // Mostramos el resultado
        document.getElementById('resultadoContador').innerHTML = "El texto tiene:<br>" +
            "- " + caracteres + " caracteres<br>" +
            "- " + vocales + " vocales<br>" +
            "- " + signos + " signos de puntuación<br>" +
            "- " + espacios + " espacios<br>" +
            "- " + palabras + " palabras<br>" +
            "- " + digitos + " dígitos";
    }
 
    
    invertirTexto() {
        // Obtenemos el texto ingresado por el usuario
        let texto = document.getElementById('texto').value;
    
        // Invertimos el texto
        let invertido = texto.split('').reverse().join('');
    
        // Mostramos el resultado
        document.getElementById('resultadoInvertido').innerHTML = "El texto invertido es: " + invertido;
    }
    compararFrases() {
        // Obtenemos las frases ingresadas por el usuario
        let frase1 = document.getElementById('frase1').value;
        let frase2 = document.getElementById('frase2').value;
    
        // Contamos las palabras en cada frase
        let palabrasFrase1 = frase1.split(' ').length;
        let palabrasFrase2 = frase2.split(' ').length;
    
        // Comparamos las frases
        let resultado;
        if (palabrasFrase1 > palabrasFrase2) {
            resultado = "La primera frase tiene más palabras.";
        } else if (palabrasFrase1 < palabrasFrase2) {
            resultado = "La segunda frase tiene más palabras.";
        } else {
            resultado = "Ambas frases tienen la misma cantidad de palabras.";
        }
    
        // Mostramos el resultado
        document.getElementById('resultadoComparacion').innerHTML = resultado;
    }
    
   
    obtenerNumerosPerfectos() {
        // Obtenemos el arreglo ingresado por el usuario
        let arreglo = document.getElementById('arreglo').value.split(',');
    
        let numerosPerfectos = [];
    
        for (let num of arreglo) {
            num = parseInt(num.trim());
            let suma = 0;
            for (let i = 1; i < num; i++) {
                if (num % i == 0) {
                    suma += i;
                }
            }
    
            if (suma == num) {
                numerosPerfectos.push(num);
            }
        }
    
        // Mostramos el resultado
        document.getElementById('resultadoPerfectos').innerHTML = "Los números perfectos en el arreglo son: " + numerosPerfectos.join(', ');
    }
    
    obtenerNumerosPrimos() {
        // Obtenemos el arreglo ingresado por el usuario
        let arreglo = document.getElementById('arreglo').value.split(',');
    
        let numerosPrimos = [];
        let contadorPrimos = 0;
    
        for (let i = 0; i < arreglo.length; i++) {
            // Eliminamos los espacios en blanco al principio y al final del número
            let num = parseInt(arreglo[i]);
            let esPrimo = true;
            for (let j = 2; j * j <= num; j++) {
                if (num % j == 0) {
                    esPrimo = false;
                    break;
                }
            }
    
            if (esPrimo && num > 1) {
                numerosPrimos[contadorPrimos] = num;
                contadorPrimos++;
            }
        }
    
        // Mostramos el resultado
        let resultado = "Los números primos en el arreglo son: ";
        for (let i = 0; i < contadorPrimos; i++) {
            resultado += numerosPrimos[i];
            if (i < contadorPrimos - 1) {
                resultado += ', ';
            }
        }
        document.getElementById('resultadoPrimos').innerHTML = resultado;
    }
    
    
    obtenerPromedioYModa() {
        // Obtenemos el arreglo ingresado por el usuario
        let arreglo = document.getElementById('arreglo').value.split(',');
        let frecuencias = {};
        let maxFrecuencia = 0;
        let moda;
        // Convertimos cada elemento del arreglo a un número
        for (let i = 0; i < arreglo.length; i++) {
            arreglo[i] = Number(arreglo[i]);
        }
    
        // Calculamos el promedio
        let suma = 0;
        for (let i = 0; i < arreglo.length; i++) {
            suma += arreglo[i];
        }
        let promedio = suma / arreglo.length;
    
        // Calculamos la moda
        for (let i = 0; i < arreglo.length; i++) {
            if (frecuencias[arreglo[i]]) {
                frecuencias[arreglo[i]]++;
            } else {
                frecuencias[arreglo[i]] = 1;
            }
            if (frecuencias[arreglo[i]] > maxFrecuencia) {
                maxFrecuencia = frecuencias[arreglo[i]];
                moda = arreglo[i];
            }
        }
    
        // Mostramos el resultado
        document.getElementById('resultadoNotas').innerHTML = "El promedio de las notas es: " + promedio + "<br>La moda de las notas es: " + moda;
    }
    
}
let ope = new proyecto()
