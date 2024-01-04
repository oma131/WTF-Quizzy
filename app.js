const startBtn = document.querySelector('.start-btn')
const popupInfo = document.querySelector('.popup-info')
const main = document.querySelector('.main')
const exitBtn = document.querySelector('.exit-btn')
const continueBtn = document.querySelector('.continue-btn')
const quizSection = document.querySelector('.quiz-section')
const quizBox = document.querySelector('.quiz-box')

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

let questionCount = 0
let questionNumb = 1
let userScore = 0

const nextBtn = document.querySelector('.next-btn')
nextBtn.onclick = () => {
    if (questionCount < questions.length - 1) {
        questionCount++;
        showQuestions(questionCount)

        questionNumb++
        questionCounter(questionNumb)
    } else {
        console.log("Questions completed");
    }
    
}
const optionList = document.querySelector('.option-list')

// Get question fron question array
function showQuestions(index) {
    const questionText = document.querySelector('.question-text')
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`

    let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
        <div class="option"><span>${questions[index].options[1]}</span></div>
        <div class="option"><span>${questions[index].options[2]}</span></div>
        <div class="option"><span>${questions[index].options[3]}</span></div>`
    
    optionList.innerHTML = optionTag

    const option = document.querySelectorAll('.option')
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)')
    }
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
}

function questionCounter(index) {
    const questionTotal = document.querySelector('.question-total')
    questionTotal.textContent = `${index} of ${questions.length} Questions`
}

function headerScore() {
    const headerScoreText = document.querySelector('.header-score');
    headerScoreText.textContent =`Score: ${userScore} / ${questions.length}`
}