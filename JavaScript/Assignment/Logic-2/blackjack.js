function blackjack(a, b){
  if(a>21){a=0}
  if(b>21){b=0}
  if(Math.abs(21-a) < Math.abs(21-b)){
    return a
  }
  return b
}

/*Logic-2 -- blackjack
Given 2 int values greater than 0, return whichever value is nearest to 21 without going over. Return 0 if they both go over.

Examples

blackjack(19, 21) → 21
blackjack(21, 19) → 21
blackjack(19, 22) → 19*/

let answer = blackjack(19,21);
console.log(answer);