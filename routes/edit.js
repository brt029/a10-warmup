var data = require("../data.json");

exports.view = function(request, response) {
    response.render('edit', data);
}

exports.editUser = function(request, response) {
    var name = request.query.name;
    var gender = request.query.gender;
    var height = request.query.height;
    var weight = request.query.weight;


    editDetails(findUser(name, data.users), name, gender, height, weight);

    response.render('profile', data);    
}

    function editDetails(array_index, name, gender, height, weight) {

        array_index = parseInt(array_index);

        if (data.users[array_index] != null) {
            data.users[array_index].name = name;
        }

        if (data.users[array_index] != null) {
            data.users[array_index].gender = gender;
        }

        if (data.users[array_index] != null) {
            data.users[array_index].height = height;
        }

        if (data.users[array_index] != null) {
            data.users[array_index].weight = weight;
        }
    }

    function findUser(name, array){
        for (let i = 0; i < data.users.length; i++) {
            if (data.users[i].name == name) {
                return i;
            }
        }

        return 0;
    }
 