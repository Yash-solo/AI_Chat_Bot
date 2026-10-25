// import APIKEY from './api.js'
const getSection = document.querySelector('.chatSection');
const UserChat = document.querySelector('.UserChat');
const sendBtn = document.querySelector('.SEND');
console.log("Get Section:- ", getSection);
if (sendBtn !== null && UserChat !== null) {
    sendBtn.addEventListener('click', () => {
        const usertalk = UserChat.value;
        const userdiv = document.createElement('div');
        userdiv.classList.add('w-full', 'flex', 'text-[#2a2a2a]', 'items-end', 'justify-end');
        userdiv.innerHTML = `
        <h1 class="md:w-1/2 w-3/4 p-2 bg-blue-300 rounded-[10px_10px_0px_10px]">${usertalk}</h1>`;
        getSection?.appendChild(userdiv);
        async function getData() {
            try {
                const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent");
                if (response.ok) {
                    const data = await response.json();
                    console.log(data);
                }
                else {
                    console.log("Data not came");
                }
            }
            catch (err) {
                console.log("Error came");
            }
            let botChat = "Hi I am currently not able to respond you sorry!";
            const BotDiv = document.createElement('div');
            BotDiv.classList.add("w-full", "flex", "text-[#2a2a2a]", "items-start", "justify-start");
            BotDiv.innerHTML = `
            <h1 class="MyBot md:w-1/2 w-3/4 p-2 bg-blue-200 rounded-[10px_10px_10px_0px]">${botChat}</h1>
            `;
            getSection?.appendChild(BotDiv);
        }
        getData();
        UserChat.value = "";
    });
}
export {};
//# sourceMappingURL=index.js.map