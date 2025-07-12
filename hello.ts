function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
let msg = "hello world";

greet("Brendan",new Date());
