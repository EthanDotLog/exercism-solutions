/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new score board with an initial entry.
 *
 * @returns {Record<string, number>} new score board
 */
export function createScoreBoard() {
  const newBoard = {
  "The Best Ever": 1000000,
  }
  return newBoard
  throw new Error('Please implement the createScoreBoard function');
}

/**
 * Adds a player to a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} score
 * @returns {Record<string, number>} updated score board
 */
export function addPlayer(scoreBoard, player, score) {
  scoreBoard[player]= score;
  return scoreBoard
  throw new Error('Please implement the addPlayer function');
}

/**
 * Removes a player from a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @returns {Record<string, number>} updated score board
 */
export function removePlayer(scoreBoard, player) {
  if (scoreBoard.hasOwnProperty(player)) {
    delete scoreBoard[player]
  }
  return scoreBoard
  throw new Error('Please implement the removePlayer function');
}

/**
 * Increases a player's score by the given amount.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} points
 * @returns {Record<string, number>} updated score board
 */
export function updateScore(scoreBoard, player, points) {
    scoreBoard[player] += points;
  return scoreBoard
  throw new Error('Please implement the updateScore function');
}

/**
 * Applies 100 bonus points to all players on the board.
 *
 * @param {Record<string, number>} scoreBoard
 * @returns {Record<string, number>} updated score board
 */
export function applyMondayBonus(scoreBoard) {
  for (let player in scoreBoard) {
    scoreBoard[player] += 100;
  }
  return scoreBoard
  throw new Error('Please implement the applyMondayBonus function');
}

/**
 * Normalizes a score with the provided normalization function.
 *
 * @param {Params} params the parameters for performing the normalization
 * @returns {number} normalized score
 */
export function normalizeScore(params) {
  let oldScore = params.score
  let newScore = params.normalizeFunction(oldScore)
  return newScore
  throw new Error('Please implement the normalizeScore function');
}

