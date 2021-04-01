window.onload = function() {
    show(0);
}
let questions = [
    {
        id: 1,
        question: "What is the full form of RAM ?",
        answer: "Random Access Memory",
        options: [
            "Random Access Memory",
            "Randomly Access Memory",
            "Run Aceapt Memory",
            "None of these"

        ]
    },
    {
        id: 2,
        question: "What is the full form of CPU ?",
        answer: "Central Processing Unit",
        options: [
            "Central Program Unit",
            "Central Processing Unit",
            "Central Preload Unit",
            "None of these"

        ]
     
    },
    {
        id: 3,
        question: "Fathometer is used to measure ?",
        answer: "Ocean depth",
        options: [
            "Earthquakes",
            "Rainfall",
            "Ocean depth",
            "Sound intensity"

        ]
    },
    {
        id: 4,
        question: "Golf player Vijay Singh belongs to which country ?",
        answer: "Fiji",
        options: [
            "USA",
            "Fiji",
            "India",
            "UK"

        ]
    },
    {
        id: 5,
        question: "DRDL stands for ?",
        answer: "Defence Research and Development Laboratory",
        options: [
            "Defence Research and Development Laboratory",
            "Department of Research and Development Laboratory",
            "Differential Research and Documentation Laboratory",
            "None of the above"

        ]
    },
    {
        id: 6,
        question: "An astronaut in outer space will observe sky as ?",
        answer: " Black",
        options: [
            " White",
            " Black",
            "Blue",
            "Red"

        ]

    },
    {
        id: 7,
        question: "Who is known as 'the father of Indian missile technology' ?",
        answer: " Dr. A.P.J. Abdul Kalam",
        options: [
            "Dr. U.R. Rao",
            " Dr. A.P.J. Abdul Kalam",
            "Dr. Chidambaram",
            "Dr. Homi Bhabha"

        ]
    },
    {
        id: 8,
        question: "Bats can fly in the dark because ?",
        answer: "they produce high pitched sounds called ultrasonics",
        options: [
            " they have a better vision in the dark",
            "the light startles in them",
            "they produce high pitched sounds called ultrasonics",
            "none of the above"

        ]

    },
    {
        id: 9,
        question: "Which is considered as the biggest port of India ?",
        answer: "Mumbai",
        options: [
            "Kolkata",
            "Cochin",
            "Chennai",
            "Mumbai"

        ]
    },
    {
        id: 10,
        question: "FFC stands for ?",
        answer: "Film Finance Corporation",
        options: [
            "Foreign Finance Corporation",
            "Film Finance Corporation",
            "Federation of Football Council",
            "None of the above"

        ]
    }
];



function submitForm(e){
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;
    //store player name
    sessionStorage.setItem("name", name);

    location.href = "quiz.html";
    
}

let question_count = 0;
let point = 0; 
function next(){
    let user_answer = document.querySelector("li.option.active").innerHTML;
    if(user_answer == questions[question_count].answer){
        point += 10;
        sessionStorage.setItem("points", point);
    }
    if(question_count == questions.length-1){
        sessionStorage.setItem("time", `${minutes} minutes and ${seconds} seconds`);
        clearInterval(mytime);
        location.href = "end.html";
        return;
    }
    
    
    
    question_count++;
    show(question_count);
    
}

function show(count){
    let question = document.getElementById("questions");
//     question.innerHTML = "<h2>" + questions[count].question + "</h2>";
// 
question.innerHTML = `<h2> Q${question_count+1}.${questions[count].question}</h2>
                <ul class="option_group">
              <li class="option">${questions[count].options[0]}</li>
              <li class="option">${questions[count].options[1]}</li>
              <li class="option">${questions[count].options[2]}</li>
              <li class="option">${questions[count].options[3]}</li>
            </ul> `;
            toggleActive();
}

function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for(let i=0; i<option.length; i++){
        option[i].onclick = function(){
            for(let j=0; j<option.length; j++){
                if(option[j].classList.contains("active")){
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}

