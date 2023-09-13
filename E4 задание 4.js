function Electric(name, active){
  this.name = name
  this.active = active
}

function Lamps(name, light, energy, active){
    this.name = name,
    this.light = light,
    this.energy = energy,
    this.active = active
}

function PC(name, color, energy, active){
    this.name = name,
    this.color = color,
    this.energy = energy,
    this.active = active
}

Lamps.prototype = new Electric()

PC.prototype = new Electric()


Electric.prototype.switchedOn = function(){
  let active = this.active
  if (active === false){
    this.active = true;
    console.log('Switched on!')
  } else{
    console.log('Its on')
  }
}

Electric.prototype.switchedOff = function(){
  let active = this.active
  if (active === true){
    this.active = false;
    console.log('Switched off!')
  } else{
    console.log('Its off')
  }
}

Lamps.prototype.lightsOn = function(){
  let active = this.active
  if (active === false){
    this.active = true;
    console.log('Lights on!')
  } else{
    console.log('Its on')
  }
}

Lamps.prototype.lightsOff = function(){
  let active = this.active
  if (active === true){
    this.active = false;
    console.log('Lights off!')
  } else{
    console.log('Its off')
  }
}

PC.prototype.compOn = function(){
  let active = this.active
  if (active === false){
    this.active = true;
    console.log('PC on!')
  } else{
    console.log('Its on')
  }
}

PC.prototype.compOff = function(){
  let active = this.active
  if (active === true){
    this.active = false;
    console.log('PC off!')
  } else{
    console.log('Its off')
  }
}

const lamp = new Lamps('lamp', 'blue', 120, false);
const laptop = new PC('HP', 'black', 220, false);
  
lamp.switchedOn();
lamp.switchedOn();