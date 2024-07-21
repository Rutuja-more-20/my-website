const btnElement=document.querySelector('button');
const spanElement=document.getElementById('updatecontent');
btnElement.onclick=function(){
    const yourName=prompt("please enter ur name:");
    spanElement.textContent=yourName;
}