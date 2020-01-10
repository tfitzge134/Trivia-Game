
/////////////////////////////Resources used ///////////////////////////////////////////////////////////
// Resources 1. https://simplestepscode.com/javascript-quiz-tutorial/
///////

/////learne: how to convert arrays into string by using join

/////////////////////// ///SEUDOCODE//////////////////////////////////////////////

/////////////////////////user click button to get questions//////////////
///////////////////////display question to user/////////--CREATE DISPLAY FUNCTION
///////////////////////submit the answers///////////////////-CREATE ANSWER FUNCTION
////////////////////////display results/////////////////////CREATE SHOW FUNCTION


 


///array contains the questions

const questions = [{
        question: "USA native cat",
        answers: {
            a: "Bengal",
            b: "Persian",
            c: "Maine Coon"
        },
        correctAnswer: "c"
    },
    {
        question: "Old country that idiolozed cats",
        answers: {
            a: "Egypt",
            b: "Sudan",
            c: "Syria"
        },
        correctAnswer: "a"
    },
    {
        question: "Has an island populated by cat",
        answers: {
            a: "Japan",
            b: "China",
            c: "Bangladesh"
        },
        correctAnswer: "a"
    }
];

//.join javascript converts array into string
// const array = ["a", "b", "c"]
// array.join("");  "abc"

const showQuestions = document.getElementById("showQuestions");//user press this bottom to get questions
const quizContainer = document.getElementById("questions");//div hold the questions 
const resultsContainer = document.getElementById("results");//div hold the end result score
const showResults = document.getElementById("showResults");//the result will show when submit showResult is clicked 


//////we display the question to user


function displayQuestion() {
    //we need an empty array to hold the 
    //content of the array //it will be in html format
    const contents = [];


///per each question we want to storage the answer 
    questions.forEach((currentQuestion, questionIndex) => {
        //create options array to hold the answers(option)

        const options = [];
        
//per each question we want to create radio 
//we use interpolation to concatenate the radio button question to each letter(questionIndex . I did not use
//the push method, instead I use interpolation. Reference https://campushippo.com/lessons/how-to-do-string-interpolation-with-javascript-7854ef9d
// we asign the value of the)

///////////////////////////INFORMATION////////////////////////
// To build code below I used  https://www.sitepoint.com/simple-javascript-quiz/ 

//for each answer we add a radio buttom. we use concatenation
        for (var key in currentQuestion.answers) {
            options[options.length] = `<div>
              <input type="radio" name="question${questionIndex}" value="${key}"/>
            <span>${currentQuestion.answers[key]}</span>
            </div>`;
        }

        contents[contents.length] = `
        <div class="question-wrap">
        <div class="question"> ${questionIndex + 1}. ${
      currentQuestion.question
    } </div>
        <div class="answers"> ${options.join("")} </div>
        </div>`;
    });

    quizContainer.innerHTML = contents.join("");
}
/////////////////////////////////////////////////////////////////
function displayResults() {
    const answerContainers = quizContainer.querySelectorAll(".answers");

    let correctAnswers = 0;
    questions.forEach((currentQuestion, questionIndex) => {
        const answerContainer = answerContainers[questionIndex];
        const selector = `input[name=question${questionIndex}]:checked`;
        const selected = answerContainer.querySelector(selector).value;

        selected === currentQuestion.correctAnswer ? correctAnswers++ : null;
    });

    if (correctAnswers === questions.length) {
        resultsContainer.innerHTML = `<div class="showRes">
        <h1 class="resGreen">Genius! Got ${correctAnswers} out of ${questions.length}</h1>
        </div>`;
    } else {
        resultsContainer.innerHTML = `<div class="showRes">
        <h1>Got ${correctAnswers} out of ${questions.length}</h1>
        </div>`;
    }
}

showQuestions.addEventListener("click", displayQuestion);

showResults.onclick = function() {
    displayResults();
    resultsContainer.style.display = "block";
};
////////////////////////REFERENCE SOURCE https://stackoverflow.com/questions/45393553/window-onclick-functionevent-only-works-for-first-item
//modal will close the window after the displau s done.
https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp
window.onclick = function(event) {
    if (event.target == resultsContainer) {
        resultsContainer.style.display = "none";
    }
};