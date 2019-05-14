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

function setMessage(){
  radio.message = JSON.stringify(navigation);
}

setMessage();

function activateBeacon(){
  radio.beacon = true;
}

function setFrequency(){
  radio.frequency = (radio.range.low + radio.range.high)/2;
}

function initialize(){
  navigation.x = 0;
  navigation.y = 0;
  navigation.z = 0;
}

function calibrateX(){
  for (let x = 1; x <= 12; x++){
    let signal = checkSignal();
    if(signal){
      navigation.x = signal;
      break;
    }
  }
}

function calibrateY(){
  for (let y = 1; y <= 60; y++){
    let signal = checkSignal();
    if(signal){
      navigation.y = signal;
      break;
    }
  }
}

function calibrateZ(){
  for (let z = 1; z <= 60; z++){
    let signal = checkSignal();
    if(signal){
      navigation.z = signal;
      break;
    }
  }
}