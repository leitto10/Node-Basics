const https = require('https');
//const username = "joseluislopez";

//Function to print message to the console.
function printMessage(username, badgeCount, points) {
    const message = `${username} has ${badgeCount} total badge(s) and ${points} points in
    JavaScript`;
    console.log(message);

}

function getProfile(username) {
    //Connect to the API url (https://teamtreehouse.com/username.json)
    const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
        let body = "";
        //Read the data
        response.on('data', data => {
            body += data.toString();
        });
        response.on('end', ()=> {
            //Parse the data
            const profile = JSON.parse(body);
            printMessage(username, profile.badges.length, profile.points.JavaScript);
            //Print data
        });
    });
}

const users = ["joseluislopez", "chalkers", "davemcfarland"];

users.forEach(getProfile);