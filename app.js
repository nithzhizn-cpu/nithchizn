async function sendMessage(room, anon_name, message) {
    await fetch("https://your-server.com/api/messages/", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({room, anon_name, message})
    });
}
