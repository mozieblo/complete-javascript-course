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