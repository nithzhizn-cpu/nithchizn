function sendMessage() {
  const msg = document.getElementById("message").value;
  if (window.Telegram.WebApp) {
    Telegram.WebApp.sendData(msg);
    alert("Повідомлення відправлено: " + msg);
  } else {
    alert("Цей WebApp має працювати лише всередині Telegram.");
  }
}
