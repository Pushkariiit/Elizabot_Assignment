import React, { useState } from "react";

const ChatBox = ({ messages, onUserInput }) => {
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (input.trim()) {
            onUserInput(input);
            setInput("");
        }
    };

    return (
        <div style={{ padding: "20px", border: "1px solid #ddd", width: "50%" }}>
            <div style={{ height: "300px", overflowY: "auto", marginBottom: "10px" }}>
                {messages.map((msg, idx) => (
                    <div
                        key={idx}
                        style={{
                            textAlign: msg.sender === "eliza" ? "left" : "right",
                            margin: "5px 0",
                        }}
                    >
                        <strong>{msg.sender}:</strong> {msg.text}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                style={{ width: "80%", marginRight: "10px" }}
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default ChatBox;
