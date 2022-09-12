// class my_class {
//     severity = "Bad"
//     constructor(description) {
//     this.description = description;
//   }
// }

// const my_instance = new my_class( "Train accident");

// console.log(my_instance)


class Teacher {
    firstName;
    lastName;
    age;
    birthday;
    subjects;


    constructor(options) {
    this.firstName = options.firstName;
    this.lastName = options.lastName;
    this.age = options.age;
    this.birthday = options.birthday;
    
  }

  setSubject(subject) {
      this.subject = subject;
      console.log(subject)
  }
}

const new_teacher = new Teacher ({
    firstName: "Jacob",
    lastName: "Levi",
    age: "70",
    birthday: "10-5-1952",
})

console.log(new_teacher)
new_teacher.setSubject("Mathematics")

