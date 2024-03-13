// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return .5;
      break;
    case 'Energizer': 
      return 1.5;
      break;
    case 'Green Garden': 
      return 1.5;
      break;
    case 'Tropical Island':
      return 3;
      break;
    case 'All or Nothing':
      return 5;
      break
    default:
      return 2.5;
  }

  throw new Error('Please implement the timeToMixJuice function');
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  const limeSizes = {
    small: 6,
    medium:  8,
    large: 10,
  }  
  let limesOnHand = limes
  let limesCut = 0;
  let limeWedges = 0;

  while (limeWedges < wedgesNeeded) {
    if (limesOnHand.length === 0) {
      break;
    }
    const lime = limesOnHand.shift();
    limeWedges += limeSizes[lime];
    limesCut++;
     if (limeWedges < wedgesNeeded) {
      continue;
    }
  }
  return limesCut
  throw new Error('Please implement the limesToCut function');
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let remainingTime = timeLeft;
  let remainingOrders = orders;
  let nextUp = "";

  do {
    
    if (remainingOrders.length === 0) {
      remainingOrders = []
      break;
    }  

    if (remainingTime >= timeToMixJuice(remainingOrders[0])) {
      nextUp = remainingOrders.shift()
      remainingTime -= timeToMixJuice(nextUp);
      continue
    } else if (remainingTime < timeToMixJuice(remainingOrders[0])) {
      nextUp = remainingOrders.shift()
      break
    }
    
        
  } while (remainingTime > 0) 

  return remainingOrders


  throw new Error('Please implement the remainingOrders function');
}
