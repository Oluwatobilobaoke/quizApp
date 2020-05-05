// Caching selectors into variables
const container = document.querySelector('.container'),
    currentQuestion = document.getElementById('currentquestion'),
    allAvailableQuestions = document.getElementById('allquestions'),
    question = document.getElementById('questionbank'),
    optionOne = document.querySelector('.option-1'),
    optionTwo = document.querySelector('.option-2'),
    optionThree = document.querySelector('.option-3'),
    optionFour = document.querySelector('.option-4'),
    options = document.querySelectorAll('li'),
    btn = document.getElementById('btn');


let currentScore = document.querySelector('.current-score'),
    activeQuestion = 1;
score = 0;


// Questions
const myQuestions = [
    {
        question: 'Is JavaScript a case-sensitive language?',
        options: [
            'YES.',
            'NO.',
            "I Do not Know.",
            'None of the above',
        ],
        answer: "YES."
    },
    {
        question: 'The follwoing are the advantages of JavaScript, except ?',
        options: [
            'Much server interaction.',
            'Immediate feedback to the visitors.',
            'Increased interactivity.',
            'Less server interaction.',
        ],
        answer: 'Much server interaction.',
    },
    {
        question: 'Can you assign an anonymous function to a variable and pass it as an argument to another function?',
        options: [
            'Yes! An anonymous function can be assigned to a variable. It can also be passed as an argument to another function.',
            'No! An anonymous function can\'t be assigned to a variable. It can only be passed as an argument to another function.',
            'I don\'t even know the answer',
            'YES! An anonymous function can be assigned to a variable. and It can\'t be passed as an argument to another function.',
        ],
        answer: 'Yes! An anonymous function can be assigned to a variable. It can also be passed as an argument to another function.'
    },
    {
        question:
            'What is Callback?',
        options: [
            'A callback is a plain JavaScript function passed to some method as an argument or option, executed after another function has finished executing',
            'A callback is a plain JavaScript error function',
            'A callback is a plain JavaScript function passed to some method as an argument or option, executed before another function finish executing',
            'A callback is a plain JavaScript function passed to some method as an argument or option, executed for debugging another function',
        ],
        answer: 'A callback is a plain JavaScript function passed to some method as an argument or option, executed after another function has finished executing',
    },

    {
        question:
            'The built-in methods in JS except?',
        options: [
            'CharsAt()',
            'indexOf()',
            'unshift()',
            'shift()',
        ],
        answer: 'CharsAt()',
    },
];


// Change text content
const showContent = () => {
    currentQuestion.textContent = activeQuestion;
    allAvailableQuestions.textContent = myQuestions.length;
    currentScore.textContent = score;
    question.textContent = myQuestions[activeQuestion - 1].question;
    optionOne.textContent = myQuestions[activeQuestion - 1].options[0];
    optionTwo.textContent = myQuestions[activeQuestion - 1].options[1];
    optionThree.textContent = myQuestions[activeQuestion - 1].options[2];
    optionFour.textContent = myQuestions[activeQuestion - 1].options[3];
}

showContent();

// Show result
const showResult = () => {
    container.classList.add('result', 'blue');
    const result = (score / myQuestions.length) * 100;
    let remark;
    if (result < 50) {
        remark = 'Dont be discouraged, You can do this just Equip yourself.';
    } else if (result <= 75) {
        remark = 'Bravo, Hold on Gather more materials and have more handsOn Session.';
    } else if (result <= 90) {
        remark = 'Ooin, You\'re doing Well.!'
    } else {
        remark = 'Fantabulous, Agba Awo, i say ooin, You did Excellently!';
    }
    container.innerHTML = `
   <h1>${result}%</h1> 
   <h3 class="center mb">${remark}</h3>
   <a href="index.html" class="btn">RETRY?</a>
   `;
}

const disableBtn = () => {
    options.forEach(option => {
        option.classList.add('disabled');
        if (option.textContent === myQuestions[activeQuestion - 1].answer) {
            option.classList.add('correct');
        }
    })
}

const checkOptionOne = () => {

    if (optionOne.textContent === myQuestions[activeQuestion - 1].answer) {
        optionOne.classList.add('correct');
        score++;
        showContent();

    } else {
        optionOne.classList.add('wrong');
    }
    disableBtn();
    btn.classList.add('show');

    if (activeQuestion === myQuestions.length) {
        btn.textContent = 'Submit';
    }

}

const checkOptionTwo = () => {
    if (optionTwo.textContent === myQuestions[activeQuestion - 1].answer) {
        optionTwo.classList.add('correct');
        score++;
        showContent();

    } else {
        optionTwo.classList.add('wrong');
    }
    disableBtn();
    btn.classList.add('show');

    if (activeQuestion === myQuestions.length) {
        btn.textContent = 'Submit';
    }
}

const checkOptionThree = () => {

    if (optionThree.textContent === myQuestions[activeQuestion - 1].answer) {
        optionThree.classList.add('correct');
        score++;
        showContent();

    } else {
        optionThree.classList.add('wrong');
    }
    disableBtn();
    btn.classList.add('show');

    if (activeQuestion === myQuestions.length) {
        btn.textContent = 'Submit';
    }

}

const checkOptionFour = () => {

    if (optionFour.textContent === myQuestions[activeQuestion - 1].answer) {
        optionFour.classList.add('correct');
        score++;
        showContent();

    } else {
        optionFour.classList.add('wrong');
    }
    disableBtn();
    btn.classList.add('show');

    if (activeQuestion === myQuestions.length) {
        btn.textContent = 'Submit';
    }
}

const nextQuestion = () => {
    if (activeQuestion < myQuestions.length) {
        activeQuestion = activeQuestion + 1;
        showContent();
        btn.classList.remove('show');
        options.forEach(option => {
            option.classList.remove('wrong', 'correct', 'disabled');
        })
    } else {
        showResult();
    }
}

// add event listener on all four options
optionOne.addEventListener('click', checkOptionOne);
optionTwo.addEventListener('click', checkOptionTwo);
optionThree.addEventListener('click', checkOptionThree);
optionFour.addEventListener('click', checkOptionFour);
btn.addEventListener('click', nextQuestion);
