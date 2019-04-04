var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort(function(nameA, nameB) {
  if(nameA.name < nameB.name) {
    return -1;
  }
  if(nameA.name > nameB.name) {
    return 1;
  }
  if(nameA.name == nameB.name){
     return nameB.age - nameA.age
 }
})
console.log(students)

// students.sort(function (nameA, nameB) {
//  if (nameA.name < nameB.name) {
//    return -1;
//  }
//  if (nameA.name > nameB.name) {
//    return 1;
//  }

//  // names must be equal
//  if(nameA.name == nameB.name){
//      return nameB.age - nameA.age
//  })
