const count = document.getElementById("count");

incrementVisitsCount();

function incrementVisitsCount() {
    let visits;

    if (!localStorage.getItem("visits")) localStorage.setItem("visits", 1);
    else {
        visits = +localStorage.getItem("visits");
        const incrementedCount = visits + 1;

        localStorage.setItem("visits", incrementedCount);
    }

    count.innerText = localStorage.getItem("visits");
};

// login validation

function validate()
{

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if(username=="admin" && password=="admin")
    { 
        alert("You've successfully login");
        window.location.href ('quiz.html');
        return true;
    
    }
    else
    {
       alert("Login Failed") ;
       return false;
    }


}

let agree = document.querySelector(".div1");
let disagree = document.querySelector(".div2");


const UnChecked =document.getElementById("UnChecked");
const isCheked =document.getElementById("isChecked");
isCheked.addEventListener('change',(event)=>{
    if(event.currentTarget.checked){
        agree.style.display = "block";
        disagree.style.display = "none";
    }else{
        disagree.style.display = "block";
        agree.style.display = "none";
    }
    return false;
})


UnChecked.addEventListener('change',(event)=>{
    if(event.currentTarget.checked){
        agree.style.display = "block";
        disagree.style.display = "none";
    }else{
        disagree.style.display = "block";
        agree.style.display = "none";

        
    }
    return false;
})


const submit_btn = document.querySelector(".btn");
const tracker = document.querySelector(".tracker");
const rule_box = document.querySelector(".rule_box");
const start_quiz = document.querySelector(".start");
const quiz_box = document.querySelector(".quiz_box");
const option_list = document.querySelector(".option_list");

// if click on start button rules div disappears------->>>>>>

start_quiz.addEventListener('click',()=>{
rule_box.style.display = 'none';
start_quiz.style.display = 'block';
tracker.style.display = 'none';
});



// if start button clicked------>>>>

start_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz");
}
 
// Questions Started------>>>>

 const quizDB = [

    {
        question : "1) What is JavaScript?",
        a : "JavaScript is a scripting language used to make the website interactive",
        b : "JavaScript is an assembly language used to make the website interactive",
        c : "JavaScript is a compiled language used to make the website interactive",
        d : "None of the mentioned",
        ans : "ans1"
    
    },
    {
        question : "2) Which of the following is correct about JavaScript?",
        a : "JavaScript is an Object-Based language",
        b : "JavaScript is Assembly-language",
        c : "JavaScript is an Object-Oriented language",
        d : "JavaScript is a High-level language",
        ans : "ans3"
    },
    {
        question : "3) NaN stands for_________.",
        a : "Nano",                      
        b : "NanTech",   
        c : "Not  a number",      
        d : "New attactedNematic",
        ans: "ans3"
    
    },
    
    {
        question : "4) Navigator Java script is also called _______side java script.",
        a : "client",                      
        b : "Server",        
        c : "Website",    
        d : "Live wire",
        ans: "ans1"
    
    },
    
    {
        question : "5) '_________attribute can hold the java script version.",
        a : "var" ,             
        b : "language",             
        c : "type",                  
        d : "script",
        ans: "ans2"
    }
    
    ];

    // getting all the questions and options
    
    const question = document.querySelector(".que_text");
    const option1  = document.querySelector("#option1");
    const option2  = document.querySelector("#option2");
    const option3  = document.querySelector("#option3");
    const option4  = document.querySelector("#option4");
    const Answers = document.querySelectorAll(".answer");
    const Submit = document.querySelector(".next");
    const finish_quiz = document.querySelector(".finish")
    const result_page = document.querySelector(".result_page");
    
        


    let questionCount = 0;
    let score = 0;

    const loadQuestion = () => {
        
        const questionList = quizDB[questionCount];

        question.innerText = questionList.question;

        option1.innerText = questionList.a;
        option2.innerText = questionList.b;
        option3.innerText = questionList.c;
        option4.innerText = questionList.d;
        

    }


    loadQuestion();
    const getCheckAnswer = ()=>{
        let answer;

        Answers.forEach((currAnsElem)=>{
            if(currAnsElem.checked){
                answer = currAnsElem.id;
            }
        });
        return answer;
    }

    const unselectAll = () =>{
        Answers.forEach((currAnsElem) => currAnsElem.checked = false );
    }

    Submit.addEventListener('click',() =>{
            
        const CheckedAnswer = getCheckAnswer();
        if (CheckedAnswer === quizDB[questionCount].ans){
            score++;
            
        };
        
        unselectAll()
        
        questionCount++;
        
        

        if (questionCount < quizDB.length){
            loadQuestion();
        }else{
            Submit.addEventListener('click',()=>{
                quiz_box.style.display = 'none';
                result_page.classList.remove("result_page");
                tracker.style.display = 'block';
                
            });
                result_page.innerHTML= 
                `<h3>Your Score is : ${score/quizDB.length*100}% <br><br>
                Total number of Wrong Answer : ${quizDB.length - score}<br><br>
                Total number of Correct Answer: ${score}</h3>` 
                
        }
 });


    