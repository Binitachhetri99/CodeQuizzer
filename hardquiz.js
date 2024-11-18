const quizData = [
    {
        question: "What is the output of the following code: print([1, 2, 3] * 2)?",
        options: [
            "[1, 2, 3, 1, 2, 3]",
            "[2, 4, 6]",
            "Error",
            "[1, 2, 3, 3, 2, 1]"
        ],
        correct: 0
    },
    {
        question: "Which of the following will create a dictionary with default values in Python?",
        options: [
            "dict.fromkeys(['a', 'b'], 0)",
            "{'a': 0, 'b': 0}",
            "dict(['a', 'b'], 0)",
            "defaultdict(['a', 'b'], 0)"
        ],
        correct: 0
    },
    {
        question: "What does the `@staticmethod` decorator do in Python?",
        options: [
            "Creates a static method bound to the class, not an instance.",
            "Creates an abstract method in a class.",
            "Ensures a method is not inherited by subclasses.",
            "Creates a method that can only access instance variables."
        ],
        correct: 0
    },
    {
        question: "What is the output of: print(bool([]) and bool({}))?",
        options: [
            "True",
            "False",
            "None",
            "Error"
        ],
        correct: 1
    },
    {
        question: "Which of these is a correct way to open a file for appending in Python?",
        options: [
            "open('file.txt', 'r')",
            "open('file.txt', 'a')",
            "open('file.txt', 'x')",
            "open('file.txt', 'w')"
        ],
        correct: 1
    },
    {
        question: "What is the purpose of the `yield` keyword in Python?",
        options: [
            "It is used to create a coroutine.",
            "It returns a value and terminates the function.",
            "It is used to create a generator.",
            "It is similar to the return statement, but does not terminate the function."
        ],
        correct: 3
    },
    {
        question: "What is the output of the following code: print('5' * 3 + 5)?",
        options: [
            "'5555'",
            "'555'",
            "555",
            "Error"
        ],
        correct: 3
    },
    {
        question: "Which of the following methods can be used to find the memory address of an object in Python?",
        options: [
            "id()",
            "hex()",
            "get_address()",
            "address()"
        ],
        correct: 0
    },
    {
        question: "What is the difference between `is` and `==` in Python?",
        options: [
            "`is` checks for value equality, `==` checks for object identity.",
            "`is` checks for object identity, `==` checks for value equality.",
            "`is` and `==` are interchangeable.",
            "`is` compares types, `==` compares values."
        ],
        correct: 1
    },
    {
        question: "What is the time complexity of searching for an element in a Python set?",
        options: [
            "O(1)",
            "O(n)",
            "O(log n)",
            "O(n^2)"
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
