async function sendMessage(room, anon_name, message) {
    await fetch("https://your-server.com/api/messages/", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({room, anon_name, message})
    });
}


async function loadMessages(room) {
    const res = await fetch(`https://your-server.com/api/messages/${room}`);
    const data = await res.json();
    console.log(data); // відобразити на сторінці
}
