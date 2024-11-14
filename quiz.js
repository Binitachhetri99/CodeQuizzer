const quizData = [
    {
        question: "What is the output of the following code: print(type(5))?",
        options: [
            "<class 'int'>",
            "<class 'float'>",
            "<class 'str'>",
            "<class 'bool'>"
        ],
        correct: 0
    },
    {
        question: "Which keyword is used to define a function in Python?",
        options: [
            "function",
            "define",
            "def",
            "fun"
        ],
        correct: 2
    },
    {
        question: "What is the output of the following code: print(2 ** 3)?",
        options: [
            "6",
            "8",
            "9",
            "Error"
        ],
        correct: 1
    },
    {
        question: "Which data type is used to store a sequence of characters in Python?",
        options: [
            "int",
            "float",
            "str",
            "list"
        ],
        correct: 2
    },
    {
        question: "What is the correct syntax to check if a variable `x` is equal to 10?",
        options: [
            "x = 10",
            "x == 10",
            "x === 10",
            "if x = 10:"
        ],
        correct: 1
    },
    {
        question: "Which of the following is used to create a list in Python?",
        options: [
            "[]",
            "{}",
            "()",
            "<>"
        ],
        correct: 0
    },
    {
        question: "What does the `len()` function do in Python?",
        options: [
            "Returns the length of a string",
            "Returns the length of a list",
            "Returns the length of any sequence",
            "All of the above"
        ],
        correct: 3
    },
    {
        question: "How do you start a comment in Python?",
        options: [
            "//",
            "#",
            "/* */",
            "<!-- -->"
        ],
        correct: 1
    },
    {
        question: "What will the following code output: print('Hello' + ' ' + 'World')?",
        options: [
            "HelloWorld",
            "Hello World",
            "Hello",
            "Error"
        ],
        correct: 1
    },
    {
        question: "Which keyword is used to start a loop in Python?",
        options: [
            "for",
            "loop",
            "repeat",
            "while"
        ],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionContainer = document.getElementById("quiz");
    questionContainer.innerHTML = ""; // Clear previous content

    const questionData = quizData[currentQuestion];

    // Create question element
    const questionElement = document.createElement("h2");
    questionElement.textContent = questionData.question;
    questionContainer.appendChild(questionElement);

    // Create options
    questionData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.className = "option";
        button.onclick = () => checkAnswer(index);
        questionContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const correctIndex = quizData[currentQuestion].correct;
    if (selectedIndex === correctIndex) {
        score++;
        alert("Correct!");
    } else {
        alert("Wrong answer!");
    }

    // Disable all options
    document.querySelectorAll(".option").forEach(button => {
        button.disabled = true;
    });

    // Enable the next button
    document.getElementById("nextButton").disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
        document.getElementById("nextButton").disabled = true;
    } else {
        showScore();
    }
}

function showScore() {
    const questionContainer = document.getElementById("quiz");
    questionContainer.innerHTML = `<h2>Your score: ${score} / ${quizData.length}</h2>`;
    document.getElementById("nextButton").style.display = "none";
    document.getElementById("restartButton").style.display = "inline-block";
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("nextButton").style.display = "inline-block";
    document.getElementById("restartButton").style.display = "none";
    loadQuestion();
}

// Load the first question when the page loads
window.onload = () => {
    loadQuestion();
    document.getElementById("nextButton").disabled = true;
};
