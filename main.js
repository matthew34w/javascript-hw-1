
// Exercise 1

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(string, names){
    for (let i = 0; i < names.length; i++) {
        let currentName = names[i];
        if (string.toLowerCase().includes(currentName.toLowerCase())) {
            console.log("Matched " + currentName);
            return;  
        }
    }
    console.log("No Matches");
}

// Call method here with parameters
findWords(dog_string, dog_names);



//Excercise 2

function replaceEvens(arr) {
    for (let i = 0; i < arr.length; i += 2) {
        arr.splice(i, 1, "even index");
    }
}


let arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];


replaceEvens(arr);


console.log(arr);

