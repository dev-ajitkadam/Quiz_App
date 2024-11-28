// Hompage js
// navigation for homepage to quiz-page
let Category;
let Username;

document.querySelectorAll(".btn-category").forEach((option) => {
    option.disabled = false;
    option.style.backgroundColor = "";
    option.addEventListener('click', () => {

        
        document.querySelectorAll('.btn-category').forEach((btn)=>{
            btn.disabled = true;
            btn.style.backgroundColor = " ";
            
        })
        
        option.style.backgroundColor = "#0ad0f4";
        Category = option.innerHTML.trim();
        
    })
});

console.log(Username, Category);


// Enter button logic
document.querySelector('.enter-btn').addEventListener('click', (btn)=>{
    Username = document.getElementById("username").value.trim();
    if (!Username && !category) {
        alert("Please Enter User Name and category")
    } else {
        window.location.href = `quizPage.html?Category=${Category}&username=${Username}`
        lodeQuestion()
    }
})


