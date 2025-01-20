import  { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000'); // Connect to the server

function Chat() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Listen for incoming messages
        socket.on('chat message', (msg) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        return () => {
            socket.disconnect(); // Clean up on component unmount
        };
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        if (message) {
            socket.emit('chat message', message); // Send message to server
            setMessage('');
        }
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>React Socket.IO Chat</h1>
            <div>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {messages.map((msg, index) => (
                        <li key={index} style={{ margin: '5px 0' }}>
                            {msg}
                        </li>
                    ))}
                </ul>
            </div>
            <form onSubmit={sendMessage} style={{ marginTop: '20px' }}>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    style={{ padding: '10px', width: '70%' }}
                />
                <button type="submit" style={{ padding: '10px', marginLeft: '10px' }}>
                    Send
                </button>
            </form>
        </div>
    );
}

export default Chat;
