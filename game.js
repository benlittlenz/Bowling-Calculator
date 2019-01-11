const BowlingGame = (() => {

  const state = {
    totalScores: 0,
    isStrike: [],
    isSpare: [],
    notEqualTen: [],
    scores: [
      [10, 0], [2, 3], [9, 1], [3, 4], [1, 4], 
      [3, 2], [4, 2], [1, 2], [3, 2], [10, 2, 10]
      ]
  }

  const init = _ => {
    render()
  }

  const render = _ => {
    calcScores()
    spare()
    strike()
    calcLastFrame()
    notEqualToTen()
  }

  const calcScores = _ => {
    const { scores } = state

    for(let i = 0; i < 9; i++) {
      //if frame is Strike
      if(scores[i][0] === 10) { 
        state.isStrike.push(scores[i], scores[i + 1]) //Adds Strike frame + next frame to calculate
  
        //if frame is Spare
      } else if (scores[i][0] + scores[i][1] === 10) {
        state.isSpare.push(scores[i], scores[i + 1]) //Add Spare frame + next frame to calculate
      }
      //if frame is not Spare or Strike
      else if(scores[i][0] + scores[i][1] !== 10) {
        state.notEqualTen.push(scores[i])
      }
    }
    //return state.isStrike
  }

  const spare = _ => {
    state.totalScores += state.isSpare[0][0] + state.isSpare[0][1] + state.isSpare[1][0]
    console.log(state.totalScores)

    //return state.totalScores
  }

  const strike = _ => {
    for (const i of state.isStrike) {
      state.totalScores += i.reduce((a, b) => a+b, 0)
    }
    console.log(state.totalScores)
  }

  const notEqualToTen = _ => {
    for(const i of state.notEqualTen) {
      state.totalScores += i.reduce((a, b) => a + b, 0)
    }
    console.log(state.totalScores)
  }

  const calcLastFrame = _ => {

  }
  return {
    init
  }

})()


BowlingGame.init()