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

//challenge5

function challenge5(){

    var billsJohnsFamily = {
        restaurantBills: [124, 48, 268, 180, 42],
        tips: [],
        tipsAndBills: [],
        calculateTips: function(arraytips) {
            if (arraytips > 200) {
                return (arraytips * 10) / 100;

            } else if (arraytips <= 200 && arraytips > 50) {
                return (arraytips * 15) / 100;

            } else {
                return (arraytips * 20) / 100;
            }
        },

        saveTipsAndBills: function() {

            for (let i = 0; i < this.restaurantBills.length; i++) {
                this.tips[i] = this.calculateTips(this.restaurantBills[i]);
                this.tipsAndBills[i] = this.calculateTips(this.restaurantBills[i]) + this.restaurantBills[i];
            }
        }
    };
    billsJohnsFamily.saveTipsAndBills();
    console.log(billsJohnsFamily.tips);
    console.log(billsJohnsFamily.tipsAndBills);

    var billsMarksFamily = {
        restaurantBills: [77, 375, 110, 45],
        tips: [],
        tipsAndBills: [],
        calculateTips: function(arraytips) {
            if (arraytips > 300) {
                return (arraytips * 25) / 100;

            } else if (arraytips <= 300 && arraytips > 100) {
                return (arraytips * 10) / 100;

            } else {
                return (arraytips * 20) / 100;
            }
        },

        saveTipsAndBills: function() {

            for (let i = 0; i < this.restaurantBills.length; i++) {
                this.tips[i] = this.calculateTips(this.restaurantBills[i]);
                this.tipsAndBills[i] = this.calculateTips(this.restaurantBills[i]) + this.restaurantBills[i];
            }
        }
    };
    billsMarksFamily.saveTipsAndBills();
    console.log(billsMarksFamily.tips);
    console.log(billsMarksFamily.tipsAndBills);

    function averageTips(tipsi){
        let summarry = 0;
        for (let i=0; i < tipsi.length-1 ; i++){
            summarry += tipsi[i];
        }
        return summarry/tipsi.length;

    }

    var averageJohns = averageTips(billsJohnsFamily.tips);
    var averageMarks = averageTips(billsMarksFamily.tips);
    console.log(averageJohns);
    console.log(averageMarks);

    if (averageJohns > averageMarks ){
            console.log('Johns family give big tips');
    } else if (averageMarks  > averageJohns){
        console.log('MArks family give big tips');
    } else {
        console.log('Marks and Johns family give the same tips');
    }


}
challenge5();

//Challenge5 better version

function challenge5better(){
    var john = {
        fullName: 'John Smith',
        bills: [124, 48, 268, 180, 42],
        calculateTips: function(){
            this.tip = [];
            this.fullBill = [];
            for(let i=0; i < this.bills.length; i++){
                let percentage;
                let bill = this.bills[i];
                if(bill > 200){
                    percentage = .10;
                } else if (bill <= 200 && bill > 50){
                    percentage = .15;
                } else {
                    percentage = .20;
                }
                this.tip[i] = percentage * bill;
                this.fullBill[i] = bill + percentage * bill;
            }
        }
    };

    var mark = {
        fullName: 'Mark Gilenhall',
        bills: [77, 375, 110, 45],
    calculateTips: function(){
        this.tip = [];
        this.fullBill = [];
        for(let i=0; i < this.bills.length; i++){
            let percentage;
            let bill = this.bills[i];
            if(bill > 300){
                percentage = .25;
            } else if (bill <= 300 && bill > 100){
                percentage = .10;
            } else {
                percentage = .20;
            }
            this.tip[i] = percentage * bill;
            this.fullBill[i] = bill + percentage * bill;
        }
    }
};
    john.calculateTips();
    mark.calculateTips();

    function averAgeTips(tips){
        let sum = 0;
        for (let i=0; i < tips.length; i++){
            sum += tips[i];
        }
        return sum/tips.length;
    }

    john.average = averAgeTips(john.tip);
    mark.average = averAgeTips(mark.tip);
    console.log(john);
    console.log(mark);

    if ( john.average > mark.average ){
        console.log('Johns family give big tips');
    } else if (mark.average  >  john.average){
        console.log('MArks family give big tips');
    } else {
        console.log('Marks and Johns family give the same tips');
    }

}
challenge5better();


console.log(this);