module.exports = {
  scoreFrame,
  score,
  ifLastSpare,
  ifLastStrike,
  strike, 
  spare,
  notTen
}

const scores = [[10, 0], [2, 3], [9, 1], [3, 4], [1, 4], 
        [3, 2], [4, 2], [1, 2], [3, 3], [10, 2, 10]]

//let totalScores = 0;
// const isStrike = []  
// let isSpare = []
// let notEqualTen = []

const state = {
  totalScores: 0,
  isStrike: [],
  isSpare: [],
  notEqualTen: []
}

function calcScores() {

  for(let i = 0; i < 9; i++) {
    //if frame is Strike
    if(scores[i][0] === 10) { 
      state.isStrike.push(scores[i], scores[i + 1]) //Adds Strike frame + next frame to calculate
      //console.log(state.isStrike)

      //if frame is Spare
    } else if (scores[i][0] + scores[i][1] === 10) {
      state.isSpare.push(scores[i], scores[i + 1]) //Add Spare frame + next frame to calculate
      //console.log(state.isSpare)
    }
    //if frame is not Spare or Strike
    else if(scores[i][0] + scores[i][1] !== 10) {
      state.notEqualTen.push(scores[i])
      //console.log(state.notEqualTen)
    }
  }
  //console.log(isSpare)
  return state.isStrike
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
  state.totalScores += state.isSpare[0][0] + state.isSpare[0][1] + state.isSpare[1][0]
  //console.log(state.totalScores)
  //return state.totalScores
}
spare()

function strike() {
  for (const i of state.isStrike) {
    state.totalScores += i.reduce((a, b) => a+b, 0)
  }
  //console.log(state.totalScores)
  //return state.totalScores
}
strike()

function notTen() {
  for(const i of state.notEqualTen) {
    state.totalScores += i.reduce((a, b) => a + b, 0)
  }
  console.log(state.totalScores)
}
notTen()

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

console.log(state.totalScores)



//let total = 0

  // if(isStrike.length >= 2) {
  //   for(let i = 0; i < isStrike.length; i++) {
  //     if(isStrike[i][0] !== 10) {
  //       total += isStrike[i].reduce((a, b) => a+b)
  //     }
  //   }
  //   console.log('fdgff')
  // }