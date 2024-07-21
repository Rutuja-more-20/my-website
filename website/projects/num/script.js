const generateBtn=document.getElementById("generate-btn");
const generateElement=document.getElementById("random-num");
generateBtn.addEventListener("click",()=>{
    const randomNumber=Math.floor(Math.random()*100)
+1;
    numberElement.textContent=randomNumber;
});