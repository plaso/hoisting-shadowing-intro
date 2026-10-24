// SCOPE

const appName = 'Mi playlist'

function showSong(title) {
  const prefix = '🎵'

  if (title.length > 10) {
    const short = title.slice(0, 10)
    console.log(`${prefix} ${short}`)
  }

  console.log(`${prefix} en ${appName}`)
}

showSong('Bohemian Rapsody')

// VAR Problems - 

if (true) {
  var total = 3
  let hidden = 'secreto'
}

console.log(total)
// console.log(hidden)

for (let index = 0; index < 3; index++) {
  // console.log(index)
}
// console.log(index)


// Const

const songs = ['cancion 1']
songs.pop()
songs.push('cancion 2')

console.log(songs)