// Code your solutions in this file
const guest = ['Lisa', 'Kaitlin', 'Jan']

function writeCards(attendees, event) {
    for (let i = 0; i < attendees.length; i++) {
        console.log(`Thank you ${attendees[i]}, for the wonderful ${event} gift!`);
    }
}

writeCards(guest, 'surprise')




