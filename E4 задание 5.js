class Electric{
  constructor(name, active){
    this.name = name;
    this.active = active || false;
  }
  switchedOn(){
    let active = this.active
    if (active === false){
      this.active = true;
      console.log('Switched on!')
    } else{
      console.log('Its on')
    }
  }
  switchedOff(){
    let active = this.active
    if (active === true){
      this.active = false;
      console.log('Switched off!')
    } else{
      console.log('Its off')
    }
  }
}

class Lamps extends Electric{
  constructor(light, energy, name, active){
    super(name);
    super(active);
    this.light = light;
    this.energy = energy;
  }
  lightsOn(){
    let active = this.active
    if (active === false){
      this.active = true;
      console.log('Light on!')
    } else{
      console.log('Its on')
    } 
  }
  lightsOff(){
    let active = this.active
    if (active === true){
      this.active = false;
      console.log('Light off!')
    } else{
      console.log('Its off')
    }
  }  
}
  
class PC extends Electric{
  constructor(color, energy, name, active){
    super(name);
    super(active);
    this.color = color;
    this.energy = energy;
  }
  compOn(){
    let active = this.active
    if (active === false){
      this.active = true;
      console.log('PC on!')
    } else{
      console.log('Its on')
    } 
  }
  compOff(){
    let active = this.active
    if (active === true){
      this.active = false;
      console.log('PC off!')
    } else{
      console.log('Its off')
    }
  }
}
  
const lamp = new Lamps('blue', 120, 'lamp', false);
const laptop = new PC('black', 220, 'HP', false);
  
lamp.lightsOn();
lamp.lightsOn();