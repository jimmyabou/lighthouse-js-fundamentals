const moves = [
  'east',
  'east',
  'east',
  'east',
  'west',
  'west',
  'south'
];
const totalMoves = moves.length;
var x=0;
var y=0;

function finalPosition(num){
  for(var i=0;i<totalMoves;i++){
    if(num[i] === "north"){
      y++;
    }
    else if (num[i] === "west"){
      x--;
    }
    else if (num[i] === "east"){
      x++;
    }
    else if (num[i] === "south"){
      y--;
    }
  }
  const finalDestination=[x,y];
  return finalDestination;
}
let result = finalPosition(moves);
console.log(result[0]);
 

