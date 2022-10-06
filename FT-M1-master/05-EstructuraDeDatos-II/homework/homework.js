"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this.head = null;
  this.size = 0;
}

function Node(value) {
  this.value = value;
  this.next = null;
}
LinkedList.prototype.add = function (value) {
  var node = new Node(value)
  var current = this.head;
  if (!current) {
    this.head = node;
    this.size++;
    return node;
  }
  while (current.next) {
    current = current.next;
  }
  current.next = node;
  this.size++;
  return node;
}
LinkedList.prototype.remove = function () {
  var current = this.head;
  var last = this.head;
  if (current === null) {
    return null
  }
  if (!current.next) {
    this.head = null;
    this.size--;
    return current.value;
  }
  while (current.next) {
    last = current;
    current = current.next;
  }
  last.next = null

  this.size--;
  return current.value;
}

LinkedList.prototype.search = function (arg) {
  var current = this.head;
  if (typeof arg !== "function") {
    while ((current.value !== arg) && (current.next)) {
      current = current.next;
      console.log(current)
    }
    if (current.value === arg) {
      console.log(current)
      return current.value
    }
    else {
      return null
    }
  }
  else {

    while ((arg(current.value) !== true) && (current.next)) {
      current = current.next;
      console.log(current)
    }
    if (arg(current.value) === true) {
      return current.value
    }
    else {
      return null
    }
  }


}

/*
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  this.numBuckets = 35;
  this.id = null;
}

function Bucket() {
  this.clave = null;
  this.valor = null;
  this.next = null;
}
HashTable.prototype.hash = function (input) {
  let numBuckets = 35;
  let palabra = [...input]
  let acumulador = 0;
  let slothNumber = 0
  for (let letra of palabra) {
    acumulador += letra.charCodeAt();
  }
  slothNumber = Math.round(acumulador / numBuckets);
  return slothNumber;
}
HashTable.prototype.set = function (clave, valor) {
  let nhash = new HashTable;
  let current = this.id;
  current = nhash.hash(clave);
  if (typeof (clave) === "string") {
    while ((!current) && (clave !== nhash.clave)) {
      current = current.next;
    }
    nhash.clave = clave;
    nhash.valor = valor;
    nhash.id = current
    console.log(nhash)
  }
}
HashTable.prototype.get = function (key) {
  let current = this.id;
  console.log(current);
  while ((!current) && (key !== this.clave)) {
    current = current.next;
    console.log(current)
  }
  return
}
HashTable.prototype.hasKey = function () { }
let o = new HashTable;
o.set('key1', 'val1');
o.set('key2', 'val2');
o.set('this is a very different string', 44.4);
o.get('key1');


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
