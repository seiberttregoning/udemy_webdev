function singSong() {
    console.log("DO")
    console.log("RE")
    console.log("MI")
}


function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.`)
}

function repeat(str, numTimes) {
    let result = ''
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

function lastElement(array) {
    if (array.length === 0) {
        return null;
    }
    return array[array.length - 1];
}

function sumArray(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

const hen = {
    name: "Helen",
    eggCount: 0,
    layAnEgg() {
        this.eggCount++
        console.log("EGG")
    }
}

try {
    // code to try
} catch {
    // what to do if error occurs
}