// Get all of our user data
var data = require('../data.json');
// var lastObjectName = data.users[data.users.length-1].name;
// var lastObjectWeight = data.users[data.users.length-1].weight;
// var lastObjectHeight = data.users[data.users.length-1].height;
// var lastObjectGender = data.users[data.users.length-1].gender;
// var lastObject = {"name": lastObjectName, "height": lastObjectHeight, "weight": lastObjectWeight, "gender": lastObjectGender};

// https://stackoverflow.com/questions/37542093/get-the-last-element-in-json-array
//https://stackoverflow.com/questions/31508798/retrieve-last-object-in-list-of-json-objects
exports.view = function(request, response){
	console.log(data);
	response.render('profile', data);
};
