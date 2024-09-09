import fs from 'fs'

const fileToRead = fs.readFileSync('./src/PlayingCard.js', 'utf-8')

const lines = fileToRead.split('\n')

function countLines (lines) {
  let count = 0

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim().length !== 0) {
      count++
    }
  }
  console.log(count)
}

countLines(lines)
