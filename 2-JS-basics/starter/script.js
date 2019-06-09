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
            console.log('John\'s team is a winner! With ' + averAgeScoreTeamJohn + ' points !');
            break;
        case averAgeScoreTeamMike > averAgeScoreTeamJohn && averAgeScoreTeamMike > averAgeScoreTeamMary:
            console.log('Mike\'s team is a winner! With ' + averAgeScoreTeamMike + ' points !');
            break;
        case averAgeScoreTeamMary > averAgeScoreTeamMike && averAgeScoreTeamMary > averAgeScoreTeamJohn:
            console.log('Mary\'s team is a winner! With ' + averAgeScoreTeamMary + ' points !');
            break;
        case averAgeScoreTeamMary === averAgeScoreTeamMike && averAgeScoreTeamMary > averAgeScoreTeamJohn:
            console.log('Both Mary and Mike wins!' + ' With ' + averAgeScoreTeamMary + ' points!');
            break;
        case averAgeScoreTeamJohn === averAgeScoreTeamMary && averAgeScoreTeamMary > averAgeScoreTeamMike:
            console.log('Both Mary and John wins!'+ ' With ' + averAgeScoreTeamMary + ' points!');
            break;
        case averAgeScoreTeamJohn === averAgeScoreTeamMike && averAgeScoreTeamMike > averAgeScoreTeamMary:
            console.log('Both Mike and John wins!' + ' With ' + averAgeScoreTeamMike + ' points!');
            break;
        default:
            console.log('It\s looks like draw!');
            break;
    }

}
challenge2();

//challegne3

function challenge3() {
    var restaurantBills = [124, 48, 268];

    var i;
    var tipsFor3 = [];
    var tipsAndBills = [];

    function tipCalculator(arrayBills) {
        if (arrayBills > 200) {
            return (arrayBills * 10) / 100;
        } else if (arrayBills <= 200 && arrayBills > 50) {
            return (arrayBills * 15) / 100;
        } else {
            return (arrayBills * 20) / 100;
        }
    }
    for (i = 0; i < restaurantBills.length; i++) {
        tipsFor3[i] = tipCalculator(restaurantBills[i]);
        tipsAndBills[i] = tipCalculator(restaurantBills[i]) + restaurantBills[i];
    }

    console.log(tipsFor3);
    console.log(tipsAndBills);
}

challenge3();

//challenge4

function challenge4(){

    var bmiMark = {
        firstName: 'Mark',
        lastName: 'Bobo',
        massMark: 65,
        heightMark: 1.67,
        bodyMassIndex: function(){
            this.bmi = this.massMark/(this.heightMark*this.heightMark);
            return this.bmi;
        }
    };
    var bmiJohn = {
        firstName: 'John',
        lastName: 'Smith',
        massJohn: 90,
        heightJohn: 2.09,
        bodyMassIndex: function () {
             this.bmi = this.massJohn / (this.heightJohn * this.heightJohn);
             return this.bmi;
        }
    };

    if (bmiMark.bodyMassIndex() > bmiJohn.bodyMassIndex()){
        console.log(bmiMark.firstName + ' ' + bmiMark.lastName + ' BMI is higher ' + bmiMark.bmi + ' than ' + bmiJohn.bmi + bmiJohn.firstName + ' ' + bmiJohn.lastName);
    } else if (bmiJohn.bmi > bmiMark.bmi){
        console.log(bmiJohn.firstName + ' ' + bmiJohn.lastName + ' BMI is higher ' + bmiJohn.bmi + ' than ' + bmiMark.bmi + bmiMark.firstName + ' ' + bmiMark.lastName);
    } else {
        console.log('Both BMI are equal');
    }
}
challenge4();