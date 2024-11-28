// quizpage js

// quiz questions data

const pipesAndCisternsQuestions = [
    { question: "A pipe can fill a tank in 6 hours. Another pipe can empty the tank in 9 hours. If both pipes are opened together, how long will it take to fill the tank?", btn: ["18 hours", "12 hours", "9 hours", "15 hours"], answer: 1 },
    { question: "A pipe fills a tank in 4 hours, and another pipe fills it in 6 hours. If both pipes are opened together, how long will it take to fill the tank?", options: ["2.4 hours", "3 hours", "2.67 hours", "5 hours"], answer: 2 },
    { question: "Two pipes can fill a tank in 12 hours and 15 hours, respectively. A third pipe can empty the tank in 10 hours. How long will it take to fill the tank if all three pipes are opened?", options: ["10 hours", "15 hours", "20 hours", "30 hours"], answer: 2 },
    { question: "A pipe can fill a tank in 8 hours, and another can empty it in 12 hours. If both are opened together, what fraction of the tank will be filled in 1 hour?", options: ["1/24", "1/6", "1/12", "1/8"], answer: 1 },
    { question: "A tank is filled by a pipe in 5 hours and emptied by another pipe in 6 hours. Both pipes are opened together. How much time will it take to fill the tank?", options: ["30 hours", "60 hours", "10 hours", "15 hours"], answer: 0 },
    { question: "Three pipes A, B, and C can fill a tank in 6, 8, and 12 hours respectively. If all three pipes are opened together, how long will it take to fill the tank?", options: ["2 hours", "3 hours", "4 hours", "5 hours"], answer: 2 },
    { question: "A pipe can fill a tank in 10 hours, and another can empty it in 8 hours. If both are opened together, how much time will it take to empty the tank completely?", options: ["20 hours", "40 hours", "80 hours", "infinite"], answer: 0 },
    { question: "Two pipes can fill a tank in 5 hours and 7 hours, respectively. If both pipes are opened together, how long will it take to fill the tank?", options: ["2.92 hours", "3 hours", "4 hours", "5 hours"], answer: 0 },
    { question: "A pipe can fill a tank in 4 hours, and another can empty it in 5 hours. If both are opened together, how much of the tank will be filled in 1 hour?", options: ["1/20", "1/4", "1/5", "1/8"], answer: 0 },
    { question: "A tank is filled by a pipe in 3 hours and emptied by another pipe in 4 hours. Both pipes are opened together. How long will it take to fill the tank?", options: ["12 hours", "8 hours", "7 hours", "10 hours"], answer: 1 },
];
const probabilityQuestions = [
    { question: "What is the probability of getting a head when flipping a coin?", options: ["0", "0.5", "1", "2"], answer: 1 },
    { question: "What is the probability of rolling a 3 on a standard die?", options: ["1/3", "1/6", "1/4", "1/2"], answer: 1 },
    { question: "If a box contains 3 red and 2 blue balls, what is the probability of picking a red ball?", options: ["1/2", "2/5", "3/5", "3/4"], answer: 2 },
    { question: "What is the probability of rolling an even number on a standard die?", options: ["1/6", "1/3", "1/2", "2/3"], answer: 2 },
    { question: "If two coins are flipped, what is the probability of getting two heads?", options: ["1/4", "1/3", "1/2", "1"], answer: 0 },
    { question: "If a card is drawn from a standard deck, what is the probability of getting a heart?", options: ["1/2", "1/3", "1/4", "1/5"], answer: 2 },
    { question: "What is the probability of selecting an ace from a standard deck of cards?", options: ["1/13", "1/4", "1/26", "1/52"], answer: 0 },
    { question: "If a die is rolled, what is the probability of rolling a number less than 3?", options: ["1/2", "1/3", "1/6", "2/3"], answer: 1 },
    { question: "What is the probability of getting a 5 or 6 when rolling a die?", options: ["1/6", "1/3", "1/2", "1"], answer: 1 },
    { question: "What is the probability of selecting a vowel from the English alphabet?", options: ["1/5", "5/26", "1/26", "2/5"], answer: 1 },
];
const problemsOnAgeQuestions = [
    { question: "A father is three times as old as his son. If the sum of their ages is 40, how old is the son?", options: ["10", "12", "15", "20"], answer: 0 },
    { question: "The age of a father is twice the age of his son. If the father is 40 years old, how old is the son?", options: ["20", "15", "25", "30"], answer: 0 },
    { question: "A mother is 4 times as old as her daughter. If the sum of their ages is 50, what is the daughter's age?", options: ["10", "12", "15", "20"], answer: 2 },
    { question: "In 5 years, a father's age will be twice his son's age. If the son is 20 now, how old is the father?", options: ["30", "40", "45", "50"], answer: 1 },
    { question: "The sum of the ages of a man and his son is 60 years. If the man's age is 3 times his son's age, what is the son's age?", options: ["15", "20", "10", "12"], answer: 2 },
    { question: "The age difference between two friends is 6 years. If the elder is 26 years old, what is the age of the younger?", options: ["20", "22", "18", "19"], answer: 0 },
    { question: "The present age of a mother is 3 times the age of her daughter. After 12 years, their ages will differ by 12 years. What is the daughter’s age now?", options: ["12", "10", "15", "8"], answer: 1 },
    { question: "A person’s age is twice the sum of the ages of his two sons. If the sons are 8 and 6 years old, how old is the person?", options: ["30", "28", "40", "36"], answer: 2 },
    { question: "The age of a grandfather is three times that of his grandson. If the grandson is 12, how old is the grandfather?", options: ["48", "36", "42", "30"], answer: 1 },
    { question: "A mother is 4 times older than her son. The difference in their ages is 30. How old is the son?", options: ["10", "8", "12", "15"], answer: 0 },
];
const profitAndLossQuestions = [
    { question: "A product is bought for $200 and sold for $250. What is the profit percentage?", options: ["25%", "20%", "15%", "30%"], answer: 1 },
    { question: "A book is sold at a loss of 10%. If its cost price is $500, what is the selling price?", options: ["$450", "$400", "$500", "$550"], answer: 0 },
    { question: "An article is bought for $600 and sold at a 25% profit. What is the selling price?", options: ["$750", "$800", "$900", "$700"], answer: 0 },
    { question: "If a product is sold at a profit of 20% for $1200, what was the cost price?", options: ["$1000", "$900", "$1100", "$950"], answer: 0 },
    { question: "A trader gains 15% on selling an item for $690. What was the cost price?", options: ["$600", "$650", "$500", "$550"], answer: 0 },
    { question: "A chair costs $120. If sold at a loss of 10%, what is the selling price?", options: ["$108", "$110", "$120", "$130"], answer: 0 },
    { question: "An article is sold for $2000 at a loss of 20%. What is the cost price?", options: ["$2500", "$2400", "$2300", "$2200"], answer: 0 },
    { question: "A shopkeeper sold a pen for $45 and made a profit of 25%. What was the cost price?", options: ["$35", "$36", "$40", "$34"], answer: 1 },
    { question: "An item costs $80, and the selling price is $96. What is the profit percentage?", options: ["20%", "16%", "25%", "18%"], answer: 0 },
    { question: "A loss of 12% occurs when selling an item for $88. What is the cost price?", options: ["$100", "$96", "$98", "$110"], answer: 0 },
];

