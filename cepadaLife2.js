let name = "Gracelie Cepada";
let course = "Bachelor of Science in Information Technology";
let year = "2nd Year";

console.log ("\nName: "+name+"\nCourse: "+course+"\nYear Level: "+year);

//operators

let tlsleep = "8";
let tlstudy = "2";

console.log("\nTotal hours of sleep: "+tlsleep+"\nTotal hours of study: "+tlstudy);

//conditions

if(tlstudy>=5){
    console.log("\nGreat! You studied enought today.");
}else{
    console.log("\nYou need to study more.");
}

//loops

let subjects = ["Web Systems","Event Driven Programming","OOP","Networking","Database Management"];
    console.log ("\nList of my subjects this sem: ");

    for (let i=0; i<subjects.length; i++){
        console.log (subjects[i]);
    }

    function greet(name){
        console.log("\nMy name is "+name);
    }
    greet(name+", a "+year+" from "+course);