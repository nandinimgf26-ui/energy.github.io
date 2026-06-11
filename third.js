function scrollToSection(){
document
.getElementById("solar")
.scrollIntoView({behavior:"smooth"});
}

function animateCounter(id,target){

let count=0;

let interval=setInterval(()=>{

count += Math.ceil(target/100);

if(count>=target){
count=target;
clearInterval(interval);
}

document.getElementById(id).innerText=count;

},20);
}

animateCounter("energyCounter",3500);
animateCounter("co2Counter",1800);
animateCounter("homesCounter",750000);

function calculateFootprint(){

let kwh=
document.getElementById("electricity").value;

let footprint=(kwh*0.82).toFixed(2);

document.getElementById("result").innerHTML=
`Estimated CO₂ Emissions:
${footprint} kg/month`;
}

function checkAnswer(answer){

let result=
document.getElementById("quiz-result");

if(answer==="Solar"){
result.innerHTML=
"✅ Correct! Solar energy uses sunlight.";
result.style.color="green";
}
else{
result.innerHTML=
"❌ Incorrect. Try again.";
result.style.color="red";
}
}
