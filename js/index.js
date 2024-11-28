// Hompage js
// navigation for homepage to quiz-page
let Category;
let Username;

document.querySelectorAll(".btn-category").forEach((option) => {
    option.disabled = false;
    option.style.backgroundColor = "";
    option.addEventListener('click', () => {

        document.querySelectorAll('.btn-category').forEach((btn)=>{
            
            btn.style.backgroundColor = " ";
            btn.disabled = false;
            btn.style.color = "#FFFFFF"
        })

        document.querySelectorAll('.btn-category').forEach((btn) => {
            if (btn !== option) {
                btn.disabled = true;
            }
        });
        
        option.style.backgroundColor = "#0ad0f4";
        Category = option.innerHTML.trim();
        
    })
});


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


