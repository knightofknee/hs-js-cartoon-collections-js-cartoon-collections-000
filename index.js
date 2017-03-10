function dwarfRollCall(dwarves) {
var output=""
var string1=1
  for (var i=0;i<dwarves.length;i++) {
    if (i>0) var string1=i+1
    var string2=dwarves[i]
    var output=output+string1+". "+string2+" "

  }
  return output
}

function summonCaptainPlanet(planeteerCalls){
  var output=[]
  for (var i=0;i<planeteerCalls.length;i++) {
    output[i]=planeteerCalls[i].uppercase+"!"
  }
  return output
}
//could instead have no result variable, return true in the if statement,
//and return false at the end
function longPlaneteerCalls(words) {
  var result=false
  for (var i=0;i<words.length;i++) {
    if (words[i].length>4) result=true
  }
  return result
}
//could have a while loop that quits after all items are checked,
//or if a cheese has been found with a found variable
function findTheCheese (foods) {
  var cheeses=["cheddar","gouda","camembert"]
  for (var i=0;i<foods.length;i++){
    for (var j=0;j<cheeses.length;j++) {
      if (cheeses[j]==foods[i]) return foods[i]
    }

  }
  return "no cheese!"
}
