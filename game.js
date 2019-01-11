module.exports = {
  scoreFrame,
  score,
  ifLastSpare,
  ifLastStrike,
  strike, 
  spare
}

const scores = [[10, 0], [2, 3], [9, 1], [3, 4], [1, 4], 
        [3, 2], [4, 2], [1, 2], [3, 2], [10, 2, 10]]

let totalScores = 0;
let isStrike = []  
let isSpare = []
let notEqualTen = []

function calcScores() {

  for(let i = 0; i < 9; i++) {
    //console.log(scores[i][0], scores[i][1])  
    //console.log(scores[i][0] + scores[i][1])
    //spare(scores)
    //console.log(scores[9][0] + scores[9][1] !== 10)
    //if(scores[i][0] === 10 && scores[9][0] !== 10 || scores[9][0] + scores[9][1] !== 10) {
    if(scores[i][0] === 10) { 
      isStrike.push(scores[i + 1])
      //console.log(scores[i])   
    } else if (scores[i][0] + scores[i][1] === 10) {
      //console.log(scores[i])
      isSpare.push(scores[i])
      //console.log('not strike')
    }
    else if(scores[i][0] + scores[i][1] !== 10) {
      //console.log(scores[i])
      notEqualTen.push(scores[i])
      console.log(notEqualTen)
    }
  }
  //console.log(isSpare)
  return isStrike, isSpare
  //console.log(totalScores)
}

calcScores()
   

function scoreFrame(frame, nextFrame) {
  if(frame[0] + frame[1] === 10) {
    return 10
    //strike condition
  } else if(frame[0] === 10) {
    return 10
    //double strike condition
  } else if(frame[0][0] === 10 && frame[1][0] === 10){
    return 20
  }
  else {
    //not a spare or strike
    return frame[0] + frame[1]
  }
}

function spare() {
  console.log(isSpare[0][0] + isSpare[0][1])
  totalScores += isSpare[0][0] + isSpare[0][1]
  console.log(totalScores)
  return totalScores
}
spare()

function strike() {
  let total = 10

  // if(isStrike.length >= 2) {
  //   for(let i = 0; i < isStrike.length; i++) {
  //     if(isStrike[i][0] !== 10) {
  //       total += isStrike[i].reduce((a, b) => a+b)
  //     }
  //   }
  //   console.log('fdgff')
  // }
  
  totalScores += isStrike[0][0] + isStrike[0][1] + 10
    console.log(totalScores)
  return totalScores
}
strike()

function notEvalTen() {
  for(const i of notEqualTen) {
    totalScores += i.reduce((a, b) => a+b, 0)
  }
  console.log(totalScores)
  return totalScores
}
notEvalTen()





function score(frame) {
  let total = 0
  for (let i= 0; i < frame.length; i++) {
    total+= frame[i].reduce((a, b) => a+b, 0)
  }
  return total
}

function ifLastSpare(frame) {
  if (frame[0] + frame[1] === 10) {
    return 10 + frame[2]
  } 
}

function ifLastStrike(frame) {
  if (frame[0] === 10) {
    return 10 + frame[1] + frame[2]
  }
}