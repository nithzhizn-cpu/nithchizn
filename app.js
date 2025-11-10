function sendMessage() {
    const input = document.getElementById('message');
    const chat = document.getElementById('chat');
    const text = input.value.trim();
    if (text === '') {
        alert('Введіть повідомлення!');
        return;
    }

    // Додаємо повідомлення в чат
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    messageDiv.textContent = text;
    chat.appendChild(messageDiv);

    // Прокручуємо вниз
    chat.scrollTop = chat.scrollHeight;

    // Очищаємо поле вводу
    input.value = '';
}
