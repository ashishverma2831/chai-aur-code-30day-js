// Day 14 : Classes

// Task 1
// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     greet(){
//         return `Hello, my name is ${this.name}`;
//     }
// }
// const person = new Person('Alice', 25);
// console.log(person.greet());

// Task 2
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    static{
        console.log('Hello, my name is Alice');
    }
    static genericGreet(){
        return `Hello, my name is Alice`;
    }
    greet(){
        return `Hello, my name is ${this.name} and i am ${this.age} years old`;
    }
    updateAge(age){
        this.age = age;
    }
}
const person = new Person('Alice', 25);
console.log(person.greet());
person.updateAge(30)
console.log(person.greet());

// Task 3
class Student extends Person{
    static studentCount = 0;
    constructor(name,age,studentId){
        super(name,age);
        this.studentId = studentId;
        Student.studentCount++;
    }
    getStudentId(){
        return `My student ID is ${this.studentId}`;
    }
    greet(){
        return `Hello, my name is ${this.name}, i am ${this.age} years old and my student ID is ${this.studentId}`;
    }
}
const student = new Student('Bob', 20, '12345');
console.log(student.getStudentId());

// Task 4
// override greet method
console.log(student.greet());


// Task 5
console.log(Student.genericGreet());

// Task 6
console.log(Student.studentCount);
const student2 = new Student('Charlie', 22, '12346');
console.log(Student.studentCount);

// Task 7
class Person2 {
    constructor(firstname,secondname){
        this.firstname = firstname;
        this.secondname = secondname;
    }
    getFullName(){
        return `${this.firstname} ${this.secondname}`;
    }
    setFirstName(firstname){
        this.firstname = firstname;
    }
    setSecondName(secondname){
        this.secondname = secondname;
    }
}
const person2 = new Person2('Alice', 'Doe');
console.log(person2.getFullName());

// Task 8
person2.setFirstName('Bob');
person2.setSecondName('Smith');
console.log(person2.getFullName());

// Task 9
class Account {
    #balance = 0;
    constructor(initialBalance) {
        this.#balance = initialBalance;
    }
    deposit(amount) {
        this.#balance += amount;
        console.log(`Deposited: ${amount}, New Balance: ${this.#balance}`);
    }
    withdraw(amount) {
        if (amount > this.#balance) {
            console.log('Insufficient funds.');
        } else {
            this.#balance -= amount;
            console.log(`Withdrawn: ${amount}, New Balance: ${this.#balance}`);
        }
    }
    getBalance() {
        return this.#balance;
    }
}
const account = new Account(2000);
console.log(account.getBalance()); // Output: 0
account.deposit(1000); // Output: Deposited: 1000, New Balance: 1000
account.withdraw(500); // Output: Withdrawn: 500, New Balance: 500
console.log(account.getBalance()); // Output: 500

// Task 10
// already done in Task 9