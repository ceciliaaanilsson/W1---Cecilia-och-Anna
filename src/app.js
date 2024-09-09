import fs from 'fs'

const fileToRead = fs.readFileSync('./src/app.js', 'utf-8')

const lines = fileToRead.split('\n')

function countLines(lines) {
  let count = 0

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim().length !== 0) {
      count++
    }
  }
  console.log('Number of lines ' + count)
}

countLines(lines)

function countInts(lines) {
  let count = 0

  for (let i = 0; i < lines.length; i++) {
    let numbers = lines[i].split('').filter(char => !isNaN(char) && char !== ' ' && char !== '\r')
    numbers.forEach(number => {
      count++
    });
  }
  console.log('Number of ints ' + count)
}

countInts(lines)

function numberOfForLoops(lines) {
  let count = 0

  const word = 'for ('
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(word)) {
      count++
    }
  }
  console.log('Number of forloops ' + count)
}

numberOfForLoops(lines)
