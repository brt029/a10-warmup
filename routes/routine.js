var routine = require('../routine.json')['routines'];

exports.routineInfo = function(request, response) { 
	var routineID = request.params.id;
	var routine = getRoutineData(routineID);
  	response.json(routine);
}

exports.view = function(request, response) {
	var routineID = request.params.id;
	var routine = getRoutineData(routineID);
	response.render('routine', routine);
}

function getRoutineData(projectID) {
	if (routineID == "random") {
		routineID = Math.floor(Math.random() * routines.length) + 1;
	} else {
		routineID = parseInt(routineID);
	}
  	var routine = routines[routineID-1]; 
  	return routine;	
}