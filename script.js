const UserTextBox = document.querySelector(".inputBox");
const send = document.querySelector('.sendBtn');
const chatSec = document.querySelector(".chatSection");
let prompt = "";

UserTextBox.addEventListener('keypress',(e)=>{
    if(e.key==="Enter"){
        let chat = document.createElement('div');
        chat.classList.add("userType","flex",'justify-around','items-center','rounded-2xl','bg-white','max-w-3/4',"min-w-1/2");
        
        prompt = UserTextBox.value;
        chat.innerHTML = `
        <p>${UserTextBox.value}</p>`
        chatSec.appendChild(chat);

        UserTextBox.value = "";

    }
})
send.addEventListener('click',()=>{
    let chat = document.createElement('div');
    chat.classList.add("userType","flex",'justify-around','items-center','rounded-2xl','bg-white','max-w-3/4',"min-w-1/2");
    prompt = UserTextBox.value;
    chat.innerHTML = `
    <p>${UserTextBox.value}</p>`
    chatSec.appendChild(chat);
    UserTextBox.value = "";
})


function sendData(text){
    console.log(text);
}