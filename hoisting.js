// Hoisting

console.log(sum(1, 2))

function sum(a, b) {
  return a + b
}

console.log(total)
var total = 20
console.log(total)

const count = 10
console.log(count)

// Shadowing - Hacer sombra/ensombrecer

let volume = 20

function mute() {
  let volume = 0
  console.log('dentro', volume)
}

mute()
console.log('volume', volume)

function setVolume(newVolume) {
  volume = newVolume
}

setVolume(8)
console.log(volume)



const title = 'Imagine'

function play(title) {
  console.log(title)
}

play('respect')
console.log(title)

// QUE DEVUELVE

// 1
let x = 1;
{ let x = 2; }
console.log(x);

// 2
var y = 1;
{ var y = 2; }
console.log(y);

// // 3
console.log(typeof hello);
function hello() { return 'hi' };

// 4
console.log(hi());
function hi() { return 'hi'; }

// 5
let n = 1;
function f() {
  console.log(n);
  let n = 2;
}
f();