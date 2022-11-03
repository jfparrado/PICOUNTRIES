/*     ::: ::: ::: ::: ::: MIN-STACK ::: ::: ::: ::: :::
  Ejercicio: Implementar un stack que tenga los siguientes métodos:
push(value) : añadir el elemento, value, al stack.
pop() : sacar un elemento del stack.           ¿Cuál???
min() : obtener el elemento con el valor mínimo.          O(1).
peek(): obtener el elemento que está el en top del Stack  O(1).

  Importante
TODOS los métodos mencionados anteriormente deben ser de O(1).
Para la resolución del ejercicio NO se puede utilizar ningún Array method
*/
class Stack {
  constructor() {
    this.top = null;
  }
}
class Node {
  // Your code here:
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/*
.push
{ 3°value { 2°value { 1°value } } }
save -- >  { 3°value { 2°value { 1°value } } }
new_node 4°value, next: save
{ 4°value { 3°value { 2°value { 1°value } } } }

.pop
{ 4°value { 3°value { 2°value { 1°value } } } }
this.top = this.top.next
*/
Stack.prototype.push_stack = function (value) {
  if (!this.top) {
    this.top = new Node(value);
  } else {
    // top { 2°value { 1°value } }
    const newTop = new Node(value); // 3°value, next:null
    newTop.next = this.top; // { 3°value { 2°value { 1°value } } }
    this.top = newTop;
  }
};
Stack.prototype.pop_stack = function () {
  const oldTop = this.top;
  this.top = oldTop && oldTop.next;
  return oldTop && oldTop.value;
};
Stack.prototype.peek = function () {
  return this.top && this.top.value;
};

const test_stack = new Stack();
test_stack.push_stack(32);
test_stack.push_stack(5);
test_stack.push_stack(7);
console.log(test_stack);
console.log(JSON.stringify(test_stack));
console.log(test_stack.peek());
test_stack.pop_stack();
console.log(test_stack);
console.log(test_stack.peek());
console.log("---------------------------------------------------");

class MinStack extends Stack {
  // Your code here:
  constructor() {
    super();
    this.minimum = new Stack();
  }
}
MinStack.prototype.push_doble = function (value) {
  if (!this.top) {
    this.top = new Node(value);
    this.minimum.push_stack(value);
  } else {
    // top { 2°value { 1°value } }
    const newTop = new Node(value); // 3°value, next:null
    newTop.next = this.top; // { 3°value { 2°value { 1°value } } }
    this.top = newTop;
    this.minimum.peek() > value
      ? this.minimum.push_stack(value)
      : this.minimum.push_stack(this.minimum.peek());
  }
};
MinStack.prototype.pop_doble = function () {
  const oldTop = this.top;
  this.top = oldTop && oldTop.next;
  this.minimum.pop_stack();
  return oldTop && oldTop.value;
};

MinStack.prototype.min = function () {
  return this.minimum.peek();
};

const test_min = new MinStack();
test_min.push_doble(3);
test_min.push_doble(1);
test_min.push_doble(43);
test_min.push_doble(-5);
test_min.pop_doble();
console.log(test_min);
console.log(test_min.min());

module.exports = {
  Node,
  MinStack,
};
/*
List {head{Node {value,next{Node{}}}}}
head.next.next.next
while .next = null
{{{{{{{{{{{}}}}}}}}}}}
.head { 1°value { 2°value { 3°value { 4°value { 5°value } } } } }
end_value
{ 1°value { 2°value { 3°value { 4°value } } } }

{ 3°value { 2°value { 1°value } } }
save -- >  { 3°value { 2°value { 1°value } } }
new_node 4°value, next: save
{ 4°value { 3°value { 2°value { 1°value } } } }






*/

/*
values input -->     3, 1, 87, -5, -22, 7


         Stack       MinStack

     
     
                              55
      |   87  |     |    1  |  
      |   1   |     |    1  |  
      |   3   |     |    3  |   {4{3{2{1}}}} 
      ---------     ---------
*/
