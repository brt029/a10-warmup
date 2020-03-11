
/*        - - - LEVEL SYSTEM - - -         */
    // Get all of our user data
    var data = require('../data.json');

    exports.calculateLevel = function(request, response){
        // var currentExp = parseInt(data.exp, 10);
        var expGained = 35;
        var currentExp = data.exp; //fix
        console.log(data.exp);
        if(!currentExp){
             currentExp = 0; 
             data.exp = 0;
        }
        var lvlUp = false;
        var currentLevel = Math.trunc((currentExp * 0.01)+1);
        currentExp += expGained;
      
        if(currentExp >= (currentLevel)*100){
            currentLevel = Math.trunc((currentExp*0.01)+1);
            lvlUp = true;
        }

        data.exp = currentExp;

        var expUntilNextLevel = Math.trunc(((currentLevel)*100) - currentExp);
        var expSinceLastLevel = Math.trunc(currentExp - ((currentLevel-1)*100));
        var totalExpUntilNextLevel = Math.trunc(((currentLevel)*100) - ((currentLevel-1)*100));
        var percentUntilNextLevel = Math.trunc((expSinceLastLevel/totalExpUntilNextLevel)*100);

        response.render('level', {"currentLevel": currentLevel, "expUntilNextLevel": expUntilNextLevel, "expSinceLastLevel": expSinceLastLevel, 
        "percentUntilNextLevel": percentUntilNextLevel, "lvlUp": lvlUp, "totalExpUntilNextLevel": totalExpUntilNextLevel});

    }