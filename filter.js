  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */

/*In other words, my resulting array should have only michael in it, since everyone else is under age 21.
To do this with the filter method is quite similar to using the map method.  
I just need to call the filter method on the  people array and pass it a callback function.  
Just the same as we did with the map method, I’ll  use a simple arrow function that takes the person  
as a parameter, and returns person.age >= 21. I’ll store this result in a variable called oldEnough.  */



// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];

let oldEnough = people.filter(person => person.age >= 21);
console.log(oldEnough);

/*A common requirement when working with datasets  in JavaScript is to find the objects in an array  
of objects that contain a specific property. For example, what if you wanted to pluck 
just paul out of the array of people above? */

let pluckOne = people.filter(p => p.name === "paul");
console.log(pluckOne);

/*
One thing to note here, is that the filter method always returns an array,
even if it’s an array of only one element.  If you log paul to the console, you’ll see it’s
actually an array containing the paul object. If I want to access the object itself, I could
simply append [0] to the end up here to get the  first and only element in the resulting array. */


// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];

const candidates = students.filter(student => {
const exprerienced = student.skills.filter(skill => skill.yrsExperience >= 5);
  return exprerienced.length > 0;
});
console.log(candidates);

//or less verbose

const hasFiveYears = skill => skill.yrsExperience >= 5;
const hasStrongSkills = student => student.skills.filter(hasFiveYears).length > 0;
const candidates= students.filter(hasStrongSkills);
  console.log(candidates);
