class Person {
    constructor(firstName="John", lastName="Doe", age=0, gender="Male"){
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.gender = gender
    }
    
    sayFullName(){
      return `${this.firstName} ${this.lastName}`
    }
    
    static greetExtraTerrestrials(raceName){
      return `Welcome to Planet Earth ${raceName}`
    }
  }

//  Best practice 
  class Person {
    constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
      Object.assign(this, { firstName, lastName, age, gender });
    }
    sayFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
    static greetExtraTerrestrials(raceName) {
      return `Welcome to Planet Earth ${raceName}`;
    }
  }