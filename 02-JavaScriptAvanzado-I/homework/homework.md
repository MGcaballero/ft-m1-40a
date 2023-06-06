# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x);//10
   console.log(a);//8
   var f = function (a, b, c) {
      b = a;
      console.log(b);//8 por referencia
      b = c;
      var x = 5;
   };
   f(a, b, c);//llamado desde el contexto  de c
   console.log(b);//9
};
c(8, 9, 10);//llamado de contexto de c 
console.log(b);//10 pq esta en el contexto global
console.log(x);//1  pq esta en el contexto global
```

```javascript
console.log(bar);// undefined
console.log(baz);//error no esta definido 
foo();
function foo() {
   console.log('Hola!');
}
var bar = 1;
baz = 2;
```

```javascript
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco'; // pisa al primer var, no es un nuevo contexto, solo se hace cuando se llama a una funcion
}
console.log(instructor);//franco 
```

```javascript
var instructor = 'Tony';
console.log(instructor);//tony
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor);//franco
   }
})();
console.log(instructor);//tony
```

```javascript
var instructor = 'Tony';
let pm = 'Franco';//no tiene lugar en memoria  con let
if (true) {
   var instructor = 'The Flash';// piso el primer var
   let pm = 'Reverse Flash';//no tiene lugar en memoria con let, nace y mueren en scope
   console.log(instructor);// the flash
   console.log(pm);//reverse flash
}
console.log(instructor); the flash
console.log(pm);//franco, pq esta fuera del scope = {}
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2, js obliga a los strings a comportarse como num en un caso asi
"2" * "3" // 6
4 + 5 + "px"//'9px'
"$" + 4 + 5 //'$45'
"4" - 2 //2
"4px" - 2 //Nan(not a number)
7 / 0 // infinity, pq todo n divido por 0 tiende a infinito
{}[0] // undefined, estoy intentando entrar a la propiedad pero no existe pe el obj esta vacio
parseInt("09") //9
5 && 2 // 2, pq true y true = true, toma el segundo
2 && 5 // 5
5 || 0  //5, toma el true 
0 || 5 // 5, toma el true
[3]+[3]-[10] // 3+3, se concatena -10 = 23 
3>2>1 // hace un desgloce 3>2 = true > 1 = false, T=1
[] == ![] // no tienen el mismo espacio de memoria y como estoy negando = True.
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); //undef
   console.log(foo()); //2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}

getFood(false);//undef
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname()); // aurelio de rosa 

var test = obj.prop.getFullname; // function = return this.fullname

console.log(test()); // undef
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?
//1432, pq 3 y 2 se delegan por tener un tiempo para ejecutar
```javascript
function printing() {
   console.log(1);
   setTimeout(function () {
      console.log(2);
   }, 1000);
   setTimeout(function () {
      console.log(3);
   }, 0);
   console.log(4);
}

printing();
```

</br >

---

## **✅ FEEDBACK**

### Usa este [**formulario**](https://docs.google.com/forms/d/e/1FAIpQLSe1MybH_Y-xcp1RP0jKPLndLdJYg8cwyHkSb9MwSrEjoxyzWg/viewform) para reportar tus observaciones de mejora o errores. Tu feedback es muy importante para seguir mejorando el modelo educativo.
