const chat = document.getElementById('chat');
const msgInput = document.getElementById('msg');
const sendBtn = document.getElementById('send');

sendBtn.onclick = () => {
    const text = msgInput.value.trim();
    if (text) {
        // Надсилаємо повідомлення боту
        Telegram.WebApp.sendData(text);
        msgInput.value = '';
    }
};

// Отримуємо повідомлення від бота через Telegram
// (Тут можна підключити long polling або websocket на сервері)
