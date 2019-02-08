let fs = require("fs");

exports.create = function (type, data, doneCallback) {
    fs.readFile("db.json", (err, data) => {

        // parse to turn data into an object
        let allTheStuff = JSON.parse(data);
        // turn into an array and manipulate the array
        allTheStuff[type].push(data);
        // turn it back into a string
        let thingsAsString = JSON.stringify(allTheStuff);
        fs.writeFile("db.json", thingsAsString, function () {
            doneCallback(user);
        })
    })
}
exports.find = function (type, id, doneCallback) {
    // type = "users"
    fs.readFile("db.json", (err, data) => {

        let allTheStuff = JSON.parse(data);
        // allTheStuff = {}
        let users = allTheStuff[type];
        let user = users.find(u => u.id === id);
        doneCallback(user);

    })
}

