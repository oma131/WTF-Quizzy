const startBtn = document.querySelector('.start-btn')
const popupInfo = document.querySelector('.popup-info')
const main = document.querySelector('.main')
const exitBtn = document.querySelector('.exit-btn')
const continueBtn = document.querySelector('.continue-btn')
const quizSection = document.querySelector('.quiz-section')
const quizBox = document.querySelector('.quiz-box')
const resultBox = document.querySelector('.result-box')
const tryAgainBtn = document.querySelector('.tryAgain-btn')
const goHomeBtn = document.querySelector('.goHome-btn')

startBtn.onclick = () => {
    popupInfo.classList.add('active')
    main.classList.add('active')
}
exitBtn.onclick = () => {
    popupInfo.classList.remove('active')
    main.classList.remove('active')
}

continueBtn.onclick = () => {
    quizSection.classList.add('active')
    popupInfo.classList.remove('active')
    main.classList.remove('active')
    quizBox.classList.add('active')

    showQuestions(0)
    questionCounter(1)
    headerScore()
}

tryAgainBtn.onclick = () => {
    quizBox.classList.add('active')
    nextBtn.classList.remove('active')
    resultBox.classList.remove('active')

     // Shuffle questions and options again
     questions = shuffleArray(questions);
     questions.forEach((question) => {
         question.options = shuffleArray(question.options);
     });

    questionCount = 0
    questionNumb = 1
    userScore = 0
    showQuestions(questionCount)
    questionCounter(questionNumb)

    headerScore()
}
goHomeBtn.onclick = () => {
    quizSection.classList.remove('active')
    nextBtn.classList.remove('active')
    resultBox.classList.remove('active')

    questionCount = 0
    questionNumb = 1
    userScore = 0
    showQuestions(questionCount)
    questionCounter(questionNumb)
}

// Shuffle function to randomize array elements
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Shuffle questions and options
questions = shuffleArray(questions);
questions.forEach((question) => {
    question.options = shuffleArray(question.options);
});

// Time variable
let timer;

// Timer function
function startTimer() {
    let timeLeft = 15;

    const timerDisplay = document.querySelector('.timer-display');
    timerDisplay.textContent = `${timeLeft}s`;

    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `${timeLeft}s`;
        if (timeLeft === 5) {
            timerDisplay.style.backgroundColor = 'red';
        }

        if (timeLeft === 0) {
            clearInterval(timer);
            handleTimerExpiration();
        }
    }, 1000);
}

//stop timer function
function stopTimer() {
    clearInterval(timer);
}


// Function to handle timer expiration and move to the next question
function handleTimerExpiration() {
    const correctAnswer = questions[questionCount].answer;
    const options = document.querySelectorAll('.option');

    // Mark the current question as incorrect
    for (let i = 0; i < options.length; i++) {
        if (options[i].textContent === correctAnswer) {
            options[i].classList.add('correct');
        } else {
            options[i].classList.add('incorrect');
        }
    }

    // Disable all options
    for (let i = 0; i < options.length; i++) {
        options[i].classList.add('disabled');
    }

    // Show the next button
    const nextBtn = document.querySelector('.next-btn');
    nextBtn.classList.add('active');

    // Stop the timer
    stopTimer();

    // Automatically move to the next question after a delay (you can adjust the delay as needed)
    setTimeout(() => {
        moveToNextQuestion();
    }, 1000);
}

// Function to move to the next question
function moveToNextQuestion() {
    if (questionCount < questions.length - 1) {
        questionCount++;
        showQuestions(questionCount);

        questionNumb++;
        questionCounter(questionNumb);

        // Hide the next button
        const nextBtn = document.querySelector('.next-btn');
        nextBtn.classList.remove('active');
        
        // Start the timer for the next question
        startTimer();
    } else {
        console.log("Questions completed");
        showResultBox();
    }
}

let questionCount = 0
let questionNumb = 1
let userScore = 0


const nextBtn = document.querySelector('.next-btn')
nextBtn.onclick = () => {
    stopTimer();
    if (questionCount < questions.length - 1) {
        questionCount++;
        showQuestions(questionCount);

        questionNumb++;
        questionCounter(questionNumb);

        nextBtn.classList.remove('active');
    } else {
        console.log("Questions completed");
        showResultBox();
    }
    
};
const optionList = document.querySelector('.option-list');

// Get question fron question array
function showQuestions(index) {
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

    // Reset the background color to its original state
    const timerDisplay = document.querySelector('.timer-display');
    timerDisplay.style.backgroundColor = ''; 

    let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
        <div class="option"><span>${questions[index].options[1]}</span></div>
        <div class="option"><span>${questions[index].options[2]}</span></div>
        <div class="option"><span>${questions[index].options[3]}</span></div>`
    
    optionList.innerHTML = optionTag

    const option = document.querySelectorAll('.option')
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)')
    }

    startTimer();
}

function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
    let allOptions = optionList.children.length;

    if (userAnswer == correctAnswer) {
        answer.classList.add('correct')
        userScore += 1
        headerScore()
    } else {
        answer.classList.add('incorrect')

        //if answer is not correct auto sekect the correct anwer
        for (let i = 0; i < allOptions; i++) {
            if (optionList.children[i].textContent == correctAnswer) {
                optionList.children[i].setAttribute('class', 'option correct')
            }
        }
    }

    //if answer is selected disable remaining options
    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add('disabled')
    }

    nextBtn.classList.add('active')

    stopTimer();
}

function questionCounter(index) {
    const questionTotal = document.querySelector('.question-total')
    questionTotal.textContent = `${index} of ${questions.length} Questions`
}

function headerScore() {
    const headerScoreText = document.querySelector('.header-score');
    headerScoreText.textContent =`Score: ${userScore} / ${questions.length}`
}
function showResultBox() {
    quizBox.classList.remove('active')
    resultBox.classList.add('active')

    const scoreText = document.querySelector('.score-text')
    scoreText.textContent = `Your Score ${userScore} out of ${questions.length}`

    const circularProgress = document.querySelector('.circular-progress')
    const progressValue = document.querySelector('.progress-value')

    let progressStartValue = -1
    let progressEndValue = (Math.floor((userScore / questions.length) * 100))
    let speed = 20

    let progress = setInterval(() => {
        progressStartValue++

        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(#c40094 ${progressStartValue * 3.6}deg, rgba(255, 255, 255, .1) 0deg)`

        if (progressStartValue == progressEndValue) {
            clearInterval(progress)
        }
    }, speed)
}