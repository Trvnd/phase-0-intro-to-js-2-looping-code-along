function writeCards(array, event) {
    let messageArray = [];
    for (let i = 0; i < 3; i++) {
        let name = array[i];
        let message = `Thank you, ${name}, for the wonderful ${event} gift!`;
        messageArray.push(message);
    }
    return messageArray;
}

const count1 = []
function countDown(count1) {
    let i = 11
    while (i > 0) {
        console.log(i);
        i--
    }
    return count1
}


const count = []
function runDown(count) {
    let i = 4
    while (i >= 0) {
        console.log(i);
        i--
    }
    return count
}

