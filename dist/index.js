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
        UserChat.value = "";
    });
}
export {};
//# sourceMappingURL=index.js.map