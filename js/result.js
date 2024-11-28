// Get query parameters
const urlParams1 = new URLSearchParams(window.location.search);
const username1 = urlParams1.get("username") || "guest";
const time1 = parseInt(urlParams1.get("time"), 10);
const score1 = parseInt(urlParams1.get("score"), 10);
const attempted = parseInt(urlParams1.get("attempted"), 10);
const totalQuestions = 10;
const wrong = attempted - score1;
const percentage = ((score1 / totalQuestions) * 100).toFixed(2);


// Display result details
const Result = () => {
    document.querySelector(".r-name").innerHTML = ` ${username1} `;  
    document.querySelector(".r-time").innerHTML = ` ${time1} `;
    document.querySelector(".r-totalQ").innerHTML = ` ${totalQuestions}`;
    document.querySelector(".r-attempt").innerHTML = ` ${attempted}`;
    document.querySelector(".r-correct").innerHTML = ` ${score1}`;
    document.querySelector(".r-wrong").innerHTML = ` ${wrong}`;
    document.querySelector(".r-percentage").innerHTML = ` ${percentage}%`;

};

Result()