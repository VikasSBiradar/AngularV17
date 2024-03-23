let skills1 : string[];
skills1 = ["Programming","Coding"];
console.log(skills1);



skills1.push("Communication");
console.log(skills1);


//Mixed array
let scores : (string | number)[];
scores = ['pROGRAMMING', 5, "sOFTWARE DESIGN", 4];
console.log(scores);

//Tuple
let  skillNumber : [string, Number];
skillNumber = ["Programming",5];



//oPTIONAL TUPLE
let bgcolor, headerColor: [number, number, number, number?];
bgcolor = [0, 255, 255, 0.5];
headerColor = [0, 125, 351];
console.log("bgcolor" , bgcolor);
console.log("headercoloer", headerColor);