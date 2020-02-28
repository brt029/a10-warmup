var routines = require('../routine.json');

exports.view = function(request, response){
	routines['viewAlt'] = false;
	response.render('home', routines);
};

exports.viewAlt = function(request, response){
	routines['viewAlt'] = true;
	response.render('home', routines);
};
