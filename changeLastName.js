const persons = [
 {
  id: 4,
  firstname: "Ricardo",
  lastname: "Bernardes",
  gender: "male",
  married: 10,
 },
 {
  id: 8,
  firstname: "Pedro",
  lastname: "Jaquim",
  gender: "male",
  married: null,
 },
 {
  id: 10,
  firstname: "Maria",
  lastname: "Lurdes",
  gender: "female",
  married: 4,
 },
 {
  id: 12,
  firstname: "Joana",
  lastname: "Silva",
  gender: "female",
  married: null,
 },
];

function changeLastName(persons) {
 const marrieds = new Map();

 for (const person of persons) {
  if (person.married && person.gender === "female") {
   const couple = persons.find((item) => item.id === person.married);
   marrieds.set(person.firstname, {
    firstName: person.firstname,
    lastName: couple.lastname,
   });
  }
 }

 return Array.from(marrieds.values());
}

console.log(changeLastName(persons));
