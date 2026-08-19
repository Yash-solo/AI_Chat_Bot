//import { newApiKey } from "./config.js";

let inputBox = document.querySelector('.inputBox');
const sendBtn = document.querySelector(".sendData");
const chatSec = document.querySelector('.chatSection');
const darkModeBtn = document.querySelector(".darkmode")
const mainBody = document.querySelector(".mainBody");
function userInput(){
    let chat = document.createElement('div');
    chat.classList.add('userType','flex','justify-around','items-center','rounded-2xl','bg-white','max-w-3/4','min-w-1/2');
    chat.innerHTML = `
    <p>${inputBox.value}</p>`
    chatSec.appendChild(chat);
    chat.scrollIntoView({behavior:"smooth"});

    apiResponse(inputBox.value);
    inputBox.value = "";
}

inputBox.addEventListener('keypress',(e)=>{
    if(e.key==="Enter"){
        userInput();
    }
})
sendBtn.addEventListener('click',userInput);

async function apiResponse(idea){
    //api urls and api 
    const apiURL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent";
    
    
    const response = await fetch(apiURL,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            'X-goog-api-key':`${newApiKey}`,
        },
        body:JSON.stringify({contents:[{parts:[{text: idea,}]}]})

    })
    const data = await response.json();

    if(response.ok){
        const botinput = data.candidates[0].content.parts[0].text;
        showBOTData(botinput);
        return;
    }
    if(!response.ok){
        showBOTData(data.error.message);
        return;
    }
    showBOTData("Hi how are you soory but I am not capable right now!");
    return ;
}

function showBOTData(botvalue){
    let chat = document.createElement('div');
    chat.classList.add('BotType','flex','justify-around','items-center','rounded-2xl','bg-blue-400','max-w-3/4','min-w-1/2');
    chat.innerHTML = `
    <p>${botvalue}</p>`
    chatSec.appendChild(chat);
    chat.scrollIntoView({behavior:"smooth"});
}

darkModeBtn.addEventListener('click',()=>{
    if(document.body.style.background == "rgb(41, 41, 41)"){
        darkModeBtn.style.color = "black";
        document.body.style.background= "linear-gradient(to top right , #050000,#C300FF,#FF2962)";
        darkModeBtn.innerHTML = "Dark Mode";
        document.querySelector('.aiHead').style.color = "Black";
    }else{
        document.body.style.background= "rgb(41, 41, 41)";
        darkModeBtn.style.color = "white";
        darkModeBtn.innerHTML = "LightMode"
        document.querySelector('.aiHead').style.color = "white";
    }
})
