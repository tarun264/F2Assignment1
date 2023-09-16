const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
 data.forEach(dev =>{
 if(dev.profession==="developer"){
 console.log(dev);
}
})
}


// 2. Add Data
function addData() {
   //Collect data from user through prompt
   const name = prompt("Enter the name");
   const age = parseInt(prompt("Enter the age"));
   const profession = prompt("Enter the profession");
   // Now we will check whether user provided valid input or not
   if(name && !isNaN(age) && profession){
     //Create a new data object object with the collected data
     const newData={name,age,profession};
     //Add the new data object to the data Array
     data.push(newData);
     //Log a message to confirm addition
     console.log("Data added",newData);
 
   }
   else{
     console.log("Invalid Input.Data not added.")
   }
}

// 3. Remove Admins
function removeAdmin() {
  
  for(let i=0;i<data.length;i++){
    if(data[i].profession==="admin"){
      data.splice(i,1);
    }
  }
  console.log("Admin Removed");
}

// 4. Concatenate Array
function concatenateArray() {
  const dummy = [
  {mobile:99988899,
    gender: "Male",
    addess: "Asasas"
  } ]
  const combinedArr=data.concat(dummy);
  console.log(combinedArr);
}

// 5. Average Age
function averageAge() {
  let sumOfAge=0;
  for(let i=0;i<data.length;i++){
    sumOfAge+=data[i].age;
  }
  let avgAge=sumOfAge/data.length;
  console.log("Average age",avgAge);
}

// 6. Age Check
function checkAgeAbove25() {
  const isAbove25 = data.some(person =>person.age>25);
  if(isAbove25){
    console.log("At least one person is above age of 25.");
  }
  else{
    console.log("No person is above the age of 25");
  }
  }
  if(count>1){
    console.log("At least one person is above age of 25.");
  }
  else{
    console.log("No person is above the age of 25");
  }


// 7. Unique Professions
function uniqueProfessions() {
  const uniqueProfessions ={}
  for(let i =0;i<data.length;i++){
const profession = data[i].profession;
uniqueProfessions[profession] = true;
  }
  const uniqueProfessionsArray=Object.keys(uniqueProfessions);
  console.log("Unique Profession",uniqueProfessionsArray);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a,b)=>a.age-b.age);
  console.log("Sorted Age in ascending order",data);
}

// 9. Update Profession
function updateJohnsProfession() {
  const updateProfession = prompt("Enter the profession");
  for(let i=0;i<data.length;i++){
    if(data[i].name==="Johns"){
      data[i].profession=updateProfession;
      break;
    }
  }
  console.log("Profile Updated");

}

// 10. Profession Count
function getTotalProfessions() {
  let developerCount=0;
  let adminCount=0;
  for(let i=0;i<data.length;i++){
    if(data[i].profession==="developer"){
      developerCount++;
    }
    else if(data[i].profession==="admin"){
      adminCount++;
    }
  }
  console.log("Developer Count", developerCount);
  console.log("Admin Count",adminCount);
}
