const game = require('../game') 

test('test setup working', function () {
  expect(true).toBeTruthy()
})

test('scores a gutterball frame', function () {
  //act
  const frame = [0, 0]
  //assert
  const expected = 0
  //arramge
  const actual = game.scoreFrame(frame)
  expect(actual).toBe(expected)
})

test('scores a normal frame', function () {
  const frame = [2, 3]
  const expected = 5
  const actual = game.scoreFrame(frame)
  expect(actual).toBe(expected)
})

test('scores a spare frame', function () {
  const frame = [6, 4]
  const expected = 10
  const actual = game.scoreFrame(frame)
  expect(actual).toBe(expected)
})

test('scores a single strike frame', function () {
  const frame = [10, 0]
  const expected = 10
  const actual = game.scoreFrame(frame)
  expect(actual).toBe(expected)
})

// test('scores a strike and grabs adds next array', function () {
//   const frame = [[10, 0], [2, 6], [3, 4]]
//   const expected = 18
//   const actual = game.strike(frame)
//   expect(actual).toBe(expected)
// })

test('scores a double strike frame', function () {
  const frame = [[10, 0], [10, 0]]
  const expected = 20
  const actual = game.scoreFrame(frame)
  expect(actual).toBe(expected)
})

// test('is spare', function () {
//   const frame = [[6, 4], [3, 2]]
//   const expected = 13
//   const actual = game.spare(frame)
//   expect(actual).toBe(expected)
// })

test('scores a game', function () {
  const frame = [[4, 3], [2, 3], [5, 2], [3, 4], [1, 4], [3, 2], [4, 2], [1, 2], [3, 2], [7, 1]]
  const expected = 58
  const actual = game.score(frame)
  expect(actual).toBe(expected)
})

test('scores a spare in the 10th frame', function () {
  const frame = [3, 7, 2]
  const expected = 12
  const actual = game.ifLastSpare(frame)
  expect(actual).toBe(expected)
  
})

test('scores a strike in the 10th frame', function () {
  const frame = [10, 10, 10]
  const expected = 30
  const actual = game.ifLastStrike(frame)
  expect(actual).toBe(expected)
})
