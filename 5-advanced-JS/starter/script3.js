/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number)
(Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code.
So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

(function quizGame(){
    var firstQuestion, secondQuestion, thirdQuestion, fourthQuestion, fifthQuestion, n, questionArr, userAnswer;

    function Question(question, answerArr, correctAnswer){
        this.question = question;
        this.answerArr = answerArr;
        this.correctAnswer = correctAnswer;

    }

    Question.prototype.randomQuestionLog = function(){
        console.log(this.question);
        for(var i=0; i < this.answerArr.length; i++){
            console.log(i + '. ' + this.answerArr[i])
        }
    };


    firstQuestion = new Question ('What is my favorite programming language?', ['JS', 'Java', 'C++', 'Python'], 0);
    secondQuestion = new Question ('How many hours have Jonas JS course?', [13, 39, 28, 18], 2);
    thirdQuestion = new Question ('What is name author of this course?', ['John', 'Mike', 'Jonas'], 2);
    fourthQuestion = new Question ('What is CSS?', ['Cooperation language', 'Cascade Style Sheet', 'Cat Snake Snow'], 1);
    fifthQuestion = new Question('Where is located Jonas?', ['Lisbon', 'San Francisco'], 0);

    questionArr = [firstQuestion, secondQuestion, thirdQuestion, fourthQuestion, fifthQuestion];

    n = Math.floor(Math.random()*questionArr.length);

    questionArr[n].randomQuestionLog();
    userAnswer = prompt('Please select the correct answer. (just type the number)');

    Question.prototype.checkIfCorrect = function(user){
        if(user == this.correctAnswer){
            console.log('Correct answer!');
        } else {
            console.log('Wrong answer :(');
        }
    };
    questionArr[n].checkIfCorrect(userAnswer);


})();

