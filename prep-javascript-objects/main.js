var person = {
  firstName: 'Linda',
  lastName: 'Lin',
  hobby: 'eat'
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: " + fullName + '.');

person.job = 'teacher';
console.log("The person's current job is: " + person.job + '.');

person.previousJob = 'tutor';
console.log("The person's previous job is: " + person.previousJob + '.');

console.log('The completed person object:', person);

var myCar = {
  make: 'Honda',
  model: 'Civiv',
  year: '2012'
};

console.log('Car information', myCar);

myCar['owner'] = fullName;

console.log('My name is ' + myCar['owner'] + ' and I drive a ' + myCar['year'] + ' ' + myCar['make'] + ' ' + myCar['model'] + '.');

myCar['color'] = 'white';

console.log('My full car info: ', myCar);
