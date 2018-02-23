$(document).ready(function() {

	// question and answer object sets

	var questions = [
		{
	    question: "Kopi luwak is a very expensive type of what?",
	    answers: [
		    "Coffee", 
		    "Chocolate",
		    "Beef",
		    "Hummus"
		    ],
		correctAnswer: "Coffee"
	  	}, {
	    question: "Schrödinger's cat is a thought experiment dealing with which type of mechanics?",
	    answers: [
		    "Popular mechanics", 
		   	"Quantum mechanics",
		    "Mental mechanics",
		    "Car mechanics"
			],
		correctAnswer: "Quantum mechanics"
		},{
	    question: "If one synchronized swimmer drowns, do the others drown too?",
	    answers: [
		    "Yes", 
		    "No",
		    "Maybe",
		    "What?"
		    ],
		correctAnswer: "What?"
	  	},{
	    question: "In what state is it illegal to catch mice without a hunting license?",
	    answers: [
		    "Ohio", 
		    "Michigan",
		    "Florida",
		    "California"
		    ],
		correctAnswer: "Ohio"
	  	},

	];


var correctAnswerCount = 0;
var incorrectAnswerCount = 0;
var unansweredCount = 0;
var i;
console.log(i);
var timerInterval;
var startTime = 30;

// renders the start button

	function renderButton() {
		$('#startButton').append(
			'<button>Start</button>'
		);	
		$('#resetButton').append(
			'<button>Reset</button>'
		);		
	};
	renderButton();

// creates question and answer options

	function questionator() {
		restartTimer();
		$('#button-dump').empty();
		$('#questionContainer').empty();

		$("#questionContainer").html(questions[i].question);

        for (var j = 0; j < questions.length; j++) {

        	var a = $('<button>');
        	a.addClass('answer');
        	a.attr('answerOptions', questions[i].answers[j]);
        	a.attr('correctAnswer', questions[i].correctAnswer);
        	a.text(questions[i].answers[j]);
       		$('#button-dump').append(a);

        };

        console.log(questions[i].question);
    	console.log(questions[i].answers);
    	console.log(questions[i].correctAnswer);

    	$('#timerLength').text('30');

	};
// creates the timer
	function countdown() {
		var timeNumber = document.getElementById('timerLength');
		    if (startTime === 0) {
		        clearInterval(timerInterval);
		        timeUp();

		    } else {
		        timeNumber.innerHTML = startTime;
		        startTime--;
		    };
		};

	function timeUp() {
	    alert("Time Up! The answer is: " + questions[i].correctAnswer);
	    i++;
	    unansweredCount++;
	    $('#unanswerCount').text(unansweredCount);
	    clearInterval(timerInterval);
		startTime = 30;
	    
	};
// restarts the timer when the question is answered
function restartTimer() {
	timerInterval = setInterval(countdown, 1000);
	};


// starts the first timer and sets start variables

	$('#startButton').on('click', function(event) {
		// var timeNumber = document.getElementById('timerLength');
		i = 0;
		restartTimer();

		questionator();


	});

// click events for answer chosen
$('body').on('click', '.answer', function() {
	console.log(this);

	var answerChoice = $(this).attr('answerOptions');
	console.log($(this).attr('answerOptions'));

	var correctChoice = $(this).attr('correctAnswer');
	console.log($(this).attr('correctAnswer'));

	chooseAnswer(answerChoice, correctChoice);

	// function to determine if the answer chosen is right.
	function chooseAnswer(inputChoice, correctChoice) {

		if (inputChoice === correctChoice) {
			alert("Correct!");
			i++;
			correctAnswerCount++;
			$('#correctCount').text(correctAnswerCount);
			clearInterval(timerInterval);
			startTime = 30;
		} else if(inputChoice !== correctChoice) {
			alert("Incorrect! The answer is: " + questions[i].correctAnswer);
			i++;
			incorrectAnswerCount++;
			$('#incorrectCount').text(incorrectAnswerCount);
			
			clearInterval(timerInterval);
			startTime = 30;
		}

		questionator();
	};
});

// this function should move on to the next question
function nextQuestion() {

        if (i === questions.length - 1) {
            setTimeout(gameEnd, 5000);
            clearInterval(timerInterval);
            
           
        } else {
            i++;
            setTimeout(startGame, 5000);
            clearInterval(timerInterval);
            startTime = 30;

        }
    };

		
});