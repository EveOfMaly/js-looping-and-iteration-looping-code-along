// Code your solutions in this file
const guest = ['Lisa', 'Kaitlin', 'Jan']
const message = []

function writeCards(attendees, event) {
    for (let i = 0; i < attendees.length; i++) {
       message.push(`Thank you, ${attendees[i]}, for the wonderful ${event} gift!`);
    }
    return message;
}




function countDown(integer) {
    while (integer >= 0) {
        console.log(integer--);
    }
}

countDown(10);

