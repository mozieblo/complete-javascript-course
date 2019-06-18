/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends
(Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer.
 In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score
(Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

(function quizGame(){
    var firstQuestion, secondQuestion, thirdQuestion, fourthQuestion, fifthQuestion, randomQuestion, questionArr, userAnswer, pointSummary = 0;

    function Question(question, answerArr, correctAnswer){
        this.question = question;
        this.answerArr = answerArr;
        this.correctAnswer = correctAnswer;

    }

    function randomQuestionLog (questions){
        while (userAnswer !== 'exit') {
            randomQuestion = Math.floor(Math.random()*questions.length);
            console.log(questions[randomQuestion].question);
            for(var i=0; i < questions[randomQuestion].answerArr.length; i++){
                console.log(i + '. ' + questions[randomQuestion].answerArr[i])
            }
            userAnswer = prompt('Please select the correct answer (just type the number or type exit to quit).');
            (function checkIfCorrect (questions, user){;
                if(user == questions[randomQuestion].correctAnswer){
                    console.log('Correct answer!');
                    pointSummary++;
                    console.log('Your current score is: ' + pointSummary);
                } else {
                    console.log('Wrong answer :(. Try again!');
                    console.log('Your current score is: ' + pointSummary);
                }
            })(questionArr, userAnswer);
            console.log('- - - - - - - - - - - - - - - ');
        }
    }



    firstQuestion = new Question ('What is my favorite programming language?', ['JS', 'Java', 'C++', 'Python'], 0);
    secondQuestion = new Question ('How many hours have Jonas JS course?', [13, 39, 28, 18], 2);
    thirdQuestion = new Question ('What is name author of this course?', ['John', 'Mike', 'Jonas'], 2);
    fourthQuestion = new Question ('What is CSS?', ['Cooperation language', 'Cascade Style Sheet', 'Cat Snake Snow'], 1);
    fifthQuestion = new Question('Where is located Jonas?', ['Lisbon', 'San Francisco'], 0);

    questionArr = [firstQuestion, secondQuestion, thirdQuestion, fourthQuestion, fifthQuestion];

    randomQuestionLog(questionArr);

})();