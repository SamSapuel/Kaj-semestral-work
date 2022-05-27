
const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },


];

let quiz,
    answerEls,
    questionEl,
    a_text,
    b_text,
    c_text,
    d_text,
    submitBtn,
    currentQuiz,
    score,
    audio,
    questions


window.onload = function () {

    quiz = document.getElementById('quiz')
    answerEls = document.querySelectorAll('.answer')
    questionEl = document.getElementById('question')
    a_text = document.getElementById('a_text')
    b_text = document.getElementById('b_text')
    c_text = document.getElementById('c_text')
    d_text = document.getElementById('d_text')
    submitBtn = document.getElementById('submit')
    audio = new Audio()
    audio.src = 'sound/woo.mp3'
    currentQuiz = 0
    score = 0

    fetch('https://opentdb.com/api.php?amount=10&category=23&type=multiple')
        .then(res => {
            if (res.ok) console.log('SUCCESS')
            else console.log('Not Successful')
            res.json()
                .then(renderQuestions)
        })
        .catch(error => console.log(error))


    function renderQuestions(data) {
        questions = data.results
        console.log(questions)
    }


    loadQuiz()

    function loadQuiz() {

        deselectAnswers()

        console.log(questions)
        const currentQuizData = questions[currentQuiz]

        questionEl.innerText = currentQuizData.question
        a_text.innerText = currentQuizData.a
        b_text.innerText = currentQuizData.b
        c_text.innerText = currentQuizData.c
        d_text.innerText = currentQuizData.d
    }

    function deselectAnswers() {
        answerEls.forEach(answerEl => answerEl.checked = false)
    }

    function getSelected() {
        let answer
        answerEls.forEach(answerEl => {
            if(answerEl.checked) {
                answer = answerEl.id
            }
        })
        return answer
    }


    submitBtn.addEventListener('click', () => {
        audio.play()
        const answer = getSelected()
        if(answer) {
            if(answer === questions[currentQuiz].correct) {
                score++
            }

            currentQuiz++

            if(currentQuiz < questions.length) {
                loadQuiz()
            } else {
                quiz.innerHTML = `
           <h2 style="text-align: center">You answered ${score}/${quizData.length} questions correctly</h2>

           <button id = "reload-btn" onclick="location.reload()">Reload</button>
           `
            }
        }
    })



}


