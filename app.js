document.getElementById("sendBtn").addEventListener("click", async () => {
    const text = document.getElementById("msg").value;
    const chatId = Telegram.WebApp.initDataUnsafe.user.id; // отримуємо ID користувача Telegram

    await fetch("https://abcd1234.ngrok.io/send_message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text })
    });
});
