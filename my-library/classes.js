class my_class {
    severity = "Bad"
    constructor(description) {
    this.description = description;
  }
}

const my_instance = new my_class( "Train accident");

console.log(my_instance)