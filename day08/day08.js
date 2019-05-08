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

function indexLifeSupport(){
  for(let x = 0; x < countModules(); x++){
    if(availableModules[x].name === "life-support"){
      return x;
    }
  }
}

function loadModule(index){
  let toLoadModule = availableModules[index];
  toLoadModule.enabled = true;
  ship.modules.push(toLoadModule);
}

loadModule(indexLifeSupport());

function findModuleIndex(name){
  for(let x = 0; x < countModules(); x++){
    if(availableModules[x].name === name){
      return x;
    }
  }
}

loadModule(findModuleIndex("propulsion"));

loadModule(findModuleIndex("navigation"));

function resetLARRY(){
  for (let x = 0; x < 10; x++){
    LARRY.quack();
  }
}

resetLARRY();

loadModule(findModuleIndex("communication"));