// Initialize variables
let questions;
let currentQuestionIndex = 0;
let score = 0;
let time = 0;
let attempt = 0;
let timerInterval;

// Select elements
const content = document.querySelector('#content');
const options = document.querySelectorAll('.options');
const timerDisplay = document.querySelector('.timer-s');
const scoreDisplay = document.querySelector('.score-d');
const nextButton = document.querySelector('.next-btn');

// Get quiz details from URL
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('Category');
const username = urlParams.get('username');

// Assign questions based on category
if (category === "Pipes_and_Cisterns") {
    questions = pipesAndCisternsQuestions;
} else if (category === "Probability") {
    questions = probabilityQuestions;
} else if (category === "Problems_on_Age") {
    questions = problemsOnAgeQuestions;
} else {
    questions = profitAndLossQuestions;
}

// Load question
function lodeQuestion() {
    const currentQution = questions[currentQuestionIndex];

    // Update question text
    content.innerText = `Q. ${currentQution.question}`;
    document.querySelector('.q-name').innerHTML = `${category}`
    options.forEach((option, index) => {
        option.innerText = currentQution.options[index];
        option.disabled = false;
        option.style.backgroundColor = "";
        option.style.color = ""

        option.onclick = () => {

            options.forEach((btn) => (btn.disabled = true));
            

            attempt++;
            if (index === currentQution.answer) {
                score++;
                option.style.backgroundColor = "#32CD32";
                option.style.color = "#FFFFFF"
            } else {
                option.style.backgroundColor = "#FF474D";
                options[currentQution.answer].style.backgroundColor = "#32CD32";
                options[currentQution.answer].style.color = "#FFFFFF";
                option.style.color = "#FFFFFF"

            }
            scoreDisplay.innerText = `Score: ${score}`;
        };
    });
}


//  timer
function startTimer() {
    timerInterval = setInterval(() => {
        time++;
        timerDisplay.innerText = `${time}s`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}


    

// Next question button logic
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    document.querySelector('.q-counter').innerHTML = `${currentQuestionIndex +1}/10`
    if (currentQuestionIndex < questions.length) {
        lodeQuestion();
    } else {
        stopTimer();
        window.location.href = `result.html?username=${username}&time=${time}&score=${score}&attempted=${attempt}`;
        Result();
    }
});

startTimer();
lodeQuestion();


