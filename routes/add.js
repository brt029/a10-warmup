var data = require("../data.json");

exports.addUser = function(request, response) {    
	var name = request.query.name;
	var email = request.query.email;
	var username = request.query.username;
	var password = request.query.password;
	var gender = request.query.gender;
	var height = request.query.height;
	var weight = request.query.weight;
	var newUser = {"name": name, "email": email, "username": username, "password": password, "gender": gender, "height": height, "weight": weight};
	data.users.push(newUser);
	response.render('index');
 }

exports.checkLogin = function(request, response) {
	var name = request.query.uname;
	var password = request.query.psw;
	var foundName = false;

	for (let i = 0; i < data.users.length; i++) {

        if (data.users[i].username == name) {
            
        	foundName = true;

            if (data.users[i].password == password) {
            	response.render('home', {"username": name});
            }

            else {
            	response.render('index', {"incorrect": true, "wrongPassword": true});
            }
        }
    }

    if (!foundName) {
    	response.render('index', {"incorrect": true, "noUser": true});
    }
}