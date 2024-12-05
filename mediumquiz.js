const quizData = [
    {
        question: "What is the result of `list(range(3))` in Python?",
        options: [
            "[0, 1, 2]",
            "[1, 2, 3]",
            "[0, 1, 2, 3]",
            "Error"
        ],
        correct: 0
    },
    {
        question: "Which of the following methods can be used to add an element to a set in Python?",
        options: [
            "add()",
            "insert()",
            "append()",
            "extend()"
        ],
        correct: 0
    },
    {
        question: "What does the `zip()` function do in Python?",
        options: [
            "Combines two or more iterables element-wise into tuples",
            "Concatenates multiple strings",
            "Returns a list of tuples",
            "Splits a string into individual characters"
        ],
        correct: 0
    },
    {
        question: "What is the result of the expression `5 == 5.0` in Python?",
        options: [
            "True",
            "False",
            "Error",
            "None"
        ],
        correct: 0
    },
    {
        question: "What does the `filter()` function do in Python?",
        options: [
            "Filters a sequence based on a function",
            "Generates a sequence of numbers",
            "Applies a transformation to each element of a list",
            "Checks if a sequence contains a certain element"
        ],
        correct: 0
    },
    {
        question: "Which method is used to remove an item from a dictionary in Python?",
        options: [
            "remove()",
            "pop()",
            "del()",
            "discard()"
        ],
        correct: 1
    },
    {
        question: "What will be the output of the following code: `x = [1, 2, 3]; y = x; x[0] = 4; print(y)`?",
        options: [
            "[1, 2, 3]",
            "[4, 2, 3]",
            "[4, 2, 3, 4]",
            "Error"
        ],
        correct: 1
    },
    {
        question: "Which of the following is true about the Python `global` keyword?",
        options: [
            "It is used to declare global variables within a function",
            "It is used to access a function from another module",
            "It allows for modifying variables in the global scope",
            "It is used to define a global class"
        ],
        correct: 2
    },
    {
        question: "What is the output of the expression `[] == False`?",
        options: [
            "True",
            "False",
            "None",
            "Error"
        ],
        correct: 1
    },
    {
        question: "Which of the following will correctly handle exceptions in Python?",
        options: [
            "try-except",
            "catch-except",
            "try-finally",
            "except-finally"
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
