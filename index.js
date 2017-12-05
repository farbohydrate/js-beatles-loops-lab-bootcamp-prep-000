function theBeatlesPlay(musicians, instruments){
  var arr = [];
  for(let i = 0; i < musicians.length; i++){
    var str = `${musicians[i]} plays ${instruments[i]}`;
    arr.push(str);
  }
  return arr;
}

function johnLennonFacts(facts){
  let i = facts.length - 1;
  while(i >= 0){
    facts[i] += "!!!";
    i--;
  }
  return facts;
}