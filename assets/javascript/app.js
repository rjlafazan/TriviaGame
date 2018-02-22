$(document).ready(function() {

	// question and answer object sets

	var questions = [
		{
	    question: "Kopi luwak is a very expensive type of what?",
	    answers: {
		    option1: "Coffee", 
		    option2: "Chocolate",
		    option3: "Beef",
		    option4: "Hummus"
		    },
	  	}, {
	    question: "Schrödinger's cat is a thought experiment dealing with which type of mechanics?",
	    answers: {
		    option1: "Popular mechanics", 
		   	option2: "Quantum mechanics",
		    option3: "Mental mechanics",
		    option4: "Car mechanics"
			}
		},

	];

// Var for correct answers
	var answers = [
		questions[1].answers.option1,
		questions[1].answers.option2
	];

// renders the start button

	function renderButton() {
		$('#startButton').append(
			'<button>Start</button>'
		);		
	};
	renderButton();

// creates question and answer options
	
	function getQuestion() {
			var triviaQuestion = questions[i];

			$('#questionContainer').append('<div>' +
	            '<h5>' + triviaQuestion.question + '</h5>' +
	            '<button>' + triviaQuestion.answers.option1 + '</button>' +
	            '<button>' + triviaQuestion.answers.option2 + '</button>' +
	            '<button>' + triviaQuestion.answers.option3 + '</button>' +
	            '<button>' + triviaQuestion.answers.option4 + '</button></div>'
			);
	};

// starts the first timer and sets start variables

	$('#startButton').on('click', function(event) {
		var startTime = 30;
		var timeNumber = document.getElementById('timerLength');
		var timerInterval = setInterval(countdown, 1000);
		i = 0;
		console.log();

		function countdown() {
		    if (startTime == -1) {
		        clearTimeout(timerInterval);
		        timeUp();
		    } else {
		        timeNumber.innerHTML = startTime;
		        startTime--;
		    };
		};

		function timeUp() {
		    console.log('Time Up');
		    i++;
		};

		getQuestion();

	});

// function to determine if the answer chosen is right. 
function chooseAnswer() {
	var playerAnswer = $(this).on('click', function(event) {
		console.log('button press');
	});
};




		
});