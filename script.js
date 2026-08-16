const UserTextBox = document.querySelector(".inputBox");
const send = document.querySelector('.sendBtn');
const chatSec = document.querySelector(".chatSection");
 UserTextBox.addEventListener('keypress',(e)=>{
    if(e.key==="Enter"){
        console.log(UserTextBox.value);
        let chat = document.createElement('div');
        chat.classList.add("userType","flex",'justify-around','items-center','rounded-2xl','bg-white','max-w-3/4',"min-w-1/2");
        chat.innerHTML = `
        <p>${UserTextBox.value}</p>`
        chatSec.appendChild(chat);

        UserTextBox.value = "";

    }
})
send.addEventListener('click',()=>{
    console.log(UserTextBox.value);
    UserTextBox.value = ""
})