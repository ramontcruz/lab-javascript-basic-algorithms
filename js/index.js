// Iteration 1: Names and Input
//console.log("TESTE");

let hacker1 = "Amanda";
console.log("The driver's name is "+hacker1);

let hacker2 =  "Fernanda";
console.log("The navigator's name is "+hacker2);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log ("Driver has the longest name, it has "+hacker1.length+" characters.");
}else if (hacker1.length < hacker2.length){
    console.log ("Navigador has the longest name, it has "+hacker2.length+" characters.");
}else 
console.log ("Wow, you both have equally long names, "+hacker1.length +" characters!");

// Iteration 3: Loops
let hacker1UC = hacker1.toUpperCase();
let capitalSpace = hacker1UC.charAt(0);
for(let i=1; i<hacker1UC.length;i++){
    capitalSpace += " "+hacker1UC.charAt(i);
}
console.log (capitalSpace);

let reverse = "";
for(let i=hacker2.length; i>=0;i--){
    reverse += hacker2.charAt(i);
}
console.log (reverse);

if (hacker1.length>=hacker2.length){
    for(let i=0;i<hacker2.length;i++){
        if (hacker1.charAt(i)<hacker2.charAt(i)){
            console.log("na mao: The driver's name goes first.");
            break;
        }

        if (hacker1.charAt(i)>hacker2.charAt(i)){
            console.log("na mao: Yo, the navigator goes first definitely.");
            break;
        }

        if ((i==hacker2.length-1)&&(hacker1.charAt(i)==hacker2.charAt(i))){
            console.log("na mao: What?! You both have the same name?");
        }
    }
} else {
    for(let i=0;i<hacker1.length;i++){
        if (hacker1.charAt(i)<hacker2.charAt(i)){
            console.log("na mao: The driver's name goes first.");
            break;
        }

        if (hacker1.charAt(i)>hacker2.charAt(i)){
            console.log("na mao: Yo, the navigator goes first definitely.");
            break;
        }

        if ((i==hacker2.length-1)&&(hacker1.charAt(i)==hacker2.charAt(i))){
            console.log("na mao: What?! You both have the same name?");
        }
    }
}


array = [hacker1, hacker2];
array.sort();

if (array.indexOf(hacker1)<array.indexOf(hacker2)){
    console.log("The driver's name goes first.");
} else if (array.indexOf(hacker1)>array.indexOf(hacker2)){
    console.log("Yo, the navigator goes first definitely.");
} else console.log("What?! You both have the same name?");


