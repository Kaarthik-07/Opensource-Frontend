import React, { useState } from "react";

const ChatRoom = ({ roomId, userId, onSendMessage, messages }) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message) {
      onSendMessage({ room_id: roomId, user_id: userId, msg: message });
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h3 className="text-2xl font-bold text-blue-500 mb-4 animate-pulse">
        Chat Room: {roomId}
      </h3>
      <div className="space-y-4 w-1/2 max-w-md bg-white p-6 rounded-lg shadow-lg overflow-y-auto h-96">
        {messages.map((msg, index) => (
          <p key={index} className="text-gray-700">
            <strong className="text-blue-500">{msg.user_id}:</strong> {msg.msg}
          </p>
        ))}
      </div>
      <div className="mt-4 w-1/2 max-w-md space-y-2">
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 border rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        />
        <button
          onClick={handleSendMessage}
          className="w-full p-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition duration-300"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;
