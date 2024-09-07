// PLAY.JS

let myName = "Sam"; 
let hasJob = false;
let year = 3;
let age = 20;


const namesThatCannotChange = "Max"; 

if( hasJob){ 
    console.log("I have a job.");
}
else{ 
    console.log("I dont have a job.");
}



switch (year) {
    case 1:
      console.log("You are first year.");
      break;
    case 2:
      console.log("You are 2nd year.");
      break;
    case 3:
      console.log("You are 3rd year.");
      break;
    case 4:
      console.log("You are 4th year.");
      break;
    default:
      console.log("You are graduated.");
  }

 
    if (age >= 18) {
      console.log("You are of legal age.");
    } else {
      console.log("You are not of legal age.");
    }
  
  


console.log(myName);
console.log(year);
console.log(hasJob);
console.log(namesThatCannotChange);
console.log(`My name is ${myName} and I am in ${year} year of college.`);


let myfavFoods = ["Spaghetti", "Chicken"]; 

console.log("My favorite foods:");
console.log(myfavFoods);  

for (let food of myfavFoods) {
  console.log( food);  
}

myfavFoods.push("Adobo");  

console.log("\nNow my favorite foods are:");
console.log(myfavFoods);  

myfavFoods = myfavFoods.map((food) => {
  return food + "  is delicious!";  
});

console.log("\nHeres how much I like each food:");
console.log(myfavFoods);  



let person = { 
    name: "Sam", 
    age: 20, 
    hasJob: false, 
    greet(){ 
        console.log("Hello, I am " + this.name); 
    }
};


person.greet();

console.log(person.name);
console.log(person.age);
console.log(person.hasJob);



function isEven(number) {
    return number % 2 === 0;
  }
  

  const num = 11;
  
  if (isEven(num)) {
    console.log(num + " is even." );
  } 
  else {
    console.log(num + " is odd.");
  }



  function introduceMyself(myName, hobby) {
    console.log(`Hello! My name is ${myName} and I enjoy ${hobby}.`);
  }
  
  introduceMyself(myName, "playing video games"); 
  
  const describeStudent = (myName, age) => {
    return `This person is ${myName} and is ${age} years old`;
  };
  
  console.log(describeStudent(myName, age));