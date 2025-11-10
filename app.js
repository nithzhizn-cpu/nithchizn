const tg = window.Telegram.WebApp;
tg.onEvent('message', (msg) => {
    console.log('Отримано:', msg);
});
