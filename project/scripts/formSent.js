const messagesCount = document.querySelector("#messagesCount");

let messages = window.localStorage.getItem("messages");

if (messages !== 0){
    messagesCount.textContent = `${messages}`;
} else{
    messagesCount.textContent = "1";
}
