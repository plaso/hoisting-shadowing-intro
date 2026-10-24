let title1 = 'cancion 1'
let title2 = title1

title2 = 'cancion 2'

title1 = title1.toUpperCase()
console.log(title1)
console.log(title2)

// Arrays y objetos (clonar)

const song1 = { title: 'Imagine', plays: 0, objeto2: { hi: 'hi' } }
const song2 = song1
const song3 = { ...song1 }

song2.plays++

console.log(song1)
console.log(song2)
console.log(song3)

console.log(song1 === song2)
console.log(song1 === song3)

const songs = ['cancion 1', 'cancion 2']
const songs2 = songs
const songs3 = [...songs]

songs.push('cancion 3')

console.log(songs)
console.log(songs2)
console.log(songs3)

const sortedSongs = [...songs].sort() // Array ordenado

// Pasar objetos a funciones

function addPlay(song) {
  song.plays++
}

function replace(song) {
  song = { title: 'Otra cancion', plays: 1000 }
}

const song = { title: 'Cancion 1', plays: 0 }

console.log(song)
addPlay(song)
console.log(song)

replace(song)
console.log(song)

const replays = 5

function addOne(num) {
  num++
}

console.log(replays)
addOne(replays)
console.log(replays)

// Metodos que arrays que modifican el array original

// Splice, push, pop, unshift, shift, sort, reverse

// Metodos que te devuelven un nuevo array

// Map, filter, slice, reduce