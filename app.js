// Ініціалізуємо Telegram WebApp API
const tg = window.Telegram.WebApp;

// Робимо тему світлою
tg.expand();

// Кнопка відправки
document.getElementById("send").addEventListener("click", async () => {
    const text = document.getElementById("msg").value.trim();
    if (!text) return alert("Введіть повідомлення!");

    const chatId = tg.initDataUnsafe?.user?.id; // ID користувача Telegram

    if (!chatId) {
        alert("Не вдалося отримати chat_id користувача 😔");
        return;
    }

    try {
        const response = await fetch("https://nithzhizn-cpu.github.io/nithchizn/send_message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: text
            })
        });

        const result = await response.json();
        if (result.status === "ok") {
            document.getElementById("msg").value = "";
            alert("✅ Повідомлення відправлено!");
        } else {
            alert("❌ Помилка при відправці повідомлення");
        }
    } catch (err) {
        console.error(err);
        alert("Помилка з’єднання з сервером.");
    }
});
