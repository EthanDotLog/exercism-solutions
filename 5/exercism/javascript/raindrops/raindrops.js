//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (num) => {
  let sound = ""
  
  if (num % 3 === 0) {
    sound += "Pling"
  } 
  if (num % 5 === 0) {
    sound += "Plang"
  }
  if (num % 7 === 0) {
    sound += "Plong"
  }
  if (num % 3 && num % 5 && num % 7 !== 0) {
    sound =  num.toString()
  }

  return sound
  throw new Error('Remove this statement and implement this function');
};
