let startBtn = document.querySelector('.start')
let quizSection = document.querySelector('.quiz')
let welcomeSection = document.querySelector('.welcome')

const startQuiz = ()=>{
    console.log(quizSection);
    
    quizSection.classList.remove('hide')
    welcomeSection.classList.add('hide')
    
}

startBtn.addEventListener('click', startQuiz)



