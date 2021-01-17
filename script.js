const quizData=
[
    {
    question : "What is Rajbir s' age?",
    a:'23',
    b:'21',
    c:'56',
    d:'19',
    correct:'21'

},
{
    question : "What is marshal s' age?",
    a:'2',
    b:'1',
    c:'6',
    d:'9',
    correct:'1'
},
{
question : "who is tom?",
    a:'dog',
    b:'cat',
    c:'lion',
    d:'monkey',
    correct:'cat'
}]
const questionEl=document.getElementById("question");

 const a_text=document.getElementById("a_text");
 const b_text=document.getElementById("b_text");
 const c_text=document.getElementById("c_text");
 const d_text=document.getElementById("d_text");

 const submitBtn=document.getElementById("submit");

let currentQuiz=0;
let answer=undefined;
loadQuiz();
function loadQuiz()
{
const currentQuizData=quizData[currentQuiz];
questionEl.innerText=currentQuizData.question;

a_text.innerText=currentQuizData.a;
b_text.innerText=currentQuizData.b;
c_text.innerText=currentQuizData.c;
d_text.innerText=currentQuizData.d;
currentQuiz++;
}

function getSelected()
{
    const answerEls=document.querySelectorAll("answer");
    answerEls.forEach((answerEl)=>{
        if(answerEl.checked)
        {
            answer=answerEl.id;
        }
    });
}
submitBtn.addEventListener("click",()=>
{
    currentQuiz++;
    if(currentQuiz<quizData.length)
    loadQuiz();
    else
    {

    alert("you finished");
    }
})