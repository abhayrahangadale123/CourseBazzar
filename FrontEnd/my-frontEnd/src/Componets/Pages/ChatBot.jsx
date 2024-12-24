import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    // Function to handle message submission
    const SendMessage = async () => {
        if (input.trim() === "") return;

        // Add the user message to the chat
        const userMessage = { role: "user", content: input };
        setMessages((prevMessages) => [...prevMessages, userMessage]);

        try {
            // Make an API call to get the chatbot response
            const response = await axios.post("http://localhost:3000/api/chat", {
                message: input,
            });

            // Add the chatbot's response to the chat
            const botMessage = { role: "bot", content: response.data.result };
            setMessages((prevMessages) => [...prevMessages, botMessage]);

            // Clear the input field
            setInput("");
        } catch (error) {
            console.error("Error communicating with chatbot:", error);
            const errorMessage = {
                role: "bot",
                content: "Sorry, there was an error. Please try again later.",
            };
            setMessages((prevMessages) => [...prevMessages, errorMessage]);
        }
    };


    const handleKeyPress = (e) => {
      if (e.key === "Enter") SendMessage();
    };
  
    // Scroll to the bottom when messages update
    useEffect(() => {
      const chatBox = document.querySelector(".overflow-y-auto");
      if (chatBox) chatBox.scrollTop = chatBox.scrollHeight;
    }, [messages]);

    

    return (
      <div className="flex flex-col items-center justify-center">
        {/* Chatbot Container */}
        <div className="w-full max-w-lg p-6 bg-white shadow-2xl rounded-lg">
          {/* Header */}
          <h1 className="text-3xl font-bold text-center mb-4 text-indigo-800">
            My ChatBot ✨
          </h1>
  
          {/* Chat Messages Section */}
          <div className="chat-box h-80 overflow-y-auto p-4 bg-gray-100 rounded-lg shadow-inner">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-3 p-3 rounded-lg shadow-md max-w-xs ${
                  msg.role === "user"
                    ? "bg-indigo-500 text-white self-end ml-auto"
                    : "bg-gray-200 text-gray-900 self-start"
                }`}
              >
                {msg.content}
              </div>
            ))}
          </div>
  
          {/* Input Section */}
          <div className="flex items-center mt-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={SendMessage}
              className="px-4 p-[13px] bg-indigo-600 text-white rounded-r-lg hover:bg-indigo-700 transition duration-300"
            >
              Send 
            </button>
          </div>
        </div>
      </div>
  );
  
};

export default  ChatBot;