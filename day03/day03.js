function powerOn(){
  ship.powerOn = true;
}

function countModules(){ 
  return availableModules.length;
}

function countEssential(){
  let counter = 0;
  for(let x = 0; x < countModules(); x++){
    if(availableModules[x].essential){
      counter++;
    }
  }
  return counter;
}