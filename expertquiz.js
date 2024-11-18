const quizData = [
    {
        question: "What is the Global Interpreter Lock (GIL) in Python?",
        options: [
            "A lock that prevents data corruption in multithreading.",
            "A mechanism to ensure only one thread executes Python bytecode at a time.",
            "A tool for debugging Python code in multiple threads.",
            "A feature that enforces garbage collection."
        ],
        correct: 1
    },
    {
        question: "Which method is called when a new instance of a class is created?",
        options: [
            "__new__",
            "__init__",
            "__call__",
            "__class__"
        ],
        correct: 0
    },
    {
        question: "What is a Python metaclass?",
        options: [
            "A class of a class that defines its behavior.",
            "A decorator that modifies a class.",
            "A factory function for creating classes.",
            "A specialized form of inheritance."
        ],
        correct: 0
    },
    {
        question: "What is the output of the following code?\n```python\nx = {0: 'a', 1: 'b'}\nprint(x.get(2, 'c'))\n```",
        options: [
            "'a'",
            "'b'",
            "'c'",
            "None"
        ],
        correct: 2
    },
    {
        question: "Which module in Python is used for asynchronous programming?",
        options: [
            "asyncio",
            "concurrent",
            "threading",
            "multiprocessing"
        ],
        correct: 0
    },
    {
        question: "What is the output of the following code?\n```python\nclass A:\n    def __init__(self):\n        self.x = 10\n\n    def __getattr__(self, name):\n        return name.upper()\n\nobj = A()\nprint(obj.y)\n```",
        options: [
            "'y'",
            "'Y'",
            "10",
            "AttributeError"
        ],
        correct: 1
    },
    {
        question: "Which of the following is not a valid Python garbage collection technique?",
        options: [
            "Reference counting",
            "Mark-and-sweep",
            "Generational collection",
            "Manual garbage collection"
        ],
        correct: 3
    },
    {
        question: "What is the result of the following code?\n```python\nfrom itertools import count\ncounter = count(start=5, step=-1)\nprint(next(counter))\n```",
        options: [
            "4",
            "5",
            "-1",
            "Error"
        ],
        correct: 1
    },
    {
        question: "Which statement about Python's 'abc' module is true?",
        options: [
            "It provides a way to implement abstract base classes.",
            "It is used for encryption and decryption of strings.",
            "It is a standard library module for creating GUI applications.",
            "It is used for working with binary files."
        ],
        correct: 0
    },
    {
        question: "What is the output of the following code?\n```python\nx = (i**2 for i in range(3))\nprint(list(x))\n```",
        options: [
            "[1, 4]",
            "[0, 1, 4]",
            "Generator object",
            "Error"
        ],
        correct: 1
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
