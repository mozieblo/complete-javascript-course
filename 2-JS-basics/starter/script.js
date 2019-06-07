console.log('Hello World!!!');

//First Challenge 1

function challenge1() {
    var massMark, massJohn, heightMark, heightJohn;
    massMark = 65;
    massJohn = 90;
    heightMark = 1.67;
    heightJohn = 2.09;


    function bodyMassIndex(mass, height) {

        return mass / (height*height);
    }

    var scoreMark = bodyMassIndex(massMark,heightMark);
    var scoreJohn = bodyMassIndex(massJohn,heightJohn);
    var whoIsBetter = scoreMark >= scoreJohn;
    console.log('Marks BMI is ' + scoreMark);
    console.log('Johns BMI is ' + scoreJohn);


    console.log('Is Mark BMI higher than Johns? ' + whoIsBetter);

}
challenge1();

// Challenge 2

function challenge2(){

    var teamJohnScore = [97, 134, 105];
    var teamMikeScore = [97, 100, 105];
    var teamMaryScore = [97, 134, 105];

    function averAgeScore(arrayScore){

        return (arrayScore[0] + arrayScore[1] + arrayScore[2])/3;

    }

    var averAgeScoreTeamJohn = averAgeScore(teamJohnScore);
    var averAgeScoreTeamMike = averAgeScore(teamMikeScore);
    var averAgeScoreTeamMary = averAgeScore(teamMaryScore);

    console.log(' John ' + averAgeScoreTeamJohn + ' ' + ' Mike ' + averAgeScoreTeamMike + ' Mary ' + averAgeScoreTeamMary);


    switch (true) {

        case averAgeScoreTeamJohn > averAgeScoreTeamMike && averAgeScoreTeamJohn > averAgeScoreTeamMary:
            console.log('John\'s team is a winner!');
            break;
        case averAgeScoreTeamMike > averAgeScoreTeamJohn && averAgeScoreTeamMike > averAgeScoreTeamMary:
            console.log('Mike\'s team is a winner!');
            break;
        case averAgeScoreTeamMary > averAgeScoreTeamMike && averAgeScoreTeamMary > averAgeScoreTeamJohn:
            console.log('Mary\'s team is a winner!');
            break;
        case averAgeScoreTeamMary === averAgeScoreTeamMike && averAgeScoreTeamMary > averAgeScoreTeamJohn:
            console.log('Both Mary and Mike wins!');
            break;
        case averAgeScoreTeamJohn === averAgeScoreTeamMary && averAgeScoreTeamMary > averAgeScoreTeamMike:
            console.log('Both Mary and John wins!');
            break;
        case averAgeScoreTeamJohn === averAgeScoreTeamMike && averAgeScoreTeamMike > averAgeScoreTeamMary:
            console.log('Both Mike and John wins!');
            break;
        default:
            console.log('It\s looks like draw!');
            break;
    }

}
challenge2();


