window.onload = function() {
    const sendButton = document.getElementById('send-button');
    const messageInput = document.getElementById('message-input');
    const messageWindow = document.getElementById('message-window');

    function fetchMessages() {
        fetch('chatmsg.php')
            .then(response => response.json())
            .then(data => {
                messageWindow.innerHTML = ''; 
                const messages = Array.isArray(data.messages) ? data.messages : [];
                for (let i = 0; i < messages.length; i++) {
                    const message = messages[i];
                    const messageElement = document.createElement('div');
                    messageElement.className = message.person === username ? 'message-right' : 'message-left';
                    messageElement.innerHTML = `
                    <strong>${message.person}</strong>&emsp;<span>${new Date(message.time * 1000).toLocaleTimeString()}</span>
                    <p>${message.message}</p>
                `;
                    messageWindow.appendChild(messageElement);
                }
                messageWindow.scrollTop = messageWindow.scrollHeight;
            });
    }
    sendButton.addEventListener('click', async function() {
        const messageText = messageInput.value.trim();
        messageInput.value = '';
        if (messageText !== '') {
            fetch('chatmsg.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `message=${encodeURIComponent(messageText)}&username=${encodeURIComponent(username)}&type=upload&time=${Math.floor(Date.now() / 1000)}`,
            })
            .then(response => response.json())
            .then(data => {
                fetchMessages();
            })
            .catch(error => console.error('Error:', error));
        }
    });

    fetchMessages(); 
};

var messageWindow = document.getElementById('message-window');

function fetchMessages() {
    fetch('chatmsg.php')
        .then(response => response.json())
        .then(data => {
            messageWindow.innerHTML = '';
            const messages = Array.isArray(data.messages) ? data.messages : [];
            for (let i = 0; i < messages.length; i++) {
                const message = messages[i];
                const messageElement = document.createElement('div');
                messageElement.className = message.person === username ? 'message-right' : 'message-left';
                messageElement.innerHTML = `
                <strong>${message.person}</strong>&emsp;<span>${new Date(message.time * 1000).toLocaleTimeString()}</span>
                <p>${message.message}</p>
            `;
                messageWindow.appendChild(messageElement);
            }
            messageWindow.scrollTop = messageWindow.scrollHeight;
        }
    );}
setInterval(fetchMessages, 5000);

var logoutButton = document.getElementById('logout-button');

logoutButton.addEventListener('click', function() {
    window.location.href = 'login.php?action=signout';
});