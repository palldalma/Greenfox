const students: any[] = [
  { name: 'Theodor', age: 3, candies: 2 },
  { name: 'Paul', age: 9.5, candies: 2 },
  { name: 'Mark', age: 12, candies: 5 },
  { name: 'Peter', age: 7, candies: 3 },
  { name: 'Olaf', age: 12, candies: 7 },
  { name: 'George', age: 10, candies: 1 },
];

// create a function that takes a list of students and logs: How many candies are owned by students altogether?

function candycounter(array: any[]): void {
  let candycount: number = 0;
  array.forEach((element) => (candycount += element.candies));

  console.log('Altogether the students have ' + candycount + ' candies.');
}

candycounter(students);

// create a function that takes a list of students and logs: The sum of the age of people who have less than 5 candies?

function healthy(array: any[]): void {
  let agecount: number = 0;

  array.forEach((element) => {
    if (element.candies < 5) {
      agecount += element.age;
    }
  });
  console.log('The sum of the age of people who have less than 5 candies is ' + agecount);
}

healthy(students);
