function sendMessage() {
    const input = document.getElementById('message');
    const chat = document.getElementById('chat');
    const text = input.value.trim();
    if (text === '') {
        alert('Введіть повідомлення!');
        return;
    }

    // Створюємо div для повідомлення
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    messageDiv.textContent = text;

    // Додаємо повідомлення у вікно чату
    chat.appendChild(messageDiv);

    // Прокручування чату вниз
    chat.scrollTop = chat.scrollHeight;

    // Очищаємо поле вводу
    input.value = '';
}
