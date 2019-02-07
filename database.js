let fs = require("fs");

exports.create = function (type, data, doneCallback) {
    fs.writeFile("db.json", (err, data) => {

        let allTheStuff = JSON.parse(data);
        // allTheStuff = {}
        let users = allTheStuff[type];
        let user = users.push(data);
        JSON.stringify(data);
        doneCallback(data);

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

