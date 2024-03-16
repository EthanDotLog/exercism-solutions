/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Get the first card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the first card in the deck
 */
export function getFirstCard(deck) {
  const [one, ...rest] = deck;
  return one;
  throw new Error('Implement the getFirstCard function');
}

/**
 * Get the second card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the second card in the deck
 */
export function getSecondCard(deck) {
  const [one, two, ...rest] = deck;
  return two;
  throw new Error('Implement the getSecondCard function');
}

/**
 * Switch the position of the first two cards in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck with reordered cards
 */
export function swapTopTwoCards(deck) {
  const [one, two, ...rest] = deck;
  rest.unshift(two, one);
  const newDeck = rest;
  return newDeck;
  throw new Error('Implement the swapTopTwoCards function');
}

/**
 * Put the top card of the given deck into a separate discard pile
 *
 * @param {Card[]} deck
 *
 * @returns {[Card, Card[]]} the top card of the given
 * deck and a new deck containing all the other cards
 */
export function discardTopCard(deck) {
  const [discard, ...rest] = deck;
  return [discard, rest];
  throw new Error('Implement the discardTopCard function');
}

/** @type {Card[]} **/
const FACE_CARDS = ['jack', 'queen', 'king'];

/**
 * Insert face cards into the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck where the second,
 * third, and fourth cards are the face cards
 */
export function insertFaceCards(deck) {
  const [first, ...rest] = deck;
  let faceCards = ['jack', 'queen', 'king'];
  let newDeck1 = [];

  if (first === null) {
    newDeck1 = [...faceCards];
  } else {
    faceCards.unshift(first);
    if (deck.length > 1) {
      newDeck1 = [...faceCards, ...rest];
    } else {
      newDeck1 = [...faceCards];
    }
  } 
  
  return newDeck1;
  
  throw new Error('Implement the insertFaceCards function');
}
